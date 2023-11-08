import { mapBoxDesignInterface } from "../data/mapDesign";

export interface GetViewPortInterface{
    windowWidth: number,
    windowHeight: number,
    currentPosition: [number, number], 
    mapBoxWidth: number,
    mapBoxHeight: number
    mapDesign: mapBoxDesignInterface[][]
}

export interface RenderRangeInterface{
    renderRow: [number, number],
    renderCol: [number, number]
}

export interface GetGameMapSizeInterface{
    windowWidth: number,
    windowHeight: number,
    mapBoxWidth: number,
    mapBoxHeight: number   
}

export interface GetGameMapContainerOffsetInterface{
    currentPosition: [number, number], 
    gameMapWidth: number,
    gameMapHeight: number,
    mapBoxWidth: number,
    mapBoxHeight: number,
    viewPort: RenderRangeInterface
}

export const getViewPort = ({windowWidth, windowHeight, currentPosition, mapBoxWidth, mapBoxHeight, mapDesign}: GetViewPortInterface) : RenderRangeInterface=> {
    const row = currentPosition[0];
    const col = currentPosition[1];

    const totalRowBoxes = Math.floor(windowHeight/ mapBoxHeight);
    const totalColBoxes = Math.floor(windowWidth / mapBoxWidth);

    const renderTopRow = Math.max(row - Math.ceil(totalRowBoxes/2), 0);
    const renderBottomRow = Math.min(row + Math.ceil(totalRowBoxes/2), mapDesign.length-1);

    const renderLeftCol = Math.max(col - Math.ceil(totalColBoxes/2), 0);
    const renderRightCol = Math.min(col + Math.ceil(totalColBoxes/2), mapDesign[0].length-1);

    const renderRow = [renderTopRow, renderBottomRow] as [number, number];
    const renderCol = [renderLeftCol, renderRightCol] as [number, number];
    
    return {
        renderRow : renderRow,
        renderCol : renderCol
    }
}
// Get How many game box can fit in the screen
const getCanFitGameBox = ({windowWidth, windowHeight, mapBoxWidth, mapBoxHeight}: GetGameMapSizeInterface) => {
    const canFitBoxWidth = Math.floor(windowWidth / mapBoxWidth);
    const canFitBoxHeight = Math.floor(windowHeight/ mapBoxHeight);
    return {canFitBoxWidth, canFitBoxHeight};
}

//Get the size of the game map so that the width and height of the game area are multiples of the length of the corresponding box length
export const getGameMapSize = ({windowWidth, windowHeight,mapBoxWidth, mapBoxHeight}: GetGameMapSizeInterface) =>{
    const {canFitBoxWidth, canFitBoxHeight} = getCanFitGameBox({windowWidth, windowHeight, mapBoxWidth, mapBoxHeight});

    const width = mapBoxWidth * (canFitBoxWidth % 2 === 1 ? canFitBoxWidth : canFitBoxWidth - 1);
    const height = mapBoxHeight * (canFitBoxHeight % 2 === 1 ? canFitBoxHeight : canFitBoxHeight - 1);
    return {gameMapWidth: width, gameMapHeight: height};

}

// Get the game map offset if there is no enough gamebox to fit the screen
export const getGameMapContainerOffset = ({currentPosition, gameMapWidth, gameMapHeight, mapBoxWidth, mapBoxHeight, viewPort}: GetGameMapContainerOffsetInterface) => {
    const {canFitBoxWidth, canFitBoxHeight} = getCanFitGameBox({windowWidth: gameMapWidth, windowHeight: gameMapHeight, mapBoxWidth, mapBoxHeight});
    const {renderRow, renderCol} = viewPort;
    const renderTopRow = renderRow[0];
    const renderLeftCol = renderCol[0];

    const boxSholdOnCharacterTop = Math.floor(canFitBoxHeight/2);
    const boxSholdOnCharacterLeft = Math.floor(canFitBoxWidth/2);
    const boxActuallyRenderOnCharacterTop = currentPosition[0] - renderTopRow;
    const boxActuallyRenderOnCharacterLeft = currentPosition[1] - renderLeftCol;
    
    const top = (boxSholdOnCharacterTop - boxActuallyRenderOnCharacterTop) * mapBoxHeight;
    const left = (boxSholdOnCharacterLeft - boxActuallyRenderOnCharacterLeft) * mapBoxWidth;
    return {top, left};
}

export const getInitialPlayerPostion = (mapDesign: mapBoxDesignInterface[][]): [number, number] => {
    for (let i=0; i<mapDesign.length; i++){
        const index = mapDesign[i].findIndex((mapBox)=> mapBox.isStarting);
        if (index >= 0)
            return [i, index];
    }
    return [-1, -1];
}

