import React from 'react'
import data from '../data/data.json'
import JobCard from './JobCard'

const JobData = () => {
  return (
    <div className='card-container'>
      {data.map((data, id) =>(
        <JobCard
        key={id}
        logo={data.logo}
        postedAt={data.postedAt}
        contract={data.contract}
        position={data.position}
        company={data.company}
        location={data.location}
        />
      ))}
    </div>
  )
}

export default JobData
