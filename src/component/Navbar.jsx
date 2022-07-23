import React from 'react'
import { Box, Image, Flex, Heading, Spacer } from "@chakra-ui/react"
import { BsSearch, BsHeart, BsCart2 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import styles from "../pages/fab.module.css"
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { searchContext } from '../context/IconContext';
import { SearchDrawer } from './SearchDrawer';
import Profile from './Profile';
import { Cart } from './Cart';

function Navbar() {
  const {Changestate,handleCart} = useContext(searchContext)

  const handleSearch = () => {
    Changestate(true);
  }
 
  const handleCartchange = ()=>{
      handleCart(true)
  }
  return (
    <div
      className={styles.navbar}
    >
       <SearchDrawer/>
       <Cart/>
      <Flex
        boxShadow='2xl'
        p='9'
        rounded='md'
        bg='white'
        flexDirection='row'
        justifyContent='space-between'
        align="center"
        padding="15px"
      >
        <Heading
          color="rgb(230,187,101)"
          fontSize="20px"
          m="0"
          p="0"
        >

          <Link style={{ fontStyle: "none" }} to="subscribe"> SUBSCRIBE NOW </Link>
        </Heading>
        <Flex>
          <Link to="/" >
            <Image
              w="200px"
              h="45px"
              m="0"
              p="0"
              src='https://cdn.shopify.com/s/files/1/0052/7551/6995/files/FABBAG-LOGO_96ac9306-4c81-4ab8-8d2b-4e818eed7f76_2048x.png?v=1606482289' alt='Dan Abramov' />
          </Link>
        </Flex>

        <Flex justifyContent='space-between' color="rgb(230,187,101)">
          <Box m="0 13px" >
            <BsSearch onClick={handleSearch} />
          </Box>
          <Box m="0 13px" ><Link to="/wishlist"><BsHeart/></Link></Box>

          <Box m="0 -12px 0 10px" ><Profile><CgProfile /></Profile>
        
            </Box>
          <Box m="0 13px" ><BsCart2 onClick={handleCartchange}/></Box>
        </Flex>
      </Flex>
    </div>
  )
}

export default Navbar