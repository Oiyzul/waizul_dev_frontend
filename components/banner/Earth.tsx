"use client";

import { OrbitControls, Stars, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { DoubleSide, Mesh } from "three";

const Earth = () => {
  const [
    colorMap,
    normalMap,
    cloudsMap,
    specularMap,
    nightMap,
    binaryCloudMap,
  ] = useTexture([
    "/textures/8k_earth_daymap_2.jpg",
    "/textures/8k_earth_clouds_2.jpg",
    "/textures/8k_earth_specular_map_2.jpg",
    "/textures/8k_earth_nightmap_2.jpg",
    "/textures/8k_earth_normal_map_2.jpg",
    "/textures/37.jpeg",
  ]);

  const earthRef = useRef<Mesh>(null!);
  const cloudsRef = useRef<Mesh>(null!);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    earthRef.current.rotation.y = elapsedTime / -3;
    cloudsRef.current.rotation.y = elapsedTime / 2;
  });

  return (
    <>
      <ambientLight intensity={1} />
      <pointLight position={[2, 0, 5]} intensity={1} color="#ffffff" />

      <Stars
        radius={300}
        depth={50}
        count={20000}
        factor={7}
        saturation={0}
        fade={true}
      />

      <mesh ref={cloudsRef} scale={1.4}>
        <sphereGeometry args={[1.005, 32, 32]} />
        <meshPhongMaterial
          map={binaryCloudMap}
          opacity={0.4}
          depthWrite={true}
          transparent={true}
          side={DoubleSide}
        />
        <OrbitControls enableRotate rotateSpeed={1} />
      </mesh>
      <mesh scale={1} ref={earthRef}>
        <sphereGeometry args={[1, 32, 32]} />
        {/* <meshPhongMaterial specularMap={specularMap} /> */}
        <meshStandardMaterial map={colorMap} />
        <OrbitControls enableRotate={true} rotateSpeed={0} />
      </mesh>
    </>
  );
};

export default Earth;
