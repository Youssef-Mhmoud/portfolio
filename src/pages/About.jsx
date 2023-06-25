import "./About.scss";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Loader from "../components/Loader";

// eslint-disable-next-line react/prop-types
const About = ({ padding }) => {
  const { ref, inView } = useInView({
    threshold: 0.4,
  });

  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        opacity: 1,
      });
    } else {
      animation.start({
        x: "-100vw",
        opacity: 0,
        transition: { duration: 1 },
      });
    }
  }, [animation, inView]);

  return (
    <>
      <div
        className="about__page"
        ref={ref}
        style={{ paddingTop: padding, paddingBottom: padding }}
      >
        <h2 className={`about__title ${inView && "active__title"}`}>About</h2>
        <div className="about__info">
          <p className="brief">
            I am a computer engineering student at Ain Shams University majoring
            in data science <br /> and I have many skills such as:
          </p>

          <motion.div animate={animation} transition={{ duration: 1 }}>
            <div className="about__box web">
              <h2>Web development</h2>
              <p>
                Junior Angular developer certified from Egfwd intiative with
                creative mindset
              </p>
            </div>
          </motion.div>

          <motion.div
            animate={animation}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="about__box data">
              <h2>Data science</h2>
              <p>
                Finished Machine Learning Specializationon coursera and worked
                on +4 classical machine learning projects
              </p>
            </div>
          </motion.div>

          <motion.div
            animate={animation}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <div className="about__box enter">
              <h2>Entrepreneurship</h2>
              <p>
                InnovEgypt program graduate, IHub intern, and worked on +3
                startup ideas
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      <Loader />
    </>
  );
};

export default About;
