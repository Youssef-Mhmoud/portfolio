import "./Home.scss";
import personalImg from "../assets/personal-image.png";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
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
        {/* <h2 className="job__title">Software Engineer</h2> */}
        {/* <p className="second__title">
          <span>+</span> Entrepreneurial mindset
        </p> */}
        <div className="btns__box">
          <button className="btn btn__contact">Contact Me</button>
          <button className="btn btn__cv">Upload Resume</button>
        </div>
      </div>
      <div className="img__container">
        <div className="img__box">
          <img src={personalImg} alt="Personal photo" className="img" />
        </div>
      </div>
    </div>
  );
};

export default Home;
