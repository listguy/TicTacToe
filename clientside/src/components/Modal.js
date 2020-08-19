import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
const axios = require('axios');

export default function WinModal(props) {
  const [open, setOpen] = useState(true);
  const date = new Date();
  const winner = props.winner ? 'O' : 'X';
  const winDate = `${date.toISOString().substring(0, 10)} ${date.toString().substring(16, 24)}`;
  let name = '';

  const handleClose = () => {
    if (!/[a-zA-Z]+/.test(name)) return;
    let winnerObj = {
        winnerName: name,
        date: winDate,
        duration: "winning time"
    } 
    axios.post('/api/scores', winnerObj);
    props.restartGame();
    setOpen(false);
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Congratulations {winner}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You is the winner! Please enter your name, that will be added to the holy scoreboard
          </DialogContentText>
          <TextField
            margin="dense"
            id="name"
            label="Your name"
            type="text"
            onChange={(e)=>name = e.target.value}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
