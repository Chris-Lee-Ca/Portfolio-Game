import { Box, Button, Grid, Typography, styled } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import Typewriter from 'typewriter-effect';

import { Bio } from "../data/constants";
import CustomStyle from "../Theme/CustomStyle";
// assets
import EastIcon from '@mui/icons-material/East';

const PopUpInfo = styled(Box)({
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    top: '15%',
    width: '300px',
    zIndex: 99,
    // backgroundColor: CustomStyle.colors.skyBlue,
    borderRadius: 15,
    border: `2px solid ${CustomStyle.colors.mainBlack}`,
    // boxShadow: CustomStyle.colors.balckShoadow,
})

const InfoContainer = styled(Box)({
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '15px' 
})

const Content = styled(Typography)({
    fontSize: '22px',
    fontWeight: 600,
    textAlign: 'center',
})

const TextLoop = styled(Box)({
    fontSize: '22px',
    fontWeight: 600,
    textAlign: 'center',
    display: 'flex',
    gap: '6px',
})

const Span = styled(`span`)({
    fontWeight: 900,
    color: CustomStyle.colors.mainBlue,
})

const StartButton = styled(Button)({
    position: 'absolute',
    bottom: '-23px',
    backgroundColor: CustomStyle.colors.mainWhite,
    // boxShadow: CustomStyle.colors.balckShoadow,
    width: '200px',
    fontWeight: 600,
    // marginTop: '20px',
    // fontSize: '22px',
    // fontWeight: 600,
    '&:hover': {
        backgroundColor: CustomStyle.colors.mainWhite,
    },
})

const StyledLink = styled(Link)({
    textDecoration: 'none',
    color: CustomStyle.colors.mainBlack,
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center',
})

const IconWrapper = styled(`span`)({
    display: 'flex', 
    flexDirection: 'column',
    justifyContent: 'center', 
    alignItems: 'center',
})

type HomePopUp = {
    currentStage: string
}
export const HomePopUp = (props: HomePopUp) => {

    const {currentStage} = props;
    const [isHoverButton, setIsHoverButton] = useState<boolean>(false);

    switch (currentStage){
        case 'front':
            return (
                <PopUpInfo>
                    <InfoContainer>
                        <Content>Hi, I'm <Span>{Bio.name}</Span></Content>
                        <TextLoop>A <span><Typewriter options={{strings: Bio.roles, autoStart: true, loop: true}}></Typewriter></span></TextLoop>
                        <StartButton variant="contained" onMouseEnter={()=> setIsHoverButton(true)} onMouseLeave={()=> setIsHoverButton(false)}>
                            <StyledLink to="/game">
                                Let's Start! 
                                <IconWrapper style={{transform: isHoverButton ? 'translateX(7px)' : 'translateX(0px)', transition: 'transform 0.2s ease', marginLeft: '5px'}}><EastIcon/></IconWrapper>
                            </StyledLink>
                        </StartButton>
                    </InfoContainer>
                </PopUpInfo>
            )
        default:
            return (
                <PopUpInfo>
                    <InfoContainer>
                        <Content>Hey! The portal's entrance is elsewhere.</Content>
                    </InfoContainer>
                </PopUpInfo>
            )
    }
}


