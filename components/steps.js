import two from "../public/two.svg"
import Image from "next/image"
import yellowblack from "../public/yellowblack.svg"
import redcircle from "../public/redcircle.svg"
import greencircle from "../public/greencircle.svg"
import fpframe from "../public/fpframe.svg"
import secpframe from "../public/secpframe.svg"
import MediaQuery from "react-responsive"
import { motion } from "framer-motion"
import Script from "next/script"
import SS_steps from "./ss_steps"

const element1 = {
    visible: i => ({ 
        opacity: 1, 
        y: 0,
        transition:{
        delay: i *  0.4,
      } }),
      hidden: { opacity: 0, y: -100 },
}

const element2 = {
    visible: i => ({ 
        opacity: 1, 
        x: 0,
        transition:{
        delay: i *  0.2,
      } }),
      hidden: { opacity: 0, x: -100 },
}

const right={
    visible: i => ({ 
        opacity: 1, 
        x: 0,
        transition:{
        delay: i *  0.2,
      } }),
      hidden: { opacity: 0, x: 100 },
}




export  default function Steps(){

    return(
        <div className='min-h-1/5 '>
             <div className='container mx-auto md:my-auto min-h-1/5 w-85 py-[80px] relative '>
                <div className='flex justify-center relative md:h-[100px] h-[200px]'>
                        <div className='inline-block text-center absolute z-10'>
                            <div >
                                <small className=' font-medium text-base leading-3  font-[circularstd]' >Steps</small>
                                <p className='font-[Righteous] text-36'><span className='text-groshure-green'>How it</span> <span className='text-groshure-red'>works?</span></p>
                            </div>
                        </div>
                        <div className='absolute w-120 h-120  right-[35%] -top-3 -z-0 ' >
                            <Image src={two} alt='two' layout="fill" className='opacity-30'/>
                        </div>
                </div>
                <MediaQuery  maxWidth={767}>
                    <SS_steps />
                </MediaQuery>
                <MediaQuery minWidth={767}>
                    <div className='d_hidden_steps hidden md:block w-[450px] h-[450px]  absolute top-[120px] -left-[100px]'>
                        <Image src={redcircle} alt="redcircle" layout="fill" />
                    </div>
                    <div className='d_hidden_steps hidden md:block w-[550px] h-[550px]  absolute top-[40%] -right-[100px]'>
                        <Image src={yellowblack} alt="yellowblack" layout="fill" />
                    </div>
                    <div className='d_hidden_steps hidden md:block w-[450px] h-[450px]  absolute  -left-[100px] bottom-0'>
                        <Image src={greencircle} alt="greencircle" layout="fill" />
                    </div>
                    <div  class='py-16  px-20 grid gap-3  font-[circularstd]'>
                    <motion.div 
                    variants={element1}
                    custom={2}
                    initial="hidden"
                    whileInView="visible"
                    className='lazy' id="span4">
                            <div className='w-[50%] h-[100%] '>
                                    <div className=' py-20 px-10'>
                                        <div className=' mb-3'>
                                            <span className='rounded-full w-40 h-40  bg-white inline-block text-center font-black leading-[40px]'>1</span>
                                        </div>
                                        <h2 class='text-white font-black leading-[40px] md:text-32 text-24'>Headliine title here</h2>
                                        <p class='text-base text-white leading-[25px] mt-3 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus am, purus sit amet luctus am, purus sit amet luctus</p>
                                    </div>
                            </div>
                            <div className='w-[50%] h-[100%] flex items-end justify-center'>
                                <div className=' w-[224px] h-[100%] relative'>
                                    <Image src={fpframe} alt="fpframe"  layout="fill"  />
                                </div>
                            </div>
                        </motion.div>
                        <div class='col-span-4  flex justify-between'>
                        <motion.div
                        variants={element2}
                        custom={2}
                        initial="hidden"
                        whileInView="visible"
                        className='lazy' id="span2">
                            <div >
                                <div className='p-10'>
                                    <span className='rounded-full w-40 h-40  bg-white inline-block text-center font-black leading-[40px]'>2</span>
                                    <h2 className='text-white font-black leading-[40px] text-32 mt-5'>Headliine title here</h2>
                                    <p className='text-base text-white leading-[25px] mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus am, purus sit amet luctus am, purus sit amet luctus</p>
                                </div>
                             </div>
                            <div className=' h-[60%] w-[100%] flex justify-center '>
                                <div className='relative w-[220px]'>
                                    <Image src={secpframe} alt="secpframe" layout="fill"  />
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                        variants={right}
                        custom={1}
                        initial="hidden"
                        whileInView="visible"
                        className='lazy' id="span3">
                            <div >
                                <div className='p-10'>
                                    <span className='rounded-full w-40 h-40  bg-white inline-block text-center font-black leading-[40px]'>3</span>
                                    <h2 className='text-white font-black leading-[40px] text-32 mt-5'>Headliine title here</h2>
                                    <p className='text-base text-white leading-[25px] mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus am, purus sit amet luctus am, purus sit amet luctus</p>
                                </div>
                             </div>
                            <div className=' h-[60%] w-[100%] flex justify-center'>
                                <div className='relative w-[220px]'>
                                    <Image src={secpframe} alt="secpframe" layout="fill" />
                                </div>
                            </div>
                        </motion.div>
                        </div>
                        <motion.div
                        variants={element1}
                        custom={2}
                        initial="hidden"
                        whileInView="visible"
                        className='lazy' id="span5">
                             <div className='w-[50%] h-[100%] '>
                                    <div className=' py-20 px-10'>
                                        <div className=' mb-3'>
                                            <span className='rounded-full w-40 h-40  bg-white inline-block text-center font-black leading-[40px]'>1</span>
                                        </div>
                                        <h2 class='text-white font-black leading-[40px] md:text-32 text-24'>Headliine title here</h2>
                                        <p class='text-base text-white leading-[25px] mt-3 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus am, purus sit amet luctus am, purus sit amet luctus</p>
                                    </div>
                            </div>
                            <div className='w-[50%] h-[100%] flex items-end justify-center'>
                                <div className=' w-[224px] h-[100%] relative'>
                                    <Image src={fpframe} alt="fpframe"  layout="fill" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </MediaQuery>
             </div>
             <Script id="lazyload">
                {` 
                        var lazyloadimages 
                         
                        if("IntersectionObserver" in window){
                            lazyloadimages = document.querySelectorAll(".lazy")
                            var imageObserver = new IntersectionObserver(function(entries,observer){

                                entries.forEach(function(entry){
                                    if(entry.isIntersecting){
                                        var image = entry.target

                                        image.classNameList.remove("lazy")

                                        imageObserver.unobserve(image)
                                    }
                                })

                            })

                            lazyloadimages.forEach(function(image){
                                console.log("observed")
                                imageObserver.observe(image);
                            })
                            
                        }
                `}
            </Script>
        </div>
        
    )

}
