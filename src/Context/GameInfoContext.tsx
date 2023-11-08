import { Dispatch, ReactElement, SetStateAction, createContext, useContext, useState } from "react"
import { commandType } from "../utils/playerControl";
import { PopUpWindowType } from "../data/popUpWindow";
import { DialogWindowType } from "../data/dialogWindow";

export interface GameInfoStateInterface{
    allowedMovingDirestion: commandType[],
    isOpenPopUpWindow: boolean,
    popUpWindowType: PopUpWindowType,
}

interface GameInfoStateContextInterface {
    gameInfoState: GameInfoStateInterface;
    setGameInfoState: Dispatch<SetStateAction<GameInfoStateInterface>>;
}

const initialState : GameInfoStateInterface = {
    allowedMovingDirestion: [],
    isOpenPopUpWindow: false,
    popUpWindowType: 'intro',
}

const GameInfoContext = createContext<GameInfoStateContextInterface>({
    gameInfoState: initialState,
    setGameInfoState: ()=>{}
});

export const useGameInfoState = () => {
    return useContext(GameInfoContext);
}


export const GameInfoContextProvider = ({children}: any) => {

    const [gameInfoState, setGameInfoState] = useState<GameInfoStateInterface>(initialState);

    return (
        <>
            <GameInfoContext.Provider value={{gameInfoState, setGameInfoState}}>
                {children}
            </GameInfoContext.Provider>
        </>
    )
}


