import { createContext, useState } from "react";

export const searchContext = createContext();

export const SearchProvide = ({ children }) => {
    const [state, setState] = useState(false);

    const Changestate = (stat)=>{
        setState(stat)
    }

    return (
        <searchContext.Provider value={{ state, 
            Changestate ,
            }}>
            {children}
        </searchContext.Provider>
    )
}
