export default function AboutInnova() {
  return (
    <section className="aboutinsec py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4">
            <p className="text-primary fw-bold small mb-2">ABOUT INNOVA</p>

            <h2 className="display-6 fw-bold mb-3">
              We Turn Ideas Into Digital Products
            </h2>

            <p className="text-muted mb-4">
              From concept to code, we build digital solutions that help
              startups and enterprises grow, automate, and succeed in the
              digital world.
            </p>

            <button className="btn btn-primary px-4 py-2 rounded-3">
              Learn More About Us
            </button>
          </div>

          <div className="col-md-8">
            <div className="row g-2">
              <div className="col-6 col-md-3 border-end">
                <About
                  image="happyclients.png"
                  num="250+"
                  title="Happy Clients"
                />
              </div>
              <div className="col-6 col-md-3 border-end">
                <About
                  image="projectscompleted.png"
                  num="350+"
                  title="Projects Completed"
                />
              </div>
              <div className="col-6 col-md-3 border-end">
                <About
                  image="experience.png"
                  num="15+"
                  title="Years of Experience"
                />
              </div>
              <div className="col-6 col-md-3">
                <About image="expertteam.png" num="120+" title="Expert Team" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About(props) {
  return (
    <div className="p-4 h-100 d-flex flex-column align-items-center">
      <div className="imgbackground d-flex justify-content-center align-items-center mb-3">
        <img src={`/images/${props.image}`} width="70%" />
      </div>
      <h3 className="fw-bold mb-1">{props.num}</h3>
      <p className="text-muted small">{props.title}</p>
    </div>
  );
}
