import { Dispatch, ReactElement, SetStateAction, createContext, useContext, useState } from "react"
import { getInitialPlayerPostion } from "../utils/viewPort";
import mapDesign from "../data/mapDesign";

export interface PlayerStateInterface{
    playerPosition: [number, number]
}

interface PlayerStateContextInterface {
    playerState: PlayerStateInterface;
    setPlayerState: Dispatch<SetStateAction<PlayerStateInterface>>;
}

const initialState : PlayerStateInterface = {
    playerPosition: getInitialPlayerPostion(mapDesign)
}

const PlayerContext = createContext<PlayerStateContextInterface>({
    playerState: initialState,
    setPlayerState: ()=>{}
});

export const usePlayerState = () => {
    return useContext(PlayerContext);
}


export const PlayerContextProvider = ({children}: any) => {

    const [playerState, setPlayerState] = useState<PlayerStateInterface>(initialState);

    return (
        <>
            <PlayerContext.Provider value={{playerState, setPlayerState}}>
                {children}
            </PlayerContext.Provider>
        </>
    )
}


