import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function FormDialog(props) {
  const [open, setOpen] = React.useState(false);
  // function handleClose() {
  //   setOpen(false);
    
  // }
  setOpen(props.setOpen);


  return (
    <div>
      <Dialog
        open={open}
        // onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Welcome</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You win!!! you had x tries
          </DialogContentText>
         
        </DialogContent>
        <DialogActions>
          <Button
          //  onClick={handleClose} 
           color="primary">
            Start A New Game
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
