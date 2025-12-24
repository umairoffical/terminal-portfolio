import React, { useEffect } from 'react';

const TalkNow = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    const handleLinkClick = (appScheme, webUrl) => (e) => {
        if (isMobile && appScheme) {
            e.preventDefault(); // Prevent default link behavior

            const appWindow = window.open(appScheme, '_blank');

            // Fallback to web URL if the app doesn't open
            setTimeout(() => {
                if (appWindow && !appWindow.closed) { // Check if the window is still open
                    appWindow.close(); // Close the blank window if the app opened
                }
                window.location.href = webUrl;
            }, 500); // 500ms delay to allow app to launch
        }
        // For desktop or if no appScheme, let the default link behavior happen
    };

    // Note: The app scheme for GitHub is not officially documented/reliable.
    // It will likely just open the browser to the web URL.
    // LinkedIn app scheme can be more reliable.
    const contactContent = `Behind every great project is a conversation. Let’s talk, explore, and create together.

WhatsApp: <a href="https://wa.me/923051494826" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick(null, "https://wa.me/923051494826")}>Chat now</a>
LinkedIn: <a href="https://www.linkedin.com/in/umairthings/" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick("linkedin://profile/umairthings", "https://www.linkedin.com/in/umairthings/")}>LinkedIn Profile</a>
GitHub: <a href="https://github.com/umairoffical" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick("github://profile/umairoffical", "https://github.com/umairoffical")}>GitHub Profile</a>`;
    
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