import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const url = `https://api.giphy.com/v1/gifs/random?api_key=1Y9q8K95QglJS9ZtWUfM0MKEnEoDxWNy&tag=&rating=g`;
export const useGif = (tag) => {
    const [gif, setgif] = useState("");
    const [loading, setLoading] = useState(false);
  
    async function fetchData(tag) {
      setLoading(true);
      const {data} = await axios.get(tag ? `${url}&tag=${tag}`: url);
      const imageSource = data.data.images.downsized_large.url;
      setgif(imageSource);
      setLoading(false);
    }
  
    useEffect(()=>{
      fetchData();
    },[])

    return{gif, loading, fetchData};
}
