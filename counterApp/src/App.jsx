import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [number, setNumber] = useState(0);

  const addValue = ()=>{
    if(number === 20)
    return number = -1;
    setNumber(number + 1);
  }

  const removeValue = ()=>{
    if(number >= 1)
    setNumber(number - 1);
  }


  return (
    <>
    <div className='w-[100vw] h-[100vh] flex justify-center items-center flex-col bg-red-500'>
    <h1 className='text-black font-extrabold text-6xl my-16'>CounterApp</h1>
     <div className='bg-white w-[20rem] h-[10rem] flex justify-center items-center flex-col space-y-9 rounded-3xl shadow-2xl'>
     <div>
     <h2 className='text-center text-3xl text-red-500 font-bold'>Counter Value: {number}</h2>
     </div>
      <div className='flex flex-row gap-9 justify-center items-center w-[20rem]'>
      
      <button onClick={addValue} className='bg-red-500 text-white font-semibold w-[6rem] rounded-full'>Add Value</button>  
    
      <button onClick={removeValue} className='bg-red-500 text-white font-semibold w-[6rem] rounded-full'>Remove</button>
    
      </div>
     </div> 
    </div>
    </>
  )
}
          
export default App;
