import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMui from './MUIComponent.js/CardMui';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4, color:'white'
};

export default function KeepMountedModal(props) {
  console.log("modelprop",props.val);
  const { setOpen,open,handleOpen,handleClose} = props

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
        // style={{color:'#0D1118'}}
      >
        <Box sx={style}  style={{backgroundColor:'#0D1118', }}>
          <CardMui data={props.val} style={{color:'#0D1118'}}  />
        </Box>
      </Modal>
    </div>
  );
}