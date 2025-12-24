import React from 'react';
import '../Terminal.css';

const Tabs = ({ activeTab, setActiveTab }) => {
    const tabs = ['Introduction', 'About Me', 'Experience', 'Services', 'Talk Now'];

    return (
        <div className="tabs">
            {tabs.map(tab => (
                <div
                    key={tab}
                    className={`tab ${activeTab === tab ? 'active' : ''}`}
                    onClick={() => setActiveTab(tab)}
                >
                    {tab}
                </div>
            ))}
        </div>
    );
};

export default Tabs;
