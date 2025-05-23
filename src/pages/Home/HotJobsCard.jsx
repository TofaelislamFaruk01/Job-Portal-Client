import React from 'react';
import { FaDollarSign, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
const HotJobsCard = ({job}) => {

    const {title,company,company_logo,requirements,description,location,salaryRange,_id} = job;
    return (
        <div className="card bg-base-100 w-auto shadow-sm">
 <div className='flex gap-4 items-center mt-2 ml-2'>
 <figure>
    <img
      src={company_logo}
      alt="company_logo" className='w-16' />
  </figure>
  <div>
    <h4 className='text-2xl'>{company}</h4>
    <div className='flex items-center gap-1'>
        <p><FaMapMarkerAlt/></p>

    <p>{location}</p>
    </div>
  </div>
 </div>
  <div className="card-body">
    <h2 className="card-title">{title}  <div className="badge badge-secondary">NEW</div></h2>
    <p>{description}</p>
    <div className='flex gap-2 flex-wrap'>
        {requirements.map((skill,index)=> <p key={index} className='border rounded-lg px-2 text-center hover:text-white hover:bg-black'>{skill}</p>)}
    </div>
    <div className="card-actions justify-end items-center mt-4">
        <p className='flex items-center'> Salary : <FaDollarSign/> {salaryRange.min}-{salaryRange.max} bdt</p>

        <Link to={`/jobs/${_id}`}>      <button className="btn btn-primary">Apply</button></Link>

    </div>
  </div>
</div>
    );
};

export default HotJobsCard;