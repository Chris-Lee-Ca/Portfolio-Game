import styled from "@emotion/styled";
import { Box } from "@mui/material";

import CustomStyle from "../../Theme/CustomStyle";
import { Bio } from "../../data/constants";
import { StyledButton } from "../template/StyledButton";
import { CustomTypeWriter } from "../template/CustomTypeWriter";

const Title = styled(Box)({
    fontWeight: "bolder",
    fontSize: "30px",
    marginBottom: "20px",
});

const Content = styled(Box)({
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

const StyledLink = styled("a")({
    textDecoration: "none",
    color: CustomStyle.colors.mainWhite,
});

interface EndingDialogWindowPropsInterface {}

const EndingDialogWindow = (props: EndingDialogWindowPropsInterface) => {
    return (
        <>
            <Title>{Bio.name}</Title>
            <Content>
                <CustomTypeWriter content={"I believe I've figured out who I am. Thank you!"} />
                <ButtonWapper>
                    <StyledButton>
                        <StyledLink href="https://www.chrislee.one/" target="_blank" rel="noopener noreferrer">
                            Back To Home Page.
                        </StyledLink>
                    </StyledButton>
                    {/* <StyledButton>Send a message to Developer.</StyledButton> */}
                </ButtonWapper>
            </Content>
        </>
    );
};

export default EndingDialogWindow;
