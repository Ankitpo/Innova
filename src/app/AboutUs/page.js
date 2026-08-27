import Nav from "../Nav";
import Footer from "../Footer";
import Project from "../Project";

export default function AboutUs() {
  return (
    <main>
      <Nav />
      <div className="background py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h1>About Us</h1>
              <p>
                We're a team of passionate innovators building digital solutions
                that drive business growth.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <section className="py-5">
          <div className="row">
            <div className="col-md-6">
              <h2>Our Story</h2>
              <p>
                Innova was founded with a simple mission — to help businesses
                unlock their full potential through technology.
                <br /> <br />
                From startups to enterprises, we partner with our clients to
                build scalable, secure, and user-friendly digital products that
                make a difference.
              </p>
            </div>
            <div className="col-md-6">
              <div className="row g-4">
                <Story amount="250+" titl="Happy Clients" />
                <Story amount="350+" titl=" Project Completed" />
                <Story amount="15+" titl="Years Experience" />
                <Story amount="120+" titl="Expert Team" />
              </div>
            </div>
          </div>
        </section>

        <section className="pb-5">
          <h2 className="mb-4">Our Values</h2>

          <div className="row g-4">
            <Values
              icon="bi-lightbulb"
              title="Innovation"
              description="We embrace new ideas and technologies to deliver creative solutions."
            />
            <Values
              icon="bi-patch-check"
              title="Quality"
              description="We are committed to delivering products that exceed expectations."
            />
            <Values
              icon="bi-shield-check"
              title="Integrity"
              description="We build trust through transparency, honesty, and accountability."
            />
            <Values
              icon="bi-people"
              title="Collaboration"
              description="We believe in the power of teamwork and strong partnerships."
            />
          </div>
        </section>

        <section className="pb-5">
          <h2>Meet Our Team</h2>
          <p className="text-muted mb-3">
            A passionate team of designers, developers and problem solvers
          </p>
          <div className="row g-4">
            <Team
              image="SSSolo.jpg"
              name="Ankit Pokhrel"
              role="CEO & founder"
            />
            <Team
              image="SSSolo.jpg"
              name="Ankit Pokhrel"
              role="Lead Designer"
            />
            <Team
              image="SSSolo.jpg"
              name="Ankit Pokhrel"
              role="Lead Developer"
            />
            <Team
              image="SSSolo.jpg"
              name="Ankit Pokhrel"
              role="Project Manager"
            />
          </div>
        </section>
        <Project />
      </div>
      <Footer />
    </main>
  );
}

function Story(props) {
  return (
    <div className="col-md-4">
      <div className="bg p-4">
        <h3>{props.amount}</h3>
        <p className="text-muted small">{props.titl}</p>
      </div>
    </div>
  );
}
function Values(props) {
  return (
    <div className="col-md-3">
      <div className="bg p-4">
        <div className="imgbackground d-flex align-items-center justify-content-center mb-3">
          <i className={`${props.icon} fs-2 text-primary`}></i>
        </div>
        <h5>{props.title}</h5>
        <p className="text-muted small">{props.description}</p>
      </div>
    </div>
  );
}
function Team(props) {
  return (
    <div className="col-md-3">
      <div className="bg ">
        <div className="p-1">
          <img
            src={`/images/${props.image}`}
            width="100%"
            height="250px"
            className="rounded"
          />
        </div>
        <div className="p-3">
          <h5>{props.name}</h5>
          <p>{props.role}</p>
        </div>
      </div>
    </div>
  );
}
