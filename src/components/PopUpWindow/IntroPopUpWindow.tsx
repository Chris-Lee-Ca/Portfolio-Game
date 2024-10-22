import styled from "@emotion/styled";
import { Box, Grid } from "@mui/material";

const Title = styled(Box)({
    fontWeight: "bolder",
    fontSize: "30px",
    marginBottom: "20px",
});

const Content = styled(Box)({
    width: "100%",
    fontWeight: "bold",
    textDecoration: "underline",
    textAlign: "center",
});

const Span = styled("span")({
    fontWeight: "bolder",
});

interface IntroPopUpWindowPropsInterface {}

const IntroPopUpWindow = (props: IntroPopUpWindowPropsInterface) => {
    return (
        <>
            <Title>About this World</Title>
            <Content>
                This world is created by <Span>TypeScript</Span>, <Span>React JS</Span> and <Span>Material UI</Span>,
            </Content>
            <Content>
                Memories from <Span>Sanity (headless CMS)</Span>are scattered across the world.
            </Content>
            <Content>Try to capture them.</Content>
        </>
    );
};

export default IntroPopUpWindow;
