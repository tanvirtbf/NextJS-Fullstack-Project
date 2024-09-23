import React from 'react'

const page = ({params}) => {
  const {info} = params
  return (
    <div>
      {info.map((item)=> <p>{item}</p>)}
    </div>
  )
}

export default page
