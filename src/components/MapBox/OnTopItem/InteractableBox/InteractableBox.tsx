import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { Facing } from "../../../../data/mapDesign";
import PlayForWorkIcon from '@mui/icons-material/PlayForWork';
import StyleConfig from "../../../../Theme/StyleConfig";
import CustomStyle from "../../../../Theme/CustomStyle";

const Container = styled(Box)({
    position: 'relative',
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red'
})

const IconContainer = styled(Box)({
    color: CustomStyle.colors.mainWhite,
    // boxShadow: CustomStyle.colors.mainShadow,
    // borderRadius: '100%'
})


interface InteractableBoxPropsInterface{
    location: [number, number],
    facing: Facing,
}

const InteractableBox = (props: InteractableBoxPropsInterface) => {

    const {facing} = props;
    return (
        <>
            <Container>
                <IconContainer>
                    <PlayForWorkIcon fontSize={'large'} />
                </IconContainer>
            </Container>
        </>

    )
}

export default InteractableBox;