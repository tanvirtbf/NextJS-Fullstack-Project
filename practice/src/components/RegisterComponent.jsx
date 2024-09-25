"use client"
import axios from "axios"
import { useState } from "react"

const RegisterComponent = () => {
  const [result,setResult] = useState('')

  const handleGet = async () => {
    console.log('Get Request!')
    await axios.get('/api/register').then((res)=> {
      console.log(res)
    })
  }

  const handlePost = async () => {
    console.log('Post Request')
    await axios.post('/api/register', {email:'tanvir@gmail.com'}).then((res)=> {
      console.log(res)
    })
  }

  const handleDelete = async () => {
    console.log('Delete Request')
    await axios.delete('/api/register', {data:{email:'tanvir@gmail.com'}}).then((res)=> {
      console.log(res)
    })
  }

  return (
    <div className="max-w-4xl mx-auto mt-20">
      <div>
        <button onClick={handleGet} className="px-5 py-2 bg-green-600 text-gray-50 mx-3">Get</button>
        <button onClick={handlePost} className="px-5 py-2 bg-green-600 text-gray-50 mx-3">Post</button>
        <button onClick={handleDelete} className="px-5 py-2 bg-green-600 text-gray-50 mx-3">Delete</button>
        <button className="px-5 py-2 bg-green-600 text-gray-50 mx-3">Put</button>
        <button className="px-5 py-2 bg-green-600 text-gray-50 mx-3">Patch</button>
      </div>
      <div className="mt-10">
        <h1>You hav requested {result}</h1>
      </div>
    </div>
  )
}

export default RegisterComponent
