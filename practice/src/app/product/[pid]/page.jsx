import React from 'react'

const page = ({params}) => {
  const {pid} = params
  return (
    <div>
      Product List Page : {pid}
    </div>
  )
}

export default page
