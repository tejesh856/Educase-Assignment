import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const isFilled = email.trim() !== '' && password.trim() !== ''

  const handleSubmit = (event) => {
    event.preventDefault()
    if (isFilled) {
      navigate('/account')
    }
  }

  return (
    <div className=" h-screen bg-gray-100 border-2 flex flex-col items-start justify-start gap-4 p-4">
      <div className="flex flex-col items-start justify-center gap-2 py-2 px-6">
        <h1 className="text-3xl font-bold">Signin to your PopX account</h1>
        <p className="text-gray-600 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
      </div>
       <form onSubmit={handleSubmit} className="flex flex-col gap-4 py-2 px-6 w-full">
          <div className="flex flex-col">
            <label className="relative w-full">
              <span className="absolute -top-2 left-3 bg-gray-100 px-1 text-sm text-violet-700">Email Address</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-2 border-gray-300 rounded px-4 py-3 w-full"
                placeholder="Enter your email"
              />
            </label>
          </div>
          <div className="flex flex-col">
            <label className="relative w-full">
              <span className="absolute -top-2 left-3 bg-gray-100 px-1 text-sm text-violet-700">Password</span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-2 border-gray-300 rounded px-4 py-3 w-full"
                placeholder="Enter your password"
              />
            </label>
          </div>
          <button
            type="submit"
            className={`px-4 py-3 mt-3 text-center w-full ${isFilled ? 'bg-violet-700 text-white hover:bg-violet-800' : 'bg-gray-300 hover:bg-gray-400 text-white'} rounded`}
          >
            Login
          </button>
        </form>
    </div>
  )
}

export default Login