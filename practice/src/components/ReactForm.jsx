"use client";
import { useForm } from "react-hook-form";

const ReactForm = () => {
  const {register,handleSubmit, formState:{errors}} = useForm()
  function onSubmit(form){
    console.log(form)
  }
  
  return (
    <div className="max-w-xl mx-auto mt-20">
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="">Email Id</label>
            <input className="px-2 py-2 outline-none border border-gray-400" type="text" {...register("email", {required:true, maxLength:15})}  />
            {errors.email?.type==='maxLength' && <p className="text-red-400">Please Enter under 16 length of character!</p>}
          </div>
          <div>
            <label htmlFor="">Password</label>
            <input className="px-2 py-2 outline-none border border-gray-400" type="text" {...register('password', {required:true, minLength:5})} />
            {errors.password?.type==='minLength' && <p className="text-red-400">Please Enter minimum 5 Length of character</p>}
          </div>
          <div>
            <button className="px-5 py-2 bg-orange-800 text-white font-bold mt-5" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReactForm;
