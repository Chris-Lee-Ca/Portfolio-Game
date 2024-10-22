import styled from "@emotion/styled";
import { Box } from "@mui/material";
import CustomStyle from "../../../Theme/CustomStyle";
import { useEffect } from "react";
import { Facing } from "../../../data/mapDesign";
import { usePlayerState } from "../../../Context/PlayerContext";
import { arrayEquals, getTransformDegreee } from "../../../utils/general";
import { useGameInfoState } from "../../../Context/GameInfoContext";
import StyleConfig from "../../../Theme/StyleConfig";

const Container = styled("div")({
    position: "absolute",
    width: `${StyleConfig.mapBoxWidth}px`,
    height: `${StyleConfig.mapBoxHeight}px`,
});

const RowContainer = styled(Box)({
    display: "flex",
    height: "calc(100%/3)",
    width: "100%",
});

const Road = styled(Box)({
    backgroundColor: CustomStyle.colors.mainRoad,
    width: "calc(100%/3)",
    height: "100%",
    boxSizing: "border-box",
});

const Barrier = styled(Box)({
    backgroundColor: CustomStyle.colors.mainRoadBackground,
    width: "calc(100%/3)",
    height: "100%",
});

interface TjunctionRoadBoxPropsInterface {
    location: [number, number];
    facing: Facing;
}

const TjunctionRoadBox = (props: TjunctionRoadBoxPropsInterface) => {
    const { location, facing } = props;
    const playerState = usePlayerState().playerState;
    const { playerPosition } = playerState;
    const gameInfoState = useGameInfoState().gameInfoState;
    const setGameInfoState = useGameInfoState().setGameInfoState;

    useEffect(() => {
        if (arrayEquals(playerPosition, location)) {
            if (["N"].includes(facing)) {
                setGameInfoState({ ...gameInfoState, allowedMovingDirestion: ["up", "left", "right"] });
            } else if (["E"].includes(facing)) {
                setGameInfoState({ ...gameInfoState, allowedMovingDirestion: ["up", "right", "down"] });
            } else if (["S"].includes(facing)) {
                setGameInfoState({ ...gameInfoState, allowedMovingDirestion: ["left", "down", "right"] });
            } else {
                setGameInfoState({ ...gameInfoState, allowedMovingDirestion: ["up", "left", "down"] });
            }
        }
    }, [playerPosition]);

    return (
        <Container style={{ transform: getTransformDegreee(facing) }}>
            <RowContainer>
                <Barrier />
                <Road sx={{ borderLeft: CustomStyle.border.mapBorder, borderRight: CustomStyle.border.mapBorder }} />
                <Barrier />
            </RowContainer>
            <RowContainer>
                <Road sx={{ border: CustomStyle.border.mapBorder, borderLeft: "0px", borderRight: "0px" }} />
                <Road sx={{ borderBottom: CustomStyle.border.mapBorder }} />
                <Road sx={{ border: CustomStyle.border.mapBorder, borderLeft: "0px", borderRight: "0px" }} />
            </RowContainer>
            <RowContainer>
                <Barrier />
            </RowContainer>
        </Container>
    );
};

export default TjunctionRoadBox;
