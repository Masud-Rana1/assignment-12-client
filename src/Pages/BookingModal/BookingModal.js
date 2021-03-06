import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import TextField from '@mui/material/TextField';
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import useAuth from "../../Hooks/useAuth";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const BookingModal = ({openBuy, handleBuyClose,product}) => {
  const {name , price} = product;
  const {user} = useAuth();

const initialInfo = {name: user.displayName, email: user.email, phone: ''}
  const [buyInfo, setBuyInfo] = useState(initialInfo);
const handleOnBlur = e => {
  const field = e.target.name;
  const value = e.target.value;
  const newInfo = {...buyInfo};
  newInfo[field] = value;
  console.log(newInfo);
  setBuyInfo(newInfo);
}
  const handleBuySubmit = e => {
      //collect data
      const order = {
        ...buyInfo,
        name,
        price
      }

      // send to the database
      fetch('https://ancient-coast-36281.herokuapp.com/orders', {
        method: 'POST',
        headers: {
          'content-type' : 'application/json'
        },
        body: JSON.stringify(order)
      })
      .then(res => res.json())
      .then(data => {
        if(data.insertedId){
          handleBuyClose();
          alert("buy successful");
        }
      })
      
      e.preventDefault();
  }
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={openBuy}
      onClose={handleBuyClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={openBuy}>
        <Box sx={style}>
          <Typography id="transition-modal-title" variant="h6" component="h2">
            {name}
          </Typography>
          <form onSubmit={handleBuySubmit}>
          <TextField
          disabled
          sx={{width:'90%', m:1}}
          id="outlined-size-small"
          defaultValue=  {name} 
          size="small"
        />
          <TextField
          disabled
          sx={{width:'90%', m:1}}
          id="outlined-size-small"
          defaultValue=  {price} 
          size="small"
        />
          <TextField
          
          sx={{width:'90%', m:1}}
          id="outlined-size-small"
          name="name"
          onBlur={handleOnBlur}
          defaultValue={user.displayName}
          size="small"
        />
          <TextField
          
          sx={{width:'90%', m:1}}
          id="outlined-size-small"
          name="email"
          onBlur={handleOnBlur}
          defaultValue={user.email}
          size="small"
        />
          <TextField
          
          sx={{width:'90%', m:1}}
          id="outlined-size-small"
          name="phone"
          onBlur={handleOnBlur}
          placeholder=  "Your Phone" 
          size="small"
        />
        <Button variant="contained" type="submit">Submit</Button>
          </form>
        </Box>
      </Fade>
    </Modal>
  );
};

export default BookingModal;
