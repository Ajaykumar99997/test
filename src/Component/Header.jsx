import React from 'react';
import Toggle from './Toggle.jsx';
import '../styles/header.css';

function Header() {
  const shapes = [
    {
      name: 'Cube',
      type: 'cube',
    },
    {
      name: 'Torus',
      type: 'torus',
    },
    {
      name: 'Dodecahedron',
      type: 'dodecahedron',
    },
  ];

  return (
    <div className="header">
      {shapes.map((shape) => (
        <Toggle key={shape.type} name={shape.name} type={shape.type} />
      ))}
    </div>
  );
}

export default Header;
