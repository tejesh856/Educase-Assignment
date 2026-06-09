import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const navigate = useNavigate()
  const [fullName, setFullName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [company, setCompany] = useState('')
  const [agency, setAgency] = useState('')

  const emailRegex = /^\S+@\S+\.\S+$/
  const phoneRegex = /^[0-9]{10}$/

  const fullNameIsValid = fullName.trim().length >= 2
  const phoneIsValid = phoneRegex.test(phone.replace(/\s+/g, ''))
  const emailIsValid = emailRegex.test(email)
  const passwordIsValid = password.length >= 8
  const companyIsValid = company.trim().length >= 2
  const agencyIsValid = agency === 'yes' || agency === 'no'

  const isValid =
    fullNameIsValid &&
    phoneIsValid &&
    emailIsValid &&
    passwordIsValid &&
    companyIsValid &&
    agencyIsValid

  const fullNameError = fullName && !fullNameIsValid ? 'Full name must be at least 2 characters.' : ''
  const phoneError = phone && !phoneIsValid ? 'Enter a valid phone number (10 digits).' : ''
  const emailError = email && !emailIsValid ? 'Enter a valid email address.' : ''
  const passwordError = password && !passwordIsValid ? 'Password must be at least 8 characters.' : ''
  const companyError = company && !companyIsValid ? 'Company name must be at least 2 characters.' : ''
  const agencyError = !agencyIsValid && (fullName || phone || email || password || company) ? 'Please select whether you are an agency.' : ''

  const handleSubmit = (event) => {
    event.preventDefault()
    if (isValid) {
      navigate('/account')
    }
  }

  return (
    <div className=" h-screen bg-gray-100  flex flex-col items-start justify-start gap-4 p-4">
        <h1 className="text-3xl font-bold px-6">Create your PopX account</h1>
        <form onSubmit={handleSubmit} className="flex flex-col h-full justify-between gap-4 py-4 px-6 w-full">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col">
            <label className="relative w-full">
              <span className="absolute -top-2 left-3 bg-gray-100 px-1 text-sm text-violet-700">Full Name</span>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="border-2 border-gray-300 rounded px-4 py-3 w-full"
                placeholder="Enter your Full Name"
              />
            </label>
            {fullNameError ? <p className="text-sm text-red-600 mt-1">{fullNameError}</p> : null}
          </div>
          <div className="flex flex-col">
            <label className="relative w-full">
              <span className="absolute -top-2 left-3 bg-gray-100 px-1 text-sm text-violet-700">Phone Number</span>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="border-2 border-gray-300 rounded px-4 py-3 w-full"
                placeholder="Enter your phone number"
              />
            </label>
            {phoneError ? <p className="text-sm text-red-600 mt-1">{phoneError}</p> : null}
          </div>
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
            {emailError ? <p className="text-sm text-red-600 mt-1">{emailError}</p> : null}
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
            {passwordError ? <p className="text-sm text-red-600 mt-1">{passwordError}</p> : null}
          </div>
          <div className="flex flex-col">
            <label className="relative w-full">
              <span className="absolute -top-2 left-3 bg-gray-100 px-1 text-sm text-violet-700">Company Name</span>
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="border-2 border-gray-300 rounded px-4 py-3 w-full"
                placeholder="Enter your Company Name"
              />
            </label>
            {companyError ? <p className="text-sm text-red-600 mt-1">{companyError}</p> : null}
          </div>
          <div className="flex flex-col gap-3">
            <span className="">Are you an Agency?</span>
            <div className="flex flex-wrap gap-3">
              <label className="inline-flex items-center gap-2 px-4 py-2 cursor-pointer">
                <input
                  type="radio"
                  name="agency"
                  value="yes"
                  checked={agency === 'yes'}
                  onChange={() => setAgency('yes')}
                  className="sr-only"
                />
                <span className={`inline-flex h-7 w-7 items-center justify-center rounded-full border ${agency === 'yes' ? '  border-violet-700' : ' border-gray-500'}`}>
                  {agency === 'yes' ? <span className="h-4 w-4 rounded-full bg-violet-700" /> : null}
                </span>
                Yes
              </label>
              <label className="inline-flex items-center gap-2 px-4 py-2  cursor-pointer">
                <input
                  type="radio"
                  name="agency"
                  value="no"
                  checked={agency === 'no'}
                  onChange={() => setAgency('no')}
                  className="sr-only"
                />
                <span className={`inline-flex h-7 w-7 items-center justify-center rounded-full border ${agency === 'no' ? 'border-violet-700' : 'border-gray-500 '}`}>
                  {agency === 'no' ? <span className="h-4 w-4 rounded-full bg-violet-700" /> : null}
                </span>
                No
              </label>
            </div>
            {agencyError ? <p className="text-sm text-red-600 mt-1">{agencyError}</p> : null}
          </div>
          </div>
          <button
            type="submit"
            disabled={!isValid}
            className={`px-4 py-3 cursor-pointer mt-3 text-center w-full rounded font-semibold ${isValid ? 'bg-violet-700 text-white hover:bg-violet-800' : 'bg-gray-300 text-gray-600 cursor-not-allowed'}`}
          >
            Create Account
          </button>
        </form>
    </div>
  )
}

export default Signup