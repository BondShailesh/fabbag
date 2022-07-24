import React from 'react'
import {
    Box,
    Heading,
    Text,
    Button,
    Container,
    VStack,
} from '@chakra-ui/react'

function Plan() {
  return (
    <div>
         <Container>
                    <VStack
                        border="1px solid grey"
                        w="310px"
                        mt="20px"
                    >
                        <Box p="16px">
                            <Heading fontSize="23px" fontWeight="medium">1 MONTH</Heading>
                            <Text>SUBSCRIPTION</Text>
                        </Box>

                        <hr
                            style={{
                                width: "100%",
                                border: "1px solid grey",
                            }} />

                        <Box p="16px">
                            <Heading fontSize="23px" fontWeight="medium">Rs.599.00</Heading>
                            <Text>/per month</Text>
                        </Box>

                        <hr
                            style={{
                                width: "100%",
                                border: "1px solid grey",
                            }} />

                        <Box h="200px">
                            <Heading fontSize="13px" fontWeight="medium" color="rgb(248,147,30)">ONE TIME PAYMENT</Heading>
                            <Heading fontSize="23px">Rs.599.00</Heading>
                        </Box>

                        <Box
                            bg="rgb(230,187,101)"
                            w="100%"
                            h="60px"
                            display="flex"
                            justifyContent="center"
                            alignItems="center">
                            <Button alignSelf='center' color="white" bg="rgb(230,187,101)" w="90%" border="1px solid white">ADD TO CART</Button>
                        </Box>
                    </VStack>
                </Container>
    </div>
  )
}

export default Plan