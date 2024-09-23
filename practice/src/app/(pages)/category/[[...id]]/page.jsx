import React from 'react'

const page = ({params}) => {
  return (
    <div>
      Hello
      {params.id&&params.id.map((item)=> <p>{item}</p>)}
    </div>
  )
}

export default page
