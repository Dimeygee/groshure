import Image from 'next/image'
import Link from 'next/link'
import logo from "../public/logo.jpg"
import Button from "./button"
import { useRouter } from 'next/router'
import MediaQuery from 'react-responsive'
import { motion, useAnimation } from "framer-motion"
import { useEffect, useContext } from 'react'
import { MenuContext } from "./context" 



export default function NavLayout () {

    const controls = useAnimation()

    const menucontext = useContext(MenuContext)

    const  {open , isOpen} = menucontext

    const router = useRouter()

    useEffect(() => {
        
        controls.start(i => ({
          opacity: 1,
          y:0,
          transition: { delay: i * 0.7 },
        }))
    },[])

    const handleClick = () => {
   
      let body = document.getElementsByTagName("body")[0]

      if(!open ){
        body.style.overflow = 'hidden'
    }else{
        body.style.overflow = 'auto'
    }


      isOpen(!open)
  }

  



    return(
        <div class="container mx-auto w-85  flex justify-between items-center py-5 ">
            <motion.div 
              key={router.route}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1,  transition: {
                delay: 0.2
              } }}
            >
              <Image src={logo}  alt="logo" priority/>
            </motion.div>
          <div class='hidden md:block'>
            <ul class='flex justify-between w-64 font-[circularstd]'>
              <motion.li custom={1}  initial={{ opacity: 0, y:10 }} animate={controls} >
              <Link href="/">
                <a  style={router.asPath === "/" ? { fontSize: "16px", color:"#100C2A", fontWeight:"bold" } : { fontSize: "14px", color: "#676767", fontWeight:"normal" } } >Home</a>
              </Link>
              </motion.li >
              <motion.li custom={2} initial={{ opacity: 0, y:10 }} animate={controls}>
                  <a style={router.asPath === "/features" ? { fontSize: "16px", color:"#100C2A", fontWeight:"bold" } : { fontSize: "14px", color: "#676767" ,fontWeight:"normal" } } href="#features" >Features</a>
              </motion.li>
              <motion.li custom={1}  initial={{ opacity: 0, y:10 }}  animate={controls}>
              <Link href="/about">
                <a style={router.asPath === "/about" ? { fontSize: "16px", color:"#100C2A", fontWeight:"bold" } : { fontSize: "14px", color: "#676767",fontWeight:"normal" } } >About</a>
              </Link>
              </motion.li>
              <motion.li custom={2}  initial={{ opacity: 0, y:10 }}  animate={controls}>
              <Link href="/contact">
                <a style={router.asPath === "/contact" ? { fontSize: "16px", color:"#100C2A", fontWeight:"bold" } : { fontSize: "14px", color: "#676767" ,fontWeight:"normal" } } >Contact</a>
              </Link>
              </motion.li>
            </ul>
          </div> 
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0, transition: {
              delay: 1
            } }}
          >
            <Button backgroundColor="#FD4C5C" color="white" borderRadius="40px" paddingBottom="8px" paddingTop="8px" paddingRight="30px" paddingLeft="30px" fontSize="16px">
              Join waitlist
            </Button>
          </motion.div>
          <MediaQuery maxWidth={767} >
            <div class='w-[30px] min-h-[30px]  flex justify-center items-center flex-col' onClick={handleClick}>
              <div class='w-[20px] h-[3px] bg-[#FD4C5C]'></div>
              <div class='w-[20px] h-[3px] bg-[#FD4C5C] my-[3px]'></div>
              <div class='w-[20px] h-[3px] bg-[#FD4C5C]'></div>
            </div>
          </MediaQuery>
      </div>
    )
}
