import React,{useContext} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { MyContext } from '../UserProvider';



const Alert:React.FC=()=> {

  const {open,setOpen}=useContext(MyContext);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));


  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle  sx={{color:'red'}}>
          {"Unauthorized access!"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText sx={{color:'brown'}}>
            You have to register first
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Ok, Got it</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Alert;