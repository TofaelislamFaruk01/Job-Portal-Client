import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { MdLocationOn, MdOutlineWork, MdEmail, MdOutlineCalendarToday } from 'react-icons/md';
import { FaMoneyBillWave, FaUserTie } from 'react-icons/fa';

const JobDetails = () => {
    const {
        title,
        location,
        jobType,
        category,
        applicationDeadline,
        salaryRange,
        description,
        company,
        requirements,
        responsibilities,
        status,
        hr_email,
        hr_name,
        company_logo
    } = useLoaderData();

    return (
        <div className="max-w-6xl mx-auto p-6 mt-10">
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure className="p-6">
                    <img
                        src={company_logo}
                        alt={`${company} logo`}
                        className="w-24 h-24 object-contain mx-auto"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl font-bold">{title}</h2>
                    <p className="text-lg text-gray-600">{company}</p>
                    <div className="flex flex-wrap gap-2">
                        <div className="badge badge-info gap-1">
                            <MdOutlineWork /> {jobType}
                        </div>
                        <div className="badge badge-accent gap-1">
                            <MdLocationOn /> {location}
                        </div>
                        <div className="badge badge-success gap-1">
                            <FaMoneyBillWave /> {salaryRange.min}-{salaryRange.max} {salaryRange.currency.toUpperCase()}
                        </div>
                        <div className="badge badge-secondary">{category}</div>
                        <div className="badge badge-outline">{status}</div>
                    </div>
                    <p className="mt-3 text-gray-800">{description}</p>
                    <p className="text-sm text-gray-500 flex items-center gap-2 mt-2">
                        <MdOutlineCalendarToday /> Apply before: {applicationDeadline}
                    </p>

                    <div className="mt-4">
                        <h3 className="text-xl font-semibold">Requirements</h3>
                        <ul className="list-disc list-inside ml-3 mt-2">
                            {requirements.map((req, i) => (
                                <li key={i}>{req}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="mt-4">
                        <h3 className="text-xl font-semibold">Responsibilities</h3>
                        <ul className="list-disc list-inside ml-3 mt-2">
                            {responsibilities.map((res, i) => (
                                <li key={i}>{res}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="mt-6 border-t pt-4">
                        <h4 className="text-lg font-semibold flex items-center gap-2">
                            <FaUserTie /> HR Contact
                        </h4>
                        <p className="text-sm">{hr_name}</p>
                        <p className="text-sm flex items-center gap-2">
                            <MdEmail />
                            <a href={`mailto:${hr_email}`} className="text-blue-600 hover:underline">
                                {hr_email}
                            </a>
                        </p>
                    </div>

                    <div className="card-actions justify-end mt-4">
                        <button className="btn btn-primary">Apply Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;
