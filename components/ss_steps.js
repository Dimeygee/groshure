import Image from "next/image"
import green from "../public/green.png"
import red from "../public/red.jpg"
import black from "../public/black.jpg"
import yellow from "../public/yellow.png"
import fpframe from "../public/fpframe.svg"
import { motion } from "framer-motion"



const element = { 
    hidden: { opacity: 0, y: 100 },
    visible : { opacity: 1, y: 0 }
}

export default function SS_steps (){


    return(
        <div className='grid gap-y-5 ss_step h-100p min-h-1/5 '>
            <motion.div
            initial="hidden"
            whileInView="visible"
            variants={element}
            className='h-[626px] relative overflow-y-hidden'>
                <div className='relative w-100p h-100p'>
                    <Image src={green} alt='green' layout="fill"  />
                </div>
                <div className='absolute w-100p h-100p top-0 flex flex-col'>
                    <div className=' grow  px-7 pt-7'>
                        <div className=''>
                            <span className='rounded-full w-40 h-40  bg-white inline-block text-center font-black leading-[40px]'>1</span>
                        </div>
                        <h2 className='text-white font-black leading-[40px] md:text-32 text-24 my-3'>Headliine title here</h2>
                            <p className='text-base text-white leading-[25px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus am, purus sit amet luctus am, purus sit amet luctus</p>
                    </div>
                    <div className='grow-[7] shrink-0 flex justify-center'>
                        <div className='relative w-[224px] h-[428px]'>
                            <Image src={fpframe} alt="fpframe" layout="fill" />
                        </div>
                    </div>
                </div>
            </motion.div>
            <motion.div
             initial="hidden"
             whileInView="visible"
             variants={element}
             className='h-[626px] relative overflow-y-hidden'>
                <div className='relative w-100p h-100p '>
                    <Image src={red} alt='red' layout="fill"  />
                </div>
                <div className='absolute w-100p h-100p top-0 flex flex-col'>
                    <div className=' grow  px-7 pt-7'>
                        <div className=''>
                            <span className='rounded-full w-40 h-40  bg-white inline-block text-center font-black leading-[40px]'>2</span>
                        </div>
                        <h2 className='text-white font-black leading-[40px] md:text-32 text-24 my-3'>Headliine title here</h2>
                            <p className='text-base text-white leading-[25px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus am, purus sit amet luctus am, purus sit amet luctus</p>
                    </div>
                    <div className='grow-[7] shrink-0 flex justify-center'>
                        <div className='relative w-[224px] h-[428px]'>
                            <Image src={fpframe} alt="fpframe" layout="fill" />
                        </div>
                    </div>
                </div>
            </motion.div>
            <motion.div
             initial="hidden"
             whileInView="visible"
             variants={element}
            className='h-[626px] relative overflow-y-hidden'>
                <div className='relative w-100p h-100p '>
                    <Image src={black} alt='black' layout="fill"  />
                </div>
                <div className='absolute w-100p h-100p top-0 flex flex-col'>
                    <div className=' grow  px-7 pt-7'>
                        <div className=''>
                            <span className='rounded-full w-40 h-40  bg-white inline-block text-center font-black leading-[40px]'>3</span>
                        </div>
                        <h2 className='text-white font-black leading-[40px] md:text-32 text-24 my-3'>Headliine title here</h2>
                            <p className='text-base text-white leading-[25px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus am, purus sit amet luctus am, purus sit amet luctus</p>
                    </div>
                    <div className='grow-[7] shrink-0 flex justify-center'>
                        <div className='relative w-[224px] h-[428px]'>
                            <Image src={fpframe} alt="fpframe" layout="fill" />
                        </div>
                    </div>
                </div>
            </motion.div>
            <motion.div
             initial="hidden"
            whileInView="visible"
            variants={element}
            className='h-[626px] relative overflow-y-hidden'>
                <div className='relative w-100p h-100p'>
                    <Image src={yellow} alt='yellow' layout="fill"  />
                </div>
                <div className='absolute w-100p h-100p top-0 flex flex-col'>
                    <div className=' grow  px-7 pt-7'>
                        <div className=''>
                            <span className='rounded-full w-40 h-40  bg-white inline-block text-center font-black leading-[40px]'>4</span>
                        </div>
                        <h2 className='text-white font-black leading-[40px] md:text-32 text-24 my-3'>Headliine title here</h2>
                            <p className='text-base text-white leading-[25px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus am, purus sit amet luctus am, purus sit amet luctus</p>
                    </div>
                    <div className='grow-[7] shrink-0 flex justify-center'>
                        <div className='relative w-[224px] h-[428px]'>
                            <Image src={fpframe} alt="fpframe" layout="fill" />
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )

}