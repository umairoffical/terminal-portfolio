import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import '../Terminal.css'; // Ensure CSS with .json-output styles is imported

const Experience = () => {
    const experiences = [
        {
            "jobTitle": "Full Stack WordPress Developer",
            "company": "BH-EqualPixels",
            "period": "2024 – Present",
            "project": {
                "name": "TripBH",
                "url": "https://tripbh.com"
            },
            "tasks": [
                "Developed a custom WordPress platform designed for convenient travel bookings and reservations. The site supports easy trip management, integrated payment processing, and a user-friendly booking workflow. Included features for both travelers and administrators to manage trips effortlessly and monitor bookings in real time. Focused on creating a smooth and reliable experience that meets the needs of travel agencies and their clients."
            ]
        },
        {
            "jobTitle": "Full Stack WordPress Developer",
            "company": "BH-EqualPixels",
            "period": "2024 – Present",
            "project": {
                "name": "SpaceDMC",
                "url": "https://spacedmc.com"
            },
            "tasks": [
                "Developed a comprehensive custom WordPress theme for hotel and experience bookings that streamlines both the customer and administrative experience. Implemented automated workflows to reduce manual tasks, and built intuitive dashboards for users to manage their bookings easily. The site supports both general visitors and registered users, offering personalized recommendations and booking history for users, while providing quick browsing and booking for general guests. Integrated a secure payment gateway and optimized the platform for speed and usability across devices, ensuring hassle-free management for hotel staff and seamless navigation for end users."
            ]
        },
        {
            "jobTitle": "Full Stack WordPress Developer",
            "company": "EqualPixels",
            "period": "2023 – 2024",
            "project": {
                "name": "World Track Travel",
                "url": "https://worldtracktravel.com"
            },
            "tasks": [
                "Developed a premium WordPress theme tailored for travel companies specializing in Umrah and Hajj services. Implemented real-time booking and secure payment integration to streamline reservations and transactions. The platform supports both general visitors, allowing easy trip browsing and inquiries, and registered users who benefit from personalized booking management and history. Administrative users have dedicated tools for managing packages, bookings, and payments efficiently. Optimized for a seamless experience across devices, ensuring both guests and operators can manage Umrah and Hajj journeys with ease."
            ]
        },
        {
            "jobTitle": "Full Stack WordPress Developer",
            "company": "EqualPixels",
            "period": "2023 – 2024",
            "project": {
                "name": "Location Jewel",
                "url": "https://locationjewel.com"
            },
            "tasks": [
                "Developed a robust custom WordPress theme for booking film and photo studios, designed to support a seamless experience for both general visitors and registered users. General users can easily browse available studios, check availability, and send inquiries without sign-up. Registered users benefit from personal dashboards to manage their bookings, view history, and make secure payments. The platform accommodates multiple user roles, including studio owners and administrators, each with tailored permissions for managing listings and reservations. Integrated real-time payment processing and automated notifications for a streamlined, secure, and user-focused booking workflow."
            ]
        },
        {
            "jobTitle": "Frontend & Laravel Developer",
            "company": "EqualPixels",
            "period": "2022 – 2023",
            "project": {
                "name": "Carsooq",
                "url": "https://carsooq.com"
            },
            "tasks": [
                "Developed a Laravel-based platform dedicated to buying and selling cars, featuring an intuitive interface for general visitors and registered users alike. General visitors can browse listings, filter cars by make and model, and send direct inquiries to sellers without needing to sign up. Registered users benefit from personalized dashboards to manage their listings, review offers, and track communication. The system includes a secure internal messaging system to connect buyers and sellers seamlessly. Both private sellers and dealerships have tailored tools, creating a smooth experience for all users."
            ]
        },
        {
            "jobTitle": "Frontend & WordPress Developer",
            "company": "EqualPixels",
            "period": "2022 – 2023",
            "project": {
                "name": "Spassio",
                "url": "https://spassio.com"
            },
            "tasks": [
                "Developed a fully custom WordPress theme based on designs from Figma, guided by precise UI/UX requirements. Integrated dynamic Elementor pages for flexible content creation and easy management. General visitors enjoy seamless browsing, fast-loading pages, and can view detailed project portfolios without signing up. Registered users have access to personalized dashboards, advanced site features, and the ability to save and manage favorite projects. Optimized for both performance and mobile responsiveness, ensuring engaging experiences for all users."
            ]
        }
    ];



    return (
        <div className="tab-content">
            <div className="command-prefix-container">
                <span className="command-prefix">$&gt;</span> cat ./experience.json
            </div>
            <TypeAnimation
                sequence={[
                    experiences.map((exp, index) => {
                        const projectInfo = exp.project ? `\n    - Project: [${exp.project.name}](${exp.project.url})` : '';
                        return `${index + 1}. ${exp.jobTitle} at ${exp.company} (${exp.period})${projectInfo}\n    - Tasks:\n        ${exp.tasks.join('\n        ')}\n`;
                    }).join('\n'),
                    500,
                ]}
                wrapper="pre"
                cursor={false}
                repeat={0}
                speed={80}
                className="json-output"
            />
        </div>
    );
};

export default Experience;
