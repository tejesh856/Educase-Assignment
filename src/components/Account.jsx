import React from 'react'
import profile from '../assets/profile.png'
import camera from '../assets/camera.svg'
const Account = () => {
  return (
    <div className="h-screen bg-gray-100 flex flex-col">
        <div className="py-4 px-6 bg-white shadow-md">
            <p className="text-2xl">Account Settings</p>
        </div>
        <div className="flex items-start justify-start gap-8 px-6 py-4 mt-4">
            <div className="relative">
                <img src={profile} alt="Profile" />
                <img src={camera} alt="Camera" className="absolute bottom-6 right-1" />
            </div>
            <div className="max-w-sm wrap-break-word">
                <p className="text-xl font-medium mb-2">Marry Doe</p>
                <p className="text-lg">Marry@Gmail.Com</p>
            </div>
        </div>
        <p className="px-6 py-8 max-w-3xl wrap-break-word">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>
        <hr className="mx-6 border-t-2 border-dotted border-gray-300" />
    </div>
  )
}

export default Account
