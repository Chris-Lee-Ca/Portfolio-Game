import * as THREE from "three";
import { a } from "@react-spring/three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

import { useFrame, useThree } from "@react-three/fiber";

// @ts-ignore
import skyScene from "../assets/3d/sky.glb";

type GLTFResult = GLTF & {
  nodes: {
    Object_2: THREE.Mesh;
  };
  materials: {
    palette: THREE.MeshPhysicalMaterial;
  };
};

const Sky = (props: any) => {

    const skyRef = useRef();
    const sky = useGLTF(skyScene)  as GLTFResult;

    return (
        <mesh>
            <primitive object={sky.scene} />
        </mesh>
    );
}

export default Sky;