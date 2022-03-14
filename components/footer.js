import WaitList from "./waitlist"
import logo from "../public/logo.jpg"
import Image from "next/image"
import { useRouter } from "next/router"
import MobileButton from "./mobilebutton"
import MediaQuery from "react-responsive"
import { motion } from "framer-motion"

const element ={
    hidden: { opacity: 0 ,y: 100 },
    visible:{ opacity: 1, y : 0 }
}


export default function Footer() {

    const router = useRouter()  

    return(
        <div class='min-h-[50vh]  font-[circularstd] relative z-0'>
            <div class={router.asPath.slice(1,router.asPath.length) === "contact" ? "text-center md:p-[200px] p-[200px]  pt-[200px]  md:pb-[100px] bg-[#FFFAEB] md:px-0 px-[40px]" : "text-center md:p-[80px]  md:px-0 px-6 py-20 bg-[#FFFAEB]" }>
                <motion.div 
                    initial={{ y: 100 }}
                    whileInView={{ y: 0 }}
                class='md:text-40 text-36 font-black '>Get <span class='text-groshure-red'>notified</span> when we launch 🚀</motion.div>
                <motion.div
                    initial={{ y: 100 }}
                    whileInView={{ y: 0 }}
                class='text-18 md:w-[500px] mx-auto mt-3 mb-8 text-[#797B89]'>This is a big one and i consider it one of the most important 
                    things for a designer to get right.</motion.div>
                <motion.div 
                    initial={{ x: -100 }}
                    whileInView={{ x: 0 }}
                class='mx-auto inline-block w-[100%] md:w-[50%]'>
                    <WaitList  width="500px" boxShadow="0px 9px 32px rgba(112, 160, 42, 0.15)" />
                </motion.div>
                <MediaQuery maxWidth={767}>
                    <div class='mt-5'>
                        <MobileButton backgroundColor="#FD4C5C" color="white" paddingTop={'10px'} paddingBottom={'10px'} width='60%' borderRadius='30px' fontSize={"18px"}>
                            Join waitlist
                        </MobileButton>
                    </div>
                </MediaQuery>
            </div>
            <div class='md:py-6 py-10 md:px-0 px-10 bg-white'>
                <motion.div
                    variants={element}
                    initial="hidden"
                    whileInView="visible"
                class='w-90 mx-auto flex justify-between md:flex-row flex-col'>
                    <div class='flex items-center md:flex-row flex-col'>
                        <div class='relative'>
                            <Image class='absolute' src={logo}  alt="logo" />
                        </div>
                        <p class='text-[#616161] text-sm md:ml-3 md:text-left text-center'>© Copyright 2018 Pixsellz - Instant Groceries shopping to your doorstep.</p>
                    </div>
                    <div class=' flex md:text-left text-center md:py-0 py-5' >
                        <ul class='flex items-center text-base  justify-between w-350 text-groshure-red md:flex-row flex-col'>
                            <li class='my-4 md:my-0'><a href='#'>First link</a></li>
                            <li class='my-4 md:my-0'><a href='#'>Second Link</a></li>
                            <li class='my-4 md:my-0'><a href='#'>Third link</a></li>
                            <li class='my-4 md:my-0'><a href='#'>Fourth link</a></li>
                        </ul>
                    </div>
                </motion.div>
            </div>
        </div>
    )

}
