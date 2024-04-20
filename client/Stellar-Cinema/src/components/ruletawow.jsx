import React, { useState } from 'react';
import './ruletawow.css'

const DiscountOptions = [
  '10% reducere',
  'Bilet gratis',
  'Buy one get one free',
  'Rien',
  '100 Rotiri gratuite la Superbet',
  'Croco 🐊',
  'Voucher carturesti pentru Book of Ra'
];

function DiscountRoulette() {
  const [spinning, setSpinning] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const spinWheel = () => {
    if (!spinning) {
      const randomIndex = Math.floor(Math.random() * DiscountOptions.length);
      setSelectedOption(DiscountOptions[randomIndex]);
      setSpinning(true);
      setTimeout(() => {
        setSpinning(false);
      }, 2000);
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ marginBottom: '10px' }}>
        <button style={buttonStyle(spinning)} onClick={spinWheel} className="buton-spin" disabled={spinning}>Spin</button>
      </div>
      <div style={resultStyle}>
        {spinning ? 'Spinning...' : selectedOption ? `You've won: ${selectedOption}` : 'Click Spin to Play'}
      </div>
    </div>
  );
}

const buttonStyle = (spinning) => ({
  padding: '10px',
  fontSize: '16px',
  cursor: spinning ? 'not-allowed' : 'pointer',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)',
  transition: 'background-color 0.3s, transform 1s ease-in-out',
  animation: spinning ? `ruleta 2s ease-out` : '',
  borderTop: spinning ? '5px' : 'none', 
});

const resultStyle = {
  fontSize: '20px',
  fontWeight: 'bold',
  color: '#333',
};

export default DiscountRoulette;