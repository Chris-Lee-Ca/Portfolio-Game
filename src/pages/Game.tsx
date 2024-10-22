import styled from "@emotion/styled";
import { Box } from "@mui/material";
import CustomStyle from "../Theme/CustomStyle";
import Player from "../components/Player";
import GameMap from "../components/GameMap";
import ControlPanel from "../components/ControlPanel";
import PopUpWindowFactory from "../components/PopUpWindow/PopUpWindowFactory";
import { useGameInfoState } from "../Context/GameInfoContext";
import DialogWindowFactory from "../components/DialogWindow/DialogWindowFactory";
import { useDialogState } from "../Context/DialogContext";
import { useEffect } from "react";
import { getInitialPlayerPostion } from "../utils/viewPort";
import mapDesign from "../data/mapDesign";
import { usePlayerState } from "../Context/PlayerContext";

const Container = styled(Box)({
    backgroundColor: CustomStyle.colors.primary,
    height: "100vh",
    maxHeight: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    position: "fixed",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
});

const GameContainer = styled(Box)({
    // backgroundColor: 'orange',
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
});

const Game = () => {
    const playerState = usePlayerState().playerState;
    const setPlayerState = usePlayerState().setPlayerState;
    const gameInfoState = useGameInfoState().gameInfoState;
    const dialogState = useDialogState().dialogState;
    const { popUpWindowType } = gameInfoState;
    const { dialogWindowType } = dialogState;

    const handleResetGame = () => {
        console.log("Reset Game");
        setPlayerState({ ...playerState, playerPosition: getInitialPlayerPostion(mapDesign) });
    };
    useEffect(() => {
        handleResetGame();
    }, []);

    return (
        <Container>
            {/* System */}
            <PopUpWindowFactory windowType={popUpWindowType} />
            <DialogWindowFactory windowType={dialogWindowType} />
            {/* Game */}
            <GameContainer>
                <Player />
                <GameMap />
            </GameContainer>
            <ControlPanel />
        </Container>
    );
};

export default Game;
