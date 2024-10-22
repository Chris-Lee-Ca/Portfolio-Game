import { mapBoxDesignInterface } from "../mapDesign";

export type WallTexture = "Brick";
export type WallShade = "straight" | "corner";

export interface wallBoxDesignInterface extends mapBoxDesignInterface {
    texture: WallTexture;
    shade: WallShade;
}

// Straight Wall
export const N_StraightBrickWall: wallBoxDesignInterface = {
    backGroundType: "Wall",
    facing: "N",
    texture: "Brick",
    shade: "straight",
};

export const E_StraightBrickWall: wallBoxDesignInterface = {
    backGroundType: "Wall",
    facing: "E",
    texture: "Brick",
    shade: "straight",
};

export const S_StraightBrickWall: wallBoxDesignInterface = {
    backGroundType: "Wall",
    facing: "S",
    texture: "Brick",
    shade: "straight",
};

export const W_StraightBrickWall: wallBoxDesignInterface = {
    backGroundType: "Wall",
    facing: "W",
    texture: "Brick",
    shade: "straight",
};

// Corner Wall
export const N_CornerBrickWall: wallBoxDesignInterface = {
    backGroundType: "Wall",
    facing: "N",
    texture: "Brick",
    shade: "corner",
};

export const E_CornerBrickWall: wallBoxDesignInterface = {
    backGroundType: "Wall",
    facing: "E",
    texture: "Brick",
    shade: "corner",
};

export const S_CornerBrickWall: wallBoxDesignInterface = {
    backGroundType: "Wall",
    facing: "S",
    texture: "Brick",
    shade: "corner",
};

export const W_CornerBrickWall: wallBoxDesignInterface = {
    backGroundType: "Wall",
    facing: "W",
    texture: "Brick",
    shade: "corner",
};
