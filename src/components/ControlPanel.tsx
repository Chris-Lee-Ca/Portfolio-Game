import styled from "@emotion/styled";
import { Box, Button, Grid } from "@mui/material";
import CustomStyle from "../Theme/CustomStyle";
import StyleConfig from "../Theme/StyleConfig";
import PlayerImage from "../assets/game_images/Player.png";

import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Dispatch, SetStateAction, useCallback, useEffect, useState } from "react";
import mapDesign from "../data/mapDesign";
import { usePlayerState } from "../Context/PlayerContext";
import { useGameInfoState } from "../Context/GameInfoContext";
import { handleAllowedMovingDirestion, handleOnClickArrowButton, htmlCommandType, triggerForceTriggerEvent, triggerInteractionEvent } from "../utils/playerControl";
import { useDialogState } from "../Context/DialogContext";
import { ControlButton } from "./template/StyledButton";

const Container = styled(Box)({
    position: 'absolute',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: '100',
    borderRadius: '25% 25% 0 0',
    backgroundColor: CustomStyle.colors.primary,
    boxShadow: CustomStyle.colors.mainShadow

})

const InenerContainer = styled(Grid)({
    maxWidth: '400px',
    padding: '50px',

})

const DirectionKeyContainer = styled(Grid)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
})

const ActionKeyContainer = styled(Grid)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
})

interface ControlPanelPropsInterface{
    // playerPosition: [number,number],
    // setPlayerPosition: Dispatch<SetStateAction<[number, number]>>
}

const htmlMovingType = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];
const htmlInteractType = ['a', 'A'];

const ControlPanel = (props: ControlPanelPropsInterface) => {

    const {playerState, setPlayerState} = usePlayerState();
    const {playerPosition} = playerState;
    const {gameInfoState, setGameInfoState} = useGameInfoState();
    const {allowedMovingDirestion, isOpenPopUpWindow} = gameInfoState;
    const {dialogState, setDialogState} = useDialogState();
    const {isOpenDialogWindow} = dialogState;

    const handleCloseWindow = (key: string) => {
        if (! (htmlInteractType.includes(key)))
            return;
        if (isOpenPopUpWindow)
            setGameInfoState({...gameInfoState, isOpenPopUpWindow: false});
        if (isOpenDialogWindow)
            setDialogState({...dialogState, isOpenDialogWindow: false});
    }
    const keyBoardListener = useCallback((e: any) => {
        const htmlCommandType = [...htmlMovingType, ...htmlInteractType];
        if (! (htmlCommandType.includes(e.key)))
            return;
        if (isOpenPopUpWindow || isOpenDialogWindow)
            return handleCloseWindow(e.key);
        if (htmlMovingType.includes(e.key))
            handleAllowedMovingDirestion(playerState, setPlayerState, allowedMovingDirestion, e.key);
        if (htmlInteractType.includes(e.key))
            handleInteractionButton();
    },[allowedMovingDirestion, isOpenPopUpWindow, isOpenDialogWindow]);

    const handleOnClickArrowButton = (htmlCommand: htmlCommandType) => {
        handleAllowedMovingDirestion(playerState, setPlayerState, allowedMovingDirestion, htmlCommand);
    }

    const handleInteractionButton = () => {
        triggerInteractionEvent(playerPosition, mapDesign, gameInfoState, setGameInfoState);
    }

    useEffect(() => {
        // Add an event listener to the document
        document.addEventListener('keydown', keyBoardListener);
        // Clean up the event listener when the component unmounts
        return () => {
            document.removeEventListener('keydown', keyBoardListener);
        };
    }, [keyBoardListener]);

    return (
        <Container>
            <InenerContainer container>
                <DirectionKeyContainer item xs={6}>
                    <Box component="div">
                        <ControlButton style={{marginBottom: '0px'}} type="direction" correspondingKeys={["ArrowUp"]} onClick={()=>handleOnClickArrowButton('ArrowUp')}>
                            <ArrowDropUpIcon/>
                        </ControlButton>
                    </Box>
                    <Box component="div" display={'flex'}>
                        <ControlButton type="direction" correspondingKeys={["ArrowLeft"]} onClick={()=>handleOnClickArrowButton('ArrowLeft')}>
                            <ArrowLeftIcon/>
                        </ControlButton>
                        <ControlButton type="direction" correspondingKeys={["ArrowDown"]} onClick={()=>handleOnClickArrowButton('ArrowDown')}>
                            <ArrowDropDownIcon/>
                        </ControlButton>
                        <ControlButton type="direction" correspondingKeys={["ArrowRight"]} onClick={()=>handleOnClickArrowButton('ArrowRight')}>
                            <ArrowRightIcon/>
                        </ControlButton>
                    </Box>
                </DirectionKeyContainer>
                <ActionKeyContainer item xs={6}>
                    <ControlButton type="interaction" correspondingKeys={["a" , "A"]} onClick={()=>handleInteractionButton()}>
                        A
                    </ControlButton>
                </ActionKeyContainer>
            </InenerContainer>
        </Container>
    )
}

export default ControlPanel;