import { createContext, useState } from "react";
import { Navigate } from "react-router-dom"

export const searchContext = createContext();

export const SearchProvide = ({ children }) => {
    const [state, setState] = useState(false);
    const [cartState, setCartState] = useState(false)
    const [login, setLogin] = useState(false);
    const Changestate = (stat) => {
        setState(stat)
    }

    const handleCart = (val) => {
        setCartState(val)
    }
    if (login) {
        <Navigate to="/signin" />
    }
    return (
        <searchContext.Provider value={{
            state,
            Changestate,
            cartState,
            handleCart,
            login,
            setLogin
        }}>
            {children}
        </searchContext.Provider>
    )
}
