import React from 'react';
import { Box, Button, TextField, MenuItem, Select, FormControl, InputLabel, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import DatePicker from '@mui/x-date-pickers/DatePicker';
import { useState } from 'react';
import Typography from '@mui/material/Typography';

export default function Payment() {
  const [open, setOpen] = useState(true);
  const [date, setDate] = useState(null);

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    // Handle form submission here
    console.log("Form submitted");
    handleClose();
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
              value={date}
              onChange={(newDate) => setDate(newDate)}
              renderInput={(params) => <TextField {...params} />}
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
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Pay or Transfer</Button>
      </DialogActions>
    </Dialog>
  );
}
