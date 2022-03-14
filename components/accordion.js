import arrowup from "../public/arrowup.svg"
import arrowdown from "../public/arrowdown.svg"
import Image from "next/image"
import { useRef } from "react"



export default function Accordion({ q, active, onToggle   }) {


    return(
            <>
                <div style={{ cursor: "pointer" }} class='flex justify-between items-center py-2 ' onClick={onToggle}>
                    <p class='font-black text-base'>{q.question}</p>
                    <span class='w-[30px] text-center  relative h-8 ml-2  ' >
                        {active ? <Image class='absolute' src={arrowup} alt='arrowup' /> : <Image class='absolute' src={arrowdown} alt='arrowdown' />} 
                    </span>
                </div>
                <p  class='font-[circularstd] border-2 border-black font-sm' className={`replywrapper ${active ? "open" : "" }`}>{q.reply}</p>
            </>
    )

}