import React, { useEffect } from 'react';
import './PathSelection.css';
import AO from '../../utils/assets/AO.jpg';
import ATO from '../../utils/assets/ATO.jpg';
import { changeContext, smartLoad, getTheCSID } from '../../utils/sdk';

export default function PathSelection(props) {

  function AoClick() {
    props.setView('AO')
    smartLoad(
      "https://bcdn-4ff4f23f.we-stats.com/scripts/4ff4f23f/4ff4f23f.js",
      getTheCSID(),
      'AO-Page')
  }

  function AtoClick() {
    props.setView('ATO')
    smartLoad(
      "https://bcdn-4ff4f23f.we-stats.com/scripts/4ff4f23f/4ff4f23f.js",
      getTheCSID(),
      'Login-Page')
  }

  useEffect(() => {
    changeContext('Path_Select');
  });
  
  return (
    <div className='PathSelection-main-container fadeIn'>
      <div>
      <div className='PathSelection-title'>
          Choose your destination:
      </div>
      </div>
      <div className='flex'>
        <div className='imageContainer' onClick={() => AoClick()}>
          <img src={AO} className='selection-images' alt='AO-logo'></img>
          <div className="inner-img-text-container">
            <div className="innerImgText">AO</div>
          </div>
        </div>
        <div className='imageContainer' onClick={() => AtoClick()}>
          <img src={ATO} className='selection-images' alt='ATO-logo'></img>
          <div className="inner-img-text-container">
            <div className="innerImgText">ATO</div>
          </div>
        </div>
      </div>
    </div>
  );
}