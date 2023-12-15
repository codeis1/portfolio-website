import { Myimg2 } from "../../data.js";
import "./about.css";
import { BsFillAwardFill } from "react-icons/bs";
import { IoPeopleSharp } from "react-icons/io5";

const About = () => {
  return (
    <div id="About" className="about-container">
      <section className="container about-title">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h6 className="text-xs">Get to know more</h6>
            <h1 className="text-3xl font-semibold text-[black]">About ME</h1>
          </div>
        </div>
      </section>
      <div className="about-bt-container w-full flex gap-5 justify-center content-center">
        <div className="about-img-cont">
          <img
            src={Myimg2}
            alt="my profile photo"
            className="bg-cover object-cover bg-center w-full h-full rounded-[40px]"
          />
        </div>

        <div className="about-info-container">
          <div className="info-wrapper flex justify-between max-w-[1230px]">
            <div className="info-container">
              <BsFillAwardFill className="text-[20px]" />
              <span className="font-semibold">Experience</span>
              <span>6+ months</span>
              <span>Frontend Developer</span>
            </div>

            <div className="info-container">
              <IoPeopleSharp className="text-[20px]" />
              <span className="font-semibold">Education</span>
              <span>6+ months</span>
              <span>Frontend Developer</span>
            </div>
          </div>
          <div className="text-box">
            <p>
              I am Ravol Ashmeade a junior full stack developer, when am not
              coding my side hobbies are playing football, gaming and watching
              movies, space exploration gets me excited too. Elon Musk is my
              inspiration to become a great force in the field of technology.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
