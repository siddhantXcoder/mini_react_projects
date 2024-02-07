import { useState, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react';

function App() {

  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [char, setChar] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";

    if(number) str += "0123456789";
    if(char) str += "~!@#$%^&*()[]{}";

    for (let i = 0; i < array.length; i++) {
      let ch = (Math.random() * str.length + 1);
      pass = str.charAt(ch);
    }

    setPassword(pass);
  }, [length, number, char, setPassword]);

  useEffect(()=>{
    passwordGenerator();
  },[length, number, char, passwordGenerator]);

  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-white bg-gray 700'>heeloo</div>
    </>
  )
}

export default App
