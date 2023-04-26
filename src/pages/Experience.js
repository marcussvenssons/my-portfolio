import React from 'react'
import { 
  VerticalTimeline, 
  VerticalTimelineElement,
 } from "react-vertical-timeline-component";
 import "react-vertical-timeline-component/style.min.css";
 import SchoolIcon from '@mui/icons-material/School';
 import WorkIcon from '@mui/icons-material/Work';
 import "../styles/Experience.css"

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#510d26'>
        <VerticalTimelineElement className='vertical-timeline-element--education'
         date="2009 - 2012"
         iconStyle={{ background: "#510d26", color: "#fff" }}
         icon={<SchoolIcon />}
         >
          <h3 className='vertical-timeline-element-title'>
            High School, Skellefteå, Sweden
          </h3>
          <p> Technical with orientation to communiation</p>
         </VerticalTimelineElement>

         <VerticalTimelineElement className='vertical-timeline-element--work'
         date="2013 - 2017"
         iconStyle={{ background: "#ebdae0", color: "#030303" }}
         icon={<WorkIcon />}
         >
          <h3 className='vertical-timeline-element-title'>
            Sales, Skellefteå, Sweden
          </h3>
          <p>
            @ Norran, Skellefteå Kraft and Vardia Försäkring
          </p>
         </VerticalTimelineElement>

         <VerticalTimelineElement className='vertical-timeline-element--education'
         date="2017 - 2020"
         iconStyle={{ background: "#510d26", color: "#fff" }}
         icon={<SchoolIcon />}
         >
          <h3 className='vertical-timeline-element-title'>
            Umeå University, Sweden
          </h3>
          <h4>
            Bacheloor's Degree
          </h4>
          <p> Informatics with orientation to Behaviour Science</p>
         </VerticalTimelineElement>

         <VerticalTimelineElement className='vertical-timeline-element--work'
         date="2021 - Present"
         iconStyle={{ background: "#ebdae0", color: "#030303" }}
         icon={<WorkIcon />}
         >
          <h3 className='vertical-timeline-element-title'>
            Doktor.se, Sweden
          </h3>
          <h4>
            Team manager, Coordinator
          </h4>
         </VerticalTimelineElement>

         <VerticalTimelineElement className='vertical-timeline-element--education'
         date="2022 - 2023"
         iconStyle={{ background: "#510d26", color: "#fff" }}
         icon={<SchoolIcon />}
         >
          <h3 className='vertical-timeline-element-title'>
            CodeCademy, Online
          </h3>
          <h4>
            Front-End Engineer
          </h4>
         </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
  )
}

export default Experience;