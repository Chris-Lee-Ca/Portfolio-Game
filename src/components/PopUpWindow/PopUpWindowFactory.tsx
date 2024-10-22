import { Education, Experience, Project, useGameStaticDataState } from "../../Context/GameStaticDataContext";
import { PopUpWindowType } from "../../data/popUpWindow";
import CompanyPopUpWindow from "./CompanyPopUpWindow";
import IntroPopUpWindow from "./IntroPopUpWindow";
import PopUpWindow from "./PopUpWindow";
import ProjectPopUpWindow from "./ProjectsPopUpWindow";
import RouteEntrancePopUpWindow from "./RouteEntrancePopUpWindow";
import SchoolPopUpWindow from "./SchoolPopUpWindow";
import SkillsPopUpWindow from "./SkillsPopUpWindow";

interface PopUpWindowFactoryProps {
    windowType: PopUpWindowType;
}

const widowTypeMapping: any = {
    company_yau_lee: "Yau Lee Holdings Limited",
    company_pl: "P L Technology Limited",
    company_red_cliff: "Red Cliff Asset Management (AUM ~ US$ 1billion)",
};

const PopUpWindowFactory = (props: PopUpWindowFactoryProps) => {
    const { windowType } = props;
    const gameStaticData = useGameStaticDataState().data;

    if (windowType === "intro") {
        return (
            <PopUpWindow imageSrc={require("../../assets/game_images/board.png")}>
                <IntroPopUpWindow />
            </PopUpWindow>
        );
    } else if (["skills", "experience", "education", "project"].includes(windowType)) {
        return (
            <PopUpWindow imageSrc={require("../../assets/game_images/board.png")}>
                <RouteEntrancePopUpWindow windowType={windowType} />
            </PopUpWindow>
        );
    } else if (["skills_languages", "skills_frontend", "skills_backend", "skills_others"].includes(windowType)) {
        return (
            <PopUpWindow imageSrc={require("../../assets/game_images/board2.png")}>
                <SkillsPopUpWindow windowType={windowType} />
            </PopUpWindow>
        );
    } else if (windowType === "school") {
        const educations = gameStaticData?.allEducation ?? [];
        const hku = educations[0];
        return (
            <PopUpWindow imageSrc={hku.image.asset.url}>
                <SchoolPopUpWindow education={hku as Education} />
            </PopUpWindow>
        );
    } else if (["company_yau_lee", "company_pl", "company_red_cliff"].includes(windowType)) {
        const experiences = gameStaticData?.allExperience ?? [];
        const experience = experiences.find((experience) => experience.company === widowTypeMapping[windowType]);
        return (
            <PopUpWindow imageSrc={experience?.image.asset.url}>
                <CompanyPopUpWindow experience={experience as Experience} />
            </PopUpWindow>
        );
    } else if (
        ["GameHub", "BigTwo", "CharacterGPT", "Sudoku", "FinalYearProject", "ArduinoCar", "ThisGame"].includes(
            windowType,
        )
    ) {
        const projects = gameStaticData?.allProject ?? [];
        const project = projects.find((project) => project.nickname === windowType);
        return (
            <PopUpWindow imageSrc={project?.image.asset.url}>
                <ProjectPopUpWindow project={project as Project} />
            </PopUpWindow>
        );
    } else {
        console.debug("Unhandle Pop Up window type");
        return <PopUpWindow imageSrc={require("../../assets/game_images/board.png")} />;
    }
};

export default PopUpWindowFactory;
