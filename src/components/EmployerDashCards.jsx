import React from 'react'
import '../css/employerDash.css'


const EmployerDashCards = (props) => {

    let handleExpandJobList = () => {
        props.handlesJobClickEvent([props.id,props.showData]);
    }

    let handleSendMessageEvent = () => {
        props.handlesMessageEvent(props.showData);
    }
  return (
    <div id='jobseeker-card' className='card' style={{ width: "20rem", height: "26rem" }}>
        <div id='employer-card-header' className='card-header'>{props.category}</div>
        <div className="card-body">
            <img className="devImg" src={props.devImg}></img>
            <h5 id='dev-card-title' className="card-title">{props.title}</h5>
            <p id='dev-card-location' className="card-text"><i class="fa fa-location-arrow" aria-hidden="true"></i>  {props.location}</p>
            <p className="dev-card-skillset">
                <a>{props.skillset}</a>
                <a>{props.skillset2}</a>
                <a>{props.skillset3}</a>
            </p>
        </div>
        <div className='btn-view-more-job'>
        <button id='btn-view-more-jobs' onClick={handleExpandJobList} type='button' className='btn btn-outline-danger'>View more</button> 
        <button id='btn-view-more-jobs' onClick={handleSendMessageEvent} type='button' className='btn btn-outline-danger m-2'> Message </button>
        </div>
        
    </div>
  )
}

export default EmployerDashCards