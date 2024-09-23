import React from 'react'

const page = ({params}) => {
  return (
    <div>
      Page : {params.catId}
    </div>
  )
}

export default page
