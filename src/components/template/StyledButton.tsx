import Button from '@mui/material/Button'
import { styled } from '@mui/system'
import CustomStyle from '../../Theme/CustomStyle';

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

interface styledButtonProps {
    children: any;
    onClick?: () => void;
    type?: "button" | "submit" | "reset" | undefined;
    form?: string;
}


const StyledButton = ({children, onClick, type, form }: styledButtonProps) => {
    return (
        <_Button form={form} type={type} onClick={onClick}>{children}</_Button>

    )
}


export  {StyledButton}