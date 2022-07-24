import { useState } from "react";
import { Children, createContext } from "react";

const instate = {
   cart:[
    {}
   ]
}
const Reducer = (state,action)=>{
    switch (action.type) {
        case "add":{
            return{
                ...state,
                cart: [...state.cart, { id: nextId++, title: action.title }],
            }
        }
    
        default:
            return state
    }
}

export const CartContext= createContext();

export const CartProvider = ({children})=>{
    const [state,dispatch] = useState(Reducer , instate)
    return(
        <CartContext.Provider value={{state,dispatch}}>{children}</CartContext.Provider>
    )
}