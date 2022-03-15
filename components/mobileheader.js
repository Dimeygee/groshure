import Image from "next/image"
import styles from "./stroke.module.css"
import mobilefruits from "../public/mobilefruits.svg"
import MobileButton  from "./mobilebutton"
import { motion } from "framer-motion"


const container = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  }

  const items = {
      visible: i => ({ 
        opacity: 1, 
        y: 0,
        transition:{
        delay: i *  0.3,
      } }),
      hidden: { opacity: 0, y: 100 },
  }

  const itemImage = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 100 },
  }



export default function MobileHeader () {

    return(
       <div className='md:hidden'>
         <motion.div 
            initial="hidden"
            animate="visible"
            variants={container}
            className='mobileheader' >
           <motion.div 
           custom={1}
           variants={items}
           className='px-4 py-7 min-h-[50%]' >
                <h1 className='font-[Righteous] text-32 text-black leading-[40px]'>Grocery shopping at your <span className={styles.stroke}>fingertips</span></h1>
                <motion.div
                custom={3}
                variants={items}
                className='text-base my-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis vectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</motion.div>
            </motion.div>
            <motion.div
            variants={itemImage}
            initial="hidden"
            whileInView="visible"
            className=' relative  h-[300px] grow'>
                <Image src={mobilefruits} alt='mobilefruits' layout="fill" priority/>
            </motion.div>
        </motion.div>
       </div>
    )

}
