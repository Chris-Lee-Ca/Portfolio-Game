import styled from "@emotion/styled";
import { Box, Grid, Typography } from "@mui/material";
import { education } from "../../data/constants";

const Title = styled(Typography)({
    fontWeight: 'bolder',
    fontSize: '25px',
})

const Degree = styled(Typography)({
    fontWeight: 'bold',
    fontSize: '15px',
    marginBottom: '20px'
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
}

const SchoolPopUpWindow = (props: SchoolPopUpWindowPropsInterface) => {

    const hku = education[0];

    return (
        <>
            <Title>{hku.school}</Title>
            <Degree>{hku.degree}</Degree>
            <Box>
                {hku.desc.map((description, index)=>
                    <Box key={index} mb={'15px'}>
                        <SubTitle>{description.subTitle}</SubTitle>
                        <Content>{description.content}</Content>
                    </Box>
                )}
            </Box>
            <SkillsContainer>
                <SkillWrapper>
                    {hku.skills.map((skill, index)=> 
                        <Skill key={index}>• {skill}</Skill>
                    )}
                </SkillWrapper>
            </SkillsContainer>
        </>

    )
}

export default SchoolPopUpWindow;