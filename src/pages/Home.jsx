import "./Home.scss";
import personalImg from "../assets/personal-image.png";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import { motion, useAnimation } from "framer-motion";
import Loader from "../components/Loader";
import Footer from "./Footer";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Home = () => {
  const [scrollUp, setScrollUp] = useState(false);
  const animation = useAnimation();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        setScrollUp(true);

        animation.start({
          x: 0,
          opacity: 1,
          transition: { duration: 0.5 },
        });
      }

      if (window.scrollY < 150) {
        setScrollUp(false);

        animation.start({
          x: "20vw",
          opacity: 0,
          transition: { duration: 0.5 },
        });
      }
    });
  }, [animation, setScrollUp]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <motion.div
        animate={scrollUp ? animation : { x: "20vw" }}
        className="scroll__to__top-btn"
        onClick={scrollToTop}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="home__page">
          <div className="info">
            <h2 className="name">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .changeDelay(50)
                    .typeString("Hello, I'm Ahmed")
                    .pauseFor(100)
                    .typeString(
                      "<br /> <h2 class='job__title'>Software Engineer</h2> <br />"
                    )
                    .pauseFor(100)
                    .typeString(
                      "<p class='second__title'><span>+</span> Entrepreneurial mindset</p>"
                    )

                    .start();
                }}
              />
            </h2>

            <div className="btns__box">
              <button className="btn btn__contact">
                <Link to="contact">Contact Me</Link>
              </button>
              <a href="/ahmed-ashraf-cv.pdf " download className="btn btn__cv">
                My Resume
              </a>
            </div>
          </div>
          <div className="img__container">
            <div className="img__box">
              <img src={personalImg} alt="Personal photo" className="img" />
            </div>
          </div>
        </div>
        <About padding="80px" />
        <Projects padding="80px" />
        <Contact padding="50px" />
        <Footer />
      </motion.div>
      <Loader />
    </>
  );
};

export default Home;
