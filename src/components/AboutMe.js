import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const AboutMe = () => {
    return (
        <div className="tab-content">
            <span className="command-prefix">$&gt;</span>
            <TypeAnimation
                sequence={['./get_skills.sh']}
                wrapper="span"
                cursor={false}
                repeat={0}
                speed={40}
            />
            <br /><br />
            <TypeAnimation
                sequence={[
                    `I hold a Bachelor's degree in Computer Science, which provided a strong foundation in technical skills and problem-solving. My career began at [EqualPixels](https://equalpixels.io) in Lahore, where I specialized in WordPress development, theme customization, and plugin development. Currently, I work remotely as a full stack WordPress developer at [BH-EqualPixels](https://bh.equalpixels.ae/), further expanding my expertise in both backend and frontend technologies.

I am passionate about writing clean, scalable code and thrive in collaborative environments. I focus on delivering reliable solutions with clear communication, especially in remote setups. Outside of work, I maintain balance by playing football.

Languages & Frameworks:
- PHP, Laravel, WordPress, React, HTML, CSS, JavaScript, jQuery, Tailwind, Bootstrap

Design & Development:
- Responsive Design
- UI/UX Principles
- Theme & Plugin Development
- CMS Development

Tools & Process:
- Requirements Analysis
- SEO Basics
- CRM Development
- Testing & Optimization

Collaboration:
- Effective Communication
- Remote Teamwork
- Client-Focused Approach
- Time Management`,
                    500,
                ]}
                wrapper="div"
                cursor={false}
                repeat={0}
                speed={60}
                style={{ whiteSpace: 'pre-line' }}
            />
        </div>
    );
};

export default AboutMe;