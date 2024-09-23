import React from 'react'

export default function EmployeeLayout({children, params}) {
  console.log(params)
  return (
    <div>
      {children}
    </div>
  )
}
