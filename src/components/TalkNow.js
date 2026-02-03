import React from 'react';

const TalkNow = () => {
    const contactContent = `Behind every great project is a conversation. Let’s talk, explore, and create together.

WhatsApp: <a href="https://wa.me/923051494826" target="_blank" rel="noopener noreferrer">Chat now</a>
LinkedIn: <a href="https://www.linkedin.com/in/umairthings/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
GitHub: <a href="https://github.com/umairoffical" target="_blank" rel="noopener noreferrer">GitHub Profile</a>`;
    
    // We are no longer using TypeAnimation, so we will render the HTML directly.
    return (
        <div className="tab-content">
            <span className="command-prefix">$&gt;</span> contact_info.sh
            <div
                dangerouslySetInnerHTML={{ __html: contactContent }}
                style={{ whiteSpace: 'pre-line', marginTop: '10px' }}
            />
        </div>
    );
};

export default TalkNow;