import React from 'react'
import AccessTimeFilledRoundedIcon from '@mui/icons-material/AccessTimeFilledRounded';
import { Chip, Divider } from '@material-ui/core';
import { Directions } from '@mui/icons-material';
import { Link } from 'react-router-dom';

import AssistantPhotoRoundedIcon from '@mui/icons-material/AssistantPhotoRounded';

const Project = () => {
  return (
    <div style={{display:'flex',background:'white',flexDirection:'column',margin:'0px',padding:'5px'}}>
        <div style={{display:'flex'}}>

            <div style={{width:'50%',float:'left',fontSize:'30px'}}>Project Details</div>
             
             <div style={{width:'50%'}}>
             
             <p style={{float:'right'}}>
                 
                 <ul style={{listStyle:'none'}}>
                     
                     <li><h2>Rs150/hr</h2></li>
                     
                     <li style={{display:'flex'}}><AccessTimeFilledRoundedIcon/><h4>Beginning in 5 days ,19 hours</h4> </li>
                 
                 </ul>
             </p>
            
            </div>
        
        </div>
        <Divider variant='primary'/>
        <div style={{ padding:'25px',fontSize:'20px',fontFamily:'Raleway, sans-serif '}}>
         <p>
            We are looking to hire a full stack Python developer for sustaining upkeep and enhancements of video social website during launch and beyond. Preferred skills are 5+ years experience in: Django, Python, AngularJS, Github, HTML, Docker CSS, PostgreSQL, Web Development, Redux, Bootstrap, RESTful, NGINX API Development, Nginx, Javascript, Gunicorn, Celery, Memcached, Frontend Development, Backend Development, Full Stack Development, Cascading Style Sheet (CSS), Linux, MySQL...</p>
        </div>
        
        <div style={{display:'flex',flexDirection:'column'}}>
        <div>
        <h1 style={{marginLeft:'0',float:'left'}}>Skills Required</h1>
        </div>
        <div style={{padding:'20px'}}>
        <Chip variant='outlined' label="Python" style={{width:'150px',fontSize:'20px'}}/>
        <Chip variant='outlined' label="Django" style={{width:'150px',fontSize:'20px'}}/>
        <Chip variant='outlined' label="Celery" style={{width:'150px',fontSize:'20px'}}/>
        <Chip variant='outlined' label="Javascript" style={{width:'150px',fontSize:'20px'}}/>
        <Chip variant='outlined' label="Rest Api" style={{width:'150px',fontSize:'20px'}}/>
        </div>
      <div style={{display:'flex',padding:'20px'}}>

        <h3 style={{width:'50%'}}>Project ID:32885248</h3>

        <div style={{width:'50%',paddingRight:'20px'}}>

        <p style={{float:'right'}}>< AssistantPhotoRoundedIcon />Report Project</p>
        </div>
        </div>
        </div>
       {/* <Link to ='/SendReq/SendReqForm'>*/}
   <div className='btn btn-primary'>
     
     Apply
   </div>
   

    </div>
  )
}

export default Project