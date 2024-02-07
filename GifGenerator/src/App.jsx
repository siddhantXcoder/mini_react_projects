import { useState } from 'react'
import Random from "./components/Random";

import Tag from "./components/Tag"


function App() {
  return (
    <div className='w-full h-screen flex flex-col bg-yellow-300 items-center relative'>
    <h1 className='bg-white rounded-lg  w-11/12 text-4xl font-bold text-center mt-[40px]'>RANDOM GIF's</h1>
    <div className='flex flex-col items-center w-full mt-[30px] gap-y-10'>
      <Random/>
      <Tag/>
    </div>
    </div>
  )
}

export default App
