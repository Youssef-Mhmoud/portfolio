import "./Projects.scss";
import egfwdImg from "../assets/Egfwd.png";
import docsImg from "../assets/google-docs-clone.png";
import wagbaImg from "../assets/wagba.png";

const Projects = () => {
  return (
    <div className="projects__page">
      <h2 className="projects__title">Projects</h2>
      <div className="projects__boxes">
        <div className="project__box egfwd">
          <img src={egfwdImg} alt="web application" />
          <h4>E-COMMERCE</h4>
          <p>Web development</p>
          <a
            href="https://github.com/Ahmed-Ashraf-Marzouk/fwd-angular-graduation-project"
            target="_blank"
            rel="noreferrer"
          >
            Source Code
          </a>
        </div>
        <div className="project__box wagba">
          <img src={wagbaImg} alt="android application" />
          <h4>WAGBA MOBILE APP</h4>
          <p>Android</p>
          <a
            href="https://github.com/Ahmed-Ashraf-Marzouk/wagba-android"
            target="_blank"
            rel="noreferrer"
          >
            Source Code
          </a>
        </div>
        <div className="project__box doc">
          <img src={docsImg} alt="web application" />
          <h4>GOOGLE DOC CLONE</h4>
          <p>Web development</p>
          <a
            href="https://github.com/Ahmed-Ashraf-Marzouk/collaborative-text-editor"
            target="_blank"
            rel="noreferrer"
          >
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
