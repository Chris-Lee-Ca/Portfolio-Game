import styled from "@emotion/styled";
import { Box, Grid, Typography } from "@mui/material";
import { Education } from "../../Context/GameStaticDataContext";
import SanityBlockContent from "../template/SanityBlockContent";

const Title = styled(Typography)({
    fontWeight: 'bolder',
    fontSize: '25px',
})

const Degree = styled(Typography)({
    fontWeight: 'bold',
    fontSize: '15px',
})

const SubTitle = styled(Typography)({
    fontWeight: 'bold',
    fontSize: '20x',
    marginBottom: '5px'
})

const Content = styled(Typography)({
    width: '100%',
    fontWeight: 'normal',
})

const SkillsContainer = styled(Box)({
    marginTop: '10px',
    display: 'flex',
})

const SkillWrapper = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '8px'
})

const Skill = styled(Box)({
    fontSize: '15px',
    fontWeight: '400',
    // backgroundColor: 'red'
})

interface SchoolPopUpWindowPropsInterface{
    education: Education
}

const SchoolPopUpWindow = (props: SchoolPopUpWindowPropsInterface) => {

    const {education} = props;

    return (
        <>
            <Title>{education.school}</Title>
            <Degree>{education.degree}</Degree>
            <SanityBlockContent content={education.descriptionRaw}/>
            <SkillsContainer>
                <SkillWrapper>
                    {education.skills.map((skill, index)=> 
                        <Skill key={index}>• {skill}</Skill>
                    )}
                </SkillWrapper>
            </SkillsContainer>
        </>

    )
}

export default SchoolPopUpWindow;