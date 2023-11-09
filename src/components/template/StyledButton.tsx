import Button from '@mui/material/Button'
import { styled } from '@mui/system'
import CustomStyle from '../../Theme/CustomStyle';
import { CSSProperties, useEffect, useState } from 'react';

const _Button = styled(Button)({
    height: 36,
    background: CustomStyle.colors.mainBlue,
    color: CustomStyle.colors.mainWhite,
    borderRadius: '5px',
    padding: '8px 20px',
    marginTop: '20px',
    fontWeight: 'bold',
    '&:hover': {
        backgroundColor: CustomStyle.colors.mainBlue,
    },

})

const KeyBoardButton = styled(Button)({
    maxWidth: '30px',
    maxHeight: '30px', 
    minWidth: '30px', 
    minHeight: '30px',
    border: `3px solid ${CustomStyle.colors.mainBlack}`,
    boxShadow: CustomStyle.colors.balckShoadow,
    margin: '2px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    '&:hover': {
        backgroundColor: CustomStyle.colors.mainBlue,
    },
    
})


const ActionButton = styled(Button)({
    maxWidth: '40px',
    maxHeight: '40px', 
    minWidth: '40px', 
    minHeight: '40px',
    borderRadius: '100%',
    border: `3px solid ${CustomStyle.colors.mainBlack}`,
    boxShadow: CustomStyle.colors.balckShoadow,
    '&:hover': {
        backgroundColor: CustomStyle.colors.mainBlue,
    },
    fontWeight: 'bolder'
})

interface styledButtonProps {
    children: any;
    onClick?: () => void;
    type?: "button" | "submit" | "reset" | undefined;
    form?: string;
}

interface controlButtonProps {
    children: any;
    onClick?: () => void;
    correspondingKeys: string[],
    type: "direction" | "interaction"
    style?: CSSProperties
}


const StyledButton = ({children, onClick, type, form }: styledButtonProps) => {
    return (
        <_Button form={form} type={type} onClick={onClick}>{children}</_Button>

    )
}

//The color of this button will change when corresponding key is clicked.
const ControlButton = ({children, onClick, correspondingKeys, type, style}: controlButtonProps) => {

    const [isChangeColor, setIsChangeColor] = useState<boolean>(false);

    const keyBoardListener = (e: any) => {
        if (!correspondingKeys.includes(e.key))
            return;
        setIsChangeColor(true);
        setTimeout(()=> setIsChangeColor(false), 200);
    };

    useEffect(() => {
        // Add an event listener to the document
        document.addEventListener('keydown', keyBoardListener);
        // Clean up the event listener when the component unmounts
        return () => {
            document.removeEventListener('keydown', keyBoardListener);
        };
    }, []);

    return (
        <>
            {
                type === "direction" 
                    ? 
                    <KeyBoardButton 
                        onClick={onClick} 
                        style={{...style, backgroundColor: isChangeColor ? CustomStyle.colors.mainBlue: CustomStyle.colors.primary}}
                    >
                            {children}
                    </KeyBoardButton>
                    :
                    <ActionButton 
                        onClick={onClick}
                        style={{...style, backgroundColor: isChangeColor ? CustomStyle.colors.mainBlue: CustomStyle.colors.mainGreen}}
                    >
                        {children}
                    </ActionButton>

            }
        </>
    )
}


export  {StyledButton, ControlButton}