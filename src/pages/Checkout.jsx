import {
  Box,
  Flex,
  Input,
  Checkbox,
  Text,
  Select,
  Img,
  Button,
  Heading,
} from '@chakra-ui/react'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'

function Checkout() {

  return (
    <Flex
      display="flex"
      justifyContent="space-evenly"
      textAlign="start"
      m="50px 50px"
      bg="#FFFFFF"
    >
      <Box
        w="50%"
      >
        <Img src="https://cdn.shopify.com/s/files/1/0052/7551/6995/files/FABBAG-LOGO-FINAL.png?10537" alt="error"
          w="40%"
          m="auto"
          mt="-10px"
          mb="30px"
        />
        <Box display="flex" justifyContent="space-between">
          <Text p="12px 0" fontSize="21px">Contact information</Text>
          <Text>
            Already have an account? <Link to="/login">Log in</Link> </Text>
        </Box>
        <Input p="23px" placeholder='Email' />
        <Checkbox p="15px">	Email me with news and offers</Checkbox>
        <Text p="12px 0" fontSize="21px">Shipping address</Text>

        <Select p="23px 0" mt="-20px" placeholder='country/region'
          fontSize="19px">
          <option value='option1'>India</option>
          <option value='option2'>United Satte</option>
          <option value='option3'>China</option>
        </Select>
        <Box m="5px 0" mt="-10px" display="flex" justifyContent="space-evenly">
          <Input p="23px" m="3px" placeholder='First name' />
          <Input p="23px" m="3px" placeholder='Last name' />
        </Box>

        <Input p="23px" m="3px" placeholder='Company(optional)' />
        <Input p="23px" m="3px" placeholder='Address' />
        <Input p="23px" m="3px" placeholder='Apartment, Suite , etc (optional)' />

        <Box m="5px 0" display="flex" justifyContent="space-evenly">

          <Input p="21px" m="3px" placeholder='City' />

          <Select placeholder='state'>
            <option p="30px" value='option1'>West bangal</option>
            <option value='option2'>Bihar</option>
            <option value='option3'>Andaman Nikobar</option>
            <option value='option3'>Maharastra</option>
            <option value='option3'>Delhi</option>
          </Select>

          <Input p="23px" m="3px" placeholder='PIN code' />
        </Box>
        <Input p="23px" m="3px" placeholder='Phone' />
        <Checkbox p="7px">	Save this information for next time</Checkbox>

        <Box mt="29px" mb="60px" display="flex" justifyContent='space-between'>
          <Text>  <ChevronLeftIcon /> Return to cart</Text>
          <Button fontSize="16px" p="30px" bg="black" color="white">Countunue to Shipping</Button>
        </Box>
        <hr />
        <Box display="flex">
          <Text p="10px">Refund policy</Text>
          <Text p="10px">privacy policy</Text>
          <Text p="10px">Term of service</Text>
        </Box>
      </Box>


      <Box
        bg="rgb(247,247,247)"
        // h="100vh"
        w="35%"
        p="50px"
      >
        <Box display="flex" justifyContent="space-around">
          <Text>The Beauty Bundle July Fab Bag</Text>
          <Text>599</Text>
        </Box>
        <hr />
        <Box m="23px 0" display="flex" justifyContent="space-evenly">
          <Input p="23px 12px" bg="white" ml="0" placeholder='Discount code' m="0 13px"/>
          <Button size="lg" bg="grey">Apply</Button>
        </Box>
        <hr />
        <Box m="17px 0" display="flex" justifyContent="space-between">
          <Text>Subtotal</Text>
          <Text>₹599</Text>
        </Box>

        <Box m="17px 0" display="flex" justifyContent="space-between">
          <Text >Shipping</Text>
          <Text>Calculated at next step</Text>
        </Box>
        <hr />
        <Text fontSize="23px">Total</Text>
      </Box>
    </Flex>
  )
}

export default Checkout