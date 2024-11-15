import React, { useState, useEffect } from 'react';
import './PlatinumCard.css';
import smallCreditCard from '../../utils/assets/smallCreditCard.png';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import PlatinumNew from '../../utils/assets/PlatinumNew.png';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { changeContext } from '../../utils/sdk';
import FormGroup from '@mui/material/FormGroup';
import ConfirmationView from '../../components/ConfirmationView/ConfirmationView';
import { Link } from 'react-router-dom';
import { PAGE_CONTEXT, PAGE_NAME } from '../../utils/constans';
import TextInput from '../../components/Atomic/TextInput/TextInput';


export default function PlatinumCard() {
  const [isAgree, setIsAgree] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(()=>{
    changeContext(PAGE_CONTEXT.PLATINUM_CARD)
  },[])

  return (
    <div className='PlatinumCardForm-Container fadeIn'>
      <div className='platinum-card-main-content'>
        <div className='form-container'>
          <div className='back-button'>
            <Link to={PAGE_NAME.CREDIT_CARDS}>
              <ArrowBackIcon />
            </Link>
          </div>
          <div className='form-header'>
            <img src={smallCreditCard}
              className='smallCreditCard-img'
              alt='Platinum-Credit-Card'>
            </img>
            <div>Apply For Platinum Card</div>
          </div>
          <div className='form-content'>
            {isSubmit ? <ConfirmationView /> :
              <FormGroup>
                <TextInput text='Full Name' />
                <TextInput text='Name On Card' />
                <TextInput text='Email Address' />
                <TextInput text='Home Address' />
                <TextInput text='Id Number' />
                <TextInput text='Total Annual Income' />
                <div>
                  <Checkbox onClick={() => setIsAgree(!isAgree)} />
                  Agree to Terms and Conditions
                </div>
                {isAgree ?
                  <Button variant="contained" onClick={() => setIsSubmit(true)}>Submit</Button> :
                  <Button variant="contained" disabled>Submit</Button>}
              </FormGroup>}
          </div>
        </div>
        <div className='right-column'>
          <img src={PlatinumNew} className='creditCardImg' alt='Platinum-Credit-Card'></img>
          <div style={{ textAlign: 'left' }}>
            <h2>DemoBank Platinum</h2>
            <span style={{ fontSize: '0.9rem' }}>
              A simple everyday credit card with a low
              ongoing annual fee.
            </span>
            <hr style={{ width: '50px', marginLeft: 0 }} />
            <h2>Card Benefits</h2>
            <h2>Low ongoing Annual Fee*</h2>
            <h2>affordable card for everyday use</h2>
            <hr style={{marginLeft: 0 }} />
            <span style={{ fontSize: '0.7rem' }}>
              Your annual fee will be determined by various
              risk factors, credit score, vocation and spending
              habits. DemoBank will evaluate those and offer the
              lowest card fee available.
            </span>
          </div>
        </div>
      </div>
      <div style={{ height: '100px' }}></div>
    </div>
  );
}

