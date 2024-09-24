"use client"

const FormValidation = () => {
  return (
    <div className="max-w-4xl mx-auto mt-20 bg-cyan-200 p-10 min-h-[400px]">
      <form>
        <div className="flex justify-between px-10 flex-col">
          <label>User Name</label>
          <input type="text" />
        </div>
        <div className="flex justify-between px-10 flex-col">
          <label>Mobile Number</label>
          <input type="text" />
        </div>
        <div className="mt-3 flex justify-center items-center">
          <button className="px-10 py-2 bg-green-700 rounded-lg text-gray-50" type="submit">Submit Form</button>
        </div>
      </form>
    </div>
  )
}

export default FormValidation
