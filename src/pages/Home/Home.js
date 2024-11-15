/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import './Home.css';
import BiocatchLogo from '../../utils/assets/bnz_logo.svg.png';
import AO from '../../utils/assets/AO.jpg';
import ATO from '../../utils/assets/ATO.jpg';
import { Link } from 'react-router-dom';
import { PAGE_CONTEXT, PAGE_NAME } from '../../utils/constans';
import { alternativeLoad, getTheCSID } from '../../utils/sdk';
import TileView from '../TileView/TileView';
import { changeContext } from '../../utils/sdk';

function Home() {


    // Here u need to load ...
    useEffect(() => {
        console.log("home")
        changeContext(PAGE_CONTEXT.HOME);
    }, []);

    return (
        <div>
            <div><h1 id="bnz-demo-title">BNZ demo</h1></div>
            <div className='App-header'>
                <div>
                    <div className='App-header-container'>
                        <img src={BiocatchLogo} className='main-img' alt='BioCatch-Logo'></img>

                    </div>
                    <div className="tileview-container">
    <TileView />
</div>


                </div>
            </div>
        </div>
    );
}

export default Home;
