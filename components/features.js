import Image from "next/image"
import pizza from "../public/pizza.jpg"
import rectangle from "../public/rectangle.svg"
import two from "../public/two.svg"
import card from "../public/card.png"
import { motion } from "framer-motion"
import { useRef } from "react"



const parent = {
    visible: {
        opacity:1,
        y:0,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.3,
        },
    },
    hidden: {
        opacity: 1,
        y:50,
        transition: {
        when: "afterChildren",
      },
    }
}

const child = {
    visible: i => ({ 
        opacity: 1, 
        y: 0,
        transition:{
        delay: i *  0.2,
      } }),
      hidden: { opacity: 0, y: 50 },
}


export default function Features() {

    const scrollRef = useRef(null)

    return(
        <div id='features' class='min-h-[105vh] relative ' ref={scrollRef}>
            <div class='absolute  w-[200px] h-[200px] right-0 top-0 '  >
                <motion.div
                initial={{ x: 100 }}
                whileInView={{ x:0 , transition: {
                    delay: 0.5
                }}}
                class='relative w-100p h-100p hidden md:block'>
                    <Image src={pizza} alt='pizza' layout="fill"  />
                </motion.div>
            </div>
            <div class='hidden md:block absolute  w-250 h-250 left-0 bottom-0 '>
                <motion.div
                initial={{ x: -100 }}
                whileInView={{ x:0 , transition: {
                    delay: 0.8
                }}}

                class='relative w-100p h-100p z-0'>
                    <Image src={rectangle} alt='rectangle' layout="responsive"  />
                </motion.div>
            </div>
            <div class='container mx-auto my-auto min-h-1/5 w-85  py-[80px]'  >
                <div class='flex justify-center relative h-[100px]' >
                    <div class='inline-block text-center absolute z-10' >
                        <motion.div
                            initial={{ y: 50 }}
                            whileInView={{ y:0 , transition: {
                                delay: 3
                            }}}
                            viewport={{ root: scrollRef }}
                        >
                            <small class=' font-medium text-base leading-3  font-[circularstd]' >Features</small>
                            <p class='font-[Righteous] text-36'><span class='text-groshure-green'>Why</span> <span class='text-groshure-red'>Groshure?</span></p>
                        </motion.div>
                    </div>
                    <div class='absolute w-120 h-120  right-[35%] -top-3 -z-0 ' >
                        <Image src={two} alt='two' layout="fill" class='opacity-30' />
                    </div>
                </div>
                <motion.div
                variants={parent}
                initial="hidden"
                whileInView="visible"
                class='grid-cols-1 mt-[53px] grid md:grid-cols-3 md:gap-2  font-[circularstd] '>
                        <motion.div
                        custom={1}
                        variants={child}
                        class=' text-center '>
                            <div class='flex justify-center'>
                                <div class=' flex  p-[10px] rounded-full  justify-center shadow-bfs md:mr-4 mx-auto md:mx-0 '>
                                    <div class=' w-[70px] h-[70px] relative '>
                                        <Image src={card} alt='changecolor'  priority layout="fill" />
                                    </div>
                                </div>
                            </div>
                            <div class='p-7'>
                                <h4 class='font-medium text-18 leading-5 mb-2' >Features title</h4>
                                <p class='text-sm text-[#718096]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus am, purus sit amet luctus am, purus sit amet luctus</p>
                            </div>
                        </motion.div>
                        <motion.div
                        custom={2}
                        variants={child}
                        class=' text-center'>
                        <div class='flex justify-center'>
                            <div class=' flex  p-[10px] rounded-full  justify-center shadow-bfs md:mr-4 mx-auto md:mx-0 '>
                                    <div class=' w-[70px] h-[70px] relative '>
                                        <Image src={card} alt='changecolor'  priority layout="fill" />
                                    </div>
                                </div>
                            </div>
                            <div class='p-7'>
                                <h4 class='font-medium text-18 leading-5 mb-2  ' >Features title</h4>
                                <p class='text-sm text-[#718096]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus am, purus sit amet luctus am, purus sit amet luctus</p>
                            </div>
                        </motion.div>
                        <motion.div 
                        custom={3}
                        variants={child}
                        class=' text-center'>
                            <div class='flex justify-center '>
                                <div class=' flex  p-[10px] rounded-full  justify-center shadow-bfs md:mr-4 mx-auto md:mx-0 '>
                                        <div class=' w-[70px] h-[70px] relative '>
                                            <Image src={card} alt='changecolor'  priority layout="fill" />
                                        </div>
                                </div>
                            </div>
                            <div class='p-7'>
                                <h4 class='font-medium text-18 leading-5 mb-2 ' >Features title</h4>
                                <p class='text-sm text-[#718096]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus am, purus sit amet luctus am, purus sit amet luctus</p>
                            </div>
                        </motion.div>
                </motion.div>
            </div>
        </div>
    )

}
