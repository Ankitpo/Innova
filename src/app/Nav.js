import Link from "next/link";

export default function Navbar() {
  return (
    <div className="headerwrap bg-white">
      <header className="fixed-top">
        <nav className="navbar navbar-expand-lg bg-white py-3">
          <div className="container">
            <Link href="/">
              <img
                src="/images/innova.png"
                width="100%"
                height="40"
                alt="Innova Logo"
              />
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <Link href="/" className="nav-link fw-bold">
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link href="/Services" className="nav-link fw-bold">
                    Services
                  </Link>
                </li>

                <li className="nav-item">
                  <Link href="/AboutUs" className="nav-link fw-bold">
                    About
                  </Link>
                </li>

                <li className="nav-item">
                  <Link href="/Gallery" className="nav-link fw-bold">
                    Gallery
                  </Link>
                </li>

                <li className="nav-item">
                  <Link href="/Contact" className="nav-link fw-bold">
                    Contact
                  </Link>
                </li>
              </ul>

              <Link href="/contact" className="btn btn-primary px-4 rounded-3">
                Get In Touch
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
