import React, { useState, useEffect } from 'react';
import './Terminal.css';
import LoadingScreen from './components/LoadingScreen';
import Tabs from './components/Tabs';
import MobileMenu from './components/MobileMenu';
import Introduction from './components/Introduction';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Services from './components/Services';
import TalkNow from './components/TalkNow';
import Jokes from './components/Jokes';
import Prompt from './components/Prompt';

const App = () => {
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('Introduction');
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    // Effect to handle window resize
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    // Effect for loading screen
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3500);
        return () => clearTimeout(timer);
    }, []);

    const renderContent = () => {
        let content;
        switch (activeTab) {
            case 'Introduction':
                content = <Introduction />;
                break;
            case 'About Me':
                content = <AboutMe />;
                break;
            case 'Experience':
                content = <Experience />;
                break;
            case 'Services':
                content = <Services />;
                break;
            case 'Talk Now':
                content = <TalkNow />;
                break;
            default:
                content = <Introduction />;
        }
        return (
            <>
                {content}
                <Jokes />
                <Prompt />
            </>
        )
    };

    if (loading) {
        return <LoadingScreen />;
    }

    return (
        <div className="terminal">
            <div className="terminal-header">
                <div className="traffic-lights">
                    <div className="light red"></div>
                    <div className="light yellow"></div>
                    <div className="light green"></div>
                </div>
                <div className="terminal-title">user@portfolio</div>
            </div>
            <div className="terminal-body">
                {isMobile ? (
                    <MobileMenu activeTab={activeTab} setActiveTab={setActiveTab} />
                ) : (
                    <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
                )}
                <div className="tab-content-container">
                    {renderContent()}
                </div>
            </div>
        </div>
    );
}

export default App;
