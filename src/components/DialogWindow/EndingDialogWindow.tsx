import styled from "@emotion/styled";
import { Box, Grid } from "@mui/material";

import CustomStyle from "../../Theme/CustomStyle";
import { usePlayerState } from "../../Context/PlayerContext";
import { useGameInfoState } from "../../Context/GameInfoContext";
import Typewriter from "typewriter-effect";
import { Bio } from "../../data/constants";
import { StyledButton } from "../template/StyledButton";
import { CustomTypeWriter } from "../template/CustomTypeWriter";
import { Link } from "react-router-dom";

const Title = styled(Box)({
    fontWeight: "bolder",
    fontSize: "30px",
    marginBottom: "20px",
});

const Content = styled(Box)({
    // width: '100%',
    width: "250px",
    fontWeight: "bold",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
});

const ButtonWapper = styled(Box)({
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
});

const StyledLink = styled(Link)({
    textDecoration: "none",
    color: CustomStyle.colors.mainWhite,
});

interface EndingDialogWindowPropsInterface {}

const EndingDialogWindow = (props: EndingDialogWindowPropsInterface) => {
    const playerState = usePlayerState().playerState;
    const { playerPosition } = playerState;
    const gameInfoState = useGameInfoState().gameInfoState;
    const setGameInfoState = useGameInfoState().setGameInfoState;

    return (
        <>
            <Title>{Bio.name}</Title>
            <Content>
                <CustomTypeWriter content={"I believe I've figured out who I am. Thank you!"} />
                <ButtonWapper>
                    <StyledButton>
                        <StyledLink to="/">Back To Home Page.</StyledLink>
                    </StyledButton>
                    {/* <StyledButton>Send a message to Developer.</StyledButton> */}
                </ButtonWapper>
            </Content>
        </>
    );
};

export default EndingDialogWindow;
