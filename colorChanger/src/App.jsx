import { useState } from 'react'
import './App.css'
import {gsap} from 'gsap'

function App() {
    const [color, setcolor] = useState("gray");

  return (
    <div className="w-full h-screen duration-200"
     style={{backgroundColor: color}}>

     <div className=' relative bg-white w-[90%] h-[8%] m-auto
      bottom-[-40rem] rounded-md flex flex-wrap gap-5 p-2.5 justify-center' >

      <button onClick={()=> setcolor("red")} className='px-12 text-white bg-red-700 h-10 rounded-lg' style={{backgroundColor: "red"}}>RED</button>
      <button onClick={()=> setcolor("blue")} className='px-12 text-white bg-blue-500 h-10 rounded-lg' style={{backgroundColor: "blue"}} >BLUE</button>
      <button onClick={()=> setcolor("green")} className='px-12 text-white bg-green-600 h-10 rounded-lg' style={{backgroundColor: "green"}} >GREEN</button>
      <button onClick={()=> setcolor("purple")} className='px-12 text-white bg-purple-800 h-10 rounded-lg' style={{backgroundColor: "purple"}}>PURPLE</button>
      <button onClick={()=> setcolor("violet")} className='px-12 text-white bg-violet-800 h-10 rounded-lg' style={{backgroundColor: "violet"}}>VIOLET</button>
      <button onClick={()=> setcolor("orange")} className='px-12 text-white bg-orange-600 h-10 rounded-lg' style={{backgroundColor: "orange"}}>ORANGE</button>

     </div>
     

    </div>

  )
}

export default App
