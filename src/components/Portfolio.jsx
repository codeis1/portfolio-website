import Card from "./Card";

const Portfolio = () => {
  return (
    <div>
      <section id="Portfolio" className="pt-[120px] text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="text-2xl font-bold text-[#f49eac]">Portfolio</h1>
            <p>
              <a href="#" className="btn btn-primary my-2">
                Hire Me
              </a>
            </p>
          </div>
        </div>
      </section>

      <div className="album py-5 ">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
