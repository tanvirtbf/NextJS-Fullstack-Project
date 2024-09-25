"use client";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useState } from "react";

const ReactForm = () => {
  const {register,handleSubmit, formState:{errors}} = useForm()
  const [message,setMessage] = useState('')

  const onSubmit = async (form)=> {

    await axios.post('/api/register',form).then((res)=> {
      setMessage(res.data.email)
      console.log(form)
    })

    await axios.get('/api/employee').then((res)=> {
      console.log(res)
    })

  }

  return (
    <div className="max-w-xl mx-auto mt-20 px-4">
      <div className="w-full bg-blue-100 px-6 py-12 rounded-lg flex flex-col justify-center">
        <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex items-center"> 
            <label htmlFor="" className="w-24">Email Id</label>
            <input className="grow px-2 py-2 outline-none border border-gray-400 rounded-md" type="text" {...register("email", {required:true, maxLength:45})}  />
            {errors.email?.type==='maxLength' && <p className="text-red-400">Please Enter under 45 length of character!</p>}
          </div>
          <div className="flex items-center">
            <label htmlFor="" className="w-24">Password</label>
            <input className="grow px-2 py-2 outline-none border border-gray-400 rounded-md" type="text" {...register('password', {required:true, minLength:5})} />
            {errors.password?.type==='minLength' && <p className="text-red-400">Please Enter minimum 5 Length of character</p>}
          </div>
          <div className="w-full flex justify-center">
            <button className="w-full rounded-lg px-5 py-2 bg-orange-800 text-white font-bold" type="submit">Submit</button>
          </div>
        </form>
        <div>
          {message} 
        </div>
      </div>
    </div>
  );
};

export default ReactForm;
