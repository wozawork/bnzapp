/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useCallback, useContext } from 'react';
import './MyAccount.css';
import Button from '@mui/material/Button';
import { changeContext } from '../../utils/sdk';
import MakePayments from '../../components/MakePayments/MakePayment';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PaymentsIcon from '@mui/icons-material/Payments';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { UserContext } from '../../utils/Context/UserContext';
import { PAGE_CONTEXT, PAGE_NAME } from '../../utils/constans';
import { Link, useNavigate } from 'react-router-dom';

export default function MyAccount() {
  const { userState } = useContext(UserContext);
  const [view, setView] = useState('');
  const [time, setTime] = useState(300);
  const navigate = useNavigate();

  const makePaymentBtn = () => setView('Make_Payments');

  const mainSwitch = useCallback(() => {
    switch (view) {
      case 'Make_Payments':
        changeContext(PAGE_CONTEXT.MAKE_PAYMENT);
        return <MakePayments setView={setView} />;
      default:
        changeContext(PAGE_CONTEXT.ACCOUNT_DASHBOARD);
    }
  });

  useEffect(() => {
    if (time <= 0) {
      navigate(PAGE_NAME.LOGIN);
    }
    if (time <= 300) {
      const interval = setInterval(() => {
        setTime((prevCounter) => prevCounter - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [time]);

  return (
    <div className="MyAccount-container fadeIn">
      <div className="MyAccount-header">
        <div className="MyAccount-header-left">
          {userState.length > 1 ? `Welcome${' ' + userState}` : 'Welcome'}
        </div>
        <div className="MyAccount-header-right">
          <div>
            <AccountBalanceIcon style={{ width: '60px', height: '60px' }} />
          </div>
          <div className="AccountOver-header-balance">
            <div>Current balance</div>
            <div>$7,500.00</div>
          </div>
        </div>
        <div className="MyAccount-header-logout">
          <Link to={PAGE_NAME.LOGIN}>
            <Button sx={{ textTransform: 'none' }} data-bb="logout-button">
              <div className="displayFlex">
                {time <= 60 ? <div>{time}</div> : <></>}
                <AccountCircleIcon style={{ margin: 'auto' }} />
                <div>Logout</div>
              </div>
            </Button>
          </Link>
        </div>
      </div>
      <div className="MyAccount-content">
        <div className="MyAccount-content-left">
          <Button
            data-bb="open-make-payment-view"
            data-automation-id="open_make_payment_view"
            id="open_payment_page"
            variant="outlined"
            className="user-action-btn"
            onClick={() => makePaymentBtn()}
          >
            <PaymentsIcon />
            Make a Payments
          </Button>
        </div>
        <div className="MyAccount-content-right">{mainSwitch()}</div>
      </div>
    </div>
  );
}
