import { Dispatch, SetStateAction } from "react";
import mapDesign, { mapBoxDesignInterface } from "../data/mapDesign";
import { PlayerStateInterface } from "../Context/PlayerContext";
import { GameInfoStateInterface } from "../Context/GameInfoContext";
import { DialogStateInterface } from "../Context/DialogContext";

export type commandType = 'up' | 'down' | 'left' | 'right';
export type htmlCommandType = 'ArrowUp' | 'ArrowDown' | 'ArrowLeft' | 'ArrowRight'

const commandMapping = {
    'ArrowUp' : 'up',
    'ArrowDown' : 'down',
    'ArrowLeft' : 'left',
    'ArrowRight' : 'right'
}

export const handleAllowedMovingDirestion = (playerState: PlayerStateInterface, setPlayerState: Dispatch<SetStateAction<PlayerStateInterface>>, allowdedCommand: commandType[], htmlCommand : htmlCommandType) => {
    const command = commandMapping[htmlCommand] as commandType;
    if (allowdedCommand.includes(command))
        return handleOnClickArrowButton(playerState, setPlayerState, command);
}

export const handleOnClickArrowButton = (playerState: PlayerStateInterface, setPlayerState: Dispatch<SetStateAction<PlayerStateInterface>>, command : commandType) => {
    const row = playerState.playerPosition[0];
    const col = playerState.playerPosition[1];
    let newPalyerPosition = [0, 0] as [number, number];

    switch (command){
        case "up":
            newPalyerPosition = [Math.min(row - 1, mapDesign.length-1), col];
            break;
        case "down":
            newPalyerPosition = [Math.max(row + 1, 0), col];
            break;
        case "left":
            newPalyerPosition = [row, Math.max(col -1, 0)];
            break;
        case "right":
            newPalyerPosition = [row, Math.min(col +1, mapDesign[0].length-1)];
            break;
    }
    setPlayerState({...playerState, playerPosition: newPalyerPosition});
}

export const triggerInteractionEvent = (playerPosition: [number, number], mapDesign: mapBoxDesignInterface[][],
    gameInfoState: GameInfoStateInterface, setGameInfoState: Dispatch<SetStateAction<GameInfoStateInterface>>) => {
    const row = playerPosition[0];
    const col = playerPosition[1];
    
    const currentMapBox = mapDesign[row][col];

    if (! currentMapBox.canIntactive)
        return;
    if (! currentMapBox.interactiveFunction){
        console.warn('Forget to insert corresponding interactive function for this mapBox');
        return;
    }
    currentMapBox.interactiveFunction(gameInfoState, setGameInfoState);
}

export const triggerForceTriggerEvent = (playerPosition: [number, number], mapDesign: mapBoxDesignInterface[][],
    dialogState: DialogStateInterface, setDialogState: Dispatch<SetStateAction<DialogStateInterface>>) => {
    const row = playerPosition[0];
    const col = playerPosition[1];
    const currentMapBox = mapDesign[row][col];

    if (! currentMapBox.forceTriggerFunction)
        return;
    currentMapBox.forceTriggerFunction(dialogState, setDialogState);
}