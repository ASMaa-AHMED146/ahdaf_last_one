import React from 'react'
import LottieHandler from "../components/feedback/LottieHandler/LottieHandler"
export default function Error() {
  return (
    <div className='flex justify-center items-center h-[100vh] w-full'>
     <LottieHandler type={"notfound"} message={'this page not found'} />
    </div>
  )
}
