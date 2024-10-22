import styled from "@emotion/styled";
import { Box, Grid, Typography } from "@mui/material";
import { Experience } from "../../Context/GameStaticDataContext";
import CustomStyle from "../../Theme/CustomStyle";
import SanityBlockContent from "../template/SanityBlockContent";

const Title = styled(Typography)({
    fontWeight: "bolder",
    fontSize: "22px",
});

const SubTitle = styled(Typography)({
    fontWeight: "bold",
    fontSize: "20x",
});

const Date = styled(Typography)({
    fontWeight: "bold",
    fontSize: "20x",
    color: CustomStyle.colors.mainRoad,
});

const SkillsContainer = styled(Box)({
    margin: "10px 0px 10px",
    display: "flex",
});

const SkillWrapper = styled(Box)({
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "8px",
});

const Skill = styled(Box)({
    fontSize: "15px",
    fontWeight: "400",
});

const Description = styled(Typography)({
    fontWeight: "600",
});

const Achievements = styled("ul")({
    margin: "8px 0px 6px 0px",
});

const Achievement = styled("li")({
    width: "100%",
    fontWeight: "normal",
    marginTop: "10px",
    margin: "5px 5px 5px 5px",
});

const ButtonGroup = styled(Box)({
    display: "flex",
    justifyContent: "center",
    marginTop: "12px",
    gap: "12px",
});

const Button = styled("a")({
    width: "100%",
    textAlign: "center",
    fontSize: "16px",
    fontWeight: 600,
    padding: "12px 16px",
    borderRadius: "8px",
    cursor: "pointer",
    textDecoration: "none",
    backgroundColor: CustomStyle.colors.mainPaper,
    color: CustomStyle.colors.mainBlack,
    "&:hover": {
        backgroundColor: CustomStyle.colors.mainRoad,
        // border: `1px solid ${CustomStyle.colors.mainBlack}`
    },
});

interface CompanyPopUpWindowPropsInterface {
    experience: Experience;
}

const CompanyPopUpWindow = (props: CompanyPopUpWindowPropsInterface) => {
    const { experience } = props;

    return (
        <>
            <Title>{experience.role}</Title>
            <SubTitle>{experience.company}</SubTitle>
            <Date>{experience.date}</Date>
            <SkillsContainer>
                <SkillWrapper>
                    {experience.skills.map((skill, index) => (
                        <Skill key={index}>• {skill}</Skill>
                    ))}
                </SkillWrapper>
            </SkillsContainer>
            <SanityBlockContent content={experience.descriptionRaw} />
            <Typography mt={1} fontWeight={800} fontSize={"15px"}>
                Key Achievements:
            </Typography>
            {experience.achievements.map((achievement, index) => (
                <Achievements key={index}>
                    <Achievement>{achievement}</Achievement>
                </Achievements>
            ))}
        </>
    );
};

export default CompanyPopUpWindow;
