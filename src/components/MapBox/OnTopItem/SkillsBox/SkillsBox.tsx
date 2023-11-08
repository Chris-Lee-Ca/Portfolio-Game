import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import CustomStyle from "../../../../Theme/CustomStyle";
import { Facing } from "../../../../data/mapDesign";
import { SkillsCategories } from "../../../../data/Objects/RoadObject";

const Container = styled(Box)({
    position: 'relative',
    // boxShadow: CustomStyle.colors.mainShadow,
    height: '80%',
    width: '80%',
    display: 'flex',
    justifyContent: 'center',
    // alignItems: 'center'
})

const Img = styled('img')({
    // backgroundColor: CustomStyle.colors.mainWhite,
    // borderRadius: '100%',
    objectFit: 'contain',
    width: `100%`,
    height: `100%`
})

const Title = styled(Typography)({
    position: 'absolute',
    top: '-5px',
    fontSize: '10px',
    backgroundColor: CustomStyle.colors.mainTransparent,
})


interface SkillsBoxPropsInterface{
    location: [number, number],
    facing: Facing,
    category: SkillsCategories
}

const SkillsBox = (props: SkillsBoxPropsInterface) => {

    const {facing, category} = props;

    return (
        <>
            <Container>
                <Img 
                    src={require('../../../../assets/game_images/board2.png')}
                />
                <Title>{category}</Title>
            </Container>
        </>

    )
}

export default SkillsBox;