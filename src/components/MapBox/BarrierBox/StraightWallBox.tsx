import styled from "@emotion/styled";
import { Box } from "@mui/material";
import CustomStyle from "../../../Theme/CustomStyle";
import { useEffect } from "react";
import { Facing } from "../../../data/mapDesign";
import { usePlayerState } from "../../../Context/PlayerContext";
import { arrayEquals, getTransformDegreee } from "../../../utils/general";
import { useGameInfoState } from "../../../Context/GameInfoContext";

const Container = styled(Box)({
    position: "absolute",
    height: "100%",
    width: "100%",
});

const RowContainer = styled(Box)({
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%",
});

const Wall = styled(Box)({
    backgroundColor: CustomStyle.colors.mainBlack,
    width: "100%",
    height: "100%",
});

const Empty = styled(Box)({
    backgroundColor: CustomStyle.colors.primary,
    width: "100%",
    height: "100%",
});

const Img = styled("img")({
    objectFit: "cover",
    width: "100%",
    height: "100%",
});

interface StraightWallBoxPropsInterface {
    location: [number, number];
    facing: Facing;
}

const StraightWallBox = (props: StraightWallBoxPropsInterface) => {
    const { facing } = props;

    return (
        <>
            <Container sx={{ transform: getTransformDegreee(facing) }}>
                <RowContainer>
                    <Wall>
                        <Img src={require("../../../assets/game_images/wall.png")} />
                    </Wall>
                    <Empty />
                    <Empty />
                </RowContainer>
            </Container>
        </>
    );
};

export default StraightWallBox;
