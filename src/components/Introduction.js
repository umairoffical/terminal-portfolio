import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Introduction = () => {
    return (
        <div className="tab-content">
            <span className="command-prefix">$&gt;</span> display_intro.sh
            <div style={{ whiteSpace: 'pre-line' }}>
                Hi i am 
                <br />
                <span className="name-heading">Umair Awan</span>
                <br />
                {' '} {/* Add a space here */}
                <TypeAnimation
                    sequence={[
                        'a web developer with over four years of experience in building fast, reliable, and visually appealing websites. I specialize in crafting digital experiences that showcase your products or assets in a way that resonates with your audience. My approach is focused on delivering efficient, scalable solutions that are both user-friendly and memorable.',
                        500,
                    ]}
                    wrapper="span" // Change wrapper to span since it's inline
                    cursor={false}
                    repeat={0}
                    speed={60}
                />
            </div>
        </div>
    );
};

export default Introduction;
