import { PAGE_CONTEXT } from '../../utils/constans';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { changeContext } from '../../utils/sdk';
import React, { useEffect } from 'react';
export default function ConfirmPayment() {
  const navigate = useNavigate();

  useEffect(() => {
    changeContext(PAGE_CONTEXT.PAYMENT_CONFIRM);
  }, []);

  const handleConfirm = () => {
    navigate('/'); // Redirect to home after confirmation
  };

  return (
    <div style={styles.pageWrapper}>
      <div style={styles.container}>
        {/* Breadcrumbs for navigation */}


        {/* Payment confirmation message */}
        <h1 style={styles.heading}>Are you sure you want to make this payment?</h1>

        {/* Confirm button */}
        <Button
          variant="contained"
          color="primary"
          onClick={handleConfirm}
          style={styles.confirmButton}
        >
          Confirm
        </Button>
      </div>
    </div>
  );
}

const styles = {
  pageWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
  },
  container: {
    width: '400px',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    padding: '24px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    textAlign: 'center',
  },
  heading: {
    color: '#000', // Set the h1 color to black
    marginTop: '20px',
  },
  confirmButton: {
    marginTop: '20px',
  },
};
