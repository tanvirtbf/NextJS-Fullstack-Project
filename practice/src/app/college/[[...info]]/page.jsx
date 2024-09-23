import React from 'react'

const page = ({params}) => {
  const {info} = params
  return (
    <div>
      College
      {info && info.map((item)=> <p>{item}</p>)}
    </div>
  )
}

export default page
