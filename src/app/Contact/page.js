import Nav from "../Nav";
import Footer from "../Footer";
import Project from "../Project";

export default function Contact() {
  return (
    <div>
      <Nav />
      <div className="servicebg">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h1>Contact Us</h1>
              <p>
                We'd love to hear from you. Let's discuss how we can help your
                business grow.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row g-5 py-5">
          <div className="col-lg-5">
            <div className="sh py-3 px-4 h-100 d-flex flex-column">
              <h3 className="mb-4">Get In Touch</h3>
              <div className="d-flex flex-column justify-content-between h-100">
                <GetinTouch
                  icon="bi-geo-alt"
                  title="Address"
                  text="Gothatar, Kathmandu, Nepal"
                />

                <GetinTouch
                  icon="bi-envelope"
                  title="Email"
                  text="innova@gmail.com"
                />

                <GetinTouch
                  icon="bi-telephone"
                  title="Phone"
                  text="+977 9741717225"
                />

                <GetinTouch
                  icon="bi-clock"
                  title="Working Hours"
                  text="Mon - Fri: 9:00 AM - 5:00 PM"
                />
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="sh p-3">
              <h3 className="mb-4">Send Us a Message</h3>

              <div className="row g-3">
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control p-3"
                    placeholder="Your Name"
                  />
                </div>

                <div className="col-md-6">
                  <input
                    type="email"
                    className="form-control p-3"
                    placeholder="Your Email"
                  />
                </div>

                <div className="col-12">
                  <input
                    type="text"
                    className="form-control p-3"
                    placeholder="Subject"
                  />
                </div>

                <div className="col-12">
                  <textarea
                    className="form-control p-3"
                    rows="6"
                    placeholder="Your Message"
                  ></textarea>
                </div>

                <div className="col-12">
                  <button className="btn btn-primary px-5 py-3">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section>
          <h3 className="mb-4">Our Location</h3>

          <div className="ratio ratio-21x9 rounded-3 overflow-hidden mb-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d799.1231365076642!2d85.37119139515069!3d27.709898546381368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1b75824606bf%3A0x7928f4f43a320908!2z4KSa4KS_4KSq4KWN4KSy4KWH4KSX4KWM4KSh4KS-IOCkmuCli-CklQ!5e1!3m2!1sen!2snp!4v1786541358971!5m2!1sen!2snp"
              width="600"
              height="450"
            ></iframe>
          </div>
        </section>
        <Project />
      </div>
      <Footer />
    </div>
  );
}
function GetinTouch(props) {
  return (
    <div className="row py-4">
      <div className="col-2">
        <i className={`${props.icon} fs-3 text-primary`}></i>
      </div>
      <div className="col-10">
        <h6>{props.title}</h6>
        <p className="text-muted mb-0">{props.text}</p>
      </div>
    </div>
  );
}
