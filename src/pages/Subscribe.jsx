import { Box, Flex, Heading, Text, Button, Stack } from '@chakra-ui/react'
import { BsTwitter, BsGoogle, BsFacebook } from "react-icons/bs";
import React from 'react';
import styles from "./fab.module.css";

function Subscribe() {
    return (
        <Box>
        <Flex className={styles.SubscribeContainer}>
            <Box >
                <img src="https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Women_sPage-1.gif?v=1656064858" alt="error"
                    width="500px"
                />
            </Box>
            <Box>
                <Text>Home</Text>
                <Heading>The Beauty Bundle July Fab Bag</Heading>
                <Heading>Rs. 599.00</Heading>
                <Text>Get ready to Pick'n'Roll. Put your beauty instincts to the test and choose between 3...</Text>
                <Box className={styles.subsbutton}>
                    <Button bg="white">-</Button>
                    <Text>1</Text>
                    <Button bg="white">+</Button>
                </Box>
                <Box className={styles.cartbutton}>ADD TO CART</Box>
                <Box className={styles.subsicon} >
                    <BsTwitter size="27" />
                    <BsFacebook size="22" />
                    <BsGoogle size="22" />
                </Box>
            </Box>
            </Flex>
            <Flex className={styles.Desbuttons}>
                <Button fontSize="sm" borderRadius="20">DESCRIPTIONS</Button>
                <Button fontSize="sm" borderRadius="20">VIEW PLANS</Button>
                <Button fontSize="sm" borderRadius="20">RETURNS POLICY</Button>
                <Button fontSize="sm" borderRadius="20">CUSTOMERS RIVIEWS</Button>
            </Flex>
        
        </Box>
    )
}

export default Subscribe