import Button from "./button"

export default function WaitList({ width, boxShadow }) {

  
    return(
        <div style={{
            boxShadow: boxShadow,
            width:width
        }} className={`flex justify-between border-white rounded-[50px] 3xl:rounded-[70px] bg-white p-1 min-h-[50px] border-2`}>
              <div className='flex grow'>
                <input style={{ border: "none" , outline: "none"}} className='waitlistform
                  py-1 px-2 xs:w-100p 3xl:pl-12 rounded-full w-[60%]' type='text' placeholder="Enter email address" />
                <Button>Join waitlist</Button>
              </div>
        </div>
    )

}
