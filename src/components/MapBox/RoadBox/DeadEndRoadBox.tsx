import styled from "@emotion/styled";
import { Box } from "@mui/material";
import CustomStyle from "../../../Theme/CustomStyle";
import { useEffect } from "react";
import { Facing } from "../../../data/mapDesign";
import { usePlayerState } from "../../../Context/PlayerContext";
import { arrayEquals, getTransformDegreee } from "../../../utils/general";
import { useGameInfoState } from "../../../Context/GameInfoContext";
import StyleConfig from "../../../Theme/StyleConfig";

const Container = styled(Box)({
    position: 'absolute',
    width: `${StyleConfig.mapBoxWidth}px`,
    height: `${StyleConfig.mapBoxHeight}px`,
})

const RowContainer = styled(Box)({
    display: 'flex',
    height: '33.3%',
    width: '100%'
})


const Road = styled(Box)({
    backgroundColor: CustomStyle.colors.mainRoad,
    width: 'calc(100%/3)',
    height: '100%',
    borderLeft: CustomStyle.border.mapBorder,
    borderRight: CustomStyle.border.mapBorder,
    boxSizing: 'border-box'
})

const Barrier = styled(Box)({
    backgroundColor: CustomStyle.colors.mainRoadBackground,
    width: 'calc(100%/3)',
    height: '100%'
})


interface DeadEndRoadBoxPropsInterface{
    location: [number, number],
    facing: Facing,
}

const DeadEndRoadBox = (props: DeadEndRoadBoxPropsInterface) => {

    const {location, facing} = props;
    const playerState = usePlayerState().playerState;
    const {playerPosition} = playerState;
    const gameInfoState = useGameInfoState().gameInfoState;
    const setGameInfoState = useGameInfoState().setGameInfoState;

    useEffect(()=>{
        if (arrayEquals(playerPosition, location)){
            if (['N'].includes(facing)){
                setGameInfoState({...gameInfoState, allowedMovingDirestion: ['up']});
            }else if (['E'].includes(facing)){
                setGameInfoState({...gameInfoState, allowedMovingDirestion: ['right']});
            }else if (['S'].includes(facing)){
                setGameInfoState({...gameInfoState, allowedMovingDirestion: ['down']});
            }else{
                setGameInfoState({...gameInfoState, allowedMovingDirestion: ['left']});
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
                    <Barrier/>
                    <Road sx={{borderBottom: CustomStyle.border.mapBorder}}/>
                    <Barrier/>
                </RowContainer>
                <RowContainer >
                    <Barrier/>
                    <Barrier/>
                    <Barrier/>
                </RowContainer>
            </Container>
        </>

    )
}

export default DeadEndRoadBox;