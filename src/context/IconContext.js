import { createContext, useState } from "react";

export const searchContext = createContext();

export const SearchProvide = ({ children }) => {
    const [state, setState] = useState(false);
    const [cartState,setCartState] = useState(false)

    const Changestate = (stat)=>{
        setState(stat)
    }
    
    const handleCart = (val)=>{
        setCartState(val)
    }
    return (
        <searchContext.Provider value={{ state, 
            Changestate ,
            cartState,
            handleCart
            }}>
            {children}
        </searchContext.Provider>
    )
}
