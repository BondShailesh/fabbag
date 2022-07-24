import React from 'react'
import { Box, Button, Grid, GridItem, Heading, Input, Stack, Text } from '@chakra-ui/react'
import { BsFacebook, BsTwitter, BsInstagram, BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom"
function Footer() {
    return (
        <div style={{
            marginTop: "80px",
            textAlign: "start",
            color: "grey",
            marginTop: "80px",
            zIndex: "99",
            boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px",
            paddingBottom: "35px"
        }}>
            <Grid
                templateColumns='repeat(3, 1fr)'
                gap={6}
                w="80%"
                m="auto"
                lineHeight="32px"
                _hover={{
                    cursor: "pointer"
                }}
                pt="70px"
            >
                <GridItem w='100%'  >
                    <Heading
                        fontSize="21px"
                        fontWeight="medium"
                        color="black"
                        p="23px 0">INFORMATION</Heading>
                    <Text>About Us</Text>
                    <Text>Associated brands</Text>
                    <Text>FAQ</Text>
                    <Text>Collaborate with Fabbag</Text>
                    <Text>Contacts</Text>
                    <Text>Returns and Refunds</Text>
                    <Text>Terms and Conditions</Text>
                    <Text>Privacy and Policy</Text>
                </GridItem>
                <GridItem w='100%'  >
                    <Heading
                        fontSize="21px"
                        fontWeight="medium"
                        color="black"
                        p="23px 0">CUSTOMER CARE</Heading>
                    <Text mb="0">Call : 022-6805-6010</Text>
                    <Text mt="0">(Monday to friday : 9AM to 7PM)</Text>
                    <Text>Mail : crew@fabbag.com</Text>
                </GridItem>

                <GridItem w='100%'  >
                    <Heading
                        fontSize="21px"
                        fontWeight="medium"
                        color="black"
                        p="23px 0">NEWSLETTER</Heading>
                    <Text mb="0">Signup for the latest offers, updates and news</Text>

                    <Box display="flex" m="21px 0">
                        <Input
                            borderRadius="5px"
                            mr="15px"
                            boxShadow='xl'
                            placeholder='Your email address'
                            pl="2px" />

                        <Button size="md"
                            fontSize="13px"
                            color="white"
                            bg="rgb(230,187,101)"
                        >SUBSCRIBE</Button>
                    </Box>

                    <Text>Don’t worry we don’t spam</Text>
                </GridItem>
            </Grid>
            <Stack w="30%" m="auto" mt="30px">
                <Box
                    display="flex"
                    justifyContent="space-evenly"
                    w="60%"
                    m="auto"
                    pb="10px"
                    _hover={{
                        cursor: "pointer",
                    }}>
                    <a href="https://www.facebook.com/fabbag" target="_blank" rel="noreferrer">
                        <BsFacebook />
                    </a>
                    <a href="https://twitter.com/thefabbag" target="_blank" rel="noreferrer">
                        <BsTwitter />
                    </a>
                    <a href="https://www.instagram.com/thefabbag/" target="_blank" rel="noreferrer">
                        <BsInstagram />
                    </a>
                    <a href="https://www.youtube.com/fabbag" target="_blank" rel="noreferrer">
                        <BsYoutube />
                    </a>
                </Box>
                <Text>Copyright © 2021 fabbag.com All rights reserved.</Text>
            </Stack>
        </div>
    )
}

export default Footer