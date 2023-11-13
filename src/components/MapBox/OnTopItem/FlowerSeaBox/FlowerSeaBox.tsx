import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { Facing } from "../../../../data/mapDesign";

const Container = styled(Box)({
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
    // boxShadow: CustomStyle.colors.mainShadow,
    height: '100%',
    width: '100%'
})

const Img = styled('img')({
    // objectFit: 'cover',
    width: `50%`,
    height: `50%`
})


interface FlowerSeaBoxPropsInterface{
    location: [number, number],
    facing: Facing,
}

const FlowerSeaBox = (props: FlowerSeaBoxPropsInterface) => {

    const {facing} = props;
    return (
        <>
            <Container>
                <Img 
                    src={require('../../../../assets/game_images/flower_sea.png')}
                />
            </Container>
        </>

    )
}

export default FlowerSeaBox;