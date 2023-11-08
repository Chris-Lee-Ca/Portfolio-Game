import { WallShade } from "../../../data/Objects/WallObject";
import { Facing } from "../../../data/mapDesign";
import CornerWallBox from "./CornerWallBox";
import StraightWallBox from "./StraightWallBox";


interface WallBoxFactoryProps{
    location: [number, number],
    facing: Facing,
    shade:  WallShade
}

const WallBoxFactory = (props: WallBoxFactoryProps)=> {

    const {location, facing, shade} = props;
    switch (shade) {
        case 'straight':
            return <StraightWallBox location={location} facing={facing}/>;
        case 'corner':
            return <CornerWallBox location={location} facing={facing}/>;
        default:
            console.debug('Unhandle Wall Shade');
            return <StraightWallBox location={location} facing={facing}/>;
            // throw error('Unknown Road Box Type');
    }
};

export default WallBoxFactory;
