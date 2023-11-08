import { ReactElement } from "react"
import { PlayerContextProvider } from "./PlayerContext"
import { GameInfoContextProvider } from "./GameInfoContext"
import { DialogContextProvider } from "./DialogContext"

export const AppContextProvider = ({children}: any) => {
    return (
        <>
            <PlayerContextProvider>
                <GameInfoContextProvider>
                    <DialogContextProvider>
                        {children}
                    </DialogContextProvider>
                </GameInfoContextProvider>
            </PlayerContextProvider>
        </>
    )
}
