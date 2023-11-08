import styled from "@emotion/styled";
import { Box } from "@mui/material";
import CustomStyle from "../../Theme/CustomStyle";
import { ReactElement, useEffect } from "react";
import StyleConfig from "../../Theme/StyleConfig";
import { usePlayerState } from "../../Context/PlayerContext";
import { arrayEquals } from "../../utils/general";
import { triggerForceTriggerEvent } from "../../utils/playerControl";
import mapDesign from "../../data/mapDesign";
import { useGameInfoState } from "../../Context/GameInfoContext";
import { useDialogState } from "../../Context/DialogContext";

const Container = styled(Box)({
    position: 'relative',
    width: `${StyleConfig.mapBoxWidth}px`,
    height: `${StyleConfig.mapBoxHeight}px`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // border: `1px solid ${CustomStyle.colors.mainBlack}`
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

    useEffect(()=>{
        if (!arrayEquals(playerPosition, location))
            return;
        triggerForceTriggerEvent(playerPosition, mapDesign, dialogState, setDialogState);
    }, [playerPosition]);

    return (
        <>
            <Container>
                {children}
            </Container>
        </>

    )
}

export default MapBox;