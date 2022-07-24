import { Box, Heading, Stack, Text, Input, Button } from '@chakra-ui/react'
import React from 'react'
import { useContext } from 'react';
import { BsGoogle, BsFacebook } from "react-icons/bs";
import { Link, Navigate } from "react-router-dom"
import { searchContext } from '../context/IconContext';

function SignIn() {
  const {login,setLogin} = useContext(searchContext);
   const handleLogin = ()=>{
    <Navigate to="/" />
    setLogin(true);
    console.log(login);
     
   }
  return (
    <Stack
      width="27%"
      margin="auto"
      background="white"
      mt="70px"
      textAlign="start"
      mb="50px"
    >

      <Heading fontWeight="medium" textAlign="center" m="35px">SignIn</Heading>

      <Button
        display="flex"
        justifyContent="space-between"
        bg="rgb(221,75,57)"
        color="white">
        Sign in with Facebook
        <BsFacebook size="24" />
      </Button>

      <Button
        display="flex"
        justifyContent="space-between"
        bg="rgb(59,89,152)"
        color="white">
        Sign in with Google
        <BsGoogle size="24" />
      </Button>

      <Text p="13px">Email Address</Text>
      <Input placeholder='Basic usage' />
      <Text p="13px">Password</Text>
      <Input placeholder='Basic usage' />

      <Box
        display="flex"
        justifyContent="space-between"
        p="20px 0">
        <Text color="red">Required Fields</Text>
        <Text > <Link to="/"> Forgot your Passowrd?</Link></Text>
      </Box>

      <Button onClick={handleLogin} bg="rgb(230,187,101)">Sign in</Button>

      <Box
        display="flex"
        justifyContent="space-evenly"
        p="34px 0 23px 0">
        <hr style={{ width: "30%" }} />
        <Text mt="-20px" fontSize="20px">or</Text>
        <hr style={{ width: "30%" }} />
      </Box>

      <Button
        bg="rgb(230,187,101)">Create an Account</Button>
    </Stack>
  )
}

export default SignIn