"use client"

import { useState } from "react"


const FormValidation = () => {

  const [formData,setFormData] = useState({
    userName:'',
    mobileNumber:'',
  })
  const [errors,setErrors] = useState({
    userName:'',
    mobileNumber:'',
  })
  const [successMessage,setSuccessMessage] = useState('')
  function handleSubmit(e){
    let num = 0;
    e.preventDefault()
    if(formData.userName===''){
      setErrors((prevState)=> ({...prevState, userName:'User Name Required!'}))
      num++;
    }
    if(formData.mobileNumber===''){
      setErrors((prevState)=> ({...prevState, mobileNumber:'Mobile Number Required!'}))
      num++;
    }
    if(num===0){
      setSuccessMessage('Successfully Added!')
    }
  }

  function handleChange(e){
    setFormData((prevState)=> ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
    if(e.target.name==='userName'){
      setErrors((prevState)=> ({...prevState, userName:''}))
    }else if(e.target.name==='mobileNumber'){
      setErrors((prevState)=> ({...prevState, mobileNumber:''}))
    }
  }

  return (
    <div className="max-w-4xl mx-auto mt-20 bg-cyan-200 p-10 min-h-[400px]">
      <form onSubmit={handleSubmit}>
        <div className="flex justify-between px-10 flex-col">
          <label>User Name</label>
          <input type="text" name="userName" value={formData.userName} onChange={handleChange} />
          {errors.userName && <p>{errors.userName}</p>}
        </div>
        <div className="flex justify-between px-10 flex-col">
          <label>Mobile Number</label>
          <input type="text" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} />
          {errors.mobileNumber && <p>{errors.mobileNumber}</p>}
        </div>
        <div className="mt-3 flex justify-center items-center">
          <button className="px-10 py-2 bg-green-700 rounded-lg text-gray-50" type="submit">Submit Form</button>
        </div>
        <h3 className="text-center mt-5 text-green-500">{successMessage}</h3>
      </form>
    </div>
  )
}

export default FormValidation
