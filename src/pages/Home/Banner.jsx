import { motion } from "motion/react"
import React from 'react';
import img1 from '../../assets/people-working-office.jpg'
import img2 from '../../assets/business-plan-office.jpg'

const Banner = () => {
    return (
        <div className="hero bg-white h-auto mb-5">
  <div className="hero-content flex-col lg:flex-row-reverse">
  <div className='hidden sm:block sm:flex-1'>
  <motion.img
    src={img1}
    className="w-[200px] sm:w-[300px] rounded-t-[40px] rounded-br-[40px] border-l-8 border-b-8 border-blue-300  shadow-2xl"
    animate={{ y: [180, 80, 180] }} // Moves down then up
    transition={{
      duration: 4,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut",
    }}
  />
  <motion.img
    src={img2}
    className="w-[200px] sm:w-[300px] rounded-t-[40px] rounded-br-[40px] border-l-8 border-b-8 border-blue-300 shadow-2xl"
    animate={{ x: [150, 50, 150] }} // Moves left then right
    transition={{
      duration: 4,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut",
    }}
  />
</div>

    <div className='flex-1'>
   
    <div className="overflow-hidden w-full">
      <motion.h1
        className="text-2xl sm:text-5xl font-bold inline-block whitespace-nowrap"
        animate={{ x: [0, 100, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      >
        Latest{" "}
        <motion.span
          animate={{ color: ["#FF5733", "#33FF57", "#3357FF"] }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
          className="inline-block"
        >
          Jobs
        </motion.span>{" "}
        For You!
      </motion.h1>
    </div>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn bg-red-400 rounded-lg">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;