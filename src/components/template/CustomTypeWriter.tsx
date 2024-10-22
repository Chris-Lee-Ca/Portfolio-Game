import Button from "@mui/material/Button";
import { styled } from "@mui/system";
import CustomStyle from "../../Theme/CustomStyle";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";

const Text = styled(Typography)({
    fontWeight: "bold",
    textDecoration: "underline ",
    maxWidth: "250px",
});

interface customTypeWriterProps {
    content: string;
}

const CustomTypeWriter = ({ content }: customTypeWriterProps) => {
    const [text, setText] = useState<string>("");
    const [fullText, setFullText] = useState<string>(content);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const typingEffect = setInterval(() => {
            if (currentIndex < fullText.length) {
                setText((prevText) => prevText + fullText[currentIndex]);
                setCurrentIndex(currentIndex + 1);
            } else {
                clearInterval(typingEffect); // Stop the typewriter effect when the text is fully typed
            }
        }, 50);

        return () => {
            clearInterval(typingEffect); // Clean up the interval when the component unmounts
        };
    }, [currentIndex, fullText]);

    return <Text>{text}</Text>;
};

export { CustomTypeWriter };
