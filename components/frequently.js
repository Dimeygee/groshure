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
        class='min-h-1/5  mt-8 bg-[#FFFAEB] py-20'>
            <div class='w-85 mx-auto min-h-1/5 flex items-center'>
                <motion.div 
                whileInView={{ scale:[0,1.1,1], transition:{
                    duration: 0.3
                }}}
                class='hidden md:block w-[426px] h-[426px]  relative'>
                    <Image src={frequently} alt='frequently' class='absolute ' layer="fill" />
                </motion.div>
                <div class=' min-h-1/5 md:w-[70%] md:flex justify-end'>
                    <div class=' md:w-90 min-h-1/5'>
                        <div class='relative h-[70px] md:text-left text-center'>
                            <div class='absolute -top-8  w-120 h-120 -z-0 opacity-30'>
                                <Image src={two} layout='fill' alt='two' />
                            </div>
                            <p class='md:text-48 text-32 font-[Righteous] absolute'><span class='text-groshure-red z-10'>Frequently</span> Asked Questions</p>
                        </div>
                        <p class='text-sm text-[#797B89] md:w-[400px] my-5 text-center md:text-left mb-12  font-[circularstd]'>This is a big one and consider it one of the most important thing for a designer to get right</p>
                        {  data ? data.map((q,index) => {
                            return (
                            <motion.div 
                                whileInView={{ opacity: 1, y: 0 , transition: {
                                    delay: index * 0.3
                                }}}
                                initial={{ opacity: 0, y: 10 }}
                                class='border-[#797B89] border-2 rounded-[20px] px-2 md:px-3 my-5'>
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