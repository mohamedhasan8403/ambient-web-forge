
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const FloatingGeometry = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={[2, 0, 0]}>
      <icosahedronGeometry args={[1, 0]} />
      <meshStandardMaterial
        color="#00f5ff"
        wireframe
        transparent
        opacity={0.6}
      />
    </mesh>
  );
};

const AnimatedSphere = () => {
  const sphereRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.5;
      sphereRef.current.rotation.z = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <mesh ref={sphereRef} position={[-2, 0, 0]}>
      <sphereGeometry args={[0.8, 32, 32]} />
      <meshStandardMaterial
        color="#8a2be2"
        wireframe
        transparent
        opacity={0.4}
      />
    </mesh>
  );
};

const BackgroundSphere = () => {
  return (
    <mesh position={[0, 0, -10]}>
      <sphereGeometry args={[20, 32, 32]} />
      <meshBasicMaterial
        color="#1a0033"
        transparent
        opacity={0.1}
        side={THREE.BackSide}
      />
    </mesh>
  );
};

const ThreeBackground = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00f5ff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8a2be2" />
        
        <FloatingGeometry />
        <AnimatedSphere />
        <BackgroundSphere />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
