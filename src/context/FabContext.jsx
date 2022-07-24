import { useReducer } from "react";
import { createContext } from "react";


const initialState = {
    carts: [
        {
            description: "Get ready to Pick'n'Roll. Put your beauty instincts to the test and choose between 3...",
            id: 3,
            image: "https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Women_sPage-1.gif?v=1656064858",
            price: 599,
            title: "The Beauty Bundle July Fab Bag",
            totalItem: 1
        }
    ]
};

let nextId = 2;

const reducer = (state, action) => {
    switch (action.type) {
        case 'addCart': {
            return {
                ...state,
                carts: [...state.carts, {
                    id: nextId++,
                    title: action.payload.title,
                    image: action.payload.image,
                    description: action.payload.description,
                    price: action.payload.price,
                    totalItem: action.payload.totalItem,
                }]
            }
        }
        default: {
            return state
        }
    }
}

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartstate, cartdispatch] = useReducer(reducer, initialState);

    return (
        <CartContext.Provider value={{ cartstate, cartdispatch }}>{children}</CartContext.Provider>
    )
}