import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const MyApplications = () => {
    const { user } = useAuth();
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        if (!user?.email) return;
        fetch(`http://localhost:3000/job-applications?email=${user.email}`)
            .then(res => res.json())
            .then(data => setJobs(data));
    }, [user?.email]);

    // const handleDelete = (id) => {
    //     fetch(`http://localhost:3000/job-applications/${id}`, {
    //         method: 'DELETE',
    //     })
    //         .then(res => {
    //             if (res.ok) {
    //                 setJobs(jobs.filter(job => job._id !== id));
    //             }
    //         });
    // };

    return (
        <div className="p-4 mt-5">
            <h2 className="text-2xl font-semibold mb-4">
                 {user.email}
            </h2>
            <h2 className="text-2xl font-semibold mb-5">
                Applied Applications : {jobs.length}
            </h2>

            <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-300 mt-8 mb-15">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 py-2 border">Logo</th>
                            <th className="px-4 py-2 border">Title</th>
                            <th className="px-4 py-2 border">Company</th>
                            <th className="px-4 py-2 border">GitHub</th>
                            <th className="px-4 py-2 border">LinkedIn</th>
                            <th className="px-4 py-2 border">Resume</th>
                            {/* <th className="px-4 py-2 border">×</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {jobs.map(job => (
                            <tr key={job._id} className="text-center">
                                <td className="px-4 py-2 border">
                                    <img
                                        src={job.company_logo}
                                        alt="logo"
                                        className="w-10 h-10 mx-auto"
                                    />
                                </td>
                                <td className="px-4 py-2 border">{job.title}</td>
                                <td className="px-4 py-2 border">{job.company}</td>
                                <td className="px-4 py-2 border">
                                    <a href={job.github} target="_blank" rel="noreferrer" className="text-blue-600 underline">GitHub</a>
                                </td>
                                <td className="px-4 py-2 border">
                                    <a href={job.linkedIn} target="_blank" rel="noreferrer" className="text-blue-600 underline">LinkedIn</a>
                                </td>
                                <td className="px-4 py-2 border">
                                    <a href={job.resume} target="_blank" rel="noreferrer" className="text-blue-600 underline">Resume</a>
                                </td>
                                {/* <td className="px-4 py-2 border">
                                    <button
                                        onClick={() => handleDelete(job._id)}
                                        className="text-red-600 text-xl hover:text-red-800"
                                        title="Delete"
                                    >
                                        ×
                                    </button>
                                </td> */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyApplications;
