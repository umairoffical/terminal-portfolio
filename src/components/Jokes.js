import React, { useState, useEffect } from 'react';

const jokes = [
    "Why do Java developers wear glasses? Because they don't C#.",
    "Why was the JavaScript developer sad? Because he didn't know how to 'null' his feelings.",
    "What's the object-oriented way to become wealthy? Inheritance.",
    "Why did the programmer quit his job? Because he didn't get arrays.",
    "A SQL query goes into a bar, walks up to two tables and asks, 'Can I join you?'",
    "How many programmers does it take to change a light bulb? None, that's a hardware problem.",
    "I've got a great UDP joke, but I don't know if you'll get it.",
    "There are 10 types of people in the world: those who understand binary, and those who don't."
];

const Jokes = () => {
    const [currentJokeIndex, setCurrentJokeIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentJokeIndex((prevIndex) => (prevIndex + 1) % jokes.length);
        }, 8000); // Change joke every 5 seconds

        return () => clearInterval(intervalId); // Cleanup on component unmount
    }, []);

    return (
        <div className="joke-container">
            <p>"{jokes[currentJokeIndex]}"</p>
        </div>
    );
};

export default Jokes;
