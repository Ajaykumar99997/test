import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useSnapshot } from 'valtio';
import state from '../store.js';

const Dodecahedron = () => {
  const snap = useSnapshot(state);
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current && snap.dodecahedron.isVisible) {
      meshRef.current.rotation.x += snap.dodecahedron.rotationSpeed;
      meshRef.current.rotation.y += snap.dodecahedron.rotationSpeed;
    }
  });

  return (
    snap.dodecahedron.isVisible && (
      <mesh ref={meshRef} position={[4, 1, 0]}>
        <dodecahedronGeometry />
        <meshStandardMaterial color={'blue'} />
      </mesh>
    )
  );
};

export default Dodecahedron;
