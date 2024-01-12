import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import { Project } from "../../Context/GameStaticDataContext";
import CustomStyle from "../../Theme/CustomStyle";
import SanityBlockContent from "../template/SanityBlockContent";

const Title = styled(Box)({
    fontWeight: 'bolder',
    fontSize: '25px',
})

const SubTitle = styled(Box)({
    fontWeight: 'bold',
    fontSize: '20x',
    marginBottom: '10px'
})

const SkillsContainer = styled(Box)({
    marginTop: '10px',
    display: 'flex',
    justifyContent: 'center',
    maxWidth: '400px',
})

const SkillWrapper = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '8px',
})

const Skill = styled(Box)({
    fontSize: '15px',
    fontWeight: '400'
})

const KeyFeatures = styled(Box)({
    margin: '0px 30px 6px 0px'
})

const ButtonGroup = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    // alignItems: 'center',
    marginTop: '12px',
    gap: '12px',

});

const Button = styled('a')({
    width: '100%',
    textAlign: 'center',
    fontSize: '16px',
    fontWeight: 600,
    padding: '12px 16px',
    borderRadius: '8px',
    cursor: 'pointer',
    textDecoration: 'none',
    backgroundColor: CustomStyle.colors.mainPaper,
    color: CustomStyle.colors.mainBlack,
    '&:hover': {
        backgroundColor: CustomStyle.colors.mainRoad,
        // border: `1px solid ${CustomStyle.colors.mainBlack}`
    },

});

interface ProjectPopUpWindowPropsInterface{
    project: Project;
}

const ProjectPopUpWindow = (props: ProjectPopUpWindowPropsInterface) => {

    const {project} = props;

    return (
        <>
            <Title>{project.title}</Title>
            <SkillsContainer>
                <SkillWrapper>
                    {project.tags.map((tag, index)=> 
                        <Skill key={index}>• {tag}</Skill>
                    )}
                </SkillWrapper>
            </SkillsContainer>
            <Typography mt={2} fontWeight={800} fontSize={'20px'}>Key Features:</Typography>
            <KeyFeatures>
                <SanityBlockContent content={project.descriptionRaw}/>
            </KeyFeatures>
            <ButtonGroup>
                {project?.links?.map((link, index) => 
                    <Button key={index} href={link.url} target='new'>{link.title}</Button>
                )}
            </ButtonGroup>
        </>

    )
}

export default ProjectPopUpWindow;