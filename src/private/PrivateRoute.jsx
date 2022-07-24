import React from 'react'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { searchContext } from '../context/IconContext'

function PrivateRoute({children}) {
    const {login} = useContext(searchContext);
    if(!login){
        return <Navigate to="/signin" />
    }
  return (
    <div>
        {children}
    </div>
  )
}

export default PrivateRoute