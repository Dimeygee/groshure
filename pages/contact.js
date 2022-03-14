import ACcontainer from "../components/accontainer"
import ACmainContainer from "../components/accmaincontainer"
import Link from "next/link"
import Image from "next/image"
import linepath from "../public/linepath.svg"
import linepath1x from "../public/linepath1x.svg"
import location from "../public/location.svg"
import message from "../public/message.svg"
import phone from "../public/phone.svg"
import Button from "../components/button"
import MediaQuery from "react-responsive"
import { motion } from "framer-motion"
import Head from "next/head"

const element = {
    hidden: { opacity: 0, y : 100 },
    visible: { opacity: 1, y: 0,  transition:{
        delay: 0.3
    } }
}

const elText = {
    hidden: { opacity: 0, y: 100 },
    visible : i => ({
        opacity: 1, transition:{
            delay: i * 0.2
        }, y: 0
    })
}

export default function Contact(){


    return(
        <div class='w-85  mt-7 mx-auto overflow-x-clip'>
            <Head>
          <link rel="icon" href="" />
          <link href="" rel="canonical" />
          <meta name="" content="" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content=""
          />
          <title>groshure 🚀 </title>
          <meta
            name="description"
            content="I'm a self-taught Front End Developer and turning ideas into real life products is my calling."
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content=""
          />
          <meta property="" content="" />
          <meta property="" content="" />
          <meta
            property="og:description"
            content=""
          />
          <meta
            name="twitter:title"
            content=""
          />
          <meta
            name="twitter:description"
            content=""
          />
          <meta name="twitter:image" content="" />
          <meta name="twitter:card" content="" />
          <meta name="twitter:url" content="" />
        </Head>
            <ACcontainer>
                <motion.div
                initial="hidden"
                animate='visible'
                variants={element} 
                class='md:text-60 text-36 font-36 font-[Righteous] text-center '>Contact <span class='text-groshure-red'>Us</span></motion.div>
                <motion.p
                 initial="hidden"
                 animate='visible'
                 variants={element} 
                class='md:w-350 text-base mx-auto text-center my-2 font-[circularstd]'>An enim nullam tempor sapien gravida donec enimipsum porta justo congue purus pretium ligula rjbrbnrbrj</motion.p>
                <motion.div
                 initial="hidden"
                 animate='visible'
                variants={element} 
                class='text-center mx-auto text-sm font-[circularstd]'>
                    <Link href='/'>
                        <a >Home</a>
                    </Link>
                    <span> > </span>
                    <Link href='/about'>
                        <a class='text-groshure-red underline'>Contact Us</a>
                    </Link>
                </motion.div>
            </ACcontainer>
            <ACmainContainer>
                <div class=' md:w-50 h-614 flex items-center flex-col w-100p font-[circularstd] '>
                    <div class='h-387 w-387 relative '>
                        <MediaQuery maxWidth={767}>
                            <div class=' absolute  w-100p h-100p '>
                                <Image src={linepath1x} alt="linepath1x" layout="fill" />
                            </div>
                        </MediaQuery>
                        <MediaQuery minWidth={768}>
                            <div class=' absolute w-100p h-100p' >
                                <Image src={linepath} alt="linepath" layout="fill" />
                            </div>
                        </MediaQuery>
                        <span class='flex flex-col items-center absolute md:-left-8 md:top-3 left-10 top-1'>
                            <motion.span
                             initial={{ opacity: 0, scale:0 }}
                             whileInView={{ opacity: 1, scale : 1 , transition: {
                                 delay: 0.5
                             }}}
                            class='p-2 flex top-4 bg-white w-[72px] h-[72px] rounded-full items-center justify-center  shadow-bfs'>
                                <span class='relative  inline-block  w-[27px] h-[27px]'>
                                    <Image src={phone} alt="phone" layout="fill"/>
                                </span>
                            </motion.span>
                            <motion.div
                            initial="hidden"
                            whileInView="visible"
                            custom={1}
                            variants={elText}
                            class='text-center mt-4 '>
                                <h4 class='text-24 text-[#1B1C20]'>Phone</h4>
                                <p class='text-sm text-[#797B89]'>(+1) 382 482 5791</p>
                            </motion.div>
                        </span>
                        <motion.span
                         initial={{ opacity: 0, scale:0 }}
                         whileInView={{ opacity: 1, scale : 1 , transition: {
                             delay: 0.9
                         }}}
                        class=' flex flex-col items-center absolute md:-right-[60px] md:top-[38%] right-6 top-[30%]'>
                            <span class='p-2 flex bg-white w-[72px] h-[72px] rounded-full items-center justify-center shadow-bfs'>
                                <span class='relative  inline-block  w-[27px] h-[27px]'>
                                    <Image src={message} alt="message" layout="fill"/>
                                </span>
                            </span>
                            <motion.div
                            initial="hidden"
                            whileInView="visible"
                            custom={2}
                            variants={elText}
                            class='text-center mt-4'>
                                <h4 class='text-24 text-[#1B1C20]'>Email</h4>
                                <p class='text-sm text-[#797B89]'>capiproduct@gmail.co</p>
                            </motion.div>
                        </motion.span>
                        <motion.span
                         initial={{ opacity: 0, scale:0 }}
                         whileInView={{ opacity: 1, scale : 1 , transition: {
                             delay: 0.2
                         }}}
                        class='flex flex-col items-center absolute md:-bottom-[120px] md:left-[15%] -bottom-[100px] left-[25%] '>
                            <span class='p-2 flex bg-white w-[72px] h-[72px] rounded-full items-center justify-center  shadow-bfs'>
                                <span class='relative  inline-block  w-[27px] h-[27px]'>
                                    <Image src={location} alt="location" layout="fill"/>
                                </span>
                            </span>
                            <motion.div
                            initial="hidden"
                            whileInView="visible"
                            custom={3}
                            variants={elText}
                            class='text-center mt-4'>
                                <h4 class='text-24 text-[#1B1C20]'>Location</h4>
                                <p class='text-sm text-[#797B89]'>820 Pall Mall, Londo</p>
                            </motion.div>
                        </motion.span>
                    </div>
                </div>
                <div class='md:w-50 w-100p h-614 flex justify-center ' >
                    <div class='md:w-[428px] w-100p h-[580px]  relative bg-[#D8D8D8] rounded-[20px] '>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.3560372037095!2d-0.1361932843222698!3d51.50668377963507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604d0d1dc04db%3A0x9a9210be2dfb7584!2sPall%20Mall%2C%20St.%20James&#39;s%2C%20London%2C%20UK!5e0!3m2!1sen!2sng!4v1646657555588!5m2!1sen!2sng" style={{ border: 0 }} loading="lazy" class='absolute w-100p h-100p rounded-[20px]'></iframe>
                    </div>
                </div>
            </ACmainContainer>
            <div class='md:h-[323px] min-h-[323px] md:min-h-0 flex justify-between md:mb-20 md:mt-[150px] md:flex-row flex-col'>
                <div class='md:w-50 flex md:justify-end  md:order-1 lg:order-1 order-2'>
                    <motion.div 
                    initial={ { opacity: 0, x: -100 } }
                    whileInView={{ opacity : 1, x: 0}}
                    viewport={{ once: true }}
                     class='w-[448px] font-[circularstd]  '>
                        <form class='relative rounded-[25px] block min-h-[523px] shadow-bfs p-8 bg-white md:translate-y-0 translate-y-[90px] z-10'>
                        <fieldset class='border-2 border-[#E8E9ED] px-4 py-1 text-sm text-[#212B08] rounded-[12px]'>
                                <legend>Name</legend>
                                <input type='text' placeholder='Enter name' class=' p-0 inline-block w-100p text-base border-none outline-none text-[#C6C8D3]' />
                            </fieldset>
                            <fieldset class='border-2 border-[#E8E9ED] px-4 py-1 text-sm text-[#212B08] rounded-[12px] my-4'>
                                <legend>Email</legend>
                                <input type='text' placeholder='Enter email' class=' p-0 inline-block w-100p text-base border-none outline-none text-[#C6C8D3]' />
                            </fieldset>
                            <fieldset class='border-2 border-[#E8E9ED] px-4 py-1 text-sm text-[#212B08] rounded-[12px] mb-10'>
                                <legend>Message</legend>
                                <textarea placeholder="Write your message" class='text-[#C6C8D3] w-100p h-[159px]'>

                                </textarea>
                            </fieldset>
                            <Button width='100%' paddingTop="14px" paddingBottom="14px" borderRadius="12px" fontSize="16px" backgroundColor="#FD4C5C" color='#fff' display="block" >Submit</Button>
                        </form>
                    </motion.div>
                </div>
                <motion.div
                initial={ { opacity: 0, x: 100 } }
                whileInView={{ opacity : 1, x: 0}}
                class='md:w-50 md:px-20  flex flex-col md:justify-end  md:text-right text-center md:order-2 order-1 '>
                    <h1 class=' text-[#1B1C20] font-[Righteous] md:text-40 text-36'>Get In Touch</h1>
                    <p class='text-[#797B89] text-base mt-2 font-[circularstd]'>Contact us if you have any questions about our company or products. We will try to provide an answer within few days. </p>
                </motion.div>
            </div>
        </div>
    )

}