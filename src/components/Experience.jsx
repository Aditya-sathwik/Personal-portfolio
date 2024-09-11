import React from 'react';

const Experience = () => {
  const jobs = [
    {
      id: 1,
      role: 'Frontend Developer Intern',
      comp: 'Autope Payment Solutions',
      date: 'May, 2024 - Aug, 2024',
      desc1: 'Developed Delhi Metro Momentum Website From scratch',
      desc2: ' Integrating APIs and collaborating with the backend team for seamless data flow.',
      style: 'shadow-purple-500',
      skills: ['ReactJs', 'Css', 'Javascript', 'Jquery', 'Api', 'NodeJs'],
    },
    {
      id: 2, // Changed to a unique ID
      role: 'Full Stack Developer Intern',
      comp: 'NIELIT (Govt Undertaking)',
      date: 'Sept, 2023 - Mar, 2024',
      desc1: 'Engineered web applications with HTML, CSS, JavaScript, and PHP',
      desc2: ' Enhanced UI/UX in multiple web development projects. Improved web application functionality by integrating RESTful APIs.',
      style: 'shadow-red-500',
      skills: ['ReactJs', 'Css', 'Javascript', 'Jquery', 'Api', 'NodeJs'],
    },
    {
      id: 3, // Changed to a unique ID
      role: 'Web Developer Intern',
      comp: 'Wynswell Pvt. Ltd',
      date: 'Aug, 2022 - Nov, 2022',
      desc1: 'Maintained and developed front-end functionality for web applications. Implemented user-friendly web interfaces in collaboration with the design team',
      desc2: 'Created responsive web pages using HTML, CSS, and JavaScript',
      style: 'shadow-yellow-500',
      skills: ['Html', 'Css', 'Javascript', 'Wordpress', 'Shopify', 'PHP'],
    },
    {
      id: 4, // Changed to a unique ID
      role: 'Web Developer Lead',
      comp: 'Google Developer Student Clubs-GKV(DU)',
      date: 'Aug, 2023',
      desc1: 'Mentoring community members regarding frontend technologies',
      desc2: 'Responsible for managing graphics of the team',
      style: 'shadow-blue-500',
      skills: ['Team Leading ', ' Agile methodologies'],
    },
    {
      id: 5, // Changed to a unique ID
      role: 'Cloud Facilitator',
      comp: 'Google Developer Student Clubs-GKV(DU)',
      date: 'Aug, 2022 - June, 2023',
      desc1: 'Guided developers in cloud navigation, hosting workshops and hackathons on GCP',
      desc2: 'Shared cloud expertise to fellow GDSC members.',
      style: 'shadow-green-500',
      skills: ['Basic Cloud', 'Google Cloud Platform'],
    },
  ];

  return (
    <section id='experience' className='py-10 relative'>  
      <div className='text-center mt-8'>
        <h3 className='text-5xl font-semibold' id='headuu'>
          <span className='border-b-4 border-white-500'>
            <span id='namee'>Experience</span>
            <span className='text-sky-500'></span>
          </span>
        </h3>
        <p className='text-gray-400 my-5 text-lg' id='headuu2'>My Work Experience</p>
      </div>
      <div id='exp' className='w-full grid grid-cols-1 sm:grid-cols-2 sm:px-[10px]  text-white cursor-pointer px-[10px] '>
        {jobs.map(({ id, role, date, desc1, desc2, style, comp, skills }) => (
          <div
            key={id} // Added unique key for each item
            id='exper'
            className={`flex  shadow-md hover:scale-105 duration-500 px-3 py-2 my-[30px] mx-[5px] sm:mx-[30px] rounded-lg ${style}`}
          >
            {/* <div className='text-gray-500 font-roboto font-bold w-[60%] sm:w-[60%]  md:w-[70%] lg:w-[40%] text-[9px] sm:text-[10px] md:text-[10px] lg:text-[15px] pr-[22px]'>
              {date}
            </div> */}
            <div className=' text-left '>
              <h1
               
                className='text-cyan-300 font-bold text-[11px] sm:text-[12px] md:text-[14px] lg:text-[16px]'
              >
                {role}
              </h1>
              <h2 className='text-white-300 font-bold  text-[9px] sm:text-[10px] md:text-[10px] lg:text-base'>
                {comp},  {date}
              </h2>
              <ul class="list-disc list-inside ">
  {/* <li class="mb-2">

  </li> */}
  <li className='text-gray-300  text-[9px] sm:text-[10px] md:text-[10px] lg:text-base'>
{desc1}
  </li>
  <li className='text-gray-300  text-[9px] sm:text-[10px] md:text-[10px] lg:text-base'>
{desc2}
  </li>
</ul>

              {/* <p className='text-gray-300'>{desc1}</p>
              <p className='text-gray-300'>{desc2}</p> */}
              <div className='flex flex-wrap py-[12px]'>
                {skills.map((skill, index) => (
                  <button
                    key={index} // Added unique key for each skill
                    className='my-1 text-cyan-300 rounded-[4px] bg-[#7dd3fc1a] px-2 sm:my-2 md:px-2 py-1 lg:my-2 xl:px-3 mx-2'
                  >
                    <p id='techb' className=' text-[10px] sm:text-[10px] md:text-[11px] lg:text-[13px]'>
                      {skill}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
