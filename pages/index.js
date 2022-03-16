import Image from "next/image"
import herocontainer from "../public/herocontainer.jpg"
import fruits from "../public/fruits.svg"
import card from "../public/card.png"
import { motion } from "framer-motion"
import Head from "next/head"
import Features from "../components/features"
import Steps from "../components/steps"
import Frequently from "../components/frequently"
import Support from "../components/support"
import ComingSoon from "../components/commingsoon"
import styles from "../components/stroke.module.css"
import MobileHeader from "../components/mobileheader"
import WaitList from "../components/waitlist"





export default function Home() {

  

  const container = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  }

  const items = {
      visible: i => ({ 
        opacity: 1, 
        x: 0,
        transition:{
        delay: i *  0.3,
      } }),
      hidden: { opacity: 0, x: -100 },
  }

  const itemImage = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: 100 },
  }



  return (
    <div className='home_container ' >
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
        <MobileHeader />
      <header  className='hidden  min-h-[100vh] container mx-auto w-85 md:flex items-center md:min-h-[75vh] md:mt-0 mt-5 xl:min-h-1/3' >
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={container}
            className='h-[450px]  w-[100%] relative overflow-hidden rounded-tr-[25px] mt-10'
            >
            <div className='z-10  md:absolute top-[44px] left-[44px] md:w-[598px] '>
              <motion.div
              custom={1}
              variants={items}
              className='font-[Righteous] text-36 md:text-[60px] text-black leading-[70px]'>Grocery shopping at your <span  className={styles.stroke}>fingertips</span></motion.div>

              <motion.div 
                       custom={2}
                          variants={items} className='text-16 my-6 md:w-[570px]  font-[circularstd]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis vectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis
              </motion.div>
             <motion.div  custom={3} variants={items}>
                <WaitList width="526px" />
             </motion.div>
            </div>
            <div  className='hidden md:block absolute w-100p h-100p '>
              <div className='relative w-100p h-100p'>
                  <Image src={herocontainer} alt='herocontainer' layout="fill" priority/>
                </div>
            </div>
            <div className='w-[65%] relative h-[100%] left-[38%] hidden md:block '>            
              <motion.div 
              custom={4}
              variants={itemImage}
              className='relative  h-100p'>
                  <Image  src={fruits} layout='fill' alt='fruits'  priority/>
              </motion.div>
            </div>
          </motion.div>
      </header>
      <div className="container mx-auto  w-85 py-16 grid md:grid-cols-3 gap-20 md:gap-4 grid-cols-1">
              <motion.div initial={{ opacity: 0, y: 100}}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='flex items-center flex-col md:flex-row '>
                <div className='mb-4 md:mb-0 '>
                  <div className=' flex  p-[7px] rounded-full  justify-center shadow-bfs md:mr-4 mx-auto md:mx-0 '>
                      <div className=' w-[50px] h-[50px] relative '>
                        <Image src={card} alt='changecolor'  priority layout="fill"/>
                      </div>
                    </div>
                </div>
             <div className="md:pr-6 text-center md:text-left   font-[circularstd]">
                <h4 className='font-medium text-18 leading-5 mb-2' >Highlight title</h4>
                <p className='text-sm text-[#718096] px-8 md:px-0 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus</p>
             </div>
          </motion.div>
          <motion.div
          initial={{ opacity: 0, y: 100}}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='flex items-center flex-col md:flex-row '>
                <div className='mb-4 md:mb-0 '>
                <div className=' flex  p-[7px] rounded-full  justify-center shadow-bfs md:mr-4 mx-auto md:mx-0 '>
                      <div className=' w-[50px] h-[50px] relative '>
                        <Image src={card} alt='changecolor'  priority layout="fill"/>
                      </div>
                    </div>
                </div>
             <div className="md:pr-6 text-center md:text-left   font-[circularstd]">
                <h4 className='font-medium text-18 leading-5 mb-2' >Highlight title</h4>
                <p className='text-sm text-[#718096] px-8 md:px-0 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus</p>
             </div>
          </motion.div>
          <motion.div
          initial={{ opacity: 0, y: 100}}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='flex items-center flex-col md:flex-row '>
                <div className='mb-4 md:mb-0 '>
                  <div className='flex w-62 h-62  rounded-full justify-center shadow-bfs md:mr-4 mx-auto md:mx-0 '>
                    <Image src={card} alt='changecolor'  priority/>
                  </div>
                </div>
             <div className="md:pr-6 text-center md:text-left   font-[circularstd]">
                <h4 className='font-medium text-18 leading-5 mb-2' >Highlight title</h4>
                <p className='text-sm text-[#718096] px-8 md:px-0 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus</p>
             </div>
          </motion.div>
        </div>
        <main>
          <Features />
          <Steps />
          <Support />
          <ComingSoon />
          <Frequently />
        </main>
    </div>
  )
}


