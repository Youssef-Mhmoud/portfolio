import "./Projects.scss";
import egfwdImg from "../assets/Egfwd.png";
import docsImg from "../assets/google-docs-clone.png";
import wagbaImg from "../assets/wagba.png";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
const Projects = ({ padding }) => {
  const { ref, inView } = useInView({
    threshold: 0.4,
  });

  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        opacity: 1,
      });
    } else {
      animation.start({
        y: "30vh",
        opacity: 0,
        transition: { duration: 0.5 },
      });
    }
  }, [animation, inView]);

  return (
    <div
      className="projects__page"
      ref={ref}
      style={{ paddingTop: padding, paddingBottom: padding }}
    >
      <h2 className={`projects__title ${inView && "active__title"}`}>
        Projects
      </h2>
      <div className="projects__boxes">
        <motion.div animate={animation} transition={{ duration: 1 }}>
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
        </motion.div>
        <motion.div
          animate={animation}
          transition={{ duration: 1, delay: 0.4 }}
        >
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
        </motion.div>
        <motion.div
          animate={animation}
          transition={{ duration: 1, delay: 0.8 }}
        >
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
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
