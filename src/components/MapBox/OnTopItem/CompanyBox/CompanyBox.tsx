import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { Facing } from "../../../../data/mapDesign";

const Container = styled(Box)({
    position: "relative",
    // display: 'flex',
    // justifyContent: 'flex',
    // alignItems: 'flex',
    // backgroundColor: 'red',
    // boxShadow: CustomStyle.colors.mainShadow,
    height: "100%",
    width: "100%",
});

const Img = styled("img")({
    // objectFit: 'cover',
    width: `100%`,
    height: `100%`,
});

interface CompanyBoxPropsInterface {
    location: [number, number];
    facing: Facing;
}

const CompanyBox = (props: CompanyBoxPropsInterface) => {
    const { facing } = props;
    return (
        <>
            <Container>
                <Img src={require("../../../../assets/game_images/company.png")} />
            </Container>
        </>
    );
};

export default CompanyBox;
