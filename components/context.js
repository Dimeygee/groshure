
import {useState, createContext} from "react"

export const MenuContext = createContext()

export default function ContextWrapper({ children }){

    const [ open, isOpen ] = useState(false) 
    

    return(
        <MenuContext.Provider value={{open, isOpen}}>
            {children}
        </MenuContext.Provider>
    ) 
}