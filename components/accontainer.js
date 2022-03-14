import accontainer from "../public/accontainer.jpg"
import Image from "next/image"

export default function ACcontainer({ children }){

    return(
            <div className='h-327 relative rounded-[25px] z-10'>
                <Image src={accontainer} alt="accontainer -z-0" layout="fill" priority className='rounded-[25px]'/>
                <div className='absolute w-100p h-100p  py-12 flex flex-col justify-between'>
                    { children }
                </div>
            </div>
    )

}