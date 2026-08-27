export default function OurServices() {
  const services = [
    {
      image: "webapplication.png",
      title: "Web Applications",
      desc: "Powerful, responsive, and scalable web apps tailored to your business needs.",
    },
    {
      image: "mobileappdev.png",
      title: "Mobile Applications",
      desc: "Native and cross-platform mobile apps for iOS and Android.",
    },
    {
      image: "pwa.png",
      title: "Progressive Web Apps",
      desc: "Fast, reliable, and engaging web experiences that work offline too.",
    },
    {
      image: "ecommerce.png",
      title: "E-Commerce Solutions",
      desc: "Secure and feature-rich e-commerce platforms that convert and scale.",
    },
    {
      image: "cloud.png",
      title: "SaaS Development",
      desc: "Scalable SaaS products built for performance, security, and growth.",
    },
    {
      image: "headphones.png",
      title: "Maintenance & Support",
      desc: "Ongoing support and maintenance to keep your product running smoothly.",
    },
  ];

  return (
    <section className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <p className="text-primary fw-bold small mb-2">OUR SERVICES</p>
          <h2 className="fw-bold">End-to-End Development Solutions</h2>
        </div>

        <div className="row g-4 mb-5">
          {services.map((service, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="bg px-3 py-4">
                <div className="row">
                  <div className="col-3 d-flex justify-content-center align-items-center">
                    <div className="imgbackground d-flex justify-content-center align-items-center mb-3">
                      <img src={`/images/${service.image}`} width="70%" />
                    </div>
                  </div>
                  <div className="col-9">
                    <h5 className="fw-bold mb-2">{service.title}</h5>
                    <p className="text-muted">{service.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="ourwork p-5 text-white ">
          <div className="row">
            <div className="col-md-4">
              <p className="fw-bold">Our Work</p>
              <h3 className="mb-3 fw-bold">
                We Build Solutions That Make a Difference
              </h3>
              <p>
                Explore our portfolio of web and mobile development apps that
                help businesses renovate and grow.
              </p>
              <button className="btn btn-light text-primary fw-semibold px-4 py-2 rounded-3 border-0">
                View Our Work
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
