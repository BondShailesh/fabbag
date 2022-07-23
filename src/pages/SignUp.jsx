import { Box, Heading, Stack, Text, Input, Button } from '@chakra-ui/react'
import React from 'react'
import { BsGoogle, BsFacebook } from "react-icons/bs";
import { Link } from "react-router-dom"
function SignUp() {
  return (
    <Stack
      width="27%"
      margin="auto"
      background="white"
      mt="70px"
      textAlign="start"
      mb="50px"
      color="grey"
    >

      <Heading color="black" fontSize="32px" fontWeight="medium" textAlign="center" m="35px">Create An Account</Heading>

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

      <Text p="5px 0">First name</Text>
      <Input />
      <Text p="5px 0">Last name</Text>
      <Input />

      <Text p="5px 0">Your Email Address</Text>
      <Input />
      <Text p="5px 0">Your Password</Text>
      <Input mb="67px" />
      <br />
      <Button bg="rgb(230,187,101)">Create an Account</Button>

      <Box
        display="flex"
        justifyContent="space-evenly"
        p="34px 0 23px 0">
        <hr style={{ width: "30%" }} />
        <Text mt="-20px" fontSize="20px">or</Text>
        <hr style={{ width: "30%" }} />
      </Box>

      <Button
        bg="rgb(230,187,101)">Sign in</Button>
    </Stack>
  )
}

export default SignUp