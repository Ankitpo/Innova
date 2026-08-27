import Link from "next/link";

export default function First() {
  return (
    <main>
      <div className="background">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-4">
              <h1 className="fw-bold">
                We Build Digital Products That Power{" "}
                <span className="text-primary">Your Business</span>
              </h1>
              <div className="row g-4">
                <div className="col-lg-9">
                  <p>
                    Innova helps business innovate, scale and succeed in the
                    digital world.
                  </p>
                  <div className="d-flex gap-3 my-5">
                    <Link
                      href="/Services"
                      className="btn btn-primary px-3 rounded-3"
                    >
                      Services
                    </Link>
                    <button className="btn btn-outline-primary px-3 rounded-3">
                      View Our Work
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row g-4">
          <Home
            image="webapplication.png"
            title="Web Application Development"
            description="Custom web apps built with modern technologies for performance and scalability."
          />
          <Home
            image="mobileappdev.png"
            title="Mobile App Development"
            description="iOS and Android apps that deliver smooth experiences and drive engagement."
          />
          <Home
            image="UIUX.png"
            title="UI/UX Design"
            description="Beautiful, user-centered designs that enhance usability and brand value."
          />
          <Home
            image="Api&backend.png"
            title="API & Backend Development"
            description="Secure, robust and scalable backend solutions and API integrations."
          />
        </div>
      </div>
    </main>
  );
}

function Home(props) {
  return (
    <div className="col-12 col-md-6 col-lg-3">
      <div className="rel">
        <div className="introdiv h-100 pt-4 pb-4 ps-4 pe-5">
          <div className="imgbackground d-flex justify-content-center align-items-center mb-3">
            <img src={`/images/${props.image}`} width="60%" />
          </div>

          <h4 className="title">{props.title}</h4>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}
