import React from 'react'
import styles from "./fab.module.css"
import {
    Box,
    Flex,
    Heading,
    Stack,
    Text,
    ListItem,
    UnorderedList,
    Img,
} from "@chakra-ui/react"

function WishList() {
    return (
        <Flex className={styles.wishlistbox} >
            <Stack>
                <Text className={styles.wishlistHeading1}>Oops!</Text>
                <Text className={styles.wishlistHeading2}>We can't seem to find the page you're looking for.</Text>
                <Text className={styles.errorcode}>Error code: 404</Text>
                <Text >Here are some helpful links instead:</Text>
                <UnorderedList >
                    <ListItem p="0.1rem">Home</ListItem>
                    <ListItem p="0.1rem">About</ListItem>
                    <ListItem p="0.1rem">Contact Us</ListItem>
                    <ListItem p="0.1rem">Subscribe Now</ListItem>
                </UnorderedList>
            </Stack>
            <Flex className={styles.wishlistImg}>
                <Box>
               <Img src = "https://cdn.shopify.com/s/files/1/0052/7551/6995/files/404-Airbnb_final-d652ff855b1335dd3eedc3baa8dc8b69_large.gif?v=1548941346" alt="error" />
               </Box>
            </Flex>
        </Flex>
    )
}

export default WishList