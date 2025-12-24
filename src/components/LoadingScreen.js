import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import '../Terminal.css';

const LoadingScreen = () => {
    return (
        <div className="loading-screen">
            <TypeAnimation
                sequence={[
                    'Are you looking for a full stack Web Developer?',
                    2500,
                ]}
                wrapper="div"
                cursor={true}
                repeat={0}
                style={{ fontSize: '2em', display: 'inline-block' }}
            />
        </div>
    );
};

export default LoadingScreen;