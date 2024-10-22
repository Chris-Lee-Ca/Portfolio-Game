import styled from "@emotion/styled";
import { Box } from "@mui/material";

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

interface ResumeDialogWindowPropsInterface {}

const ResumeDialogWindow = (props: ResumeDialogWindowPropsInterface) => {
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
