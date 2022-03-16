import Image from "next/image"
import styles from "./stroke.module.css"
import WaitList from "./waitlist"
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
            className='mobileheader overflow-y-hidden' >
           <motion.div 
           custom={1}
           variants={items}
           className='px-4 py-7 min-h-[50%]' >
                <h1 className='font-[Righteous] text-32 text-black leading-[40px]'>Grocery shopping at your <span className={styles.stroke}>fingertips</span></h1>
                <motion.div
                custom={3}
                variants={items}
                className='text-base my-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis vectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</motion.div>
                <motion.div
                custom={4}
                variants={items}
                >
                    <WaitList width="100%" fontSize="14px"  />
                </motion.div>
                <MobileButton width="75%" paddingBottom="13px" paddingTop="13px"  backgroundColor="#FD4C5C" color='white' borderRadius="25px" fontSize={"14px"} marginTop="27px" >Join waitlist</MobileButton>
            </motion.div>
            <motion.div
            variants={itemImage}
            initial="hidden"
            whileInView="visible"
            className='h-[300px] grow'>
                <div className='relative fruits w-100p h-[100%]  translate-y-3'>
                  <Image src={mobilefruits} alt='mobilefruits' layout="fill" priority/>
                </div>
            </motion.div>
        </motion.div>
       </div>
    )

}
