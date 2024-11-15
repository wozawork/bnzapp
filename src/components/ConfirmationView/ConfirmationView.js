import React, { useState, useEffect } from 'react';
import './ConfirmationView.css';
import CircularProgress from '@mui/material/CircularProgress';

export default function ConfirmationView() {

  const [isOpen, setIsOpen] = useState(false);
  const changeOpen = () => {
    setIsOpen(true)
  }
  useEffect(() => {
    setTimeout(() => changeOpen(), 3000);
  });

  return (<div style={{ display: 'flex', justifyContent: 'center' }}>
    {
      isOpen ?
        <>Thank you, your information was sent.</>
        : <CircularProgress />
    }
  </div>
  );
}