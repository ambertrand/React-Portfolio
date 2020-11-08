import React from "react"
import Thumbnail from '../Thumbnail';
// import projectThumbnail from '../../img/index-screenshot.png';
 
function Projects() {
  return (
    <div className="container bg-secondary mt-3">
      <h1 className=" display-4 text-white">Projects</h1>
      <hr />
      <Thumbnail
        link="/whispering-castle-57159.herokuapp.com/"
        image= ""
        title="Outdoor Adventure Buddies"
        category="Project"
      />
    </div>
  )
}
 
export default Projects;