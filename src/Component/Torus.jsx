import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useSnapshot } from 'valtio';
import state from '../store.js';

const Torus = () => {
  const snap = useSnapshot(state);
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current && snap.torus.isVisible) {
      meshRef.current.rotation.x += snap.torus.rotationSpeed;
      meshRef.current.rotation.y += snap.torus.rotationSpeed;
    }
  });

  return (
    snap.torus.isVisible && (
      <mesh ref={meshRef} position={[0, 1, 0]}>
        <torusGeometry />
        <meshStandardMaterial color={'green'} />
      </mesh>
    )
  );
};

export default Torus;
