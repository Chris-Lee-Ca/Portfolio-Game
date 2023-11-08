import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { Facing } from "../../../../data/mapDesign";


const Container = styled(Box)({
    position: 'relative',
    // boxShadow: CustomStyle.colors.mainShadow,
    height: '80%',
    width: '80%'
})

const Img = styled('img')({
    objectFit: 'contain',
    width: `100%`,
    height: `100%`
})


interface PaperBoxPropsInterface{
    location: [number, number],
    facing: Facing,
}

const PaperBox = (props: PaperBoxPropsInterface) => {

    const {facing} = props;
    return (
        <>
            <Container>
                <Img 
                    src={require('../../../../assets/game_images/paper.png')}
                />
            </Container>
        </>

    )
}

export default PaperBox;