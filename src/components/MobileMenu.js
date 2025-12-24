import React, { useState } from 'react';

const MobileMenu = ({ activeTab, setActiveTab }) => {
    const [isOpen, setIsOpen] = useState(false);
    const tabs = ['Introduction', 'About Me', 'Experience', 'Services', 'Talk Now'];

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        setIsOpen(false);
    };

    return (
        <div className="mobile-menu">
            <div className="hamburger-icon" onClick={() => setIsOpen(!isOpen)}>
                &#9776; {/* Unicode for hamburger icon */}
            </div>
            {isOpen && (
                <div className="menu-dropdown">
                    {tabs.map(tab => (
                        <div
                            key={tab}
                            className={`menu-item ${activeTab === tab ? 'active' : ''}`}
                            onClick={() => handleTabClick(tab)}
                        >
                            {tab}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MobileMenu;
