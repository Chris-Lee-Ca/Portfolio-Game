import { Facing } from "../../../data/mapDesign";
import StraightRoadBox from "./StraightRoadBox";
import TjunctionRoadBox from "./TjunctionRoadBox";
import XjunctionRoadBox from "./XjunctionRoadBox";
import { RoadShade } from "../../../data/Objects/RoadObject";
import TurnRoadBox from "./TurnRoadBox";
import DeadEndRoadBox from "./DeadEndRoadBox";

interface RoadBoxFactoryProps {
    location: [number, number];
    facing: Facing;
    shade: RoadShade;
}

const RoadBoxFactory = (props: RoadBoxFactoryProps) => {
    const { location, facing, shade } = props;
    switch (shade) {
        case "straight":
            return <StraightRoadBox location={location} facing={facing} />;
        case "t-junction":
            return <TjunctionRoadBox location={location} facing={facing} />;
        case "x-junction":
            return <XjunctionRoadBox location={location} facing={facing} />;
        case "turn":
            return <TurnRoadBox location={location} facing={facing} />;
        case "deadEnd":
            return <DeadEndRoadBox location={location} facing={facing} />;
        default:
            console.debug("Unhandle Road Shade");
            return <StraightRoadBox location={location} facing={facing} />;
        // throw error('Unknown Road Box Type');
    }
};

export default RoadBoxFactory;
