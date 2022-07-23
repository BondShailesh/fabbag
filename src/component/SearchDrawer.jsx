import React from "react"
import { useContext , useEffect } from "react"
import { searchContext } from "../context/IconContext"

import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    useRef,
    Button,
    Input
  } from '@chakra-ui/react'

 export function SearchDrawer() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef();

   const {state , Changestate} = useContext(searchContext);
useEffect(()=>{
    if(state){
        onOpen()
       }
       Changestate(false)   
},[state])

    return (
      <>
        <Button style={{display:"none"}} ref={btnRef} colorScheme='teal' onClick={()=>onOpen()}>
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='top'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader 
            color="grey"
            fontSize="13px"
            mt="110px"
            >
              WHAT ARE YOU LOOKING FOR?</DrawerHeader>
  
            <DrawerBody mb="120px">
              <Input border="1px solid white" p="40px" fontSize="34px" placeholder='Search product' />
            </DrawerBody>

          </DrawerContent>
        </Drawer>
      </>
    )
  }