import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Cart } from '../component/Cart'
import PrivateRoute from '../private/PrivateRoute'
import Checkout from './Checkout'
import CommonProduct from './CommonProduct'
import Fabbag from './Fabbag'
import SignIn from './SignIn'
import SignUp from './SignUp'
import Subscribe from './Subscribe'
import WishList from './WishList'

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Fabbag />}></Route>
        <Route path='/subscribe' element={
          <PrivateRoute>
        <Subscribe />
        </PrivateRoute>
        }></Route>
        <Route path='/wishlist' element={<WishList />}></Route>
        <Route path='/signin' element={<SignIn />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/checkout' element={<Checkout />}></Route>
        <Route path='/subscribe' element={<Subscribe />}></Route>
        <Route path='/commonproduct' element={<CommonProduct />}></Route>
      </Routes>
    </div>
  )
}

export default AllRoutes