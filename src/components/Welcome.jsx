import React from 'react'
import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <div className=" h-screen bg-gray-100 border-2 flex flex-col items-center justify-end gap-4">
    <div className="flex flex-col items-start justify-center p-4 py-8">
        <h1 className="text-3xl font-bold text-center">Welcome to PopX</h1>
        <p className="text-gray-600 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        <div className="flex flex-col w-full items-start gap-4 mt-6">
          <Link to="/signup" className="px-4 py-3 text-center w-full  bg-violet-700 text-white rounded font-semibold">Create Account</Link>
          <Link to="/login" className="px-4 py-3 text-center w-full bg-gray-400 font-semibold  rounded">Already Registered? Login</Link>
        </div>
    </div>
    </div>
  )
}

export default Welcome