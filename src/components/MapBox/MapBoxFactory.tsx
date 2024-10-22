import { ReactElement } from "react";
import MapBox from "./MapBox";
import { Facing, MapType, OnTopItemType } from "../../data/mapDesign";
import RoadBoxFactory from "./RoadBox/RoadBoxFactory";
import WallBoxFactory from "./BarrierBox/WallBoxFactory";
import { Box } from "@mui/material";
import BoardBox from "./OnTopItem/BoardBox/BoardBox";
import PaperBox from "./OnTopItem/PaperBox/PaperBox";
import SkillsBox from "./OnTopItem/SkillsBox/SkillsBox";
import SchoolBox from "./OnTopItem/SchoolBox/SchoolBox";
import InteractableBox from "./OnTopItem/InteractableBox/InteractableBox";
import CompanyBox from "./OnTopItem/CompanyBox/CompanyBox";
import PaintingBox from "./OnTopItem/PaintingBox/PaintingBox";
import BalloonBox from "./OnTopItem/BalloonBox/BalloonBox";
import FinishLineBox from "./OnTopItem/FinishLineBox/FinishLineBox";
import FlowerBox from "./OnTopItem/FlowerBox/FlowerBox";
import FlowerSeaBox from "./OnTopItem/FlowerSeaBox/FlowerSeaBox";
import TreeBox from "./OnTopItem/TreeBox/TreeBox";
import GlassBox from "./OnTopItem/GlassBox/GlassBox";

interface MapBoxFactoryProps {
    location: [number, number];
    backGroundType: MapType;
    facing: Facing;
    // shade?: RoadShade; // only exist for road
    reMainingProps?: any;
}

const backGroundFactory = (props: MapBoxFactoryProps) => {
    const { location, backGroundType, facing } = props;
    switch (backGroundType) {
        case "Road":
            return (
                <RoadBoxFactory location={location} facing={facing} shade={props.reMainingProps.shade || "straight"} />
            );
        case "Wall":
            return (
                <WallBoxFactory location={location} facing={facing} shade={props.reMainingProps.shade || "straight"} />
            );
    }
};

const onTopItemFactory = (props: MapBoxFactoryProps) => {
    const { location, facing } = props;
    const onTopItemType = props.reMainingProps.onTopItemType as OnTopItemType;
    if (onTopItemType === "Board") {
        return <BoardBox location={location} facing={facing} />;
    } else if (onTopItemType === "Paper") {
        return <PaperBox location={location} facing={facing} />;
    } else if (onTopItemType === "Skills") {
        return <SkillsBox location={location} facing={facing} category={props.reMainingProps.category} />;
    } else if (onTopItemType === "School") {
        return <SchoolBox location={location} facing={facing} />;
    } else if (onTopItemType === "Company") {
        return <CompanyBox location={location} facing={facing} />;
    } else if (
        ["GameHub", "BigTwo", "CharacterGPT", "Sudoku", "FinalYearProject", "ArduinoCar", "ThisGame"].includes(
            onTopItemType,
        )
    ) {
        return <PaintingBox location={location} facing={facing} onTopItemType={onTopItemType} />;
    } else if (onTopItemType === "FinishLine") {
        return <FinishLineBox location={location} facing={facing} />;
    } else if (onTopItemType === "Balloon") {
        return <BalloonBox location={location} facing={facing} />;
    } else if (onTopItemType === "Interactable") {
        return <InteractableBox location={location} facing={facing} />;
    } else if (onTopItemType === "Flower") {
        return <FlowerBox location={location} facing={facing} />;
    } else if (onTopItemType === "FlowerSea") {
        return <FlowerSeaBox location={location} facing={facing} />;
    } else if (onTopItemType === "Tree") {
        return <TreeBox location={location} facing={facing} />;
    } else if (onTopItemType === "Glass") {
        return <GlassBox location={location} facing={facing} />;
    }
};

const MapBoxFactory = (props: MapBoxFactoryProps) => {
    const { location, backGroundType, facing } = props;

    return (
        <MapBox location={location}>
            <>
                {backGroundFactory(props)}
                {onTopItemFactory(props)}
            </>
        </MapBox>
    );
};

export default MapBoxFactory;
