import React, { useEffect } from 'react';
import { project1, project2, project3, project4,project5} from "./imports2";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

const projects = [
  {
    image: project5,
    title: "Agricultural Crop Recommendation system",
    githubLink: "https://github.com/Aditya-sathwik/Crop-Recommendation-System",
    externalLink: "#",
    shadowColor: "green-500",
    textColor: "text-green-500"
  },
  {
    image: project2,
    title: "Ai Meetup Application",
    githubLink: "https://github.com/Aditya-sathwik/gpt3",
    externalLink: "https://ai-2023.vercel.app/",
    shadowColor: "purple-500",
    textColor: "text-purple-500"
  },
  {
    image: project3,
    title: "Online Restaurant website",
    githubLink: "https://github.com/Aditya-sathwik/resturant_website",
    externalLink: "https://burger-houserestro.vercel.app/",
    shadowColor: "red-500",
    textColor: "text-red-500"
  },
  {
    image: project4,
    title: "Janagni 2022",
    githubLink: "https://github.com/Aditya-sathwik/jnanagni",
    externalLink: "#",
    shadowColor: "blue-500",
    textColor: "text-indigo-300"
  },
  {
    image: project1,
    title: "Geeks For Geeks",
    githubLink: "https://github.com/Aditya-sathwik/gfg",
    externalLink: "https://gfg-gkv.vercel.app/#header",
    shadowColor: "green-500",
    textColor: "text-green-300"
  }
];

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section id="projects" className="py-10 ">
      <div className="text-center mt-8" id='paroja'>
        <h3 className='text-5xl font-semibold' id='headuu'>
          <span className='border-b-4 border-white-500'>
            <span className='text-sky-500'>My Awesome </span>
            <span id='namee'>projects</span>
          </span>
        </h3>
        <p className='text-gray-400 my-5 text-lg' id='headuu2'>Technologies I have worked with</p>
      </div>

      <div className=" text-white justify-center items-center p-[10px] grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 " data-aos="zoom-in" id='projectt'>
        {projects.map((project, index) => (
      
            // <div className={`border-black shadow-md  w-[100%] md:w-[100%]  hover:scale-105 duration-500 m-[50px] shadow-${project.shadowColor} cursor-pointer rounded-xl text-xl font-poppins flex flex-col gap-5 justify-center bg-black`} >
            //   <div className="flex justify-start items-center  " >
            //     <img src={project.image} className="rounded-tl-lg rounded-tr-lg    w-[100%] md:w-[100%] "  />
            //   </div>
            //   <div className="flex flex-col font-bold leading-6 gap-3">
            //     <h2 className={`text-3xl justify-center items-center m-auto font-Poppins ${project.textColor}`} >{project.title}</h2>
            //     <h4 className="text-xl flex justify-center mt-3">
            //       <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="cursor-pointer text-2xl duration-150 hover:scale-110 px-10"><FaGithub /></a>
            //       <a href={project.externalLink} target="_blank" rel="noopener noreferrer" className="cursor-pointer text-xl duration-150 hover:scale-110"><FaExternalLinkAlt /></a>
            //     </h4>
            //   </div>
            // </div>
<div className={`border-black shadow-md   hover:scale-105 duration-500 m-[20px] shadow-${project.shadowColor} cursor-pointer rounded-xl text-xl font-poppins flex flex-col gap-5 justify-center bg-black`}>
        <div className="w-[100%] h-[auto] sm:w-[100%] sm:h-[280px] relative" >
             <img src={project.image} className="rounded-tl-lg rounded-tr-lg  h-[100%]  w-[100%] md:w-[100%] "  />
         </div>
         <div className="flex flex-col font-bold " id='downpart'>
               <h2 className={`text-[10px] sm:text-[24px] justify-center items-center m-auto font-Poppins ${project.textColor}`} >{project.title}</h2>
                <div className="text-xl flex justify-center m-3">
                   <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="cursor-pointer text-[15px] sm:text-[25px] duration-150 hover:scale-110 px-10"><FaGithub /></a>
                <a href={project.externalLink} target="_blank" rel="noopener noreferrer" className="cursor-pointer text-[15px] sm:text-[25px] duration-150 hover:scale-110"><FaExternalLinkAlt /></a>
                </div>
               </div>

</div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
