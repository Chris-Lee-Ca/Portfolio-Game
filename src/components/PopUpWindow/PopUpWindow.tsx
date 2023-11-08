import styled from "@emotion/styled";
import { Box, Dialog, Grid, IconButton, Slide } from "@mui/material";
import CustomStyle from "../../Theme/CustomStyle";
import { ReactElement, forwardRef } from "react";
import { useGameInfoState } from "../../Context/GameInfoContext";
import { TransitionProps } from "@mui/material/transitions";

import CloseIcon from '@mui/icons-material/Close';

const Transition = forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Container = styled(Box)({
    backgroundColor: CustomStyle.colors.mainPaper,
    // height: '300px',
    // width: '300px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
})

const InnerContainer = styled(Grid)({
    minWidth: '350px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
})

const ImageContainer = styled(Grid)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '15px',
})

const Img = styled('img')({
    // width: '100%',
    // height: '100%',
    maxWidth: '90%',
    maxHeight: '250px',
    backgroundColor: CustomStyle.colors.mainWhite,
    border: `3px solid ${CustomStyle.colors.mainBlack}`,
    borderRadius: '10px',
    objectFit: 'contain'
})

const TextContainer = styled(Grid)({
    backgroundColor: CustomStyle.colors.mainPaperSecondary,
    borderRadius: '10px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
})


interface PopUpWindowPropsInterface{
    children?: ReactElement,
    imageSrc: any
}

const PopUpWindow = (props: PopUpWindowPropsInterface) => {

    const {children, imageSrc} = props;
    const gameInfoState = useGameInfoState().gameInfoState;
    const setGameInfoState = useGameInfoState().setGameInfoState;

    const {isOpenPopUpWindow} = gameInfoState;
  
    const handleClose = () => {
        setGameInfoState({...gameInfoState, isOpenPopUpWindow: false});
    };

    return (
        <>
            <Dialog
                open={isOpenPopUpWindow}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
            <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: CustomStyle.colors.mainBlack,
                    backgroundColor: CustomStyle.colors.mainGreen,
                    borderRadius: '100%',
                    border: `3px solid ${CustomStyle.colors.mainBlack}`
                }}
                >
                <CloseIcon />
            </IconButton>
            <Container>
                <InnerContainer container>
                    <ImageContainer item xs={12}>
                        <Img src={imageSrc}/>
                    </ImageContainer>
                    <TextContainer item xs={12}>
                        {children}
                    </TextContainer>
                </InnerContainer>
            </Container>
            </Dialog>
        </>

    )
}

export default PopUpWindow;