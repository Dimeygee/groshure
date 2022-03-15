import Image from "next/image"
import two from "../public/two.svg"
import WaitList from "./waitlist"
import shopphone from "../public/shopphone.jpg"
import MediaQuery from "react-responsive"
import MobileButton from "./mobilebutton"
import { motion } from "framer-motion"

export default function Comingsoon(){

    const right={
        visible: i => ({ opacity: 1,y: 0,transition:{delay: i *  0.2,} }),
        hidden: { opacity: 0, y: 100 },
    }

    const left= {
        visible: i => ({ opacity: 1, x: 0,transition:{delay: i *  0.2,} }),
        hidden: { opacity: 0, x: -100 },
    }
    

    return(
        <div className='min-h-1/5  md:flex items-center flex-row md:my-0 mt-[100px] md:mt-0 md:mb-0 mb-[150px] '>
            <div className=' mx-auto  min-h-1/4 md:flex'>
                <motion.div 
                    variants={left}
                    custom={1}
                    initial="hidden"
                    whileInView="visible"
                    className='md:w-[50%] md:h-[800px] h-[600px] relative'>
                    <Image src={shopphone} alt='shopphone' layer='fill' class='absolute'  placeholder="blur"/>
                </motion.div>
                <motion.div 
                   variants={right}
                   custom={3}
                   initial="hidden"
                   whileInView="visible"
                   className='md:w-[50%] flex justify-center flex-col md:pr-6 text-center md:text-left'>
                    <div className=' md:w-[450px] md:px-0 px-8'>
                        <div className='relative  md:w-[300px] h-[50px] flex items-center text-center'>
                            <small className='absolute text-groshure-red font-medium text-20 leading-3 text-center w-[100%] block md:inline'>Coming soon</small>
                            <div class='w-120 h-120 absolute -z-0 md:right-[40%] right-[30%] -top-10'>
                                <Image src={two} alt="two" layer="fill" class='opacity-30' />
                            </div>
                        </div>
                        <div className=''>
                            <h4 className='font-[Righteous] md:text-42 text-32'>Grocery shopping at your <span >fingertips</span></h4>
                            <p className='text-20 my-5  font-[circularstd]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis vectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
                        </div>
                        <WaitList width="100%" boxShadow="0px 9px 32px rgba(112, 160, 42, 0.15)" />
                        <MediaQuery maxWidth={763}>
                                <div className='mt-3'>
                                    <MobileButton backgroundColor="#FD4C5C" color="white" paddingTop={'10px'} paddingBottom={'10px'} width='70%' borderRadius='30px' fontSize={"18px"}>
                                        Join waitlist
                                    </MobileButton>
                                </div>
                            </MediaQuery>
                    </div>
                </motion.div>
            </div>
        </div>
    )

}