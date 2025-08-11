import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/')
        console.log(response)
        setData(response.data as string);
      } catch(e) {
        console.log(e)
        throw new Error();
      }
    }
    fetchData();
  }, [])

  return (
    <div>
      <p>Home</p>
      <p>{data}</p>
    </div>
  )
}

export default Home
