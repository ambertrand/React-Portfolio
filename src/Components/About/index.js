import React from "react";
import Image from '../../img/Alex-Bertrand.jpg';
 
function About(props) {
  return (
    <div className="container">
      <section className="container-fluid bg-secondary m-3 p-3">
            <div className="row">
                <div className="col-12">
                    <h2 className="p-3">About Me</h2>
                    <hr />
                    <img className="float-left mr-3" height="320" src={Image} alt="Alex" />
                    <p> Aspiring Full-stack web developer with event management experience looking to leverage my strong
                        work ethic and ability to learn quickly. Currently studying in the University of New Hampshire’s
                        certificate program in full stack web development, where I am building my skills in HTML, CSS,
                        JavaScript and Node.js as well as responsive and mobile-first web design. Recently completed a
                        project
                        working on a team of four applying aspects of agile development. I am excited to leverage the
                        skills
                        I have learned to help build better web experiences through team collaboration to see
                        applications and
                        software come to life.
                    </p>
                    <p>In my free time when I am not building great web experiences, I enjoy playing golfing, skiing and
                        running.
                    </p>
                    <br />
                </div>
            </div>
        </section>
    </div>
  )
}
 
export default About;