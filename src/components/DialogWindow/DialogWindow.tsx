import styled from "@emotion/styled";
import { Box, Dialog, Grid, IconButton, Slide } from "@mui/material";
import CustomStyle from "../../Theme/CustomStyle";
import { ReactElement, forwardRef, useEffect } from "react";
import StyleConfig from "../../Theme/StyleConfig";
import { usePlayerState } from "../../Context/PlayerContext";
import { arrayEquals } from "../../utils/general";
import { useGameInfoState } from "../../Context/GameInfoContext";
import { TransitionProps } from "@mui/material/transitions";
import { useDialogState } from "../../Context/DialogContext";

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
    justifyContent: 'center'
})

const ImageContainer = styled(Grid)({
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red'
})

const Img = styled('img')({
    width: '70%',
    height: '70%',
    maxWidth: '150px',
    maxHeight: '150px',
    backgroundColor: CustomStyle.colors.mainWhite,
    border: `3px solid ${CustomStyle.colors.mainBlack}`
})

const TextContainer = styled(Grid)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
})

interface DialogWindowPropsInterface{
    children?: ReactElement,
    imageSrc: any
}

const DialogWindow = (props: DialogWindowPropsInterface) => {

    const {children, imageSrc} = props;
    const dialogState = useDialogState().dialogState;
    const setDialogState = useDialogState().setDialogState;

    const {isOpenDialogWindow} = dialogState;
  
    const handleClose = () => {
        setDialogState({...dialogState, isOpenDialogWindow: false});
    };

    return (
        <>
            <Dialog
                open={isOpenDialogWindow}
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
                    }}
                    >
                    <CloseIcon />
                </IconButton>
                <Container>
                    <InnerContainer container>
                        <ImageContainer item xs={12} sm={4}>
                            <Img src={imageSrc}/>
                        </ImageContainer>
                        <TextContainer item xs={12} sm={8}>
                            {children}
                        </TextContainer>
                    </InnerContainer>
                </Container>
            </Dialog>
        </>

    )
}

export default DialogWindow;