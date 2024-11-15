import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { changeContext } from '../../utils/sdk';
import './MakePayment.css';
import { postApi } from '../../utils/sdk';
import { ACTION, PAGE_CONTEXT } from '../../utils/constans';

export default function MakePayments(props) {
  const [state, setState] = useState(false);
  const [payee, setPayee] = useState('');

  const handleChange = (event) => {
    setPayee(event.target.value);
  };

  function makePayment() {
    setState(true);
    postApi(ACTION.INIT);
  }

  useEffect(() => {
    changeContext(PAGE_CONTEXT.MAKE_PAYMENT);
  }, []);

  return (
    <div className="MakePayments-container fadeIn">
      <h3>Make Payments</h3>
      <h5>Please select value to Pay to BioCatch...</h5>
      <Box width={300} style={{ margin: 'auto' }}>
        <Slider
          id="slider-amount"
          data-automation-id="slider_amount_input"
          defaultValue={0}
          aria-label="Default"
          valueLabelDisplay="auto"
        />
        <TextField
          id="amount"
          data-automation-id="slider_amount_input"
          label="Amount"
          variant="outlined"
        />
      </Box>
      <br />
      <FormControl style={{ width: '65%' }}>
        <InputLabel id="Payee-label">Payee</InputLabel>
        <Select
          labelId="Payee-label"
          id="selectPayee"
          data-automation-id="payee_dropdown"
          value={payee}
          label="Payee"
          onChange={handleChange}
        >
          <MenuItem value={'Payee-1'}>Payee-1</MenuItem>
          <MenuItem value={'Payee-2'}>Payee-2</MenuItem>
          <MenuItem value={'Payee-3'}>Payee-3</MenuItem>
        </Select>
      </FormControl>
      <br />
      <br />
      <Button variant="outlined" color="success" onClick={() => makePayment()}>
        Make Payment
      </Button>
      {state && (
        <div>
          <div className="success-payment">
            Payment was transfer to BioCatch
          </div>
          <div className="logout-btn">
            <Button variant="outlined" onClick={() => props.setView('')}>
              Done
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
