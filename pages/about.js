
import Link from "next/link"
import { motion } from "framer-motion"
import Head from "next/head"
import ACmainContainer from "../components/accmaincontainer"
import ACcontainer from "../components/accontainer"
import { imageSlider } from "../components/sliderutils"
import ImageSlider from "../components/imageslider"
import styles from "../components/stroke.module.css"



const element = {
    hidden: { opacity: 0, y : 100 },
    visible: { opacity: 1, y: 0,  transition:{
        delay: 0.3
    } }
}


export default function About () {

    return(
        <div className='w-85  mt-7 mx-auto overflow-hidden '>
            <Head>
          <link rel="icon" href="" />
          <meta name="" content="" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content=""
          />
          <title>groshure 🚀 </title>
          <meta
            name="description"
            content=""
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
              <ACcontainer >
              <motion.div 
                    initial="hidden"
                    animate="visible"
                    viewport={{ once: true }}
                    variants={element}
                    className='md:text-60 text-36 font-[Righteous] text-center '>About <span className='text-groshure-red'>Us</span></motion.div>
                    <motion.p 
                    initial="hidden"
                    animate="visible"
                    viewport={{ once: true }}
                    variants={element}
                    className='md:w-350 text-base mx-auto text-center  font-[circularstd]'>An enim nullam tempor sapien gravida donec enimipsum porta justo congue purus pretium ligula rjbrbnrbrj</motion.p>
                    <motion.div 
                    initial="hidden"
                    animate="visible"
                    viewport={{ once: true }}
                    variants={element}
                    className='text-center mx-auto text-sm  font-[circularstd]'>
                        <Link href='/'>
                            <a >Home</a>
                        </Link>
                        <span> &gt; </span>
                        <Link href='/about'>
                            <a className='text-groshure-red underline'>About us</a>
                        </Link>
                    </motion.div>
              </ACcontainer>
                <ACmainContainer >
                  <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x : 0 , transition: {
                      delay: 0.5
                  }}}
                  className='md:text-48 text-36 font-[Righteous]   md:w-[40%] md:pl-10 overflow-y-hidden'>
                      <p className='md:w-250 md:pb-12 pb-12 w-[150px] md:text-left text-center'>Who are <span className={styles.shopstroke}>We?</span></p>
                  </motion.div>
                  <motion.div 
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x : 0 , transition: {
                      delay: 0.1
                  }}}
                  className='md:w-[60%] md:px-12 md:py-12 md:border-t-0  md:border-l-4 border-t-4 border-groshure-red md:pt-0 pt-12  font-[circularstd]' >
                      <p className='text-24 md:text-base md:text-left text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu ullamcorper sit orci morbi a ut. Velit sagittis sem ut commodo, elit. Sem leo semper facilisis diam. Nulla netus at tellus pellentesque. Elementum lorem tortor tellus urna mauris quis suspendisse sit. Pellentesque odio varius congue curabitur nec, sit. Libero posuere duis volutpat at auctor velit ipsum, sagittis integer. Sed at at sit suspendisse imperdiet.vcipsum, sagittis integer. Sed at at sit suspendisse imperdiet.</p>
                  </motion.div>
                </ACmainContainer>  
            <div className='w-100p min-h-[70vh] mb-10 oveflow-hidden '>
                <motion.h1 
                initial="hidden"
                whileInView="visible"
                variants={element}
                className='text-center font-[Righteous] md:text-48 text-36 ' >Meet the <span className={styles.shopstroke}>Team</span></motion.h1>
                <ImageSlider imageSlider={imageSlider} />
            </div>
        </div>
    )

}
