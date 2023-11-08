import { Dispatch, SetStateAction, createContext, useContext, useState } from "react"
import { DialogWindowType } from "../data/dialogWindow";

export interface DialogStateInterface{
    isOpenDialogWindow: boolean,
    dialogWindowType: DialogWindowType
}

interface DialogStateContextInterface {
    dialogState: DialogStateInterface;
    setDialogState: Dispatch<SetStateAction<DialogStateInterface>>;
}

const initialState : DialogStateInterface = {
    isOpenDialogWindow: false,
    dialogWindowType: 'starting'
}

const DialogContext = createContext<DialogStateContextInterface>({
    dialogState: initialState,
    setDialogState: ()=>{}
});

export const useDialogState = () => {
    return useContext(DialogContext);
}


export const DialogContextProvider = ({children}: any) => {

    const [dialogState, setDialogState] = useState<DialogStateInterface>(initialState);

    return (
        <>
            <DialogContext.Provider value={{dialogState, setDialogState}}>
                {children}
            </DialogContext.Provider>
        </>
    )
}


