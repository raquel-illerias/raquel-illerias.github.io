//import Styled Components
import { BoxContainer, ButtonContainer, HeaderOne, ParaAdvice } from './Box.style'
//import React Hooks
import React, { useState, useEffect } from 'react';


export default function Box() {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [randomAdvice, setRandomAdvice] = useState('');
    const [randomAdviceId, setRandomAdviceId] = useState('');

    useEffect(() => {
        // Update windowWidth when the window is resized
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    //API random advice fetching
    function fetchRandomAdvice() {
        const cacheBuster = Math.random();
        const apiUrl = `https://api.adviceslip.com/advice?cacheBuster=${cacheBuster}`;

        fetch(apiUrl)
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then((data) => {
                setRandomAdvice(data.slip.advice);
                setRandomAdviceId(data.slip.id)
            })
            .catch((error) => {
                console.error('There was a problem fetching data:', error);
            });
    };

    useEffect(() => {
        fetchRandomAdvice();
    }, [])

    return (
        <>
            <BoxContainer>
                <HeaderOne>ADVICE #{randomAdviceId}</HeaderOne>
                <ParaAdvice>"{randomAdvice}"</ParaAdvice>
                <div>
                    {windowWidth >= 1024 ? (
                        <svg width="444" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z" /><g transform="translate(212)" fill="#CEE3E9"><rect width="6" height="16" rx="3" /><rect x="14" width="6" height="16" rx="3" /></g></g></svg>

                    ) : (
                        <svg width="295" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z" /><g transform="translate(138)" fill="#CEE3E9"><rect width="6" height="16" rx="3" /><rect x="14" width="6" height="16" rx="3" /></g></g></svg>
                    )}
                </div>
                <ButtonContainer onClick={fetchRandomAdvice}><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733" /></svg></ButtonContainer>
            </BoxContainer>
        </>
    )
}