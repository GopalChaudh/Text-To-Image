import Link from 'next/link'
import React from 'react'

 const LogInButton = ({children}:any) => {
  
  return (
    <div className="text-center ">
    <Link href="/signUp" className="login100-form-btn w-full p-3 rounded-lg bg-green-500 text-white font-semibold hover:bg-gray-700 transition duration-300">
                Sign Up
    </Link>
    </div>
  )
}

export default LogInButton