import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from '@mui/icons-material/Email';
import "../styles/Footer.css";

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <LinkedInIcon />
            <GitHubIcon />
            <EmailIcon />
        </div>
        <p> &copy; 2023 marcussvenssons</p>
    </div>
  )
}

export default Footer