import React from 'react'
import chaqmoq from '../../../public/img/Chaqmoq.svg'
import chiziq from '../../../public/img/Chiziq.svg'
import zapier from "../../../public//img/zapier.svg"
import spotify from "../../../public/img/Spotify.svg"
import zoom from "../../../public/img/Zoom.svg"
import amazon from "../../../public/img/Amazon.svg"
import adobe from "../../../public/img/Adobe.svg";
import notion from "../../../public/img/Notion.svg"
import netflix from "../../../public/img/Netflix.svg"
import humans from "../../../public/img/humans.svg"
import arrow from "../../../public/img/Arrow.svg"

const HeroComp = () => {
  return (
    <div className='container mx-auto'>
        <div className='justify-center mt-12'>
        <img src={chiziq} alt=""  className='ml-80'/>
        <div className="hero1 flex items-center justify-center">
            <img src={chaqmoq} alt="" /><p className='text-3xl font-bold'><span className='text-orange-400 '>Unlock</span> Your Creative Potential</p>
        </div>
        <p className='text-2xl font-semibold items-center flex justify-center mt-6'>with Online Design and Development Courses.</p>
        <p className='text-base justify-center flex mt-2'>Learn from Industry Experts and Enhance Your Skills.</p>
        <div className="hero__btns flex gap-2 mt-14 justify-center">
            <button className='px-5 py-3 bg-orange-400 rounded-lg text-white '>Explore Courses</button>
            <button className='px-5 py-3 bg-white rounded-lg '>View Pricing</button>
        </div>
        
        <div className="company flex justify-center mt-14 bg-white mx-[210px] p-8 ">
                <img className='w-40 border-r-[1px] ' src={zapier} alt="" />
                <img className='w-40 border-r-[1px]' src={spotify} alt="" />
                <img className='w-40 border-r-[1px]' src={zoom} alt="" />
                <img className='w-40 border-r-[1px]' src={amazon} alt="" />
                <img className='w-40 border-r-[1px]' src={adobe} alt="" />
                <img className='w-40 border-r-[1px]' src={notion} alt="" />
                <img className='w-40 ' src={netflix} alt="" />
            </div>
            <div className="humans mt-[80px] ">
                <img src={humans} alt="" className='w-3/4  flex justify-center items-center mx-auto' />
            </div>
      
        </div>
        <div className="benifits mt-32 mx-[200px]">
          <h1 className="text-gray-700 text-6xl">Benefits</h1>
          <div className="flex justify-between">
            <p className="w-4/5 mt-2 text-gray-700 text-base">
              Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam
              eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac
              cum eget habitasse in velit fringilla feugiat senectus in.
            </p>

            <button className="px-5 py-2 border border-gray-200 rounded-md hover:bg-orange-500 hover:text-white">
              Viwe All
            </button>
          </div>

          <div className="courses mt-10 flex gap-4">
            <div className="course px-12 py-9 bg-white w-2/6 rounded-lg">
              <h1 className="text-end text-5xl font-bold">01</h1>
              <h2 className="text-gray-800 text-xl font-semibold">
                Flexible Learning Schedule
              </h2>
              <h3 className="text-gray-600 text-base font-normal mt-3">
                Fit your coursework around your existing commitments and obligations.
              </h3>
              <img className="mt-3 ml-40" src={arrow} alt="" />
            </div>

           

            <div className="course px-12 py-9 bg-white w-2/6 rounded-lg">
              <h1 className="text-end text-5xl font-bold">02</h1>
              <h2 className="text-gray-800 text-xl font-semibold">
                Expert Instruction
              </h2>
              <h3 className="text-gray-600 text-base font-normal mt-3">
                Learn from industry experts who have hands-on experience in design and development.
              </h3>
              <img className="mt-3 ml-40" src={arrow} alt="" />
            </div>
             <div className="course px-12 py-9 bg-white w-2/6 rounded-lg">
              <h1 className="text-end text-5xl font-bold">03</h1>
              <h2 className="text-gray-800 text-xl font-semibold">
                Diverse Course Offerings
              </h2>
              <h3 className="text-gray-600 text-base font-normal mt-3">
                Explore a wide range of design and development courses covering various topics.
              </h3>
              <img className="mt-3 ml-40" src={arrow} alt="" />
            </div>
          </div>
          <div className="courses mt-5 flex gap-4">
           

            <div className="course px-12 py-9 bg-white w-2/6 rounded-lg">
              <h1 className="text-end text-5xl font-bold">04</h1>
              <h2 className="text-gray-800 text-xl font-semibold">
                Updated Curriculum
              </h2>
              <h3 className="text-gray-600 text-base font-normal mt-3">
              Access courses with up-to-date content reflecting the latest trends and industry practices.
              </h3>
              <img className="mt-3 ml-40" src={arrow} alt="" />
            </div>

            <div className="course px-12 py-9 bg-white w-2/6 rounded-lg">
              <h1 className="text-end text-5xl font-bold">05</h1>
              <h2 className="text-gray-800 text-xl font-semibold">
               Practical Projects and Assignments
              </h2>
              <h3 className="text-gray-600 text-base font-normal mt-3">
               Develop a portfolio showcasing your skills and abilities to potential employers.
              </h3>
              <img className="mt-3 ml-40" src={arrow} alt="" />
            </div>
             <div className="course px-12 py-9 bg-white w-2/6 rounded-lg">
              <h1 className="text-end text-5xl font-bold">06</h1>
              <h2 className="text-gray-800 text-xl font-semibold">
                Interactive Learning Environment
              </h2>
              <h3 className="text-gray-600 text-base font-normal mt-3">
               Collaborate with fellow learners, exchanging ideas and feedback to enhance your understanding.
              </h3>
              <img className="mt-3 ml-40" src={arrow} alt="" />
            </div>  
          </div>
        </div>
        
    </div>
    
    
  )
}

export default HeroComp
