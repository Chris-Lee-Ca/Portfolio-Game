import { Facing } from "../data/mapDesign";

export const arrayEquals = (a: any[], b: any[]) => {
    return Array.isArray(a) && Array.isArray(b) && a.length === b.length && a.every((val, index) => val === b[index]);
};

export const getTransformDegreee = (facing: Facing) => {
    switch (facing) {
        case "N":
            return "rotate(0deg)";
        case "E":
            return "rotate(90deg)";
        case "S":
            return "rotate(180deg)";
        case "W":
            return "rotate(270deg)";
    }
};
