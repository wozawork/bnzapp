import React, { useState } from 'react';
import { Box, Button, TextField, MenuItem, Select, FormControl, InputLabel, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';
import DatePicker from 'react-datepicker'; // Import DatePicker from react-datepicker
import 'react-datepicker/dist/react-datepicker.css'; // Import CSS for react-datepicker
import { useNavigate } from 'react-router-dom'; // Import useNavigate for programmatic navigation
import { useEffect } from 'react';
import { PAGE_CONTEXT } from '../../utils/constans';
import { changeContext } from '../../utils/sdk';

export default function PaymentPage() {
  const [open, setOpen] = useState(true);
  const [date, setDate] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate hook


  useEffect(() => {

   changeContext(PAGE_CONTEXT.PAYMENT_TRANSFER);

  }, []);


  const handleClose = () => {
    setOpen(false); // Close the modal
    navigate("/");
  };

  const handleSubmit = () => {
    // Handle form submission here
    console.log("Form submitted");
    setOpen(false); // Close the modal
    navigate("/payment-confirm");
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
      <DialogTitle>Payment Entry Form</DialogTitle>
      <DialogContent>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <FormControl fullWidth>
            <InputLabel>From</InputLabel>
            <Select defaultValue="" label="From">
              <MenuItem value="account1">Account 1</MenuItem>
              <MenuItem value="account2">Account 2</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel>To</InputLabel>
            <Select defaultValue="" label="To">
              <MenuItem value="payee1">Payee 1</MenuItem>
              <MenuItem value="payee2">Payee 2</MenuItem>
            </Select>
          </FormControl>

          <TextField label="Amount" type="number" fullWidth />

          <FormControl fullWidth>
            <InputLabel>Date</InputLabel>
            <DatePicker
              selected={date}
              onChange={(newDate) => setDate(newDate)}
              customInput={<TextField fullWidth />} // Use TextField as custom input
            />
          </FormControl>

          <FormControl fullWidth>
            <InputLabel>Repeat</InputLabel>
            <Select defaultValue="" label="Repeat">
              <MenuItem value="repeat">Repeat</MenuItem>
              <MenuItem value="no-repeat">No Repeat</MenuItem>
            </Select>
          </FormControl>

          <Box sx={{ border: '1px solid gray', padding: 2 }}>
            <Typography variant="h6">For Your Statement</Typography>
            <TextField label="Particulars" fullWidth margin="normal" />
            <TextField label="Code" fullWidth margin="normal" />
            <TextField label="Reference" fullWidth margin="normal" />
          </Box>

          <Box sx={{ border: '1px solid gray', padding: 2, marginTop: 2 }}>
            <Typography variant="h6">For Your Payee</Typography>
            <TextField label="Particulars" fullWidth margin="normal" />
            <TextField label="Code" fullWidth margin="normal" />
            <TextField label="Reference" fullWidth margin="normal" />
          </Box>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button> {/* Close modal on Cancel */}
        <Button onClick={handleSubmit}>Pay or Transfer</Button>
      </DialogActions>
    </Dialog>
  );
}
