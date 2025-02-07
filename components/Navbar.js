import React from 'react'
export const Navbar = () => {
  return (
    <nav className='h-16 bg-blue-800 flex justify-between px-3 items-center text-white'>
        <div className='logo font-bold text-lg'>
            UrlShortner
        </div>
        <ul className='flex justify-center gap-4 items-center'>
            <a href='/'><li>Home</li></a>
            <a href='/about'><li>About</li></a>
            <a href='/contact'><li>Contact Us</li></a>
            <a href='/generate'><li>Shorten</li></a>
            <li className='flex gap-2'>
                <a href='/generate'><button className='bg-blue-700 rounded-xl shadow-lg p-3 py-1 font-bold'>Try Now</button></a>
                <a href='/github'><button className='bg-blue-700  rounded-xl  py-1 font-boldshadow-lg p-3 py-1 font-bold'>Github</button></a>
            </li>
         </ul>   
    </nav>
  )
}
