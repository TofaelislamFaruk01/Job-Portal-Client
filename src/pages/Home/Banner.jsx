import { motion } from "motion/react"
import React from 'react';
import img1 from '../../assets/people-working-office.jpg'
import img2 from '../../assets/business-plan-office.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-96">
  <div className="hero-content flex-col lg:flex-row-reverse">
  <div className='flex-1'>
  <motion.img
    src={img1}
    className="max-w-sm rounded-t-[40px] rounded-br-[40px] border-l-8 border-b-8 border-blue-300  shadow-2xl"
    animate={{ y: [50, 100, 50] }} // Moves down then up
    transition={{
      duration: 4,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut",
    }}
  />
  <motion.img
    src={img2}
    className="max-w-sm rounded-t-[40px] rounded-br-[40px] border-l-8 border-b-8 border-blue-300 shadow-2xl"
    animate={{ x: [60, 10, 60] }} // Moves left then right
    transition={{
      duration: 4,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut",
    }}
  />
</div>

    <div className='flex-1'>
      <h1 className="text-5xl font-bold">Latest <motion.span 
       animate={{ color: ["#FF5733", "#33FF57", "#3357FF"] }}
       transition={{
         duration: 4.5, // total duration for 3 colors
         repeat: Infinity,
         repeatType: "loop",
         ease: "linear",
       }}
        >Jobs</motion.span> For You!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;