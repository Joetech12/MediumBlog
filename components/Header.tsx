import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className="flex justify-between py-5 px-4 max-w-7xl mx-auto">
        <div className="flex items-center space-x-5">
        <Link href='/'>
            <img className="w-44 object-contain cursor-pointer" src="/MediumLogo.svg" alt="medium-logo" />
        </Link>
        <div className="hidden md:inline-flex items-center space-x-5">
            <h3>About</h3>
            <h3>Contact</h3>
            <h3 className="bg-green-600 text-white py-1 rounded-full px-4">Follow</h3>
        </div>
        </div>

        <div className="flex items-center space-x-5 text-green-600">
            <h3>Sign In</h3>
            <h3 className="border border-green-600 px-4 py-1 rounded-full">Get Started</h3>
        </div>
    </header>
  )
}

export default Header