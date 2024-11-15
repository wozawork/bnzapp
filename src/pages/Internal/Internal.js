/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import './Internal.css';
import { changeContext, resumeCollection, pauseCollection, startHeartBeat } from '../../utils/sdk';
import { PAGE_CONTEXT } from '../../utils/constans';
import Button from '@mui/material/Button';

export default function Internal() {
    const [isOpen, setIsOpen] = useState(false);
    // const [time, setTime] = useState(0);
    // const [isPause, setIsPause] = useState(true);

    useEffect(() => {
        changeContext(PAGE_CONTEXT.INTERNAL);
    }, []);

    // useEffect(() => {
    //     if (time <= 10) {
    //         if (isPause && time === 1) {
    //             pauseCollection();
    //             console.log('pauseCollection');
    //         }
    //         const interval = setInterval(() => {
    //             setTime((prevCounter) => prevCounter + 1);
    //         }, 1000);
    //         return () => clearInterval(interval);
    //     }
    //     if (time >= 10) {
    //         setIsPause(false);
    //         resumeCollection();
    //         console.log('resumeCollection');
    //     }
    // }, [time]);

    if (isOpen === false) {
        changeContext(PAGE_CONTEXT.INTERNAL);
    }

    return (
        <>
            <div>
                <h1>BioCatch Extended functionality</h1>
            </div>
            <div className='iframe-container'>
                <Button variant='outlined' onClick={() => setIsOpen(!isOpen)}>
                    Click to {`${!isOpen ? 'open' : 'close'}`} Iframe
                </Button>
                <br />
                <br />
                {isOpen ? (
                    <div>
                        <div className='iframe-section'>
                            <div className='fadeIn'>
                                <iframe
                                    src='iframe.html'
                                    width={'800px'}
                                    height={'200px'}
                                ></iframe>
                            </div>
                        </div>
                        <br />
                    </div>
                ) : (
                    <></>
                )}
            </div>
            <hr />
            <div>
                <div className='sdk-page'>
                    <div className='interaction-container'>
                        <div className='interaction-item'>
                            <Button onClick={() => startHeartBeat()}>Heart Beat</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
