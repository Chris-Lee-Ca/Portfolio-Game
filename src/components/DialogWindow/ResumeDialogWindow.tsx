import styled from "@emotion/styled";
import { Box, Button, Grid } from "@mui/material";

import CustomStyle from "../../Theme/CustomStyle";
import { usePlayerState } from "../../Context/PlayerContext";
import { useGameInfoState } from "../../Context/GameInfoContext";
import Typewriter from "typewriter-effect";
import { Bio } from "../../data/constants";
import { StyledButton } from "../template/StyledButton";
import { CustomTypeWriter } from "../template/CustomTypeWriter";

const Title = styled(Box)({
    fontWeight: "bolder",
    fontSize: "30px",
    marginBottom: "20px",
});

const Content = styled(Box)({
    // width: '100%',
    width: "250px",
    fontWeight: "bold",
    textDecoration: "underline ",
});

const Span = styled("span")({
    fontWeight: "bolder",
});

interface ResumeDialogWindowPropsInterface {}

const ResumeDialogWindow = (props: ResumeDialogWindowPropsInterface) => {
    const playerState = usePlayerState().playerState;
    const { playerPosition } = playerState;
    const gameInfoState = useGameInfoState().gameInfoState;
    const setGameInfoState = useGameInfoState().setGameInfoState;

    return (
        <>
            <Title>{Bio.name}</Title>
            <Content>
                <CustomTypeWriter content={"I discovered an attractive piece of paper on the ground."} />
                <StyledButton onClick={() => window.open(Bio.resume, "_blank")}>Read it.</StyledButton>
            </Content>
        </>
    );
};

export default ResumeDialogWindow;
