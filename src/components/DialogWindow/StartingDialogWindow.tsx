import styled from "@emotion/styled";
import { Box, Grid } from "@mui/material";

import CustomStyle from "../../Theme/CustomStyle";
import { usePlayerState } from "../../Context/PlayerContext";
import { useGameInfoState } from "../../Context/GameInfoContext";
import Typewriter from 'typewriter-effect';
import { Bio } from "../../data/constants";
import { CustomTypeWriter } from "../template/CustomTypeWriter";

const Title = styled(Box)({
    fontWeight: 'bolder',
    fontSize: '30px',
    marginBottom: '20px'
})

const Content = styled(Box)({
    width: '250px',
    fontWeight: 'bold',
    textDecoration: 'underline '
})

const Span = styled('span')({
    fontWeight: 'bolder'
})


interface StartingDialogWindowPropsInterface{
}

const StartingDialogWindow = (props: StartingDialogWindowPropsInterface) => {

    const playerState = usePlayerState().playerState;
    const {playerPosition} = playerState;
    const gameInfoState = useGameInfoState().gameInfoState;
    const setGameInfoState = useGameInfoState().setGameInfoState;

    return (
        <>
            <Title>{Bio.name}</Title>
            <CustomTypeWriter content={'Who am I ?'}/>
        </>

    )
}

export default StartingDialogWindow;