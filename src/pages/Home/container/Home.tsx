import { Box, Button, Grid, Typography, styled } from "@mui/material";
import CustomStyle from "../../../Theme/CustomStyle";
import { Bio } from "../../../data/constants";
import Typewriter from 'typewriter-effect';
import HomePageImage from '../../../assets/web_images/homepage.png'
import { Link } from "react-router-dom";

const Container = styled(Box)({
    backgroundColor: CustomStyle.colors.primary,
    height: '100vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
})

const InnerContainer = styled(Grid)({
    height: '100vh',
    width: '100%',
    maxHeight: '700px',
    maxWidth: '1000px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
})

const LeftContainer = styled(Grid)({
    // backgroundColor: 'orange',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
})

const RightContainer = styled(Grid)({
    // backgroundColor: 'yellow',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
})

const Title = styled(Typography)({
    fontSize: '50px',
    fontWeight: 700,
    lineHeight: '68px'
})

const TextLoop = styled(Typography)({
    fontSize: '22px',
    fontWeight: 600,
    display: 'flex',
    gap: '12px',
})

const Span = styled(`span`)({
    color: CustomStyle.colors.mainBlue,
})

const StartButton = styled(Button)({
    backgroundColor: CustomStyle.colors.mainGrey,
    marginTop: '20px',
    fontSize: '22px',
    fontWeight: 600,
    '&:hover': {
        backgroundColor: CustomStyle.colors.mainGrey,
    },
})

const StyledLink = styled(Link)({
    textDecoration: 'none',
    color: CustomStyle.colors.mainBlack,
})

const Img = styled('img')({
    width: '100%',
    height: '100%',
    maxWidth: '400px',
    maxHeight: '400px'
})

const Home = () => {
    return (
        <Container>
            <InnerContainer container>
                <LeftContainer item xs={12} sm={6}>
                    <Title>{Bio.name}</Title>
                    <TextLoop>
                        I am a <Span><Typewriter options={{strings: Bio.roles, autoStart: true, loop: true}}></Typewriter></Span>
                    </TextLoop>
                    <StartButton variant="contained"><StyledLink to="/game">Start</StyledLink></StartButton>
                </LeftContainer>
                <RightContainer item xs={12} sm={6}>
                    <Img src={HomePageImage} alt="hero-image" />
                </RightContainer>
            </InnerContainer>
        </Container>
    )
}

export default Home;
