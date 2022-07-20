import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    useDisclosure,
    CloseButton,
    Button,
    Box
  } from '@chakra-ui/react'


export function AlertA() {
    const {
      isOpen: isVisible,
      onClose,
      onOpen,
    } = useDisclosure({ defaultIsOpen: true })
  
    return isVisible ? (
      <Alert status='success'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      textAlign='center'
      p="7px"
      color="white"
      bg="black"
      >
        <Box display="flex" justifyContent="center">

          <AlertDescription 
          p="0"
          m="0"
          >
           AVAILABLE NOW-THE BEAUTI BUNDLE JULY FAB BAG!
          </AlertDescription>


        </Box>
        
        <CloseButton 
          alignSelf='flex-end'
          position='absolute'
          right={1}
          top={1}
          onClick={onClose}
        />
      </Alert>
    ) : (
    //   <Button  onClick={onOpen}></Button>
    <Box/>
    )
  }