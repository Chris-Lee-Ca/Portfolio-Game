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
    display: 'flex',
    flexDirection: 'column',
})

const RowContainer = styled(Box)({
    display: 'flex',
    height: '100%',
    width: '100%',
    // backgroundColor: 'red',
    // border: '1px solid blue',
    boxSizing: 'border-box'
})


const Road = styled(Box)({
    backgroundColor: CustomStyle.colors.mainRoad,
    width: 'calc(100%/3)',
    height: '100%',
    boxSizing: 'border-box'
})

const Barrier = styled(Box)({
    backgroundColor: CustomStyle.colors.mainRoadBackground,
    width: 'calc(100%/3)',
    height: '100%'
})


interface TurnRoadBoxPropsInterface{
    location: [number, number],
    facing: Facing,
}

const TurnRoadBox = (props: TurnRoadBoxPropsInterface) => {

    const {location, facing} = props;
    const playerState = usePlayerState().playerState;
    const {playerPosition} = playerState;
    const gameInfoState = useGameInfoState().gameInfoState;
    const setGameInfoState = useGameInfoState().setGameInfoState;

    useEffect(()=>{
        if (arrayEquals(playerPosition, location)){
            if (['N'].includes(facing)){
                setGameInfoState({...gameInfoState, allowedMovingDirestion: ['up', 'left']});
            }else if (['E'].includes(facing)){
                setGameInfoState({...gameInfoState, allowedMovingDirestion: ['up', 'right']});
            }else if (['S'].includes(facing)){
                setGameInfoState({...gameInfoState, allowedMovingDirestion: ['right', 'down']});
            }else{
                setGameInfoState({...gameInfoState, allowedMovingDirestion: ['down', 'left']});
            }
        }
    }, [playerPosition]);

    return (
        <>
            <Container sx={{transform : getTransformDegreee(facing)}}>
                <RowContainer>
                    <Barrier/>
                    <Road sx={{borderLeft: CustomStyle.border.mapBorder, borderRight: CustomStyle.border.mapBorder}}/>
                    <Barrier/>
                </RowContainer>
                <RowContainer >
                    <Road sx={{borderTop: CustomStyle.border.mapBorder, borderBottom: CustomStyle.border.mapBorder}}/>
                    <Road sx={{borderBottom: CustomStyle.border.mapBorder, borderRight: CustomStyle.border.mapBorder}}/>
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

export default TurnRoadBox;