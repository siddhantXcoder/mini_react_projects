import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import { useGif } from '../hook/useGif';

const Tag = () => {

  const {gif, loading, fetchData} = useGif();

  const [tag, setTag] = useState("");

  function clickHandler() {
    fetchData(tag);
  }

  function changeHandler(event){
    setTag(event.target.value);
  }
  return (
    <div className=' bg-blue-400 border border-black flex flex-col gap-y-5 items-center p-[15px] w-1/2 rounded-lg'>
      <h1 className='text-3xl underline uppercase font-bold'>{tag}</h1>
      {
        loading ? (<Spinner/>) : (<img src={gif} width="450"/>)
      }

      <input
        className='w-10/12  bg-yellow-100 p-2 text-xl font-semibold rounded-md text-center'
        onChange={changeHandler}
        value={tag}
      />

      <button onClick={clickHandler} className='w-10/12 bg-yellow-100 p-2 text-xl font-semibold rounded-md'>
        Generate
      </button>
    </div>
  )
    }

export default Tag