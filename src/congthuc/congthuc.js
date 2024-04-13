import React from "react";
import "./congthuc.css"
import Navbar  from "../component/navbar";
import mon_an from "../image/thịt kho tàu.jpg";
import { Button, Chip, Divider, Grid } from "@mui/material";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : ' #ffffe6',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  }));
 
export default function Congthuc(){
    return (
        <>
        <Navbar     ></Navbar>
        <img src={mon_an} className="foodimg"></img>
        <Box sx={{ flexGrow: 1 }} className='box'>
        <Grid container spacing={2}>
  <Grid item xs={7} >
    <Item className="tenmon"> Thịt kho tàu</Item>
  </Grid>
  <Grid item xs={3} >
    
      <Button startIcon={<FavoriteBorderRoundedIcon/>} variant="contained" size="large" color="error" className="likebutton">
       Thêm vào yêu thích
      </Button>
   
  </Grid>
  <Grid item xs={7}>
    <Item> 
        <p className="nguyenlieu" >
            Nguyên Liệu </p>
<ul>
    <li>500 g thịt ba chỉ</li>
    <li>20 quả trứng cút</li>
    <li>Đường</li>
    <li>Mắm</li>
    <li>Nước lọc</li>
</ul>

    </Item>
    </Grid>
    <Grid item xs={7}> 
<Item>
<Divider className="divider">
    <Chip label="Bước 1" size="small" />
  </Divider>
  
Bật bếp luộc trứng trong lúc sơ chế thịt. Sau khi ướp thịt xong bóc trứng nữa là vừa đẹp
<Divider className="divider">
    <Chip label="Bước 2" size="small" />
  </Divider>
  
  Thịt ba chỉ rửa sạch, cắt khúc tầm 2 đốt ngón tay. Ướp với hành, tỏi băm, hạt nêm, tiêu, nước mắm, chút mật mía. Ướp 20-30p<Divider className="divider">
    <Chip label="Bước 3" size="small" />
  </Divider>
  
  Cho mật mía vào nồi thắng lên màu cánh gián thì đổ chút nước vào</Item>
    </Grid>
  
  </Grid>
 
 
  </Box>
        </>
    )
}