import { ExperienceInterface, ProjectsInterface, education, experiences, projects } from "../../data/constants";
import { PopUpWindowType } from "../../data/popUpWindow";
import CompanyPopUpWindow from "./CompanyPopUpWindow";
import IntroPopUpWindow from "./IntroPopUpWindow";
import PopUpWindow from "./PopUpWindow";
import ProjectPopUpWindow from "./ProjectsPopUpWindow";
import RouteEntrancePopUpWindow from "./RouteEntrancePopUpWindow";
import SchoolPopUpWindow from "./SchoolPopUpWindow";
import SkillsPopUpWindow from "./SkillsPopUpWindow";


interface PopUpWindowFactoryProps{
    windowType: PopUpWindowType
}

const widowTypeMapping : any = {
    "company_yau_lee" : "Yau Lee Holdings Limited",
    "company_pl" : "P L Technology Limited",
    "company_red_cliff" : "Red Cliff Asset Management (AUM ~ US$ 1billion)"
}

const PopUpWindowFactory = (props: PopUpWindowFactoryProps)=> {

    const {windowType} = props;

    if (windowType === 'intro'){
        return (
            <PopUpWindow imageSrc={require('../../assets/game_images/board.png')}>
                <IntroPopUpWindow/>
            </PopUpWindow>);

    }else if (["skills", "experience", "education", "project"].includes(windowType)){
        return (
            <PopUpWindow imageSrc={require('../../assets/game_images/board.png')}>
                <RouteEntrancePopUpWindow windowType = {windowType}/>
            </PopUpWindow>);
    }else if (["skills_languages", "skills_frontend", "skills_backend", "skills_others"].includes(windowType)){
        return (
            <PopUpWindow imageSrc={require('../../assets/game_images/board2.png')}>
                <SkillsPopUpWindow windowType = {windowType}/>
            </PopUpWindow>);
    }else if (windowType === 'school'){
        return (
            <PopUpWindow imageSrc={education[0].img}>
                <SchoolPopUpWindow/>
            </PopUpWindow>);
    }else if (["company_yau_lee", "company_pl", "company_red_cliff"].includes(windowType)){
        const experience = experiences.find((experience) => experience.company === widowTypeMapping[windowType]);
        return (
            <PopUpWindow imageSrc={experience?.img}>
                <CompanyPopUpWindow experience={experience as ExperienceInterface}/>
            </PopUpWindow>);
    }else if (['GameHub', 'BigTwo', 'CharacterGPT', 'Sudoku', 'FinalYearProject', 'ArduinoCar', 'ThisGame'].includes(windowType)){
        const project = projects.find((project) => project.nickname === windowType);
        return (
            <PopUpWindow imageSrc={project?.image}>
                <ProjectPopUpWindow project={project as ProjectsInterface}/>
            </PopUpWindow>);
    }else{
        console.debug('Unhandle Pop Up window type');
        return <PopUpWindow imageSrc={require('../../assets/game_images/board.png')}/>;
    }
};

export default PopUpWindowFactory;
