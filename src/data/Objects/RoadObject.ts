import { Dispatch, SetStateAction } from "react";
import { GameInfoStateInterface } from "../../Context/GameInfoContext";
import { mapBoxDesignInterface } from "../mapDesign";
import { DialogStateInterface } from "../../Context/DialogContext";
export type RoadShade = "straight" | "t-junction" | "x-junction" | "turn" | "deadEnd";
export type SkillsCategories = "Languages" | "Frontend" | "Backend" | "Others";

export interface roadBoxDesignInterface extends mapBoxDesignInterface {
    shade: RoadShade;
}

export interface skillsBoxDesignInterface extends roadBoxDesignInterface {
    category: SkillsCategories;
}

// Straight
export const horizontalRoute: roadBoxDesignInterface = {
    backGroundType: "Road",
    facing: "E",
    shade: "straight",
};

export const verticalRoute: roadBoxDesignInterface = {
    backGroundType: "Road",
    facing: "N",
    shade: "straight",
};

// T-Junction
export const N_TJunctionRoute: roadBoxDesignInterface = {
    backGroundType: "Road",
    facing: "N",
    shade: "t-junction",
};

export const E_TJunctionRoute: roadBoxDesignInterface = {
    backGroundType: "Road",
    facing: "E",
    shade: "t-junction",
};

export const S_TJunctionRoute: roadBoxDesignInterface = {
    backGroundType: "Road",
    facing: "S",
    shade: "t-junction",
};

export const W_TJunctionRoute: roadBoxDesignInterface = {
    backGroundType: "Road",
    facing: "W",
    shade: "t-junction",
};

// X-Junction
export const XJunctionRoute: roadBoxDesignInterface = {
    backGroundType: "Road",
    facing: "N",
    shade: "x-junction",
};

// Turn
export const N_TurnRoute: roadBoxDesignInterface = {
    backGroundType: "Road",
    facing: "N",
    shade: "turn",
};

export const E_TurnRoute: roadBoxDesignInterface = {
    backGroundType: "Road",
    facing: "E",
    shade: "turn",
};

export const S_TurnRoute: roadBoxDesignInterface = {
    backGroundType: "Road",
    facing: "S",
    shade: "turn",
};

export const W_TurnRoute: roadBoxDesignInterface = {
    backGroundType: "Road",
    facing: "W",
    shade: "turn",
};

// Dead End
export const N_DeadEndRoute: roadBoxDesignInterface = {
    backGroundType: "Road",
    facing: "N",
    shade: "deadEnd",
};

export const W_DeadEndRoute: roadBoxDesignInterface = {
    backGroundType: "Road",
    facing: "W",
    shade: "deadEnd",
};

export const S_DeadEndRoute: roadBoxDesignInterface = {
    backGroundType: "Road",
    facing: "S",
    shade: "deadEnd",
};

export const E_DeadEndRoute: roadBoxDesignInterface = {
    backGroundType: "Road",
    facing: "E",
    shade: "deadEnd",
};

// Special
export const startingPoint: roadBoxDesignInterface = {
    ...N_DeadEndRoute,
    isStarting: true,
    forceTriggerFunction: (
        dialogState: DialogStateInterface,
        setDialogState: Dispatch<SetStateAction<DialogStateInterface>>,
    ) => {
        setDialogState({ ...dialogState, isOpenDialogWindow: true, dialogWindowType: "starting" });
    },
};

export const introRoute: roadBoxDesignInterface = {
    ...verticalRoute,
    canIntactive: true,
    onTopItemType: "Board",
    interactiveFunction: (
        gameInfoState: GameInfoStateInterface,
        setGameInfoState: Dispatch<SetStateAction<GameInfoStateInterface>>,
    ) => {
        setGameInfoState({ ...gameInfoState, isOpenPopUpWindow: true, popUpWindowType: "intro" });
    },
};

export const resumeRoute: roadBoxDesignInterface = {
    ...E_DeadEndRoute,
    canIntactive: true,
    onTopItemType: "Paper",
    forceTriggerFunction: (
        dialogState: DialogStateInterface,
        setDialogState: Dispatch<SetStateAction<DialogStateInterface>>,
    ) => {
        setDialogState({ ...dialogState, isOpenDialogWindow: true, dialogWindowType: "resume" });
    },
};

export const skillsRoute: roadBoxDesignInterface = {
    ...verticalRoute,
    canIntactive: true,
    onTopItemType: "Board",
    interactiveFunction: (
        gameInfoState: GameInfoStateInterface,
        setGameInfoState: Dispatch<SetStateAction<GameInfoStateInterface>>,
    ) => {
        setGameInfoState({ ...gameInfoState, isOpenPopUpWindow: true, popUpWindowType: "skills" });
    },
};

export const experienceRoute: roadBoxDesignInterface = {
    ...verticalRoute,
    canIntactive: true,
    onTopItemType: "Board",
    interactiveFunction: (
        gameInfoState: GameInfoStateInterface,
        setGameInfoState: Dispatch<SetStateAction<GameInfoStateInterface>>,
    ) => {
        setGameInfoState({ ...gameInfoState, isOpenPopUpWindow: true, popUpWindowType: "experience" });
    },
};

export const educationRoute: roadBoxDesignInterface = {
    ...verticalRoute,
    canIntactive: true,
    onTopItemType: "Board",
    interactiveFunction: (
        gameInfoState: GameInfoStateInterface,
        setGameInfoState: Dispatch<SetStateAction<GameInfoStateInterface>>,
    ) => {
        setGameInfoState({ ...gameInfoState, isOpenPopUpWindow: true, popUpWindowType: "education" });
    },
};

export const projectRoute: roadBoxDesignInterface = {
    ...verticalRoute,
    canIntactive: true,
    onTopItemType: "Board",
    interactiveFunction: (
        gameInfoState: GameInfoStateInterface,
        setGameInfoState: Dispatch<SetStateAction<GameInfoStateInterface>>,
    ) => {
        setGameInfoState({ ...gameInfoState, isOpenPopUpWindow: true, popUpWindowType: "project" });
    },
};

export const SkillsLanguagesRoute: skillsBoxDesignInterface = {
    ...verticalRoute,
    canIntactive: true,
    onTopItemType: "Skills",
    category: "Languages",
    interactiveFunction: (
        gameInfoState: GameInfoStateInterface,
        setGameInfoState: Dispatch<SetStateAction<GameInfoStateInterface>>,
    ) => {
        setGameInfoState({ ...gameInfoState, isOpenPopUpWindow: true, popUpWindowType: "skills_languages" });
    },
};

export const SkillsFrontedRoute: skillsBoxDesignInterface = {
    ...verticalRoute,
    canIntactive: true,
    onTopItemType: "Skills",
    category: "Frontend",
    interactiveFunction: (
        gameInfoState: GameInfoStateInterface,
        setGameInfoState: Dispatch<SetStateAction<GameInfoStateInterface>>,
    ) => {
        setGameInfoState({ ...gameInfoState, isOpenPopUpWindow: true, popUpWindowType: "skills_frontend" });
    },
};

export const SkillsBackendRoute: skillsBoxDesignInterface = {
    ...verticalRoute,
    canIntactive: true,
    onTopItemType: "Skills",
    category: "Backend",
    interactiveFunction: (
        gameInfoState: GameInfoStateInterface,
        setGameInfoState: Dispatch<SetStateAction<GameInfoStateInterface>>,
    ) => {
        setGameInfoState({ ...gameInfoState, isOpenPopUpWindow: true, popUpWindowType: "skills_backend" });
    },
};

export const SkillsOthersRoute: skillsBoxDesignInterface = {
    ...verticalRoute,
    canIntactive: true,
    onTopItemType: "Skills",
    category: "Others",
    interactiveFunction: (
        gameInfoState: GameInfoStateInterface,
        setGameInfoState: Dispatch<SetStateAction<GameInfoStateInterface>>,
    ) => {
        setGameInfoState({ ...gameInfoState, isOpenPopUpWindow: true, popUpWindowType: "skills_others" });
    },
};

export const SchoolEntranceRoute: roadBoxDesignInterface = {
    ...S_TJunctionRoute,
    canIntactive: true,
    onTopItemType: "Interactable",
    interactiveFunction: (
        gameInfoState: GameInfoStateInterface,
        setGameInfoState: Dispatch<SetStateAction<GameInfoStateInterface>>,
    ) => {
        setGameInfoState({ ...gameInfoState, isOpenPopUpWindow: true, popUpWindowType: "school" });
    },
};

export const CompanyYauLeeEntranceRoute: roadBoxDesignInterface = {
    ...verticalRoute,
    canIntactive: true,
    onTopItemType: "Interactable",
    interactiveFunction: (
        gameInfoState: GameInfoStateInterface,
        setGameInfoState: Dispatch<SetStateAction<GameInfoStateInterface>>,
    ) => {
        setGameInfoState({ ...gameInfoState, isOpenPopUpWindow: true, popUpWindowType: "company_yau_lee" });
    },
};

export const CompanyPLTechEntranceRoute: roadBoxDesignInterface = {
    ...verticalRoute,
    canIntactive: true,
    onTopItemType: "Interactable",
    interactiveFunction: (
        gameInfoState: GameInfoStateInterface,
        setGameInfoState: Dispatch<SetStateAction<GameInfoStateInterface>>,
    ) => {
        setGameInfoState({ ...gameInfoState, isOpenPopUpWindow: true, popUpWindowType: "company_pl" });
    },
};

export const CompanyRedCliffEntranceRoute: roadBoxDesignInterface = {
    ...verticalRoute,
    canIntactive: true,
    onTopItemType: "Interactable",
    interactiveFunction: (
        gameInfoState: GameInfoStateInterface,
        setGameInfoState: Dispatch<SetStateAction<GameInfoStateInterface>>,
    ) => {
        setGameInfoState({ ...gameInfoState, isOpenPopUpWindow: true, popUpWindowType: "company_red_cliff" });
    },
};

export const gameHubRoute: roadBoxDesignInterface = {
    ...E_DeadEndRoute,
    canIntactive: true,
    onTopItemType: "GameHub",
    interactiveFunction: (
        gameInfoState: GameInfoStateInterface,
        setGameInfoState: Dispatch<SetStateAction<GameInfoStateInterface>>,
    ) => {
        setGameInfoState({ ...gameInfoState, isOpenPopUpWindow: true, popUpWindowType: "GameHub" });
    },
};

export const bigTwoRoute: roadBoxDesignInterface = {
    ...W_DeadEndRoute,
    canIntactive: true,
    onTopItemType: "BigTwo",
    interactiveFunction: (
        gameInfoState: GameInfoStateInterface,
        setGameInfoState: Dispatch<SetStateAction<GameInfoStateInterface>>,
    ) => {
        setGameInfoState({ ...gameInfoState, isOpenPopUpWindow: true, popUpWindowType: "BigTwo" });
    },
};

export const characterGPTRoute: roadBoxDesignInterface = {
    ...E_DeadEndRoute,
    canIntactive: true,
    onTopItemType: "CharacterGPT",
    interactiveFunction: (
        gameInfoState: GameInfoStateInterface,
        setGameInfoState: Dispatch<SetStateAction<GameInfoStateInterface>>,
    ) => {
        setGameInfoState({ ...gameInfoState, isOpenPopUpWindow: true, popUpWindowType: "CharacterGPT" });
    },
};

export const sudokuRoute: roadBoxDesignInterface = {
    ...W_DeadEndRoute,
    canIntactive: true,
    onTopItemType: "Sudoku",
    interactiveFunction: (
        gameInfoState: GameInfoStateInterface,
        setGameInfoState: Dispatch<SetStateAction<GameInfoStateInterface>>,
    ) => {
        setGameInfoState({ ...gameInfoState, isOpenPopUpWindow: true, popUpWindowType: "Sudoku" });
    },
};

export const finalYearProjectRoute: roadBoxDesignInterface = {
    ...E_DeadEndRoute,
    canIntactive: true,
    onTopItemType: "FinalYearProject",
    interactiveFunction: (
        gameInfoState: GameInfoStateInterface,
        setGameInfoState: Dispatch<SetStateAction<GameInfoStateInterface>>,
    ) => {
        setGameInfoState({ ...gameInfoState, isOpenPopUpWindow: true, popUpWindowType: "FinalYearProject" });
    },
};

export const arduinoCarRoute: roadBoxDesignInterface = {
    ...W_DeadEndRoute,
    canIntactive: true,
    onTopItemType: "ArduinoCar",
    interactiveFunction: (
        gameInfoState: GameInfoStateInterface,
        setGameInfoState: Dispatch<SetStateAction<GameInfoStateInterface>>,
    ) => {
        setGameInfoState({ ...gameInfoState, isOpenPopUpWindow: true, popUpWindowType: "ArduinoCar" });
    },
};

export const thisGameRoute: roadBoxDesignInterface = {
    ...E_DeadEndRoute,
    canIntactive: true,
    onTopItemType: "ThisGame",
    interactiveFunction: (
        gameInfoState: GameInfoStateInterface,
        setGameInfoState: Dispatch<SetStateAction<GameInfoStateInterface>>,
    ) => {
        setGameInfoState({ ...gameInfoState, isOpenPopUpWindow: true, popUpWindowType: "ThisGame" });
    },
};

export const finishLineRoute: roadBoxDesignInterface = {
    ...S_DeadEndRoute,
    canIntactive: false,
    onTopItemType: "FinishLine",
    forceTriggerFunction: (
        dialogState: DialogStateInterface,
        setDialogState: Dispatch<SetStateAction<DialogStateInterface>>,
    ) => {
        setDialogState({ ...dialogState, isOpenDialogWindow: true, dialogWindowType: "ending" });
    },
};
