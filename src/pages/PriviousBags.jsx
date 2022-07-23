import React from 'react'
import { Grid, GridItem, Text } from '@chakra-ui/react'

function PriviousBags() {
    return (
        <div style={{ width: '80%', margin: "auto", textAlign: "start" }}>
            <Grid templateColumns='repeat(4, 1fr)' gap={6}>

                <GridItem w='100%'  >
                    <img
                        src="https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Women_sPage-2---Skincare-3_large.gif?v=1655088937"
                        alt="Image One"
                        style={{ width: "240px" }}
                    />
                    <Text pt="17px">    Jun'22 The Make It Reign Fab Bag</Text>
                    <Text color="grey" p="6px 0">From Rs.599.00</Text>
                </GridItem>
                <GridItem w='100%'  >
                    <img
                        src="https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Skincare-2-With-BONUS_large.gif?v=1652238042"
                        alt="Image One"
                        style={{ width: "240px" }}
                    />
                    <Text pt="17px">    May'22 The Awesummer May Fab Bag</Text>
                    <Text color="grey" p="6px 0">From Rs.599.00</Text>
                </GridItem>

                <GridItem >
                    <img
                        src="https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Women_sPage-Skincare-Reveal-3_1728264b-2e0f-4314-9a3c-0fde458d72a7_large.png?v=1649483317"
                        alt="Image One"
                        style={{ width: "240px" }}
                    />
                    <Text pt="17px">    Jun'22 The Make It Reign Fab Bag</Text>
                    <Text color="grey" p="6px 0">From Rs.599.00</Text>
                </GridItem>

                <GridItem w='100%' >
                    <img
                        src="https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Women_sPage-Skincare-Reveal-3_large.png?v=1646971494"
                        alt="Image One"
                        style={{ width: "240px" }}
                    />
                    <Text pt="17px">    Jun'22 The Make It Reign Fab Bag</Text>
                    <Text color="grey" p="6px 0">From Rs.599.00</Text>
                </GridItem>

            </Grid>
        </div>
    )
}

export default PriviousBags