import styled from "@emotion/styled";
import { Box } from "@mui/material";
import StyleConfig from "../Theme/StyleConfig";
import PlayerImage from "../assets/game_images/Player.png";

const Container = styled(Box)({
    // backgroundColor: 'red',
    position: "absolute",
    height: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: "100",
});

const Img = styled("img")({
    objectFit: "contain",
    width: `${StyleConfig.mapBoxWidth}px`,
    height: `${StyleConfig.mapBoxHeight}px`,
});

interface PlayerPropsInterface {}

const Player = (props: PlayerPropsInterface) => {
    return (
        <Container>
            <Img src={PlayerImage} />
        </Container>
    );
};

export default Player;
