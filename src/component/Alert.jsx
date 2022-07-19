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
      <Alert status='success'>
        <AlertIcon />
        <Box textAlign="center">
          {/* <AlertTitle>Success!</AlertTitle> */}
          <AlertDescription 
        alignSelf='center'
        textAlign='center'
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