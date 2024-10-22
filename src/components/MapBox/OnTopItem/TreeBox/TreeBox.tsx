import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { Facing } from "../../../../data/mapDesign";
import StyleConfig from "../../../../Theme/StyleConfig";

const Container = styled(Box)({
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: 'red',
    // overflow: 'visible',
    height: "100%",
    width: "100%",
});

const Img = styled("img")({
    objectFit: "cover",
    width: `${StyleConfig.mapBoxWidth / 1.5}px`,
    // height: `${StyleConfig.mapBoxHeight * 2}px`,
    position: "absolute",
    bottom: 0 /* Adjust as needed */,
    // left: 0,
    margin: "auto",
});

interface TreeBoxPropsInterface {
    location: [number, number];
    facing: Facing;
}

const TreeBox = (props: TreeBoxPropsInterface) => {
    const { facing } = props;
    return (
        <>
            <Container>
                <Img src={require("../../../../assets/game_images/tree.png")} />
            </Container>
        </>
    );
};

export default TreeBox;
