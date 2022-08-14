import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Link } from 'react-router-dom';

export default function AlertDialog({open,handleClose,score,total}) {
  return (
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        aria-disabled='true'
        disableEscapeKeyDown='true'
      >
        <DialogTitle id="alert-dialog-title">
          {"Your Score"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText  className='total-text' id="alert-dialog-description">
            {`${score} / ${total}`}
          </DialogContentText>
          <DialogContentText  className='total-text' id="alert-dialog-description">
            or
          </DialogContentText>
          <DialogContentText  className='total-text' id="alert-dialog-description">
            {Math.floor(score*100/total)}%
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button fullWidth  variant='outlined' color='primary' onClick={handleClose}>ok</Button>
          <Link to='/' className='navigate-link'>
              Go home
            </Link>
        </DialogActions>
      </Dialog>
  );
}
