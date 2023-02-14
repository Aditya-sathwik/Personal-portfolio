import React, { useEffect } from 'react'
import {html, css,javascript, reactImage, Github,tailwind, git, bootstrap, wordpress,linux,figma} from './imports';
import AOS from 'aos'
import 'aos/dist/aos.css'




const Skills = () => {
  useEffect(()=>{
    AOS.init({duration:2000})
  }
,[]);


  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: 'shadow-orange-500',
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: 'shadow-blue-500',
    },
    {
      id: 3,
      src: javascript,
      title: "JAVASCRIPT",
      style: 'shadow-yellow-500',
    },
    {
      id: 4,
      src: Github,
      title: "GITHUB",
      style: 'shadow-gray-500',
    },
    {
      id: 5,
      src: git,
      title: "GIT",
      style: 'shadow-red-500',
    },
    {
      id: 6,
      src: bootstrap,
      title: "BOOTSTRAP",
      style: 'shadow-purple-500',
    },
    {
      id: 7,
      src: wordpress,
      title: "WORDPRESS",
      style: 'shadow-purple-500',
    },
    {
      id: 8,
      src: reactImage,
      title: "REACT",
      style: 'shadow-blue-500',
    },
    {
      id: 9,
      src: tailwind,
      title: "TAILWIND",
      style: 'shadow-sky-500',
    },
    {
      id: 10,
      src: linux,
      title: "LINUX",
      style: 'shadow-gray-500',
    },
    {
      id: 11,
      src: figma,
      title: "FIGMA",
      style: 'shadow-orange-500',
    },
  ]
  return (
    <section id='skills' className='py-10 relative'>
      <div className="text-center mt-8 ">
        <h3 className='text-5xl font-semibold ' id='headuu'>
          <span className=' border-b-4 border-white-500 '><span id='namee'>Skills</span> <span className='text-sky-500'></span> </span></h3>
        <p className='text-gray-400 my-5 text-lg' id='headuu2'>Technologies i have worked with</p>
      </div>
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 text-white cursor-pointer">
        {techs.map(({ id, src, title, style }) => (
          <div
            key={id}
            className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`} data-aos="flip-right"
          >
            <img src={src} alt="" className="w-20 mx-auto" id='icons' />
            <p className="mt-4" id='skp'>{title}</p>
          </div>
        ))}
      </div>


        



    </section>
  )
}

export default Skills