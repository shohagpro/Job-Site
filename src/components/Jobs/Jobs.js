import React, { useEffect, useState } from 'react';
import JobList from './JobList';

const Jobs = () => {

    const [jobs, setJobs] = useState([]);

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data =>setJobs(data))
    },[])

    return (
        <div>
            <div className="row">
                {
                    jobs.map(jobs => <JobList jobs={jobs}></JobList>)
                }
            </div>
        </div>
    );
};

export default Jobs;