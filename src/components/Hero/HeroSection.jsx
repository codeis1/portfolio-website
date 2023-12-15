import { Myimg2 } from "../../data.js";
import Typewriter from "typewriter-effect";
import "./hero.css";

const HeroSection = () => {
  return (
    <div id="Home" className="w-full xl:h-[100vh] bg-[white] flex items-center">
      <div className="flex w-full justify-center content-center col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center gx-[100px] hero-heading-container g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6 flex justify-center content-center ">
            <img
              src={Myimg2}
              className="d-block img-fluid bg-cover rounded-full hero-img"
              alt="My image"
              loading="eager"
            />
          </div>
          <div className="col-lg-6">
            <span className="text-2xl text-[black]">Hi I{"'"}m</span>
            <div className="lg:w-[30rem]">
              <h1 className="lh-1 mb-3 ">
                <span className="text-[black] font-bold text-one">Ravol</span>{" "}
                <span className="text-[black] font-bold text-two">
                  Ashmeade
                </span>
              </h1>
            </div>

            <div className="flex gap-1 text-[black] text-2xl">
              <span className="text-2xl text-[black]">A</span>
              <Typewriter
                options={{
                  strings: ["Frontend Developer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>

            <div className="d-grid mt-3 gap-2 d-md-flex justify-content-md-start">
              <a href="#Contact">
                <button className="rounded-full text-sm bg-[#252525] text-white p-3">
                  Contact Info
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
