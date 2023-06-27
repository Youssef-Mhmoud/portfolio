import "./Home.scss";
import personalImg from "../assets/personal-image.png";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Loader from "../components/Loader";
import Footer from "../components/layouts/Footer";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { motion } from "framer-motion";

const Home = () => {
  const [scrollUp, setScrollUp] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setScrollUp(true);
      } else {
        setScrollUp(false);
      }
    });
  }, [setScrollUp]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div
        className={`scroll__to__top-btn ${scrollUp && "show"}`}
        onClick={scrollToTop}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
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
                    "<br /> <h2 class='job__title'>Data Scientist</h2> <br />"
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
      <Projects padding="80px" />
      <About padding="80px" />
      <Contact padding="50px" />
      <Footer />

      <Loader />
    </>
  );
};

export default Home;
