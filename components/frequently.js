import Image from "next/image"
import frequently from "../public/frequently.svg"
import two from "../public/two.svg"
import Accordion from "./accordion"
import useSWR from "swr"
import { useState } from "react"
import { motion } from "framer-motion"

const fetcher = (url) => fetch(url).then((res) => res.json()) 


export default function Frequently(){

    const { data , error } = useSWR("/api/accordion", fetcher)

    

    const [clicked, setClicked] = useState(0);

    const handleToggle = (index) => {
        if (clicked === index) {
          return setClicked("0");
        }
        setClicked(index);
      };


    return(
        <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition:{ delay: .5 } }}
        className='lg:min-h-1/5  mt-8 bg-[#FFFAEB] py-20 4xl:py-0 xl:min-h-1/2'>
            <div className='w-85 md:w-[95%] xl:w-85 mx-auto lg:min-h-1/5 flex items-center 4xl:justify-center 4xl:min-h-1/4'>
                <motion.div 
                whileInView={{ scale:[0,1.1,1], transition:{
                    duration: 0.3
                }}}
                className='hidden md:block xl:block w-[426px] h-[426px]  relative  4xl:w-[800px] 4xl:h-[800px]'>
                    <Image src={frequently} alt='frequently' layout="fill" />
                </motion.div>
                <div className=' min-h-1/3  md:flex md:w-[70%]  xl:w-[70%] xl:flex justify-end xl:min-h-1/2'>
                    <div className=' xl:w-90 lg:min-h-1/5 xl:min-h-1/2'>
                        <div className='relative h-[70px] xl:h-[100px] md:text-left xl:text-left text-center '>
                            <div className='absolute -top-8  w-120 h-120 -z-0 opacity-30 4xl:w-[200px] 4xl:h-[200px]'>
                                <Image src={two} layout='fill' alt='two' />
                            </div>
                            <p className='md:text-36 xl:text-48 text-32 font-[Righteous] absolute 4xl:text-[120px] 2xl:text-[54px] 3xl:text-60'><span className='text-groshure-red z-10 4xl:text-[120px] 2xl:text-[54px] 3xl:text-60'>Frequently</span> Asked Questions</p>
                        </div>
                        <p className='text-sm xs:mt-[100px] text-[#797B89] xl:w-[400px] my-5 4xl:my-[100px] text-center md:text-left xl:text-left mb-12 md:mt-10 xl:mt-0 font-[circularstd] 4xl:text-42 4xl:w-[900px] 2xl:text-18 3xl:text-22  3xl:my-10 3xl:w-[500px]'>This is a big one and consider it one of the most important thing for a designer to get right</p>
                        {  data ? data.map((q,index) => {
                            return (
                            <motion.div 
                                key={index}
                                whileInView={{ opacity: 1, y: 0 , transition: {
                                    delay: index * 0.3
                                }}}
                                initial={{ opacity: 0, y: 10 }}
                                className='border-[#797B89] border-2 rounded-[20px] px-2 xl:px-3 my-5'>
                                    <Accordion onToggle={() => handleToggle(index)}
                                    active={clicked === index}
                                    key={index} 
                                    q={q} 
                                    />
                                </motion.div>)
                        })  : ""}
                    </div>
                </div>
            </div>
        </motion.div>
    )

}