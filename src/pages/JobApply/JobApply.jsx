import React from 'react';

const JobApply = () => {

    const handleSubmit=(e)=>{
        e.preventDefault();
        const form = e.target;
        const github = form.github.value;
        const linkedIn=form.linkedIn.value;
        const resume = form.resume.value;
        
        console.log(github,linkedIn,resume);
    }
    return (
        <div>
           <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body" onSubmit={handleSubmit}>
        <fieldset className="fieldset">
          <label className="label">LinkedIn URL</label>
          <input type="url" className="input" placeholder="LinkedIn url" name='linkedIn' />
          <label className="label">Github URL</label>
          <input type="url" className="input" placeholder="Github URL" name='github'/>
          <label className="label">Resume URL</label>
          <input type="url" className="input" placeholder="Resume URL" name='resume'/>
          
          <button className="btn btn-neutral mt-4">Submit</button>
        </fieldset>
      </form>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default JobApply;