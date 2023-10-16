import { Testimg } from "../data";

const Card = () => {
  return (
    <div>
      <div className="col">
        <div className="card shadow-sm">
          <div className="h-[225px] w-full">
            <img
              className="bg-cover bg-center h-full card-img-top"
              src={Testimg}
            />
          </div>
          <div className="card-body">
            <p className="card-text">Placeholder Text</p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <a>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                  >
                    View Site
                  </button>
                </a>
              </div>
              <small className="text-body-secondary">9 mins</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
