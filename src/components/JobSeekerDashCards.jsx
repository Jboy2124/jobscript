import React, { useState } from 'react'
import '../css/jobseekerdash.css'
import JobIcon from '../images/job-search.png'

const JobSeekerDashCards = (props) => {
    let handleExpandJobList = () => {
        props.handlesShowModal([props.id,props.showData]);
    }
  return (
    <div data-aos="fade-up" id='jobseeker-card' className='card' style={{ width: "20rem", height: "26rem" }}>
        <div id='jobseeker-card-header' className='card-header'>{props.category}</div>
        <div className="card-body">
            <h5 id='jobseeker-card-title' className="card-title">{props.title}</h5>
            <h6 id='jobseeker-card-company'>{props.company}</h6>
            <p id='jobseeker-card-company-address'>{props.address}</p>
            <p id='jobseeker-card-snippets' className="card-text">{props.snippets}</p>
            <div className='displcay-card-footer'>
                <p id='emp-card-footer'>{props.employmentStatus}</p>
                <p id='emp-card-aor'>{props.aor}</p>
            </div>
        </div>
        <div className='btn-view-more-job'>
            <button id='btn-view-more-jobs' onClick={handleExpandJobList} type='button' className='btn btn-outline-danger'>View more</button>
        </div>
    </div>
  )
}

export default JobSeekerDashCards