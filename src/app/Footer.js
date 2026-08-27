import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="container">
        <div className="row my-5">
          <Icons image="react" name="React" />
          <Icons image="nextdotjs" name="Next.js" />
          <Icons image="flutter" name="Flutter" />
          <Icons image="nodedotjs" name="Node.js" />
          <Icons image="mongodb" name="MongoDB" />
          <Icons image="python" name="Python" />
        </div>

        <div className="row g-4 pb-4">
          <div className="col-md-3">
            <div className="mb-3">
              <img src="/images/innova.png" width="60%" className="me-2" />
            </div>

            <p className="text-muted">
              We build apps and web applications that power your business.
            </p>

            <div className="d-flex gap-2 mt-3">
              <a href="#" className="social-icon">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="bi bi-twitter-x"></i>
              </a>
            </div>
          </div>

          <div className="col-md-2 offset-md-1">
            <h6 className="fw-bold mb-3">Company</h6>
            <ul className="list-unstyled footer-links">
              <li>
                <Link href="/AboutUs">About Us</Link>
              </li>
              <li>
                <a href="#">Our Team</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">News & Updates</a>
              </li>
            </ul>
          </div>

          <div className="col-md-2">
            <h6 className="fw-bold mb-3">Services</h6>
            <ul className="list-unstyled footer-links">
              <li>
                <Link href="/Services">Web Development</Link>
              </li>
              <li>
                <Link href="/Services">Mobile Development</Link>
              </li>
              <li>
                <Link href="/Services">UI/UX Design</Link>
              </li>
              <li>
                <Link href="/Services">API Development</Link>
              </li>
            </ul>
          </div>

          <div className="col-md-2">
            <h6 className="fw-bold mb-3">Resources</h6>
            <ul className="list-unstyled footer-links">
              <li>
                <a href="#">Case Studies</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Documentation</a>
              </li>
            </ul>
          </div>

          <div className="col-md-2">
            <h6 className="fw-bold mb-3">Contact Us</h6>
            <ul className="list-unstyled text-muted">
              <li className="mb-2">123 Business Street</li>
              <li className="mb-2">New York, NY 10001</li>
              <li className="mb-2">info@innova.com</li>
              <li>+1 (212) 555-0123</li>
            </ul>
          </div>
        </div>

        <hr />

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center py-3">
          <p className="text-muted mb-2 mb-md-0">
            © 2025 Innova. All rights reserved.
          </p>

          <div className="d-flex gap-3">
            <a href="#" className="text-muted text-decoration-none">
              Privacy Policy
            </a>
            <a href="#" className="text-muted text-decoration-none">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Icons(props) {
  return (
    <div className="col-md-2 col-sm-4">
      <div className="d-flex align-items-center gap-1">
        <img
          src={`https://cdn.simpleicons.org/${props.image}/807E7F`}
          width="20"
          alt={props.name}
        />
        <h4 className="mb-0">{props.name}</h4>
      </div>
    </div>
  );
}
