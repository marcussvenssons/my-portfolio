import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from '@mui/icons-material/Email';
import "../styles/Home.css";

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2> Hi, My Name is Marcus</h2>
        <div className='prompt'>
          <p>
            Nice to have you here!
          </p>
          <LinkedInIcon />
          <EmailIcon />
          <GitHubIcon />
        </div>
      </div>
      <div className='skills'>
        <h1> Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2> Front-End</h2>
            <span>
              ReactJS, HTML, CSS, ETC ETC
            </span>
          </li>
          <li className='item'>
            <h2> Languages</h2>
            <span>
              JavaScript
            </span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home