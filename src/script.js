// This script is no longer needed in React, as theme switching is handled via state in React components.
// React components will manage the theme directly, but here's how you can handle theme switching using React hooks:

import React, { useEffect } from 'react';

// Theme toggle functionality for React
const useTheme = () => {
    useEffect(() => {
        // Get the saved theme from localStorage on page load
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            document.body.classList.add(savedTheme);
        } else {
            // Default to light theme if no theme is saved
            document.body.classList.add('light-mode');
        }
    }, []);
    
    // Toggle the theme between dark and light
    const toggleTheme = () => {
        const currentTheme = document.body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
        
        // Toggle the theme
        if (currentTheme === 'light-mode') {
            document.body.classList.replace('light-mode', 'dark-mode');
            localStorage.setItem('theme', 'dark-mode');
        } else {
            document.body.classList.replace('dark-mode', 'light-mode');
            localStorage.setItem('theme', 'light-mode');
        }
    };

    return toggleTheme;
};

export default useTheme;
