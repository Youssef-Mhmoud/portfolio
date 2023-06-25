import "./Home.scss";
import personalImg from "../assets/personal-image.png";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import { motion } from "framer-motion";
import Loader from "../components/Loader";

const Home = () => {
  return (
    <>
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
      </motion.div>
      <Loader />
    </>
  );
};

export default Home;
