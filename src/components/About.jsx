import { Aboutimg } from "../data.js";

const About = () => {
  return (
    <div>
      <section id="About" className="pt-[100px] text-center container about-title">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="text-2xl font-bold text-[#f49eac]">About</h1>
          </div>
        </div>
      </section>
      <div className="container pt-[120px] rounded-sm bg-[#fff] col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6 flex justify-end content-center">
            <img
              src={Aboutimg}
              className="d-block img-fluid rounded-full bg-center hero-img"
              alt="My image"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <p className="lead">
              I am Ravol Ashmeade, a kid with a high drive to leave a positive
              mark on the world, I love football game... Video and reality, for
              me Messi is the best, hopefully that doesn{"'"}t get us on a bad
              start,😆if you are a CR7 fan just know he is great as well, so we
              are cool now right?😄my role model is Elon Musk, some of his
              traits that stands out to me the most are, his creativity,
              perseverance, and work ethic, he is relentless. I am looking
              forward on making a big impact on the world like him and even
              more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
