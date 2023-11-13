import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import CustomStyle from "../../../../Theme/CustomStyle";
import { Facing, OnTopItemType } from "../../../../data/mapDesign";
import { projects } from "../../../../data/constants";
import StyleConfig from "../../../../Theme/StyleConfig";

const Container = styled(Box)({
    position: 'relative',
    // boxShadow: CustomStyle.colors.mainShadow,
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
})

const ImageWrapper = styled(Box)({
    position: 'absolute',
    border: `4px solid ${CustomStyle.colors.mainBlack}`,
    backgroundColor: CustomStyle.colors.mainWhite,
    boxShadow: CustomStyle.colors.balckShoadow,
    width: `${StyleConfig.mapBoxWidth}px`,
    height: `${StyleConfig.mapBoxHeight}px`,
    zIndex: 50
})

const Img = styled('img')({
    objectFit: 'contain',
    width: `100%`,
    height: `100%`
})

const Title = styled(Typography)({
    position: 'absolute',
    fontSize: '10px',
    backgroundColor: CustomStyle.colors.mainTransparent,
    fontWeight: 'bold',
    textAlign: 'center',
    top: `${StyleConfig.mapBoxHeight + 5}px`,
    zIndex: 50
})


interface PaintingBoxPropsInterface{
    location: [number, number],
    facing: Facing,
    onTopItemType: OnTopItemType
}

const PaintingBox = (props: PaintingBoxPropsInterface) => {

    const {facing, onTopItemType} = props;
    const currentProject = projects.find((project)=> project.nickname === onTopItemType) || projects[0];

    return (
        <>
            <Container>
                <ImageWrapper>
                    <Img 
                        src={currentProject.image}
                    />
                </ImageWrapper>
                <Title>{currentProject.title}</Title>
            </Container>
        </>

    )
}

export default PaintingBox;