import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Header from './Component/Header';
import Cube from './Component/Cube';
import Torus from './Component/Torus';
import Dodecahedron from './Component/Dodecahedron';

function App() {
  return (
    <>
      <Header />
      <Canvas camera={{ fov: 40, position: [0, 0, 10] }}>
        <Suspense fallback={null}>
          <ambientLight />
          <directionalLight intensity={1.5} position={[5, 5, 5]} />
          <Cube />
          <Torus />
          <Dodecahedron />
        </Suspense>
      </Canvas>
    </>
  );
}

export default App;
