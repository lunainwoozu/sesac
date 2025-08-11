import React, { useEffect, useState } from 'react'
import axios from 'axios';

interface UserResponse {
  message: string,
}

const About = () => {
  const [data, setData] = useState<UserResponse|null>(null);
  useEffect(()=> {
    const postUser = async () => {
      try {
        const response = await axios.post<UserResponse>('http://localhost:4000/users', {
          name: "ddd"
        })
        console.log(response.data)
        setData(response.data); //UserResponse 형태로 오기로 약속했으므로 에러가 없어짐
      } catch(e) {
        console.log(e)
        throw new Error();
      }
    }
    postUser();
  },[])

  useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <div>
      <p>About</p>
      <p>{data?.message}</p>
    </div>
  )
}

export default About
