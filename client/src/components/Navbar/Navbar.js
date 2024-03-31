import React from 'react'
import { Stack, styled, Paper } from '@mui/material'

const Nav = styled(Stack)(({theme}) => ({
  backgroundColor : "transparent",
  flexDirection : 'row',
  margin : "0 0 0.5rem 0",
  padding : "0 2rem 0 1rem",
  justifyContent : "space-between",
  boxShadow : "0rem 0.5rem 0.2rem #D3D3D3",
  zIndex : 5,
  height : "3rem",
}));

const Logo = styled('p')(({theme}) => ({

}));

const Menu = styled('p')(({theme}) => ({
  display : "flex",
  flexDirection : "row",
  gap : "2rem",
}));

const MenuItem = styled('div')(({theme}) => ({

}));
const Navbar = () => {
  return (
    <Nav>
      <Logo>logo</Logo>
      <Menu>
        <MenuItem> Home </MenuItem>
        <MenuItem> About </MenuItem>
        <MenuItem> Home </MenuItem>
        <MenuItem> Sign In </MenuItem>
      </Menu>

    </Nav>
  )
}

export default Navbar
