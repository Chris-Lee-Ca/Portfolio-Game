import styled from "@emotion/styled";
import { Box, Grid } from "@mui/material";

import { useEffect } from "react";
import CustomStyle from "../../Theme/CustomStyle";
import { usePlayerState } from "../../Context/PlayerContext";
import { useGameInfoState } from "../../Context/GameInfoContext";
import { PopUpWindowType } from "../../data/popUpWindow";

const Title = styled(Box)({
    fontWeight: "bolder",
    fontSize: "30px",
    textTransform: "uppercase",
});

interface RouteEntrancePopUpWindowPropsInterface {
    windowType: PopUpWindowType;
}

const RouteEntrancePopUpWindow = (props: RouteEntrancePopUpWindowPropsInterface) => {
    const { windowType } = props;

    return (
        <>
            <Title>{windowType} Ave</Title>
        </>
    );
};

export default RouteEntrancePopUpWindow;
