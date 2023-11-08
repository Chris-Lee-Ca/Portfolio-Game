import styled from "@emotion/styled";
import { Box } from "@mui/material";
import CustomStyle from "../../../Theme/CustomStyle";
import { useEffect } from "react";
import { Facing } from "../../../data/mapDesign";
import { usePlayerState } from "../../../Context/PlayerContext";
import { arrayEquals, getTransformDegreee } from "../../../utils/general";
import { useGameInfoState } from "../../../Context/GameInfoContext";

const Container = styled(Box)({
    position: 'absolute',
    height: '100%',
    width: '100%'
})

const RowContainer = styled(Box)({
    display: 'flex',
    height: '33.3%',
    width: '100%'
})


const Road = styled(Box)({
    backgroundColor: CustomStyle.colors.mainRoad,
    width: '100%',
    height: '100%'
})

const Barrier = styled(Box)({
    backgroundColor: CustomStyle.colors.mainRoadBackground,
    width: '100%',
    height: '100%'
})


interface TjunctionRoadBoxPropsInterface{
    location: [number, number],
    facing: Facing,
}

const TjunctionRoadBox = (props: TjunctionRoadBoxPropsInterface) => {

    const {location, facing} = props;
    const playerState = usePlayerState().playerState;
    const {playerPosition} = playerState;
    const gameInfoState = useGameInfoState().gameInfoState;
    const setGameInfoState = useGameInfoState().setGameInfoState;

    useEffect(()=>{
        if (arrayEquals(playerPosition, location)){
            if (['N'].includes(facing)){
                setGameInfoState({...gameInfoState, allowedMovingDirestion: ['up', 'left', 'right']});
            }else if (['E'].includes(facing)){
                setGameInfoState({...gameInfoState, allowedMovingDirestion: ['up', 'right', 'down']});
            }else if (['S'].includes(facing)){
                setGameInfoState({...gameInfoState, allowedMovingDirestion: ['left', 'down', 'right']});
            }else{
                setGameInfoState({...gameInfoState, allowedMovingDirestion: ['up', 'left', 'down']});
            }
        }
    }, [playerPosition]);

    return (
        <>
            <Container sx={{transform : getTransformDegreee(facing)}}>
                <RowContainer >
                    <Barrier/>
                    <Road/>
                    <Barrier/>
                </RowContainer>
                <RowContainer >
                    <Road/>
                </RowContainer>
                <RowContainer>
                    <Barrier/>
                </RowContainer>
            </Container>
        </>

    )
}

export default TjunctionRoadBox;