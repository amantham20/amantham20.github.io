import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import projectData from './projects';
import { FaLocationDot } from 'react-icons/fa';


import "./Projects.scss";
// import './Projects.css';

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch your projects data here and set it to the state
    // This is just a placeholder. Replace it with your actual data fetching code.


    setProjects(projectData);
  }, []);

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);


  // return (
  //   <>
  //    <div className='timelinebody'>

  //      <div class="timeline">
  //        <div class="entry">
  //          <div class="title">
  //            <h3>2014 - Present</h3>
  //            <p>Title, Company</p>
  //          </div>
  //          <div class="ProjectBody">
  //            <p>Voluptatibus veniam ea reprehenderit atque reiciendis non laborum adipisci ipsa pariatur omnis.</p>
  //            <ul>
  //              <li>Rerum sit libero possimus amet excepturi</li>
  //              <li>Exercitationem enim dolores sunt praesentium dolorum praesentium</li>
  //              <li>Modi aut dolores dignissimos sequi sit ut aliquid molestias deserunt illo</li>
  //            </ul>
  //          </div>
  //        </div>
  //        <div class="entry">
  //          <div class="title">
  //            <h3>2010 - Present</h3>
  //            <p>Title, Company</p>
  //          </div>
  //          <div class="ProjectBody">
  //            <p>Voluptatibus veniam ea reprehenderit atque reiciendis non laborum adipisci ipsa pariatur omnis.</p>
  //            <ul>
  //              <li>Rerum sit libero possimus amet excepturi</li>
  //              <li>Exercitationem enim dolores sunt praesentium dolorum praesentium</li>
  //              <li>Modi aut dolores dignissimos sequi sit ut aliquid molestias deserunt illo</li>
  //            </ul>
  //          </div>
  //        </div>
  //        <div class="entry">
  //          <div class="title">
  //            <h3>2009 - 2010</h3>
  //            <p>Title, Company</p>
  //          </div>
  //          <div class="ProjectBody">
  //            <p>Voluptatibus veniam ea reprehenderit atque reiciendis non laborum adipisci ipsa pariatur omnis.</p>
  //            <ul>
  //              <li>Rerum sit libero possimus amet excepturi</li>
  //              <li>Exercitationem enim dolores sunt praesentium dolorum praesentium</li>
  //              <li>Modi aut dolores dignissimos sequi sit ut aliquid molestias deserunt illo</li>
  //            </ul>
  //          </div>
  //        </div>
  //        <div class="entry">
  //          <div class="title">
  //            <h3>2006 - 2008</h3>
  //            <p>Title, Company</p>
  //          </div>
  //          <div class="ProjectBody">
  //            <p>Voluptatibus veniam ea reprehenderit atque reiciendis non laborum adipisci ipsa pariatur omnis.</p>
  //            <ul>
  //              <li>Rerum sit libero possimus amet excepturi</li>
  //              <li>Exercitationem enim dolores sunt praesentium dolorum praesentium</li>
  //              <li>Modi aut dolores dignissimos sequi sit ut aliquid molestias deserunt illo</li>
  //            </ul>
  //          </div>
  //        </div>

  //      </div>
  //    </div>

  //  </>
  // )

  return (
    <div>
      {/* <ProjectsCarousel projects={featuredProjects} /> */}
      <Timeline projects={otherProjects} />
    </div>
  );
};


const Project = ({ project }) => {
  return (
    <div className="project">
      <h2>{project.title}</h2>
      <p>{project.startDate} - {project.endDate}</p>
      <p>{project.description}</p>
      <p>Event: {project.event}</p>
      <a href={project.links.weblink}>Website</a> | 
      <a href={project.links.github}>GitHub</a>
      <p>{project.location}</p>
      {project.people.map(person => <p key={person}>{person}</p>)}
      {project.techUsed.map(tech => <span key={tech}>{tech}</span>)}
      {project.photos.map(image => <img src={image} alt={project.title} key={image}/>)}
    </div>
  );
};

// const Timeline = ({ projects }) => {
//   // If projects span across years, you might want to parse the month string into a date object for sorting.
//   const sortedProjects = projects.sort((a, b) => new Date(b.startDate) - new Date(a.startDate));

//   return (
//     <div className="timeline">
//       {sortedProjects.map(project => (
//         <div key={project.id}>
//           <div className="timeline-point"></div>
//           <Project project={project} />
//         </div>
//       ))}
//     </div>
//   );
// };



const Timeline = ({ projects }) => {
  const sortedProjects = projects.sort((a, b) => new Date(b.startDate) - new Date(a.startDate))
  return (
    <div className='timelinebody'>
      <div className="timeline">
        {projects.map(project => (
          <div className="entry" key={project.id}>
            <div className="title">

              <h3>{project.startDate} - {project.endDate}</h3>
              <p>{project.title}</p>
            </div>
            <div className="ProjectBody">
            <div className="photos">
              {project.photos.map(image => (
                <img src={image} alt={project.title} key={image} className="project-photo"/>
              ))}
            </div>

              <p className='eventLocation'>  {project.event}</p>
              <p>{project.description}</p>
              <p>Links: 
                <a href={project.links.weblink} target="_blank" rel="noreferrer">Website</a> | 
                <a href={project.links.github} target="_blank" rel="noreferrer">GitHub</a>
              </p>
              <p>{project.location}</p>
              <p>People involved:</p>
              <ul>
                {project.people.map(person => (
                  <li key={person}>{person}</li>
                ))}
              </ul>
              <p>Technologies used:</p>
              <ul>
                {project.techUsed.map(tech => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              <p>Photos:</p>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ProjectsCarousel = ({ projects }) => {
  return (
    <Carousel showThumbs={false} showArrows={true}>
      {projects.map(project => 
        <div key={project.title}>
          <Project project={project} />
        </div>
      )}
    </Carousel>
  );
};


export default ProjectsPage;