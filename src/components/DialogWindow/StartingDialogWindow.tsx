import styled from "@emotion/styled";
import { Box } from "@mui/material";

import { Bio } from "../../data/constants";
import { CustomTypeWriter } from "../template/CustomTypeWriter";

const Title = styled(Box)({
    fontWeight: "bolder",
    fontSize: "30px",
    marginBottom: "20px",
});

interface StartingDialogWindowPropsInterface {}

const StartingDialogWindow = (props: StartingDialogWindowPropsInterface) => {
    return (
        <>
            <Title>{Bio.name}</Title>
            <CustomTypeWriter content={"Who am I ?"} />
        </>
    );
};

export default StartingDialogWindow;
