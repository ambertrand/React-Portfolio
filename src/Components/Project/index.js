import React from "react"
import Thumbnail from '../Thumbnail';
 
function Projects() {
  return (
    <div className="container bg-secondary mt-3">
      <h1 className=" display-4 text-center text-white">Projects</h1>
      <Thumbnail
        link="/whispering-castle-57159.herokuapp.com/"
        image="./img/index-screenshot.png"
        title="Outdoor Adventure Buddies"
        category="Project"
      />
    </div>
  )
}
 
export default Projects;