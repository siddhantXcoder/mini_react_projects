import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import { useGif } from '../hook/useGif';

const Random = () => {

  const {gif, loading, fetchData} = useGif();

  function clickHandler() {
    fetchData();
  }
  return (
    <div className=' bg-green-500 border border-black flex flex-col gap-y-5 items-center p-[15px] w-1/2 rounded-lg'>
      <h1 className='text-3xl underline uppercase font-bold'>A Random Gif</h1>
      {
        loading ? (<Spinner/>) : (<img src={gif} width="450"/>)
      }

      <button onClick={clickHandler} className='w-10/12 bg-yellow-100 p-2 text-xl font-semibold rounded-md'>
        Generate
      </button>
    </div>
  )
    }

export default Random