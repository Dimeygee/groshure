import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import user2 from "../public/user2.jpg"
import user1 from "../public/user1.jpg"
import user3 from "../public/user3.jpg"
import { wrap } from "popmotion";
import Image from "next/image"




const variants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 50 : -50,
        opacity: 0
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 50 : -50,
        opacity: 0
      };
    }
  };

    const swipeConfidenceThreshold = 500;
    const swipePower = (offset=number, velocity= number) => {
    return Math.abs(offset) * velocity;
    };



export default function ImageSlider({imageSlider}){

    const [[page, direction], setPage] = useState([0, 0]);

    const paginate = (newDirection= number) => {
        setPage([page + newDirection, newDirection]);
      };

    

    const imageIndex = wrap(0, imageSlider.length, page);

    const skipToImage = (imageid=number) => {
      let changeDirection 
      if(imageid > imageIndex){
        changeDirection = 1
      }else if(imageid < imageIndex ){
        changeDirection = -1
      }
      setPage([imageid,changeDirection ])
    }



    return (
      <div className='  min-h-[450px] oveflow-hidden'>
        <div className='relative min-h-[780px]  md:min-h-[410px]'>
        <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
            className='w-100p h-[100%] absolute'>
              
              <div className='flex pt-6 md:flex-row flex-col '>
                        <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x : 0 , transition: {
                            delay: 0.4
                        }}}
                        className='order-1 sm:order-1 md:order-2 md:pl-10 md:w-[40%]  md:text-left text-center md:mt-0 mt-10 font-[circularstd]  py-[40px]'>
                            <h4 className='text-24 text-[#141414] font-bold'>{imageSlider[imageIndex].feedback}</h4>
                            <small className='text-18 text-[#141414] mt-3 mb-4 inline-block'>{imageSlider[imageIndex].title}</small>
                            <p className='text-24 text-[#616161]'>{imageSlider[imageIndex].para}</p>
                        </motion.div>
                        <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x : 0 , transition: {
                            delay: 0.4
                        }}}
                        className='sm:order-1 md:order-2 md:w-[60%] flex justify-center items-center md:mt-0 mt-5'>
                            <div className='relative md:w-[200px] w-[200px] h-[90px] md:h-[180px] md:translate-x-[80px] translate-x-[20px] '>
                                <Image src={ imageSlider[imageIndex].images[0] } alt="image" layout="fill"  />
                            </div>
                            <div className='relative border-white border-[10px] md:border-x-[20px] md:w-[300px] md:h-[270px] w-[350px] h-[160px] z-10 rounded-full'>
                                <Image src={ imageSlider[imageIndex].images[1] }  alt="image" layout="fill"  />
                            </div>
                            <div className='relative  md:w-[200px] w-[200px] h-[90px] md:h-[180px] md:-translate-x-[80px] -translate-x-[20px]'>
                                <Image src={ imageSlider[imageIndex].images[2] }  alt="image" layout="fill"  />
                            </div>
                        </motion.div>
                    </div>
            </motion.div>
          </AnimatePresence>
          <div className="next" onClick={() => paginate(1)}>
            {"‣"}
          </div>
          <div className="prev" onClick={() => paginate(-1)}>
            {"‣"}
          </div>
        </div>
        <div className='flex items-center justify-center'>
              <div className=' w-[80px] flex justify-between items-center'>
              <div style={ imageSlider[imageIndex].id == 1 ? { width: "18px", height: "18px" , border:"4px solid #FD4C5C", borderRadius: "50%", backgroundColor: "#fff",  } : { width: "13px", height: "13px",  borderRadius: "50%", backgroundColor: "#FD4C5C", opacity:0.5    } } onClick={() => skipToImage(0)}></div>
                  <div style={ imageSlider[imageIndex].id == 2 ? { width: "18px", height: "18px",  border:"4px solid #FD4C5C", borderRadius: "50%", backgroundColor: "#fff" } : { width: "13px", height: "13px",  borderRadius: "50%", backgroundColor: "#FD4C5C", opacity:0.5  } } onClick={() => skipToImage(1)}></div>
                  <div style={ imageSlider[imageIndex].id == 3 ? { width: "18px", height: "18px", border:"4px solid #FD4C5C", borderRadius: "50%", backgroundColor: "#fff" } : { width: "13px", height: "13px",  borderRadius: "50%", backgroundColor: "#FD4C5C" , opacity:0.5   } } onClick={() => skipToImage(2)}></div>  
                </div>                 
          </div>          
      </div>
    )
}


