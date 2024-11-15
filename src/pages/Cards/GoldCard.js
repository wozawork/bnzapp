import React, { useState, useEffect } from 'react';
import './GoldCard.css';
import smallCreditCard from '../../utils/assets/smallCreditCard.png';
import GoldNew from '../../utils/assets/GoldNew.png';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { changeContext } from '../../utils/sdk';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import ConfirmationView from '../../components/ConfirmationView/ConfirmationView';
import { Link } from 'react-router-dom';
import { PAGE_CONTEXT, PAGE_NAME } from '../../utils/constans';
import TextInput from '../../components/Atomic/TextInput/TextInput';

export default function GoldCard() {
  const [isAgree, setIsAgree] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    changeContext(PAGE_CONTEXT.GOLD_CARD);
  }, []);

  return (
    <div className="GoldCardForm-Container fadeIn">
      <div className="gold-card-main-content">
        <div className="form-container">
          <div className="back-button">
            <Link to={PAGE_NAME.CREDIT_CARDS}>
              <ArrowBackIcon />
            </Link>
          </div>
          <div className="form-header">
            <img
              src={smallCreditCard}
              className="smallCreditCard-img"
              alt="Gold-Credit-Card"
            ></img>
            <div>Apply For Gold Card</div>
          </div>
          <div className="form-content">
            {isSubmit ? (
              <ConfirmationView />
            ) : (
              <FormGroup>
                <div>
                  <TextInput text="Full Name" />
                  <TextInput text="Name On Card" />
                  <TextInput text="Email Address" />
                  <TextInput text="Date Of Birth" />
                  <TextInput text="Phone Number" />
                  <TextInput text="Home Address" />
                  <TextInput text="Id Number" />
                  <TextInput text="Total Annual Income" />
                  <TextInput text="Income Source" />
                </div>
                <div>
                  <Checkbox
                    onClick={() => setIsAgree(!isAgree)}
                    data-bb="agree-checkbox"
                  />
                  Agree to Terms and Conditions
                </div>
                {isAgree ? (
                  <Button
                    variant="contained"
                    onClick={() => setIsSubmit(true)}
                    data-bb="submit-gold-card-button"
                  >
                    Submit
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    disabled
                    data-bb="submit-gold-card-button-disable"
                  >
                    Submit
                  </Button>
                )}
              </FormGroup>
            )}
          </div>
        </div>
        <div className="right-column">
          <img
            src={GoldNew}
            className="creditCardImg gold"
            alt="Gold-Credit-Card"
          ></img>
          <div style={{ textAlign: 'left' }}>
            <h2>DemoBank Gold</h2>
            <span style={{ fontSize: '0.9rem' }}>
              A simple everyday credit card with 0$ annual fee in the first year
              and complimentary insurance.
            </span>
            <hr style={{ width: '50px', marginLeft: 0 }} />
            <h2>First Year Benefits</h2>
            <h2>0$ Annual Fee</h2>
            <h2>Complimentary Insurance</h2>
            <hr style={{ width: '', marginLeft: 0 }} />
            <span style={{ fontSize: '0.7rem' }}>
              Welcome offer not available to applicants who have or have had
              this Card. We may also consider the number of BioBank Cards you
              have opened and closed as well as other factors in making a
              decision on your welcome offer eligibility.
            </span>
          </div>
        </div>
      </div>
      <div style={{ height: '100px' }}></div>
    </div>
  );
}
