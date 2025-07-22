import React, { useState } from 'react';
import BuyButton from './BuyButton';
import { FiCopy, FiCheck } from 'react-icons/fi';

const CoinSection = () => {
  const [copied, setCopied] = useState(false);
  const contract = 'Soon';

  const handleCopy = () => {
    navigator.clipboard.writeText(contract);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="coin" className="coin-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="highlight-icon">🌞</span> The $SUMMER Token
          </h2>
        </div>
        
        <div className="token-details">
          <div className="detail-card">
            <h3 className="detail-title">Tokenomics</h3>
            <ul className="detail-list">
              <li><strong>Name:</strong> Solana Summer</li>
              <li><strong>Ticker:</strong> $SUMMER</li>
              <li><strong>Platform:</strong>Bonk</li>
              <li><strong>Supply:</strong> 1,000,000,000</li>
            </ul>
          </div>
          
          <div className="detail-card">
            <h3 className="detail-title">Contract Address</h3>
            <div className="contract-box">
              <code className="contract-address">{contract}</code>
              <button 
                onClick={handleCopy} 
                className={`copy-button ${copied ? 'copied' : ''}`}
              >
                {copied ? <FiCheck /> : <FiCopy />}
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </div>
        </div>
        
        <div className="cta-container">
          <BuyButton />
        </div>
      </div>
    </section>
  );
};

export default CoinSection;