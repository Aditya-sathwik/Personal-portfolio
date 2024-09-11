// import React from 'react';


// const Contact = () => {
//   return (
//     <section id='contact' className='py-19 px-3 text-white' data-aos="fade-right">
//     <div className='text-center mt-8'>
//     <div className="text-center mt-8 ">
//         <h3 className='text-5xl font-semibold'id='headuu'>
//           <span className=' border-b-4 border-white-500 '><span id='namee'>Connect</span> <span className='text-sky-500'>With Me</span> </span></h3>
//         <p className='text-gray-400 my-5 text-lg' id='headuu2'>Get in touch</p>
//       </div>

//         <div className='mt-16 flex md:flex-row flex-col gap-6 max-w-5xl bg-black p-6 rounded-lg mx-auto shadow-lg hover:scale-105 duration-500 py-2 shadow-cyan-500 pt-10 pb-8 '>
//             <form className='flex flex-col flex-1 gap-5 rounded-xl'>
//                 <input type="text" placeholder='Your Name' className='rounded-xl w-25 h-10 text-black font-bold font-Poppins' />
//                 <input type="email" placeholder='Your Email' className='rounded-xl h-10 text-black font-bold font-Poppins' />
//                 <textarea placeholder='Your Message' cols="30" rows="10" className='rounded-xl text-black font-bold font-Poppins' ></textarea>
//                 <button className='btn-primary mt-6'><a href='/' className='font-bold' target={'_blank'}>Send Message </a></button>
                
//             </form>
//         </div>
//     </div>
// </section>
//   )
// }

// export default Contact











import React from 'react';
import { useForm } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("xdknjrkg");

  if (state.succeeded) {
    return (
      <section id='contact' className='py-19 px-3 text-white'>
        <div className='text-center mt-8'>
          <div className="text-center mt-8">
            <h3 className='text-5xl font-semibold' id='headuu'>
              <span className='border-b-4 border-white-500 '><span id='namee'>Connect</span> <span className='text-sky-500'>With Me</span></span>
            </h3>
            <p className='text-gray-400 my-5 text-lg' id='headuu2'>Thank you for reaching out!</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id='contact' className='py-19 px-3 text-white' data-aos="fade-right">
      <div className='text-center mt-8'>
        <div className="text-center mt-8">
          <h3 className='text-5xl font-semibold' id='headuu'>
            <span className='border-b-4 border-white-500 '><span id='namee'>Connect</span> <span className='text-sky-500'>With Me</span></span>
          </h3>
          <p className='text-gray-400 my-5 text-lg' id='headuu2'>Get in touch</p>
        </div>

        <div className='mt-16 flex md:flex-row flex-col gap-6 max-w-5xl bg-black p-6 rounded-lg mx-auto shadow-lg hover:scale-105 duration-500 py-2 shadow-cyan-500 pt-10 pb-8 '>
          <form onSubmit={handleSubmit} className='flex flex-col flex-1 gap-5 rounded-xl'>
            <input
              type="text"
              name="name"
              placeholder='Your Name'
              className='rounded-xl w-25 h-10 text-black font-bold font-Poppins'
              required
            />
            <input
              type="email"
              name="email"
              placeholder='Your Email'
              className='rounded-xl h-10 text-black font-bold font-Poppins'
              required
            />
            <textarea
              name="message"
              placeholder='Your Message'
              cols="30"
              rows="10"
              className='rounded-xl text-black font-bold font-Poppins'
              required
            ></textarea>
            <button
              type="submit"
              className='btn-primary mt-6 font-bold'
              disabled={state.submitting}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
