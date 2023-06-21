import React from 'react'

// import './projects.css'
import './Projects.scss'
import { IoIosConstruct } from 'react-icons/io'


import projects from './projects'

const ProjectsPage = () => {

  const [currentProjects, setCurrentProjects] = React.useState([]);
  const [pastProjects, setPastProjects] = React.useState([]);

  React.useEffect(() => {
    // loop through projects and find ones that have endTime = current
    // set currentProject to that project
    projects.map((project, index) => {
      if (project.endTime === "Current") {
        setCurrentProjects([...currentProjects, project])
      }
      else {
        setPastProjects([...pastProjects, project])
      }
    })

    console.log(currentProjects);
  }, [])


  return (

    <>

     <div className='heading_info'>
       <p>Pardon the dust! Still Under Construction!!</p> <IoIosConstruct />
       <h1>Project Page</h1>
     </div>
      <div className='timelinebody'>

        <div class="timeline">
          <div class="entry">
            <div class="title">
              <h3>2014 - Present</h3>
              <p>Title, Company</p>
            </div>
            <div class="ProjectBody">
              <p>Voluptatibus veniam ea reprehenderit atque reiciendis non laborum adipisci ipsa pariatur omnis.</p>
              <ul>
                <li>Rerum sit libero possimus amet excepturi</li>
                <li>Exercitationem enim dolores sunt praesentium dolorum praesentium</li>
                <li>Modi aut dolores dignissimos sequi sit ut aliquid molestias deserunt illo</li>
              </ul>
            </div>
          </div>
          <div class="entry">
            <div class="title">
              <h3>2010 - Present</h3>
              <p>Title, Company</p>
            </div>
            <div class="ProjectBody">
              <p>Voluptatibus veniam ea reprehenderit atque reiciendis non laborum adipisci ipsa pariatur omnis.</p>
              <ul>
                <li>Rerum sit libero possimus amet excepturi</li>
                <li>Exercitationem enim dolores sunt praesentium dolorum praesentium</li>
                <li>Modi aut dolores dignissimos sequi sit ut aliquid molestias deserunt illo</li>
              </ul>
            </div>
          </div>
          <div class="entry">
            <div class="title">
              <h3>2009 - 2010</h3>
              <p>Title, Company</p>
            </div>
            <div class="ProjectBody">
              <p>Voluptatibus veniam ea reprehenderit atque reiciendis non laborum adipisci ipsa pariatur omnis.</p>
              <ul>
                <li>Rerum sit libero possimus amet excepturi</li>
                <li>Exercitationem enim dolores sunt praesentium dolorum praesentium</li>
                <li>Modi aut dolores dignissimos sequi sit ut aliquid molestias deserunt illo</li>
              </ul>
            </div>
          </div>
          <div class="entry">
            <div class="title">
              <h3>2006 - 2008</h3>
              <p>Title, Company</p>
            </div>
            <div class="ProjectBody">
              <p>Voluptatibus veniam ea reprehenderit atque reiciendis non laborum adipisci ipsa pariatur omnis.</p>
              <ul>
                <li>Rerum sit libero possimus amet excepturi</li>
                <li>Exercitationem enim dolores sunt praesentium dolorum praesentium</li>
                <li>Modi aut dolores dignissimos sequi sit ut aliquid molestias deserunt illo</li>
              </ul>
            </div>
          </div>

        </div>
      </div>

    </>)



  // return (
  //   <>
  //     <div className='heading_info'>
  //       <p>Pardon the dust! Still Under Construction!!</p> <IoIosConstruct />
  //       <h1>Project Page</h1>
  //     </div>
  //     <div className="container">
  //       {pastProjects.map((project, index) => {
  //         return (

  //           <>
  //             <div className='timline_event'>
  //               <div className='timelineWrapper'>
  //                 <div className='timeline'></div>
  //                 <span className='timelineDot'></span>
  //               </div>
  //               <div className="project__card" key={index}>
  //                 <div className="project__image">
  //                   {/* <img src={project.image} alt={project.title} /> */}
  //                   {/* there are a list of images */}
  //                   {project.images.map((image, index) => {
  //                     return (
  //                       <img height="100px" src={image} alt={project.title} key={index} />
  //                     )
  //                   })
  //                   }
  //                 </div>
  //                 <div className='project__content'>

  //                   <h2 className='project__title'>{project.title}</h2>
  //                   <p className='project__description'>{project.description}</p>

  //                   <div className="project__links">
  //                     {
  //                       project.links && (project.links.weblink && <a href={project.links.weblink} target="_blank" rel="noreferrer">Website</a>)
  //                     }
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           </>


  //         )
  //       })}
  //     </div>

  //   </>
  // )
}

export default ProjectsPage