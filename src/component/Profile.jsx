import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    Text
} from '@chakra-ui/react'
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';

function Profile() {
    return (
        <Menu  display="block" >
            <MenuButton as={Button} 
            bg="white"
             m="0" 
             p="0"
             textAlign="center">
            <CgProfile />
            <Text color="white">c</Text>
            </MenuButton>
            <MenuList color="black">
              <MenuItem>Languages: En Fr</MenuItem>
              <Link to="checkout">   <MenuItem>CheckOut</MenuItem></Link> 
              <Link to="signin">  <MenuItem>Sign In</MenuItem></Link> 
              <Link to="signup">  <MenuItem>Create An Account</MenuItem></Link> 
            </MenuList>
        </Menu>
    )
}

export default Profile