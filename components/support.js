import Image from "next/image"
import two from "../public/two.svg"
import card from "../public/card.png"
import Button from "./button"
import MediaQuery from "react-responsive"
import MobileButton from "./mobilebutton"
import { motion } from "framer-motion"

const element = {
    visible : { opacity: 1, y: 0 },
    hidden: { opacity: 0, y:100 },
}

export default function Support() {

    return(
        <motion.div
        variants={element}
        initial='hidden'
        whileInView='visible'
         class='min-h-1/5 w-75 mx-auto py-20  mb-10'>
            <div class='flex justify-center relative h-[100px]  text-center'>
                    <div class='inline-block absolute z-10'>
                        <div>
                            <h3 class='font-[Righteous] text-40'>Support</h3>
                            <p class='text-[#797B89] text-18 md:w-[400px] mt-3  font-[circularstd] '>This is a big one and i consider it one of the most important things for a designer to get right</p>
                        </div>
                    </div>
                    <div class='absolute w-120 h-120  right-[35%] -top-10 -z-0 ' >
                        <Image src={two} alt='two' layout="fill" class='opacity-30'/>
                    </div>
            </div>
            <div class=' mt-20 border-white border-2 '>
            <div class='mt-[53px] grid md:grid-cols-3 gap-20 grid-cols-1 md:text-left text-center'>
                    <motion.div
                        initial={{ opacity: 0, y: 70 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        class=' font-[circularstd] block'>
                            <div class='flex md:justify-start justify-center'>
                                <div class=' flex  p-[10px] rounded-full  justify-center shadow-bfs md:mr-4 mx-auto md:mx-0 '>
                                    <div class=' w-[70px] h-[70px] relative '>
                                        <Image src={card} alt='changecolor'   layout="fill" />
                                    </div>
                                    </div>
                            </div>
                            <div class='py-6'>
                                <h4 class='font-medium text-18 leading-5 mb-2 ' >Are you a supplier?</h4>
                                <p class='text-sm text-[#718096]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus am, purus sit amet luctus am, purus sit amet luctus</p>
                            </div>
                            <Button backgroundColor="#FD4C5C" color="#fff" borderRadius="50px" paddingBottom="12px" paddingTop="12px"  paddingRight="55px" paddingLeft="55px" fontSize="14px" >
                                Apply
                            </Button>
                            <MediaQuery maxWidth={763}>
                                <div className='mt-4'>
                                    <MobileButton backgroundColor="#FD4C5C" color="white" paddingTop={'10px'} paddingBottom={'10px'} width='55%' borderRadius='30px' fontSize={"18px"}>
                                        Apply
                                    </MobileButton>
                                </div>
                            </MediaQuery>
                        </motion.div>
                        <motion.div
                         initial={{ opacity: 0, y: 70 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        class='font-[circularstd]'>
                        <div class='flex md:justify-start justify-center'>
                                <div class=' flex  p-[10px] rounded-full  justify-center shadow-bfs md:mr-4 mx-auto md:mx-0 '>
                                    <div class=' w-[70px] h-[70px] relative '>
                                        <Image src={card} alt='changecolor'   layout="fill" />
                                    </div>
                                </div>
                            </div>
                            <div class='py-6'>
                                <h4 class='font-medium text-18 leading-5 mb-2' >Do you have a property?</h4>
                                <p class='text-sm text-[#718096]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus am, purus sit amet luctus am, purus sit amet luctus</p>
                            </div>
                            <Button backgroundColor="#FD4C5C" color="#fff" borderRadius="50px" paddingBottom="12px" paddingTop="12px"  paddingRight="55px" paddingLeft="55px" fontSize="14px" >
                                Apply
                            </Button>
                            <MediaQuery maxWidth={763}>
                                <div className='mt-4'>
                                    <MobileButton backgroundColor="#FD4C5C" color="white" paddingTop={'10px'} paddingBottom={'10px'} width='55%' borderRadius='30px' fontSize={"18px"}>
                                        Apply
                                    </MobileButton>
                                </div>
                            </MediaQuery>
                        </motion.div>
                        <motion.div
                         initial={{ opacity: 0, y: 70 }}
                         whileInView={{ opacity: 1, y: 0 }}
                        class='font-[circularstd]'>
                            <div class='flex md:justify-start justify-center'>
                                <div class=' flex  p-[10px] rounded-full  justify-center shadow-bfs md:mr-4 mx-auto md:mx-0 '>
                                    <div class=' w-[70px] h-[70px] relative '>
                                        <Image src={card} alt='changecolor'   layout="fill" />
                                    </div>
                                </div>
                            </div>
                            <div class='py-6'>
                                <h4 class='font-medium text-18 leading-5 mb-2' >Investors</h4>
                                <p class='text-sm text-[#718096]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus am, purus sit amet luctus am, purus sit amet luctus</p>
                            </div>
                            <Button backgroundColor="#FD4C5C" color="#fff" borderRadius="50px" paddingBottom="12px" paddingTop="12px"  paddingRight="55px" paddingLeft="55px" fontSize="14px" >
                                Apply
                            </Button>
                            <MediaQuery maxWidth={763}>
                                <div className='mt-4'>
                                    <MobileButton backgroundColor="#FD4C5C" color="white" paddingTop={'10px'} paddingBottom={'10px'} width='55%' borderRadius='30px' fontSize={"18px"}>
                                        Apply
                                    </MobileButton>
                                </div>
                            </MediaQuery>
                        </motion.div>
                </div>
            </div>
        </motion.div>
    )

}