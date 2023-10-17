import { Shopper } from "../data.js";
import { Dartmedia } from "../data.js";

const Portfolio = () => {
  return (
    <div>
      <section id="Portfolio" className="pt-[120px] text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="text-2xl font-bold text-[#f49eac]">Portfolio</h1>
            <p>
              <a href="#Contact" className="btn btn-primary my-2">
                Hire Me
              </a>
            </p>
          </div>
        </div>
      </section>

      <div className="album py-5 ">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div className="col">
              <div className="card shadow-sm">
                <div className="h-[225px] w-full">
                  <img
                    className="bg-cover bg-center h-full card-img-top"
                    src={Shopper}
                  />
                </div>
                <div className="card-body h-[100px]">
                  <p className="card-text">
                    Frontend E-commerce website, visit page.
                  </p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group mb-2 ml-2">
                    <a href="https://codeis1.github.io/E-commerce/">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        View Site
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card shadow-sm">
                <div className="h-[225px] w-full">
                  <img
                    className="bg-cover bg-center h-full card-img-top"
                    src={Dartmedia}
                  />
                </div>
                <div className="card-body h-[100px]">
                  <p className="card-text">
                    Dart is a Frontend social media web app.
                  </p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group mb-2 ml-2">
                    <a href="https://dart-nu.vercel.app/">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        View Site
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
