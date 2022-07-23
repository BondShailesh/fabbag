import { Heading, Text, VStack, Box, Stack, Button, Container } from '@chakra-ui/react'
import React from 'react'
import BeautiBundle from './BeautiBundle'
import { Menu } from './HorizontalScroll'
import PriviosBag from './PriviousBags'

function Homepage() {
    return (
        <Stack>
            <Heading
                mt="60px"
                mb="10px"
            >WHAT'S IN MY BEAUTY BUNDLE</Heading>
            <hr
                style={{
                    width: "40%",
                    margin: "auto",
                    border: "1.3px solid rgb(248,147,30)",
                    marginBottom: "60px"
                }} />

            <BeautiBundle />
            <Heading
                pt="370px"
                mb="10px"
                display="Block"
            >SUBSCRIPTION</Heading>

            <hr
                style={{
                    width: "20%",
                    margin: "auto",
                    border: "1px solid rgb(248,147,30)",
                    marginBottom: "60px"
                }} />


            <Container
            >
                <VStack
                    border="1px solid grey"
                    w="350px"
                    ml="400px"
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

            <Heading
                pt="90px"
                mb="10px"
                display="Block"
            >PRIVIOUS BAGS</Heading>

            <hr
                style={{
                    width: "20%",
                    margin: "auto",
                    border: "1px solid rgb(248,147,30)",
                    marginBottom: "60px"
                }} />
            <PriviosBag />
        </Stack>
    )
}

export default Homepage