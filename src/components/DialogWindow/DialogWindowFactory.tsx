import { DialogWindowType } from "../../data/dialogWindow";
import DialogWindow from "./DialogWindow";
import EndingDialogWindow from "./EndingDialogWindow";
import ResumeDialogWindow from "./ResumeDialogWindow";
import StartingDialogWindow from "./StartingDialogWindow";

interface DialogWindowFactoryProps {
    windowType: DialogWindowType;
}

const DialogWindowFactory = (props: DialogWindowFactoryProps) => {
    const { windowType } = props;
    switch (windowType) {
        case "starting":
            return (
                <DialogWindow imageSrc={require("../../assets/game_images/Player.png")}>
                    <StartingDialogWindow />
                </DialogWindow>
            );
        case "resume":
            return (
                <DialogWindow imageSrc={require("../../assets/game_images/Player.png")}>
                    <ResumeDialogWindow />
                </DialogWindow>
            );
        case "ending":
            return (
                <DialogWindow imageSrc={require("../../assets/game_images/Player.png")}>
                    <EndingDialogWindow />
                </DialogWindow>
            );
        default:
            console.debug("Unhandle Dialog window Type");
            return <DialogWindow imageSrc={require("../../assets/game_images/Player.png")} />;
    }
};

export default DialogWindowFactory;
