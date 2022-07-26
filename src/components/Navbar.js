import { Anchor, Mail, Notifications} from '@mui/icons-material';
import { AppBar, Avatar, Badge, Box, InputBase, styled, Toolbar, Typography } from '@mui/material'
import React from 'react';

const StyledToolbar=styled(Toolbar)({
  display:"flex",
  justifyContent:"space-between",
});

const Search=styled("div")(({theme})=>({
  backgroundColor:"white",
  padding:"0 10px",
  borderRadius:theme.shape.borderRadius,
  width:"40%",
}));

const Icons=styled(Box)(({theme})=>({
  display:"none",
  gap:"20px",
  alignItems:"center",
  [theme.breakpoints.up("sm")]:{
    display:"flex"
  }
}));

const UserBox=styled(Box)(({theme})=>({
  display:"flex",
  gap:"10px",
  alignItems:"center",
  [theme.breakpoints.up("sm")]:{
    display:"none"
  }
}));

export const Navbar = () => {
  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography variant='h6' sx={{display:{xs:"none",sm:"block"}}}>Poojan</Typography> 
        <Anchor sx={{display:{xs:"block",sm:"none"}}}/>
        <Search><InputBase placeholder='Search....'/></Search>
        <Icons>
          <Badge badgeContent={4} color="error">
              <Mail/>
          </Badge>
          <Badge badgeContent={4} color="error">
              <Notifications />
          </Badge>
          <Avatar sx={{width:30, height:30}} />
        </Icons>
        <UserBox>
          <Avatar sx={{width:30, height:30}}/>
          <Typography>Poojan Patel</Typography>
        </UserBox>
      </StyledToolbar>
    </AppBar>
  )
}
