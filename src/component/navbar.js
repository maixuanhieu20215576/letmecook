import React, { useState } from "react"
import logo from '../image/logo.png';
import { Box, Button, Modal, TextField, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import LoginIcon from '@mui/icons-material/Login';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  
  
  
  const Search = styled('div')(({ theme }) => ({
    maxHeight: '80%',
    marginTop: '0.5%',
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.35),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: '10% !important',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(5)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '25ch',
        '&:focus': {
          width: '30ch',
        },
      },
    },
  }));
export default function Navbar(){
    const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
return (
    <>
    
<div className='navbar' >
        <img src={logo} className='logo' alt="Logo" />
        <Button variant="contained" startIcon={<AddIcon />} className='add'>
          Thêm thực đơn
        </Button>
        <Search>
          <SearchIconWrapper className='search-bar'>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Nhập nguyên liệu của bạn…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
        <Button className='login' variant="contained" color="error" size='large' startIcon={<LoginIcon />} onClick={handleOpen}>
          Đăng nhập
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h5" component="h2" >
              Đăng nhập
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <TextField id='username' label="Tên đăng nhập" variant="outlined" color='warning'   />
            <TextField  id='password' label="Mật khẩu" variant="outlined" color='warning' sx={{ mt: 1 }}/>
            </Typography>
            <Button variant="contained" color="success" sx={{ mt: 2 }} startIcon={<LoginIcon />}>
  Đăng nhập
</Button>


        <Button variant="contained" color="error" sx={{ mt: 2, ml: 3 }} href='/signup'>
          Đăng ký ngay!
        </Button>


          </Box>
        </Modal>
      </div>

      
    </> );
}