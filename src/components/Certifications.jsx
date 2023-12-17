import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'



const Certifications = () => {
  useEffect(()=>{
    AOS.init({duration:2000})
  }
,[]);
  return (

<section id='certifications'>
<div className="text-center mt-20 "  id='certifii'>
     <h3 className='text-5xl font-semibold ' id='headuu' >
       <span className=' border-b-4 border-white-500 '><span className='text-sky-500'>My </span><span id='namee'>
         Certifications </span>  </span></h3>
     <p className='text-gray-400 my-5 text-lg' id='headuu2'>Knowledge + Skills = Certified Awesome </p>
   </div>

    <div className="h-screen w-full flex justify-center items-center" data-aos="flip-left">

<div className="max-w-7xl mx-auto w-full grid grid-cols-9 px-2">
        {/* <!-- Stack 1 --> */}
        <div className="col-span-4 w-full h-full ">
          <div className="w-full h-full bg-black  p-2 md:pl-4 shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-orange-500">
            <h1 className="text-white text-xl font-bold py-2 font-Poppins mobile:text-sm" id='headuu2'>Web Dovelopment Using React</h1>
            <p className="text-white sm:text-sm text-xs" id='skp'>Intershala Trainings, Online
              Jun 2022 - July2022</p>
          </div>
        </div>
        <div className="relative col-span-1 w-full h-full flex justify-center items-center">
          <div className="h-full w-1 bg-indigo-300"></div>
          <div className="absolute w-6 h-6 rounded-full bg-indigo-400 z-10 text-white text-center">1</div>
        </div>
        <div className="col-span-4 w-full h-full"></div>

        {/* 
      <!-- Stack 2 --> */}
        <div className="col-span-4 w-full h-full"></div>
        <div className="relative col-span-1 w-full h-full flex justify-center items-center">
          <div className="h-full w-1 bg-indigo-300"></div>
          <div className="absolute w-6 h-6 rounded-full bg-indigo-400 z-10 text-white text-center">2</div>
        </div>
        <div className="col-span-4 w-full h-full ">
          <div className="w-full h-full bg-black-400 rounded-md p-2 md:pl-4 shadow-md hover:scale-105 duration-500 py-2 shadow-purple-500 ">
            <h1 className="text-white text-xl font-medium py-2 font-Poppins" id='headuu2'>Web Dovelopment Using Bootstrap
            </h1>
            <p className="text-gray-100 sm:text-sm text-xs" id='skp'>Coursera, Online
              Jan 2022 - Feb 2022
              i had completed the training based on web dovelopment using bootstrap</p>
          </div>
        </div>

        {/* <!-- Stack 3 --> */}
        <div className="col-span-4 w-full h-full ">
          <div className="w-full h-full bg-black-400 rounded-md p-2 md:pl-4 shadow-md hover:scale-105 duration-500 py-2 shadow-yellow-500">
            <h1 className="text-white text-xl font-medium py-2 font-Poppins" id='headuu2'>Machine Learning Using python</h1>
            <p className="text-gray-100 sm:text-sm text-xs" id='skp'>NATIONAL INSTITUTE OF ELECTRONICS & INFORMATION TECHNOLOGY
(Ministry of Electronics & Information Technology, Government of India),<br/> Online<br/>
June 2021 - July 2021</p>
          </div>
        </div>
        <div className="relative col-span-1 w-full h-full flex justify-center items-center">
          <div className="h-full w-1 bg-indigo-300"></div>
          <div className="absolute w-6 h-6 rounded-full bg-indigo-400 z-10 text-white text-center">3</div>
        </div>
        <div className="col-span-4 w-full h-full"></div>
      </div>


  
    </div>
    </section>
    
  )
}

export default Certifications