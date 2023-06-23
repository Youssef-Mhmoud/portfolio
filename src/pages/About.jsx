import "./About.scss";

const About = () => {
  return (
    <div className="about__page">
      <h2 className="about__title">About</h2>
      <div className="about__info">
        <p className="brief">
          I am a computer engineering student at Ain Shams University majoring
          in data science <br /> and I have many skills such as:
        </p>
        <div className="about__box web">
          <h2>Web development</h2>
          <p>
            Junior Angular developer certified from Egfwd intiative with
            creative mindset
          </p>
        </div>
        <div className="about__box data">
          <h2>Data science</h2>
          <p>
            Finished Machine Learning Specializationon coursera and worked on +4
            classical machine learning projects
          </p>
        </div>
        <div className="about__box enter">
          <h2>Entrepreneurship</h2>
          <p>
            InnovEgypt program graduate, IHub intern, and worked on +3 startup
            ideas
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
