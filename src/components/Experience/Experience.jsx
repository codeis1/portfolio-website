import "./experience.css";
import {
  FaBootstrap,
  FaCss3,
  FaGitAlt,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { SiExpress, SiTailwindcss } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { IoLogoFirebase } from "react-icons/io5";

const Experience = () => {
  return (
    <div id="Experience" className="top-container">
      <div className="top">
        <h6 className="text-xs">Explore my</h6>
        <h1 className="text-3xl font-semibold text-black">Experience</h1>
      </div>

      <div className="bottom">
        <div className="box">
          <div className="title">Frontend Development</div>

          <div className="information-cont">
            <div className="left">
              <div className="inner-item">
                <div className="icon-cont">
                  <FaHtml5 />
                </div>
                <div className="inner-text">
                  <span className="text-1">HTML</span>
                  <span className="text-2">Experienced</span>
                </div>
              </div>

              <div className="inner-item">
                <div className="icon-cont">
                  <FaCss3 />
                </div>
                <div className="inner-text">
                  <span className="text-1">CSS</span>
                  <span className="text-2">Experienced</span>
                </div>
              </div>

              <div className="inner-item">
                <div className="icon-cont">
                  <FaHtml5 />
                </div>
                <div className="inner-text">
                  <span className="text-1">JavaScript</span>
                  <span className="text-2">Experienced</span>
                </div>
              </div>
            </div>

            <div className="right">
              <div className="inner-item">
                <div className="icon-cont">
                  <FaReact />
                </div>
                <div className="inner-text">
                  <span className="text-1">React.js</span>
                  <span className="text-2">Experienced</span>
                </div>
              </div>

              <div className="inner-item">
                <div className="icon-cont">
                  <FaBootstrap />
                </div>
                <div className="inner-text">
                  <span className="text-1">Bootstrap</span>
                  <span className="text-2">Experienced</span>
                </div>
              </div>

              <div className="inner-item">
                <div className="icon-cont">
                  <SiTailwindcss />
                </div>
                <div className="inner-text">
                  <span className="text-1">Tailwind.css</span>
                  <span className="text-2">Experienced</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="box">
          <div className="title">Backend Development</div>

          <div className="information-cont">
            <div className="left">
              <div className="inner-item">
                <div className="icon-cont">
                  <FaGitAlt />
                </div>
                <div className="inner-text">
                  <span className="text-1">Git</span>
                  <span className="text-2">Experienced</span>
                </div>
              </div>

              <div className="inner-item">
                <div className="icon-cont">
                  <FaNodeJs />
                </div>
                <div className="inner-text">
                  <span className="text-1">Node.js</span>
                  <span className="text-2">Experienced</span>
                </div>
              </div>

              <div className="inner-item">
                <div className="icon-cont">
                  <SiExpress />
                </div>
                <div className="inner-text">
                  <span className="text-1">Express.js</span>
                  <span className="text-2">Experienced</span>
                </div>
              </div>
            </div>

            <div className="right">
              <div className="inner-item">
                <div className="icon-cont">
                  <DiMongodb />
                </div>
                <div className="inner-text">
                  <span className="text-1">Mongodb</span>
                  <span className="text-2">Experienced</span>
                </div>
              </div>

              <div className="inner-item">
                <div className="icon-cont">
                  <IoLogoFirebase />
                </div>
                <div className="inner-text">
                  <span className="text-1">Firebase</span>
                  <span className="text-2">Experienced</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
