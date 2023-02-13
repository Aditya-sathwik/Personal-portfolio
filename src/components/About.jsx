import React from 'react'
import about from "../assets/about.gif";

const About = () => {
  return (
    <section className="py10  text-white" id='about'>
      <div className="text-center mt-8 ">
        <h3 className='text-5xl font-semibold ' id='headuu'>
          <span className=' border-b-4 border-white-500 '><span id='namee'>About</span> <span className='text-sky-500'>Me</span> </span></h3>
        <p className='text-gray-400 my-5 text-lg' id='headuu2'>Familiarizing Myself</p>
        <div className="flex md:flex-row flex-col-reverse items-center  md:gap-6 gap-12 px-10 mx-auto max-w-6xl">
          <div>
            <div className="text-white my3">
              <p className='text-justify leading-10 '>
                Iam  Aditya Sathwik ,currently pursuing my bachelor's of technology in Electronics and communication,I'm a passionate fronted doveloper [Using MERN stack ],also iam a Python Doveloper currently learning new thing and making good projects Using tuples and Pandas . Furthermore iam interested in  Embedded system which iam currently learning  by which iam able to build IOT Devices. In addition to technical work i also remain busy with a variety of extra curricular activites . Iam the Cloud Facilitator at Google Doveloper Student Clubs GKV(DU) . My Knowledge of cloud Has improved a lot from the cloud community which has been arranged by Google.Lastly, I regularly attend technical webinars and broaden my network with professionals at the industry's top levels. This helps me maintain my dedication of improving myself every day.
              </p>
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <div className="lg:w-96 h-full relative  ">
            <img
                src={about}
                alt="about_image"
                className="w-full object-cover"
              />
              </div>
              </div>
        </div>
      </div>
    </section>
  )
}

export default About