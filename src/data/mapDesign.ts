import { CompanyPLTechEntranceRoute, CompanyRedCliffEntranceRoute, CompanyYauLeeEntranceRoute, E_DeadEndRoute, E_TJunctionRoute, E_TurnRoute, N_DeadEndRoute, N_TJunctionRoute, N_TurnRoute, S_TJunctionRoute, S_TurnRoute, SchoolEntranceRoute, SkillsBackendRoute, SkillsFrontedRoute, SkillsLanguagesRoute, SkillsOthersRoute, W_TJunctionRoute, W_TurnRoute, XJunctionRoute, arduinoCarRoute, bigTwoRoute, characterGPTRoute, educationRoute, experienceRoute, finalYearProjectRoute, finishLineRoute, gameHubRoute, horizontalRoute, introRoute, projectRoute, resumeRoute, skillsRoute, startingPoint, sudokuRoute, thisGameRoute, verticalRoute } from "./Objects/RoadObject";
import { E_CornerBrickWall, N_CornerBrickWall, N_StraightBrickWall, W_CornerBrickWall } from "./Objects/WallObject";

export type MapType = 'Road' | 'Wall' | 'Empty';
export type OnTopItemType = 'Board' | 'Paper' | 'Skills' | 'School' | 'Company' 
| 'GameHub' | 'BigTwo' | 'CharacterGPT' | 'Sudoku' | 'FinalYearProject' | 'ArduinoCar' | 'ThisGame'
| 'Balloon' | 'FinishLine' | 'Interactable';

export type Facing = 'N' | 'E' | 'S' | 'W';

export interface mapBoxDesignInterface{
    backGroundType: MapType
    facing: Facing,
    isStarting ?: boolean,
    canIntactive ?: boolean,
    onTopItemType?: OnTopItemType,
    interactiveFunction?: any,
    forceTriggerFunction?: any
}

export const emptyBox: mapBoxDesignInterface = {
    backGroundType: 'Empty',
    facing: 'E',
}

export const schoolBox: mapBoxDesignInterface = {
    ...emptyBox,
    onTopItemType: 'School'
}

export const companyBox: mapBoxDesignInterface = {
    ...emptyBox,
    onTopItemType: 'Company'
}

export const balloonBox: mapBoxDesignInterface = {
    ...emptyBox,
    onTopItemType: 'Balloon'
}

const mapDesign : mapBoxDesignInterface[][] = [
    //Finish
    [balloonBox, emptyBox, finishLineRoute, balloonBox, emptyBox],
    [emptyBox, balloonBox, verticalRoute, emptyBox, balloonBox],
    [emptyBox, emptyBox, verticalRoute, emptyBox, emptyBox],
    [emptyBox, emptyBox, verticalRoute, emptyBox, emptyBox],
    //Project
    [thisGameRoute, horizontalRoute, W_TJunctionRoute, emptyBox, emptyBox],
    [emptyBox, emptyBox, E_TJunctionRoute, horizontalRoute, arduinoCarRoute],
    [finalYearProjectRoute, horizontalRoute, W_TJunctionRoute, emptyBox, emptyBox],
    [emptyBox, emptyBox, E_TJunctionRoute, horizontalRoute, sudokuRoute],
    [characterGPTRoute, horizontalRoute, W_TJunctionRoute, emptyBox, emptyBox],
    [emptyBox, emptyBox, E_TJunctionRoute, horizontalRoute, bigTwoRoute],
    [gameHubRoute, horizontalRoute, W_TJunctionRoute, emptyBox, emptyBox],
    [emptyBox, emptyBox, verticalRoute, emptyBox, emptyBox],
    [emptyBox, emptyBox, projectRoute, emptyBox, emptyBox],
    // Experience
    [emptyBox, emptyBox, verticalRoute, emptyBox, emptyBox],
    [emptyBox, companyBox, CompanyRedCliffEntranceRoute, emptyBox, emptyBox],
    [emptyBox, emptyBox, verticalRoute, emptyBox, emptyBox],
    [emptyBox, emptyBox, CompanyPLTechEntranceRoute, companyBox, emptyBox],
    [emptyBox, emptyBox, verticalRoute, emptyBox, emptyBox],
    [emptyBox, companyBox, CompanyYauLeeEntranceRoute, emptyBox, emptyBox],
    [emptyBox, emptyBox, verticalRoute, emptyBox, emptyBox],
    [emptyBox, emptyBox, experienceRoute, emptyBox, emptyBox],
    // Education
    [emptyBox, S_TurnRoute, N_TJunctionRoute, W_TurnRoute, emptyBox],
    [emptyBox, verticalRoute, schoolBox, verticalRoute, emptyBox],
    [emptyBox, E_TurnRoute, SchoolEntranceRoute, N_TurnRoute, emptyBox],
    [emptyBox, emptyBox, verticalRoute, emptyBox, emptyBox],
    [emptyBox, emptyBox, educationRoute, emptyBox, emptyBox],
    // 
    [emptyBox, emptyBox, verticalRoute, emptyBox, emptyBox],
    [emptyBox, emptyBox, verticalRoute, emptyBox, emptyBox],
    // Skills
    [S_TurnRoute, S_TJunctionRoute, N_TJunctionRoute, S_TJunctionRoute, W_TurnRoute],
    [verticalRoute, verticalRoute, emptyBox, verticalRoute, verticalRoute],
    [SkillsLanguagesRoute, SkillsFrontedRoute, emptyBox, SkillsBackendRoute, SkillsOthersRoute],
    [verticalRoute, verticalRoute, emptyBox, verticalRoute, verticalRoute],
    [E_TurnRoute, N_TJunctionRoute, S_TJunctionRoute, N_TJunctionRoute, N_TurnRoute],
    [emptyBox, emptyBox, skillsRoute, emptyBox, emptyBox],
    // 
    [emptyBox, emptyBox, verticalRoute, emptyBox, emptyBox],
    [emptyBox, emptyBox, verticalRoute, emptyBox, emptyBox],
    // Resume
    [emptyBox, resumeRoute, W_TJunctionRoute, emptyBox, emptyBox],
    [emptyBox, emptyBox, verticalRoute, emptyBox,emptyBox],
    // circle
    [emptyBox, S_TurnRoute, N_TJunctionRoute, W_TurnRoute, emptyBox],
    [emptyBox, verticalRoute, emptyBox, verticalRoute, emptyBox],
    [emptyBox, E_TurnRoute, S_TJunctionRoute, N_TurnRoute, emptyBox],
    // Intro
    [emptyBox, emptyBox, introRoute, emptyBox, emptyBox],
    [emptyBox, emptyBox, verticalRoute, emptyBox, emptyBox],
    [emptyBox, emptyBox, verticalRoute, emptyBox, emptyBox],
    [emptyBox, emptyBox, startingPoint, emptyBox, emptyBox],
    [emptyBox, emptyBox, emptyBox, emptyBox, emptyBox],
];

export default mapDesign;