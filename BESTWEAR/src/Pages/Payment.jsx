import React, { useState } from 'react';

const NetBanking = () => {
  const [showBanks, setShowBanks] = useState(false);
  const [selectedBank, setSelectedBank] = useState('');

  const banks = [
    'State Bank of India (SBI)',
    'HDFC Bank',
    'ICICI Bank',
    'Axis Bank',
    'Kotak Mahindra Bank',
    'Bank of Baroda',
    'Yes Bank',
    'Punjab National Bank (PNB)'
  ];

  const handlePaymentClick = () => {
    setShowBanks(!showBanks);
  };

  const handleBankSelect = (bank) => {
    setSelectedBank(bank);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Select Payment Method</h2>

      <label>
        <input type="radio" name="payment" onClick={handlePaymentClick} />
        Net Banking
      </label>

      {showBanks && (
        <div style={{ marginTop: '10px' }}>
          <h4>Select Your Bank:</h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {banks.map((bank, index) => (
              <div
                key={index}
                onClick={() => handleBankSelect(bank)}
                style={{
                  padding: '8px 12px',
                  border: '1px solid #ccc',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  backgroundColor: selectedBank === bank ? '#d0f0ff' : '#fff'
                }}
              >
                {bank}
              </div>
            ))}
          </div>
        </div>
      )}

      {selectedBank && (
        <p style={{ marginTop: '20px', fontWeight: 'bold' }}>
          Selected Bank: {selectedBank}
        </p>
      )}
    </div>
  );
};

export default NetBanking;
