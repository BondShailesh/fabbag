import { BsTwitter, BsGoogle, BsFacebook } from "react-icons/bs";
import React from 'react';
import styles from "./fab.module.css";
import { useState } from 'react';
import Form from "./Form";
import Description from "./Description";
import Plan from "./Plan";
import Return from "./Return";
import { useEffect } from "react";
import axios from "axios"
import {
    Box,
    Flex,
    Heading,
    Text,
    Button,
    Container,
} from '@chakra-ui/react'

function Subscribe() {
    const [des, setDes] = useState(true);
    const [plan, setPlan] = useState(false);
    const [ret, setRet] = useState(false);
    const [review, setReview] = useState(false)
    const [write, setWrite] = useState(false)
    const [data, setData] = useState({});
    const [item, setItem] = useState(1);
    
    const handleDis = () => {
        setDes(!des);
        setPlan(false)
        setRet(false)
        setReview(false)
    }
    const handleplan = () => {
        setPlan(!plan);
        setDes(false);
        setRet(false)
        setReview(false)
    }
    const handleRetrn = () => {
        setRet(!ret);
        setDes(false);
        setPlan(false)
        setReview(false)
    }

    const handleCustomer = () => {
        setReview(!review);
        setDes(false);
        setPlan(false)
        setRet(false)
    }

    const handleWriteRvw = () => {
        setWrite(!write)
    }

    useEffect(() => {
        axios.get("http://localhost:8080/products")
            .then((res) => {
                setData(res.data[0])
            })
    }, [])

    const handleSubmit = () => {
        axios.post("http://localhost:8080/carts", {
            title: data.title,
            image: data.image,
            description: data.description,
            price: data.price,
            totalItem: item
        })
            .then((res) => {
                alert(`${item} Product is added To the cart`)

            })
    }
    return (
        <Box>
            <Flex className={styles.SubscribeContainer}>
                <Box >
                    <img src={data.image} alt="error"
                        width="500px"
                    />
                </Box>
                <Box>
                    <Text>Home</Text>
                    <Heading p="22px 0" fontSize="29px" fontWeight="medium">{data.title}</Heading>
                    <Heading p="22px 0" fontSize="29px" fontWeight="medium">Rs. {data.price}</Heading>
                    <Text p="13px 0" color="grey">{data.description}</Text>
                    <Box className={styles.subsbutton} m="15px 0" fontWeight="bold">
                        <Button disabled={item == 1} onClick={() => setItem(item - 1)} bg="white">-</Button>
                        <Text >{item}</Text>
                        <Button onClick={() => setItem(item + 1)} bg="white">+</Button>
                    </Box>
                    <Box _hover={{ cursor: "pointer" }} onClick={handleSubmit} className={styles.cartbutton}>ADD TO CART</Box>
                    <Box className={styles.subsicon} mt="19px" color="grey">
                        <BsTwitter size="27" />
                        <BsFacebook size="22" />
                        <BsGoogle size="22" />
                    </Box>
                </Box>
            </Flex>

            <Flex className={styles.Desbuttons}>
                <Button onClick={handleDis} _focus={{ bg: "rgb(230,187,101)" }} fontSize="sm" borderRadius="20">DESCRIPTIONS</Button>
                <Button onClick={handleplan} _focus={{ bg: "rgb(230,187,101)" }} fontSize="sm" borderRadius="20">VIEW PLANS</Button>
                <Button onClick={handleRetrn} _focus={{ bg: "rgb(230,187,101)" }} fontSize="sm" borderRadius="20">RETURNS POLICY</Button>
                <Button onClick={handleCustomer} _focus={{ bg: "rgb(230,187,101)" }} fontSize="sm" borderRadius="20">CUSTOMERS RIVIEWS</Button>
            </Flex>

            {des && <Description />}
            {plan && <Plan />}
            {ret && <Return />}
            {review &&
                <Container>
                    <Box display="flex" justifyContent="space-between" mb="20px">
                        <Box>
                            <Heading pt="30px" pb="15px" fontSize="17px">Customer Reviews</Heading>
                            <Text>No reviews yet</Text>
                        </Box>
                        <Box pt="55px" color="rgb(230,187,101)">
                            <Text _hover={{ cursor: "pointer" }} onClick={handleWriteRvw}>Write a review</Text>
                        </Box>
                    </Box>
                    <hr />
                    <Form write={write} />
                </Container>
            }
        </Box>
    )
}

export default Subscribe