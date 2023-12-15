import "./portfolio.css";

const Portfolio = () => {
  return (
    <div id="Portfolio" className="p-top-container">
      <div className="top">
        <h6 className="text-xs">Browse my recent</h6>
        <h1 className="text-3xl font-semibold text-black">Projects</h1>
      </div>

      <div className="p-bottom">
        {/* <div className="card">
          <div className="img-cont">
            <div className="wrapper">
              <img src="/src/assets/images/Dartmedia.png" alt="project image" />
            </div>
          </div>
          <div className="title">
            <span>Dart media</span>
          </div>
          <div className="card-bottom">
            <a href="">
              <div className="item">GitHub</div>
            </a>
            <a href="">
              <div className="item">Live Demo</div>
            </a>
          </div>
        </div> */}

        <div className="card">
          <div className="img-cont">
            <div className="wrapper">
              <img
                src="../../assets/images/todoapp.png"
                alt="project image"
                loading="eager"
              />
            </div>
          </div>
          <div className="title">
            <span>ToDo List App</span>
          </div>
          <div className="card-bottom">
            <a href="https://github.com/codeis1/fullstack-todo-app-lesson-frontend">
              <div className="item">GitHub</div>
            </a>
            <a href="https://eclectic-taiyaki-2b6bfe.netlify.app">
              <div className="item">Live Demo</div>
            </a>
          </div>
        </div>

        {/* <div className="card">
          <div className="img-cont">
            <div className="wrapper">
              <img src="/src/assets/images/Dartmedia.png" alt="project image" />
            </div>
          </div>
          <div className="title">
            <span>Dart media</span>
          </div>
          <div className="card-bottom">
            <a href="">
              <div className="item">GitHub</div>
            </a>
            <a href="">
              <div className="item">Live Demo</div>
            </a>
          </div>
        </div> */}

        {/* <div className="card">
          <div className="img-cont">
            <div className="wrapper">
              <img src="/src/assets/images/Dartmedia.png" alt="project image" />
            </div>
          </div>
          <div className="title">
            <span>Dart media</span>
          </div>
          <div className="card-bottom">
            <a href="">
              <div className="item">GitHub</div>
            </a>
            <a href="">
              <div className="item">Live Demo</div>
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Portfolio;
