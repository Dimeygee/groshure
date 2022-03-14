import NavLayout from "./navlayout"
import Footer from "./footer"
import { motion } from "framer-motion"
import { useContext } from "react"
import  { MenuContext } from "./context"
import MenuNav from "./menunav"



export default function Layout ({  children  }) {
    
    const menucontext = useContext(MenuContext)

    const  { open} = menucontext

    return(
        <>
            { open ? <MenuNav /> : null }
                <NavLayout />
                    <main>
                        { children }
                    </main>
                <Footer />
        </>
    )

}
