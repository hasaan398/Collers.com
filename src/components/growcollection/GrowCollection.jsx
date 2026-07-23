import React, { useState } from 'react';
import './growcollection.css';

// Assets
import waveBg from '../../assets/b-wave.png';
import trioImg from '../../assets/trio.png';
import shoeImg from '../../assets/shoe.png';

const GrowCollection = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Exact Lucide-style SVG Icons matching Figma design
  const tabs = [
    {
      id: 0,
      label: 'Bibendum tellus',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      ),
    },
    {
      id: 1,
      label: 'Cras eget',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },
    {
      id: 2,
      label: 'Dolor pharetra',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.71 1.26-1.5 1.5-2.5-1.5 0-3-1.5-3-3-.2-.8-.8-1.5-1.5-2.5z" />
          <path d="M12 15l-3-3 7.5-7.5a2.121 2.121 0 0 1 3 3L12 15z" />
        </svg>
      ),
    },
    {
      id: 3,
      label: 'Amet, fringilla',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        </svg>
      ),
    },
    {
      id: 4,
      label: 'Amet nibh',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18h6" />
          <path d="M10 22h4" />
          <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
        </svg>
      ),
    },
    {
      id: 5,
      label: 'Sed velit',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="8" y1="6" x2="21" y2="6" />
          <line x1="8" y1="12" x2="21" y2="12" />
          <line x1="8" y1="18" x2="21" y2="18" />
          <line x1="3" y1="6" x2="3.01" y2="6" />
          <line x1="3" y1="12" x2="3.01" y2="12" />
          <line x1="3" y1="18" x2="3.01" y2="18" />
        </svg>
      ),
    },
  ];

  return (
    <section className="grow-section">
      <div className="grow-container">
        
        {/* Upper Header */}
        <div className="grow-header">
          <h2 className="grow-title">Grow your collection</h2>
          <p className="grow-description">
     Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames sit rhoncus.
Nec magna sed interdum sit purus tellus. Et volutpat proin neque placerat at bibendum quam tellus.
          </p>
        </div>

        {/* Content Body */}
        <div className="grow-grid">
          {/* Left Tabs */}
          <div className="grow-tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`grow-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span className="tab-icon">{tab.icon}</span>
                <span className="tab-label">{tab.label}</span>
                <span className="tab-arrow">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </button>
            ))}
          </div>

          {/* Right Main Showcase Image */}
          <div className="grow-showcase">
            <img src={trioImg} alt="Collection showcase" className="trio-image" />
          </div>
        </div>

      </div>

      {/* Wave & World Map Section */}
      <div className="map-wrapper">
        <img src={waveBg} alt="Wave Background" className="wave-bg-img" />

        <div className="map-overlay-content">
          <div className="shoe-card-overlay">
            <img src={shoeImg} alt="Featured Shoe" className="overlay-shoe-img" />
            <p className="tooltip-text">
              Emma Simpson collected one pair of <strong>Cool Shoes</strong>.
            </p>
          </div>

          <div className="stat-container">
            <h1 className="stat-number">11,658,467</h1>
            <p className="stat-label">Shoes Collected</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowCollection;