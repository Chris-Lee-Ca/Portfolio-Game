import styled from "@emotion/styled";
import { Box } from "@mui/material";
import CustomStyle from "../../Theme/CustomStyle";
import { CSSProperties, ReactElement, useEffect } from "react";
import StyleConfig from "../../Theme/StyleConfig";
import { usePlayerState } from "../../Context/PlayerContext";
import { arrayEquals } from "../../utils/general";
import { triggerForceTriggerEvent } from "../../utils/playerControl";
import mapDesign from "../../data/mapDesign";
import { useDialogState } from "../../Context/DialogContext";

const Container = styled(Box)({
    position: 'relative',
    width: `${StyleConfig.mapBoxWidth}px`,
    height: `${StyleConfig.mapBoxHeight}px`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
})

const Image = styled(`img`)({
    position: 'absolute',
    width: `${StyleConfig.mapBoxWidth}px`,
    height: `${StyleConfig.mapBoxHeight}px`,
    objectFit: 'fill',
})

const CliffImage = styled(`img`)({
    position: 'absolute',
    top: `${StyleConfig.mapBoxHeight}px`,
    width: `${StyleConfig.mapBoxWidth + 3}px`,
    height: `${StyleConfig.mapBoxHeight}px`,
    objectFit: 'fill',
    borderBottom: CustomStyle.border.mapBorder,
})


interface MapBoxPropsInterface{
    children?: ReactElement,
    location: [number, number]
}

const MapBox = (props: MapBoxPropsInterface) => {

    const {children, location} = props;

    const playerState = usePlayerState().playerState;
    const {playerPosition} = playerState;
    const dialogState = useDialogState().dialogState;
    const setDialogState = useDialogState().setDialogState;

    const handleKeyBoardEvent = (e: any) => {
        throw new Error('Child component must override the handleKeyBoardEvent method.');
    }

    const handleAddMapEdge = (): CSSProperties => {
        let borderStyle : any = {};
        const border = CustomStyle.border.mapBorder;
        const row = location[0];
        const col = location[1];
        if (col === 0)
            borderStyle['borderLeft'] = border;
        if (row === 0)
            borderStyle['borderTop'] = border;
        if (col === mapDesign[row].length-1)
            borderStyle['borderRight'] = border;
        return borderStyle;
    };

    const handleAddCliffEdge = (): CSSProperties => {
        let borderStyle : any = {};
        const border = CustomStyle.border.mapBorder;
        const row = location[0];
        const col = location[1];
        if (col === 0)
        borderStyle['borderLeft'] = border;
        if (col === mapDesign[row].length-1)
            borderStyle['borderRight'] = border;
        return borderStyle;
    }

    const isAddCliff = () => {
        const row = location[0];
        if (row === mapDesign.length-1)
            return true;
        return false;;
    }

    useEffect(()=>{
        if (!arrayEquals(playerPosition, location))
            return;
        triggerForceTriggerEvent(playerPosition, mapDesign, dialogState, setDialogState);
    }, [playerPosition]);


    return (
        <>
            <Container style={handleAddMapEdge()}>
                <Image src={require("../../assets/game_images/lawn.png")}/>
                {isAddCliff() && <CliffImage src={require("../../assets/game_images/cliff.png")} style={handleAddCliffEdge()}/>}
                {children}
            </Container>
        </>

    )
}

export default MapBox;