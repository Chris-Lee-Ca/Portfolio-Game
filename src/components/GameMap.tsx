import styled from "@emotion/styled";
import { Box } from "@mui/material";
import CustomStyle from "../Theme/CustomStyle";
import { ReactElement, useEffect, useState } from "react";
import { getGameMapContainerOffset, getGameMapSize, getViewPort } from "../utils/viewPort";
import StyleConfig from "../Theme/StyleConfig";
import mapDesign, { emptyBox, mapBoxDesignInterface } from "../data/mapDesign";
import MapBoxFactory from "./MapBox/MapBoxFactory";
import Player from "./Player";
import { usePlayerState } from "../Context/PlayerContext";

const Container = styled(Box)({
    height: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: CustomStyle.colors.primary,
});

const MapContainer = styled(Box)({
    overflow: "hidden",
    // border: `2px solid ${CustomStyle.colors.mainBlack}`,
    borderRadius: "10px",
    backgroundColor: CustomStyle.colors.mainMapBackground,
    boxShadow: CustomStyle.colors.mainShadow,
});

const MapOffSetContainer = styled(Box)({
    position: "relative",
});

const RowMapBoxContainer = styled(Box)({
    display: "flex",
});

interface GameMapPropsInterface {}

const GameMap = (props: GameMapPropsInterface) => {
    const { playerPosition } = usePlayerState().playerState;

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);

    useEffect(() => {
        // Function to update window size state
        function handleResize() {
            setWindowWidth(window.innerWidth);
            setWindowHeight(window.innerHeight);
        }
        // Add event listener to listen for window resize
        window.addEventListener("resize", handleResize);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const { gameMapWidth, gameMapHeight } = getGameMapSize({
        windowWidth,
        windowHeight,
        mapBoxWidth: StyleConfig.mapBoxWidth,
        mapBoxHeight: StyleConfig.mapBoxHeight,
    });

    const viewPort = getViewPort({
        windowWidth,
        windowHeight,
        currentPosition: playerPosition,
        mapBoxWidth: StyleConfig.mapBoxWidth,
        mapBoxHeight: StyleConfig.mapBoxHeight,
        mapDesign,
    });

    const { renderRow, renderCol } = viewPort;

    const { top, left } = getGameMapContainerOffset({
        currentPosition: playerPosition,
        gameMapWidth,
        gameMapHeight,
        mapBoxWidth: StyleConfig.mapBoxWidth,
        mapBoxHeight: StyleConfig.mapBoxHeight,
        viewPort,
    });

    const configToMap = (
        mapDesign: mapBoxDesignInterface[][],
        renderRow: [number, number],
        renderCol: [number, number],
    ) => {
        const map = [];
        for (let i = renderRow[0]; i <= renderRow[1]; i++) {
            const rowMap = [];
            for (let j = renderCol[0]; j <= renderCol[1]; j++) {
                //TODO
                const mapBoxConfig = i < mapDesign.length && j < mapDesign[0].length ? mapDesign[i][j] : emptyBox;
                const { backGroundType, facing } = mapBoxConfig;
                rowMap.push(
                    <MapBoxFactory
                        key={`${i}-${j}`}
                        location={[i, j]}
                        backGroundType={backGroundType}
                        facing={facing}
                        reMainingProps={{ ...mapBoxConfig }}
                    />,
                );
            }
            map.push(rowMap);
        }
        return map;
    };

    const mapToRender = configToMap(mapDesign, renderRow, renderCol);

    return (
        <Container>
            <MapContainer width={`${gameMapWidth}px`} height={`${gameMapHeight}px`}>
                <MapOffSetContainer top={`${top}px`} left={`${left}px`}>
                    {mapToRender.map((rowMapBoxes, index) => (
                        <RowMapBoxContainer key={index}>
                            {rowMapBoxes.map((mapBox, idnex) => mapBox)}
                        </RowMapBoxContainer>
                    ))}
                    {/* <Player/> */}
                </MapOffSetContainer>
            </MapContainer>
        </Container>
    );
};

export default GameMap;
