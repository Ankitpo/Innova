import Nav from "../Nav";
import Footer from "../Footer";
import Project from "../Project";

export default function Services() {
  return (
    <div>
      <Nav />

      <div className="servicebg">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <h1 className="fw-bold mb-3">Our Services</h1>
              <p>
                We deliver end-to-end digital solutions tailored to help your
                business inovate, scale and succeed.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row py-5">
          <div className="col-lg-4">
            <div className="serviceslide rounded-3">
              <Slide icon="bi-globe" title="Web Development" />
              <Slide icon="bi-phone" title="Mobile App Development" />
              <Slide icon="bi-palette" title="UI/UX Design" />
              <Slide icon="bi-code-slash" title="API & Backend Development" />
              <Slide icon="bi-cart" title="E-Commerce Solutions" />
              <Slide icon="bi-cloud" title="SAAS Development" />
              <Slide icon="bi-headset" title="Maintenance & Support" />
            </div>
          </div>
          <div className="col-lg-8">
            <div className="row g-4">
              <ServiceBox
                col="col-md-6"
                icon="bi-globe"
                title="Web Development"
                description="Fast, secure, and scalable websites built with the latest technologies."
              />

              <ServiceBox
                col="col-md-6"
                icon="bi-phone"
                title="Mobile App Development"
                description="Native and cross-platform mobile apps for iOS and Android."
              />

              <ServiceBox
                col="col-md-6"
                icon="bi-palette"
                title="UI/UX Design"
                description="Beautiful, user-centered designs that enhance usability and brand value."
              />

              <ServiceBox
                col="col-md-6"
                icon="bi-code-slash"
                title="API & Backend Development"
                description="Secure, scalable, and reliable backend solutions and API integrations."
              />

              <ServiceBox
                col="col-md-6"
                icon="bi-cart"
                title="E-Commerce Solutions"
                description="Feature-rich online stores with smooth payment and inventory management."
              />

              <ServiceBox
                col="col-md-6"
                icon="bi-cloud"
                title="SAAS Development"
                description="Scalable SaaS products to boost efficiency, productivity, and growth."
              />

              <ServiceBox
                col="col-md-6"
                icon="bi-headset"
                title="Maintenance & Support"
                description="Ongoing support and maintenance to keep your products running smoothly."
              />
            </div>
          </div>
        </div>
        <Project />
      </div>

      <Footer />
    </div>
  );
}

function Slide(props) {
  return (
    <button className="px-3 py-3 rounded-3 buttonsl">
      <div className="d-flex align-items-center">
        <i className={`bi ${props.icon}`}></i>
        <p className="ms-3 mb-0 fw-bold text-dark">{props.title}</p>
      </div>
    </button>
  );
}
function ServiceBox(props) {
  return (
    <div className={props.col}>
      <div className="bg p-4 h-100">
        <div className="imgbackground d-flex justify-content-center align-items-center">
          <i
            className={`bi ${props.icon} fs-2`}
            style={{ color: "#055ae9" }}
          ></i>
        </div>
        <h5 className="fw-bold mt-3">{props.title}</h5>
        <p className="text-muted">{props.description}</p>
      </div>
    </div>
  );
}
