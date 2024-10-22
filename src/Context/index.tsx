import { PlayerContextProvider } from "./PlayerContext";
import { GameInfoContextProvider } from "./GameInfoContext";
import { DialogContextProvider } from "./DialogContext";
import { GameStaticDataContextProvider } from "./GameStaticDataContext";

export const AppContextProvider = ({ children }: any) => {
    return (
        <>
            <PlayerContextProvider>
                <GameInfoContextProvider>
                    <DialogContextProvider>
                        <GameStaticDataContextProvider>{children}</GameStaticDataContextProvider>
                    </DialogContextProvider>
                </GameInfoContextProvider>
            </PlayerContextProvider>
        </>
    );
};
