import React from 'react'

const JobCard = (props) => {
  return (
    <div className="main-card-container">
          <img key={props.id} src={`${props.logo}`} alt={props.company} className="logo"/>
          <div className="full-time">
            <p>{props.postedAt}</p>
            <p>{props.contract}</p>
          </div>
          <h2 className='styleMe'>{props.position}</h2>
          <p className='company'>{props.company}</p>
          <h4 className='location'>{props.location}</h4>
    </div>
  )
}

export default JobCard
