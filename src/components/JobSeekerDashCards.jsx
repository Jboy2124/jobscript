import React, { useState } from 'react'
import '../css/jobseekerdash.css'

const JobSeekerDashCards = (props) => {
    let handleExpandJobList = () => {
        props.handlesJobClickEvent(props.id);
    }
  return (
    <div id='jobseeker-card' className='card' style={{ width: "20rem", height: "24rem" }}>
        <div id='jobseeker-card-header' className='card-header'>{props.category}</div>
        <div className="card-body">
            <h5 id='jobseeker-card-title' className="card-title">{props.title}</h5>
            <p id='jobseeker-card-snippets' className="card-text">{props.snippets}</p>
        </div>
        <div className='btn-view-more-job'>
            <button id='btn-view-more-jobs' onClick={handleExpandJobList} type='button' className='btn btn-outline-danger'>View more</button>
        </div>
        
    </div>
  )
}

export default JobSeekerDashCards