import React, { useEffect, useState } from 'react';
import HotJobsCard from './HotJobsCard';

const HotJobs = () => {

    const [jobs,setJobs]=useState([]);
    useEffect(()=>{
        fetch('https://job-portal-server-rho-snowy.vercel.app/jobs')
        .then(res=>res.json())
        .then(data=>setJobs(data))
    },[])
    return (
        <div>
            {/* <h1>Total Job list : {jobs.length}</h1> */}
            
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-5'>
            {
                jobs.map((job)=><HotJobsCard key={job._id} job={job}/>)
            }
            </div>
            
        </div>
    );
};

export default HotJobs;