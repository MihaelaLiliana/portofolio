import React from 'react'
import ImgCV from "../../img/cv.jpg";
import "./MyOnlineCV.css"

function MyOnlineCv() {
    return (
    <div>
      <div className="containerCV">
      <div className="headerCV">
        <div>
          <div>
            <p>Mihaela Liliana</p>
            <p>Lobodan </p>
          </div>
        </div>
        <div>
          <div>
            <p>Nicolae Labis, Nr.53, Bl. M16, Sc. 1, Ap 32, Brasov</p>
            <p>Brasov, Romania</p>
            <p>+40728412933</p>
            <p>lobodan.mihaela.99@gmail.com</p>
            <p>
              <a href="https://www.linkedin.com/in/mihaela-liliana-lobodan-9212a01b3/" target="_blank">
                LinkedIn Profile
              </a>
            </p>
          </div>
        </div>
        <div>
          <img src={ImgCV} alt=""></img>
        </div>
      </div>
      <div className="detailsCV">
        <div>
          <div className="lineCVDiv">
            <span className="lineCV"></span>
          </div>
          <div>
            <span className="titleCV">Education</span>
          </div>
        </div>
        <div>
          <div>2020-2021</div>
          <div>
            Front-end Web Development, "Informal School of IT", Specialization:
            "Junior Programmer".
          </div>
        </div>
        <div>
          <div>2020-2021</div>
          <div>
            The Web Developer Bootcamp 2021 from
            <a href="https://www.udemy.com/course/the-web-developer-bootcamp/" target="_blank">
              www.udemy.com
            </a>
          </div>
        </div>
        <div></div>
        <div>
          <div className="lineCVDiv">
            <span className="lineCV"></span>
          </div>
          <div>
            <span className="titleCV">Current Job</span>
          </div>
        </div>
        <div>
          <div>2016-Present</div>
          <div>
            Sales advisor, ANIMAX Coresi, Brasov. 
          </div>
        </div>
        <div>
          <div>Achievements:</div>
          <div>- Improved presentation/social skills</div>
        </div>
        <div>
          <div className="lineCVDiv">
            <span className="lineCV"></span>
          </div>
          <div>
            <span className="titleCV">Programming Skills:</span>
          </div>
        </div>
        <div>
          <div>Entry Level</div>
          <div>JavaScript, ReactJS</div>
        </div>
        <div>
          <div className="lineCVDiv">
            <span className="lineCV"></span>
          </div>
          <div>
            <span className="titleCV">Computer skills</span>
          </div>
        </div>
        <div>
          <div>Entry Level</div>
          <div>Git</div>
        </div>
        <div>
          <div>Entry Level</div>
          <div>GitHub</div>
        </div>
        <div>
          <div>Junior Level</div>
          <div>VSCode</div>
        </div>
        <div>
          <div>Junior Level</div>
          <div>Figma</div>
        </div>
        <div>
          <div>Junior Level</div>
          <div>Asana</div>
        </div>
        <div>
          <div className="lineCVDiv">
            <span className="lineCV"></span>
          </div>
          <div>
            <span className="titleCV">Projects</span>
          </div>
        </div>
        <div>
          <div>17.02-05.03.2021</div>
          <div>
            Curriculum Vitae - Preparation for employment as a front-end Web
            Developer
          </div>
        </div>
      </div>
    </div></div>
    )
}

export default MyOnlineCv;