import React from 'react'
import { Img, Text, Grid, GridItem } from '@chakra-ui/react';

function BeautiBundle() {
    return (
        <div>
            <Grid templateColumns='repeat(4, 1fr)' gap={6} ml="10px">

                <GridItem
                    w='100%'
                    h='10'>
                    <Img
                        borderRadius="40px"
                        border="4px solid rgb(230,187,101)"
                        src="https://cdn.shopify.com/s/files/1/0052/7551/6995/files/What_s-In-The-Bag-1_914eb815-9c7e-4ca1-ad10-39708a1afb45_2048x.png?v=1656613248" />
                    <Text m="8px 0" fontSize="20px">BEAUTY BUNDLE 1</Text>
                </GridItem>

                <GridItem
                    w='100%'
                    h='10'>
                    <Img
                        borderRadius="40px"
                        border="4px solid rgb(230,187,101)"
                        src="https://cdn.shopify.com/s/files/1/0052/7551/6995/files/What_s-In-The-Bag-02_a0530e7f-1a15-4464-9352-b976da7c39ec_2048x.png?v=1656613307" />
                    <Text m="8px 0" fontSize="20px">BEAUTY BUNDLE 2</Text>
                </GridItem>

                <GridItem
                    w='100%'
                    h='10'>
                    <Img
                        borderRadius="40px"
                        border="4px solid rgb(230,187,101)"
                        src="https://cdn.shopify.com/s/files/1/0052/7551/6995/files/What_s-In-The-Bag-03_d1a367d9-0873-4e30-b3a6-434ad508a503_2048x.png?v=1656613363" />
                    <Text m="8px 0" fontSize="20px">BEAUTY BUNDLE 3</Text>
                </GridItem>
            </Grid>
        </div>
    )
}

export default BeautiBundle