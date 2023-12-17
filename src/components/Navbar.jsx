import React, { useEffect, useState } from 'react'
import { CgMenuRight } from 'react-icons/cg'
const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const menuLinks = [
    { name: 'HOME', link: '#home' },
    { name: 'ABOUT', link: '#about' },
    { name: 'SKILLS', link: '#skills' },
    { name: 'EXPERIENCE', link: '#experience' },
    { name: 'CERTIFICATIONS', link: '#certifications' },
    { name: 'PROJECTS', link: '#projects' },
    { name: 'CONTACT', link: '#contact' }
  ]
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const nav = document.querySelector('nav')
      window.scrollY > 30 ? setSticky(true) : setSticky(false);
    })
  })
  return (
    <nav className={`fixed w-full left-0 top-0 z-[999] ${sticky ? "bg-white text-gray-900" : "text-white"}`}>
      <div className='flex item-center justify-between'>
        <div className='mx-7  flex' id='logo'>
          <h4 className=' font-Lobster font-bold m-2 md:text-4xl text-2xl sm :text-sm px-2 py-2 border-4 border-yellow-500 rounded-xl' id='headuu'>Aditya <span className='text-orange-400 '>Sathwik</span></h4>

        </div>
        <div className={` ${sticky ? 'md:bg-white/0 bg-white' : ''} text-white-900 lg:block hidden px-7 py-2 font-medium rounded-bl-full`}>
          <ul className='flex items-center gap-1 py-2 text-lg  '>
            {
              menuLinks?.map((menu, i) => (
                <li key={i} className='px-6 hover:text-cyan-600 hover:underline underline-offset-8'>
                  <a href={menu?.link}>{menu?.name} </a>
                </li>
              ))
            }
          </ul>
        </div>
        <div onClick={() => setOpen(!open)} className={`z-[999] ${open ? "text-gray-900" : "text-gray-800"} text-3xl lg:hidden m-5`}>
          <CgMenuRight  className='text-white-500'/>
        </div>
        <div className={`:hidden text-gray-900 absolute w-2/2 h-screen px-3 py-2 font-medium bg-white top-0  duration-1000 ${open ? 'right-0' : 'right-[-100%]'}`}>
          <ul className='flex flex-col justify-center h-full gap-10 py-2 text-lg'>
            {
              menuLinks?.map((menu, i) => (
                <li key={i} className='px-6 hover:text-cyan-600'>
                  <a href={menu?.link}>{menu?.name}</a>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar