import Nav from "../Nav";
import Footer from "../Footer";
import Project from "../Project";

export default function Gallery() {
  return (
    <div>
      <Nav />
      <div className="servicebg">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h1>Gallery</h1>
              <p>
                Explore some of the projects we've built for amazing clients
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row py-5">
          <Card img="https://krify.co/responsive-web-web-apps-native-apps-or-hybrid-apps-confused/" />
          <Card img="https://appiod.com/tag/webapp-review/" />
        </div>
        <Project />
      </div>
      <Footer />
    </div>
  );
}
function Card(props) {
  return (
    <div className="col-md-3">
      <div>
        <img
          src={`/images/${props.img}`}
          width="100%"
          height="300px"
          className="rounded"
        />
      </div>
    </div>
  );
}
