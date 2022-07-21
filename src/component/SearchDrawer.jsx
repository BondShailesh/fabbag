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
            <DrawerHeader>Create your account</DrawerHeader>
  
            <DrawerBody>
              <Input placeholder='Search product' />
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue'>Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }