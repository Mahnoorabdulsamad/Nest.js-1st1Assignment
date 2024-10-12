import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <div >
      <h1 className='bg-pink-200'>This is my Home page</h1>
      <ul>
        <li>
          <Link href="/"></Link>
        </li>
        <li className='bg-blue-200' >
          <Link href="/about">About</Link>
        </li>
        <li className='bg-green-300' >
          <Link href="/contactus">ContactUs</Link>
        </li>
        <li className='bg-rose-300' >
          <Link href="/service">Service</Link>
        </li>
      </ul>
    </div>
  )
}

export default Home
