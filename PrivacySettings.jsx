import React, { useState } from 'react';
import './PrivacySettings.css';

const PrivacySettings = () => {
  const [settings, setSettings] = useState({
    activityTracking: true,
    personalizedAds: false,
    profileVisibility: true,
    searchIndexing: false,
  });

  const handleToggle = (key) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="privacy-wrapper">
      <div className="privacy-card">
        <h2>Privacy Settings</h2>
        <p className="subtitle">Manage how your data is handled</p>

        <div className="setting-section">
          <div className="setting-item">
            <div>
              <h4>Activity Tracking</h4>
              <p>Allow the website to track your usage for better recommendations.</p>
            </div>
            <label className="switch">
              <input
                type="checkbox"
                checked={settings.activityTracking}
                onChange={() => handleToggle('activityTracking')}
              />
              <span className="slider"></span>
            </label>
          </div>

          <div className="setting-item">
            <div>
              <h4>Personalized Ads</h4>
              <p>Show ads based on your browsing behavior.</p>
            </div>
            <label className="switch">
              <input
                type="checkbox"
                checked={settings.personalizedAds}
                onChange={() => handleToggle('personalizedAds')}
              />
              <span className="slider"></span>
            </label>
          </div>

          <div className="setting-item">
            <div>
              <h4>Profile Visibility</h4>
              <p>Make your profile visible to other users.</p>
            </div>
            <label className="switch">
              <input
                type="checkbox"
                checked={settings.profileVisibility}
                onChange={() => handleToggle('profileVisibility')}
              />
              <span className="slider"></span>
            </label>
          </div>

          <div className="setting-item">
            <div>
              <h4>Search Engine Indexing</h4>
              <p>Allow your profile to appear in search engine results.</p>
            </div>
            <label className="switch">
              <input
                type="checkbox"
                checked={settings.searchIndexing}
                onChange={() => handleToggle('searchIndexing')}
              />
              <span className="slider"></span>
            </label>
          </div>
        </div>

        <div className="btn-group">
          <button className="btn cancel-btn">Cancel</button>
          <button className="btn save-btn" onClick={() => alert(' Privacy settings updated!')}>Save Changes</button>
        </div>
      </div>
    </div>
  );
};

export default PrivacySettings;
