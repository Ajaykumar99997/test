import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useSnapshot } from 'valtio';
import state from '../store.js';

const Cube = () => {
  const snap = useSnapshot(state);
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current && snap.cube.isVisible) {
      meshRef.current.rotation.x += snap.cube.rotationSpeed;
      meshRef.current.rotation.y += snap.cube.rotationSpeed;
    }
  });

  return (
    snap.cube.isVisible && (
      <mesh ref={meshRef} position={[-4, 1, 0]}>
        <boxGeometry />
        <meshStandardMaterial color={'red'} />
      </mesh>
    )
  );
};

export default Cube;
