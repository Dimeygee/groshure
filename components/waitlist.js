import Button from "./button"

export default function WaitList({ width, boxShadow }) {

    return(
        <div className={`md:w-[${width}] `} style={{
            boxShadow: boxShadow}}>
         {/* className='flex justify-between border-2 border-white bg-white p-1 min-h-[50px] rounded-full' */}
              <form className='flex grow w-[100%] md:w-fit'>
                <input style={{ border: "none" , outline: "none"}} className='grow md:text-18 text-sm w-[100%]
                 md:w-fit py-1 md:px-8 px-2 rounded-full' type='text' placeholder="Enter email address" />
              </form>
              <Button backgroundColor="#FD4C5C" color="white" borderRadius="40px" paddingBottom="8px" paddingTop="8px" paddingRight="30px" paddingLeft="30px" fontSize="18px" flexGrow="1">
                Join waitlist
              </Button>
        </div>
    )

}