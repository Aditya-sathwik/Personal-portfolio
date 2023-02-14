import React, { useEffect } from 'react';
import {project1,project2,project3, project4,} from "./imports2"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import AOS from 'aos'
import 'aos/dist/aos.css'


const Projects = () => {
  useEffect(()=>{
    AOS.init({duration:2000})
  }
,[]);

  return (
    <section id="projects" className="py-10 relative">

      <div className="text-center mt-8 " id='paroja' >
        <h3 className='text-5xl font-semibold ' id='headuu'>
          <span className=' border-b-4 border-white-500 '><span className='text-sky-500'>My Awesome </span><span id='namee'>projects</span>  </span></h3>
        <p className='text-gray-400 my-5 text-lg' id='headuu2'>Technologies i have worked with</p>
      </div>


      {/*------------------------------projects---------------------------------*/}



      <div className="  justify-center mt-12 ml-6 items-center max-w-[1200px] py-5 text-white grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5 " id='perfects' data-aos="zoom-in">







        
        <div className="flex items-center justify-center mt-12  flex-row flex-wrap gap-10 " data-aos="fade-up ">
          <div className=" boder-black shadow-md hover:scale-105 duration-500 py-2 shadow-purple-500 cursor-pointer rounded-xl  text-xl w-[32rem] font-poppins flex flex-col gap-5 justify-center bg-black " id='raja'>
            <div className="flex justify-start items-center w-[32rem]  " id='raja'>
              <img src={project2} className="rounded-tl-lg rounded-tr-lg h-[280px] " id='ai' />
            </div>

            <div className="flex flex-col font-bold leading-6 gap-3">
              <h2 className="text-3xl justify-center items-center m-auto font-Poppins text-purple-500" id='headuu'>Learn Ai Blog Application</h2>
              <h4 className="text-xl flex justify-center mt-3">
                
                <a href="https://github.com/Aditya-sathwik/gpt3"   target="_blank" className="cursor-pointer text-2xl duration-150 hover:scale-110 px-10"><FaGithub/></a>
                <a href="https://ai-2023.vercel.app/"   target="_blank" className="cursor-pointer text-xl duration-150 hover:scale-110"><FaExternalLinkAlt/></a>
              </h4>
            </div>
          </div>
      </div>



{/* -------------------------2nd block -------------------------------------*/}




        <div className="flex items-center justify-center mt-12  flex-row flex-wrap gap-10 " data-aos="fade-up ">
          <div className=" boder-black shadow-md hover:scale-105 duration-500 py-2 shadow-red-500 cursor-pointer rounded-xl  text-xl w-[32rem] font-poppins flex flex-col gap-5 justify-center bg-black " id='raja'>
            <div className="flex justify-start items-center w-[32rem]  " id='raja'>
              <img src={project3} className="rounded-tl-lg rounded-tr-lg " />
            </div>

            <div className="flex flex-col font-bold leading-6 gap-3">
              <h2 className="text-3xl justify-center items-center m-auto font-Poppins text-red-500" id='headuu'>Online Restaurant website</h2>
              <h4 className="text-xl flex justify-center mt-3">
                
                <a href="https://github.com/Aditya-sathwik/resturant_website"   target="_blank" className="cursor-pointer text-2xl duration-150 hover:scale-110 px-10"><FaGithub/></a>
                <a href="https://burger-houserestro.vercel.app/"   target="_blank" className="cursor-pointer text-xl duration-150 hover:scale-110"><FaExternalLinkAlt/></a>
              </h4>
            </div>
          </div>
      </div>





{/* -------------------------3rd block -------------------------------------*/}


        <div className="flex items-center justify-center mt-12  flex-row flex-wrap gap-10 " data-aos="fade-up ">
          <div className=" boder-black shadow-md hover:scale-105 duration-500 py-2 shadow-indigo-900 cursor-pointer rounded-xl  text-xl w-[32rem] font-poppins flex flex-col gap-5 justify-center bg-black " id='raja'>
            <div className="flex justify-start items-center w-[32rem]  " id='raja'>
              <img src={project4} className="rounded-tl-lg rounded-tr-lg " />
            </div>

            <div className="flex flex-col font-bold leading-6 gap-3">
              <h2 className="text-3xl justify-center items-center m-auto font-Poppins text-[#1814ff]" id='headuu'>Janagni 2022</h2>
              <h4 className="text-xl flex justify-center mt-3">
                
                <a href="https://github.com/Aditya-sathwik/jnanagni" 
                target="_blank" className="cursor-pointer text-2xl duration-150 hover:scale-110 px-10"><FaGithub/></a>
                <a href="#" className="cursor-pointer text-xl duration-150 hover:scale-110"><FaExternalLinkAlt/></a>
              </h4>
            </div>
          </div>
      </div>





{/* -------------------------4th block -------------------------------------*/}


        <div className="flex items-center justify-center mt-12  flex-row flex-wrap gap-10 " data-aos="fade-up ">
          <div className=" boder-black shadow-md hover:scale-105 duration-500 py-2 shadow-green-500 cursor-pointer rounded-xl  text-xl w-[32rem] font-poppins flex flex-col gap-5 justify-center bg-black " id='raja'>
            <div className="flex justify-start items-center w-[32rem]  " id='raja'>
              <img src={project1} className="rounded-tl-lg rounded-tr-lg " />
            </div>

            <div className="flex flex-col font-bold leading-6 gap-3">
              <h2 className="text-3xl justify-center items-center m-auto font-Poppins text-green-300" id='headuu'>Geeks For Geeks </h2>
              <h4 className="text-xl flex justify-center mt-3">
                
                <a href="https://github.com/Aditya-sathwik/gfg" target="_blank" className="cursor-pointer text-2xl duration-150 hover:scale-110 px-10"><FaGithub/></a>
                <a href="https://gfg-gkv.vercel.app/#header" target="_blank" className="cursor-pointer text-xl duration-150 hover:scale-110"><FaExternalLinkAlt/></a>
              </h4>
            </div>
          </div>
      </div>
      </div>

    </section>
  );
};


export default Projects