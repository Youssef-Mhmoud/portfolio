import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Contact.scss";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faLinkedinIn,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <div className="contact__page">
      <h2 className="contact__title">Contact Me</h2>
      <div className="social">
        <div className="social__box">
          <div>
            <FontAwesomeIcon icon={faEnvelope} />
            <p>Email</p>
          </div>
          <a href="mailto:a.a.elghawas@gmail.com"> a.a.elghawas@gmail.com</a>
        </div>
        <div className="social__box">
          <div>
            <FontAwesomeIcon icon={faWhatsapp} />
            <p>WhatsApp</p>
          </div>
          <a href="tel:01017949739">01017949739</a>
        </div>
        <div className="social__box">
          <div>
            <FontAwesomeIcon icon={faLinkedinIn} />
            <p>LinkedIn</p>
          </div>
          <a href="https://www.linkedin.com/in/ahmed-ashraf-marzouk/">
            Ahmed Ashraf
          </a>
        </div>
        <div className="social__box">
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <p>Github</p>
          </div>
          <a href="https://github.com/Ahmed-Ashraf-Marzouk">
            Ahmed Ashraf Marzouk
          </a>
        </div>
        <div className="social__box">
          <div>
            <FontAwesomeIcon icon={faFacebook} />
            <p>Facebook</p>
          </div>
          <a href="https://www.facebook.com/ahmed.ashraf.elghawas">
            Ahmed Ashraf{" "}
          </a>
        </div>
        <div className="social__box">
          <div>
            <FontAwesomeIcon icon={faYoutube} />
            <p>Youtube</p>
          </div>
          <a href="https://www.youtube.com/@a.a.elghawas">Ahmed Ashraf </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
