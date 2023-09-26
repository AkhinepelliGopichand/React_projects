import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Error() {
  return (
    <>
        <div className="bg-gray-500 p-4 m-4 text-white text-3xl" >Opps, paqge not found</div>
        <Link to = "" className="text-blue-500"> Go to Home </Link>
    </>

  )
}

export default Error