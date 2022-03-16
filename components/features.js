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
        <div id='features' className='min-h-[105vh] relative xl:min-h-[35vh]' ref={scrollRef}>
            <div className='absolute  w-[200px] h-[200px] right-0 top-0 '  >
                <motion.div
                initial={{ x: 100 }}
                whileInView={{ x:0 , transition: {
                    delay: 0.5
                }}}
                className='relative w-100p h-100p hidden md:block'>
                    <Image src={pizza} alt='pizza' layout="fill"  />
                </motion.div>
            </div>
            <div className='hidden md:block absolute  w-250 h-250 left-0 bottom-0 '>
                <motion.div
                initial={{ x: -100 }}
                whileInView={{ x:0 , transition: {
                    delay: 0.8
                }}}

                className='relative w-100p h-100p z-0'>
                    <Image src={rectangle} alt='rectangle' layout="responsive"  />
                </motion.div>
            </div>
            <div className='container mx-auto my-auto min-h-1/5 w-85  py-[80px] xl:min-h-1/3'  >
                <div className='flex justify-center relative h-[100px]' >
                    <div className='inline-block text-center absolute z-10' >
                        <motion.div
                            initial={{ y: 50 }}
                            whileInView={{ y:0 , transition: {
                                delay: 3
                            }}}
                            viewport={{ root: scrollRef }}
                        >
                            <small className=' font-medium text-base leading-3  font-[circularstd]' >Features</small>
                            <p className='font-[Righteous] text-36'><span className='text-groshure-green'>Why</span> <span className='text-groshure-red'>Groshure?</span></p>
                        </motion.div>
                    </div>
                    <div className='absolute w-120 h-120  right-[35%] -top-3 -z-0 ' >
                        <Image src={two} alt='two' layout="fill" className='opacity-30' />
                    </div>
                </div>
                <motion.div
                variants={parent}
                initial="hidden"
                whileInView="visible"
                className='grid-cols-1 mt-[53px] grid md:grid-cols-3 md:gap-2  font-[circularstd] '>
                        <motion.div
                        custom={1}
                        variants={child}
                        className=' text-center '>
                            <div className='flex justify-center'>
                                <div className=' flex  p-[10px] rounded-full  justify-center shadow-bfs md:mr-4 mx-auto md:mx-0 '>
                                    <div className=' w-[70px] h-[70px] relative '>
                                        <Image src={card} alt='changecolor'  priority layout="fill" />
                                    </div>
                                </div>
                            </div>
                            <div className='p-7'>
                                <h4 className='font-medium text-18 leading-5 mb-2' >Features title</h4>
                                <p className='text-sm text-[#718096]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus am, purus sit amet luctus am, purus sit amet luctus</p>
                            </div>
                        </motion.div>
                        <motion.div
                        custom={2}
                        variants={child}
                        className=' text-center'>
                        <div className='flex justify-center'>
                            <div className=' flex  p-[10px] rounded-full  justify-center shadow-bfs md:mr-4 mx-auto md:mx-0 '>
                                    <div className=' w-[70px] h-[70px] relative '>
                                        <Image src={card} alt='changecolor'  priority layout="fill" />
                                    </div>
                                </div>
                            </div>
                            <div className='p-7'>
                                <h4 className='font-medium text-18 leading-5 mb-2  ' >Features title</h4>
                                <p className='text-sm text-[#718096]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus am, purus sit amet luctus am, purus sit amet luctus</p>
                            </div>
                        </motion.div>
                        <motion.div 
                        custom={3}
                        variants={child}
                        className=' text-center'>
                            <div className='flex justify-center '>
                                <div className=' flex  p-[10px] rounded-full  justify-center shadow-bfs md:mr-4 mx-auto md:mx-0 '>
                                        <div className=' w-[70px] h-[70px] relative '>
                                            <Image src={card} alt='changecolor'  priority layout="fill" />
                                        </div>
                                </div>
                            </div>
                            <div className='p-7'>
                                <h4 className='font-medium text-18 leading-5 mb-2 ' >Features title</h4>
                                <p className='text-sm text-[#718096]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus am, purus sit amet luctus am, purus sit amet luctus</p>
                            </div>
                        </motion.div>
                </motion.div>
            </div>
        </div>
    )

}
