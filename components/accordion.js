import arrowup from "../public/arrowup.svg"
import arrowdown from "../public/arrowdown.svg"
import Image from "next/image"



export default function Accordion({ q, active, onToggle   }) {


    return(
            <>
                <div style={{ cursor: "pointer" }} className='flex justify-between items-center py-2 ' onClick={onToggle}>
                    <p className='font-black text-base'>{q.question}</p>
                    <span className='w-[30px] text-center  relative h-8 ml-2  ' >
                        {active ? <Image className='absolute' src={arrowup} alt='arrowup' /> : <Image className='absolute' src={arrowdown} alt='arrowdown' />} 
                    </span>
                </div>
                <p className={`replywrapper ${active ? "open" : "" } font-[circularstd]  font-sm`}>{q.reply}</p>
            </>
    )

}