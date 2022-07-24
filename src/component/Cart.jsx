import React from "react"
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Box,
  Flex,
  Heading,
  Text
} from '@chakra-ui/react'
import { useContext, useEffect } from "react"
import { searchContext } from "../context/IconContext"
import { CartContext } from "../context/FabContext"
import { useState } from "react"

export function Cart() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  const { cartState, handleCart } = useContext(searchContext);
  const { cartstate } = useContext(CartContext)

  useEffect(() => {
    if (cartState) {
      onOpen()
    }
    handleCart(false)
  }, [cartState]);

  return (
    <  >
      <Button display="none" ref={btnRef} colorScheme='teal' onClick={() => onOpen()}>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton color="white" m="23px 8px" />
          <DrawerHeader p="30px 10px" bg="black" color="white">MY CART</DrawerHeader>

          <DrawerBody>
            {cartstate.carts.map((el) => (

              <Box color="black" display="flex" justifyContent="space-evenly" >
                <Box>
                  <img src={el.image} alt=""
                    style={{ width: "60px" }} />
                </Box>

                <Box p="14px ">
                  <Heading fontWeight="light" fontSize="16px">{cartstate.carts[0].title}</Heading>
                  <Box display="flex">
                    <Text color="grey">qty: {el.totalItem}</Text>
                    <Text p="0 6px">Rs {el.price}</Text>
                  </Box>
                </Box>

              </Box>
            ))}

          </DrawerBody>

          <DrawerFooter flexDirection="column" >
            <Flex
              border="0.5px solid grey"
              display="flex"
              justifyContent="space-between"
              w="117%"
              p="18px"
              mb="19px"
            >
              <Box >
                <Heading fontSize="22px">Total:</Heading>
              </Box>
              <Box>
                <Heading fontSize="22px" color="rgb(230,187,101)">Rs 599.00</Heading>
              </Box>
            </Flex>

            <Button
              w="117%"
              m="10px 0"
              size="lg"
              bg="white"
              border="1px solid black"
              fontSize="15px"
              color="grey"
              onClick={onClose}>
              VIEW CART
            </Button>
            <Button
              w="117%"
              bg="rgb(230,187,101)"
              mb="-16px"
              size="lg"
            >CHECKOUT</Button>
          </DrawerFooter>

        </DrawerContent>
      </Drawer>
    </>
  )
}