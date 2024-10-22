import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { Facing } from "../../../../data/mapDesign";
import StyleConfig from "../../../../Theme/StyleConfig";

const Container = styled(Box)({
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
});

const Img = styled("img")({
    objectFit: "cover",
    width: `${StyleConfig.mapBoxWidth * 1.5}px`,
    // height: `${StyleConfig.mapBoxHeight * 2}px`,
    position: "absolute",
    margin: "auto",
});

interface SchoolBoxPropsInterface {
    location: [number, number];
    facing: Facing;
}

const SchoolBox = (props: SchoolBoxPropsInterface) => {
    const { facing } = props;
    return (
        <>
            <Container>
                <Img src={require("../../../../assets/game_images/school.png")} />
            </Container>
        </>
    );
};

export default SchoolBox;
