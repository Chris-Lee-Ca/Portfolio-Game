import * as THREE from "three";
import { a } from "@react-spring/three";
import React, { MutableRefObject, useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

import { useFrame, useThree } from "@react-three/fiber";

// @ts-ignore
import islandScene from "../assets/3d/house_on_the_island.glb";

type GLTFResult = GLTF & {
  nodes: {
    Object_2: THREE.Mesh;
  };
  materials: {
    palette: THREE.MeshPhysicalMaterial;
  };
};

const Island = (props: any) => {
    const {
        isRotating,
        setIsRotating,
        setCurrentStage,
    } = props;
    const { gl, viewport } = useThree();
    const { nodes, materials } = useGLTF(islandScene) as GLTFResult;
    
    const islandRef = useRef<HTMLElement>(null);
    const lastX = useRef(0); // Use a ref for the last mouse x position
    const rotationSpeed = useRef(0);
    const dampingFactor = 0.95;

    const handlePointerDown = (event: any) => {
        event.stopPropagation();
        event.preventDefault();
        setIsRotating(true);
    
        // Calculate the clientX based on whether it's a touch event or a mouse event
        const clientX = event.touches ? event.touches[0].clientX : event.clientX;
    
        // Store the current clientX position for reference
        lastX.current = clientX;
    };

    const handlePointerUp = (event: any) => {
        event.stopPropagation();
        event.preventDefault();
        setIsRotating(false);
      };
    
    const handlePointerMove = (event: any) => {
        event.stopPropagation();
        event.preventDefault();
        if (isRotating) {
            // If rotation is enabled, calculate the change in clientX position
            const clientX = event.touches ? event.touches[0].clientX : event.clientX;

            // calculate the change in the horizontal position of the mouse cursor or touch input,
            // relative to the viewport's width
            const delta = (clientX - lastX.current) / viewport.width;

            // Update the island's rotation based on the mouse/touch movement
            // @ts-ignore
            islandRef.current.rotation.y += delta * 0.01 * Math.PI;

            // Update the reference for the last clientX position
            lastX.current = clientX;

            // Update the rotation speed
            rotationSpeed.current = delta * 0.01 * Math.PI;
        }
    };

    useEffect(() => {
        // Add event listeners for pointer and keyboard events
        const canvas = gl.domElement;
        canvas.addEventListener("pointerdown", handlePointerDown);
        canvas.addEventListener("pointerup", handlePointerUp);
        canvas.addEventListener("pointermove", handlePointerMove);
    
        // Remove event listeners when component unmounts
        return () => {
          canvas.removeEventListener("pointerdown", handlePointerDown);
          canvas.removeEventListener("pointerup", handlePointerUp);
          canvas.removeEventListener("pointermove", handlePointerMove);
        };
      }, [gl, handlePointerDown, handlePointerUp, handlePointerMove]);

    useFrame(() => {
        // If not rotating, apply damping to slow down the rotation (smoothly)
        if (!isRotating) {
            // Apply damping factor
            rotationSpeed.current *= dampingFactor;

            // Stop rotation when speed is very small
            if (Math.abs(rotationSpeed.current) < 0.001) {
            rotationSpeed.current = 0;
            }
            // @ts-ignore
            islandRef.current.rotation.y += rotationSpeed.current;
        }
        // When rotating, determine the current stage based on island's orientation
        // @ts-ignore
        const rotation = islandRef.current.rotation.y;

        const normalizedRotation = ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

        // Set the current stage based on the island's orientation
        switch (true) {
            case normalizedRotation >= 5.5 || normalizedRotation <= 0.5:
                setCurrentStage('front');
                break;
            default:
                setCurrentStage(null);
        }

    });

    return (
        <a.group ref={islandRef} {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_2.geometry}
                material={materials.palette}
                rotation={[-Math.PI / 2, 0, 0]}
            />
        </a.group>
    );
}

export default Island;