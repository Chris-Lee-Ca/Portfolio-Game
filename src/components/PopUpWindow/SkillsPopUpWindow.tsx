import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

import CustomStyle from "../../Theme/CustomStyle";
import { PopUpWindowType } from "../../data/popUpWindow";
import { skills } from "../../data/constants";


const Title = styled(Box)({
    fontWeight: 'bolder',
    fontSize: '30px',
    marginBottom: '20px',
    textTransform: 'capitalize'
})

const SkillSetContainer = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    width: '100%',
})

const SkillSet = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5px',
    margin: '5px',
    borderRadius: '10px',
    border: `2px solid ${CustomStyle.colors.mainBlack}`,
    backgroundColor: CustomStyle.colors.mainPaper

})

const Img = styled('img')({
    width: '30px',
    height: '30px',
    objectFit: 'contain'
})

const SkillName = styled(Typography)({
    marginLeft: '5px',
    fontWeight: 'bold'
})


interface SkillsPopUpWindowPropsInterface{
    windowType: PopUpWindowType
}

const SkillsPopUpWindow = (props: SkillsPopUpWindowPropsInterface) => {

    const {windowType} = props;
    const field = windowType.split('_')[1];
    const skill = skills.find((skill)=> skill.title.toLowerCase() === field);

    return (
        <>
            <Title>{field}</Title>
            <SkillSetContainer>
                {skill?.skills.map((skill, idnex) => 
                    <SkillSet>
                        <Img src={skill.image}/>
                        <SkillName>{skill.name}</SkillName>
                    </SkillSet>
                )}
            </SkillSetContainer>
        </>

    )
}

export default SkillsPopUpWindow;