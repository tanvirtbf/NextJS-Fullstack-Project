import Link from 'next/link'
import React from 'react'

const HomePage = () => {
  return (
    <>
      <div className="flex gap-2 border border-green-600 m-2 justify-between p-4">
        <Link href="/home">Home</Link>
        <Link href="/category/1/hello/2/hii/3">Category</Link>
        <Link href="/gallery">Gallery</Link>
      </div>
    </>
  )
}

export default HomePage
