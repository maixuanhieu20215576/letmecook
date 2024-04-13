import React from "react";
import "./signup.css"
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';


import { Button, TextField } from "@mui/material";
const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });
export default function SignUp() {
    return (
        <>
        <div className="bgimage"> </div>
        
        <div className="signupbox">
            <h1> Đăng ký  </h1>
            <TextField className="field" label="Tên đăng nhập" variant="outlined" color='success' size='small' sx={{}}/>
            <TextField className="field" label="Mật khẩu" variant="outlined" size='small' color='success' sx={{ mt: 2 ,mb : 3}}    />
            <Button
  component="label"
  role={undefined}
  variant="contained"
  tabIndex={-1}
  startIcon={<CloudUploadIcon />}
  sx ={{mb: 2}}
>
  ẢNH ĐẠI DIỆN
  <VisuallyHiddenInput type="file" />

</Button>
<canvas id="myCanvas" > </canvas>

          <div> <Button id="button" variant="contained" color='success' size='medium' >Đăng ký</Button></div> 
        </div>
        </>
    );
};