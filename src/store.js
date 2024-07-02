import { proxy } from 'valtio';

const state = proxy({
  cube: {
    isVisible: true,
    rotationSpeed: 0,
  },
  torus: {
    isVisible: true,
    rotationSpeed: 0,
  },
  dodecahedron: {
    isVisible: true,
    rotationSpeed: 0,
  },
});

export default state;
