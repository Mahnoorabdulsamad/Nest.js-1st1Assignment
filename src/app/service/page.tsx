import style from "../service/servise.module.css"
import Link from 'next/link'
import React from 'react'

const Service = () => {
  return (
    <div className={style.container}>
      <h1>This is service page</h1>
      <ul>
        <li>
            <Link href="/service/web-development">Web-Development</Link>
        </li>
      </ul>
    </div>
  )
}

export default Service
