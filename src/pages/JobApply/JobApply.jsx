import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';

const JobApply = () => {

    const {id} = useParams();

    const {user} = useAuth();
    const navigate = useNavigate();

    console.log(id,user.email);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const github = form.github.value;
        const linkedIn = form.linkedIn.value;
        const resume = form.resume.value;

        console.log(github, linkedIn, resume);

        const jobApplication = {
            job_id : id,
            applicant_email:user.email,
            linkedIn,
            github,
            resume
        }

        fetch('http://localhost:3000/job-applications',{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(jobApplication)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId)
            {
                Swal.fire({
                    title: "Your application has been submitted!",
                    icon: "success",
                    draggable: true
                  });

                  form.reset();
                  navigate('/myApplications');

            }
            

        }
        )
    }
    return (
       

           
            <div className="card bg-base-100 w-full max-w-2xl shadow-2xl my-10 mx-auto">
                <form className="card-body" onSubmit={handleSubmit}>
                    <h1 className="text-5xl font-bold mb-8">Apply Job and Good Luck!</h1>
                    <fieldset className="fieldset">
                        <label className="label">LinkedIn URL</label>
                        <input type="url" className="input w-full" placeholder="LinkedIn url" name='linkedIn' />
                        <label className="label">Github URL</label>
                        <input type="url" className="input w-full" placeholder="Github URL" name='github' />
                        <label className="label">Resume URL</label>
                        <input type="url" className="input w-full" placeholder="Resume URL" name='resume' />

                        <button className="btn btn-neutral mt-4">Submit</button>
                    </fieldset>
                </form>
            </div>
       



    );
};

export default JobApply;