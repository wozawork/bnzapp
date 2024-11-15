/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from 'react';
import './Login.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import biocatchSVG from '../../utils/assets/biocatch-svg.svg';
import { Link } from 'react-router-dom';
import { PAGE_CONTEXT, PAGE_NAME } from '../../utils/constans';
import { UserContext } from '../../utils/Context/UserContext';
import {
  changeContext,
  setCustomerSessionId,
  getTheCSID,
  performFlush,
} from '../../utils/sdk';

export default function Login() {
  const { setUserState } = useContext(UserContext);
  const [userName, setUserName] = useState('');

  function changeUserData(e) {
    const inputData = e.target.value;
    if (e.target.id === 'login-username') {
      setUserName(inputData);
    }
  }

  function submitHandle() {
    if (userName.length >= 2) {
      setUserState(userName);
      setCustomerSessionId(getTheCSID());
    }
  }

  useEffect(() => {
    changeContext(PAGE_CONTEXT.LOGIN);
    // setCustomerSessionId(getTheCSID());
  }, []);

  
  return (
    <div className="fadeIn">
      <img
        className="biocatchSVG fadeIn"
        src={biocatchSVG}
        alt="Biocatch SVG"
      />
      <div className="login-form">
        <TextField
          data-bb="login-username"
          id="login-username"
          data-automation-id="custom_username"
          name="username"
          label="User Name"
          variant="outlined"
          onChange={(e) => changeUserData(e)}
        />
        <TextField
          data-bb="login-password"
          id="login-password"
          data-automation-id="custom_password"
          type="password"
          label="Password"
          variant="outlined"
          onChange={(e) => changeUserData(e)}
        />
        <div className="submit-btn">
          <Link to={PAGE_NAME.ACCOUNT_DASHBOARD}>
            <Button
              data-bb="login-submit-button"
              id="SubmitLogin"
              variant="outlined"
              // trigger a flush function befoar click the button.
              // https://docs.biocatch.com/docs/ios-optional-functions?highlight=flush
              onMouseOver={() => performFlush()}
              onClick={() => submitHandle()}
            >
              Login
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
