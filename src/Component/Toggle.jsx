import React from 'react';
import { useSnapshot } from 'valtio';
import state from '../store';
import '../styles/toggle.css';

const Toggle = ({ name, type }) => {
  const snap = useSnapshot(state);

  const handleToggle = () => {
    state[type].isVisible = !state[type].isVisible;
  };

  const handleSpeedChange = (event) => {
    const value = parseFloat(event.target.value);
    if (!isNaN(value) && value >= 0 && value <= 1) {
      state[type].rotationSpeed = value;
    }
  };

  return (
    <div className="main">
      <button className="toggle" onClick={handleToggle}>
        Toggle {name}
      </button>
      <div style={{ marginTop: '20px' }}>
        <label>Rotation Speed:</label>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={snap[type]?.rotationSpeed || 0}
          onChange={handleSpeedChange}
          className="inputbar"
        />
        <input
          type="number"
          min="0"
          max="1"
          step="0.01"
          value={snap[type]?.rotationSpeed || 0}
          onChange={handleSpeedChange}
          className="inputfield"
        />
      </div>
    </div>
  );
};

export default Toggle;
