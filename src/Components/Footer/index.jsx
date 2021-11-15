import Facebook from './Logo/Facebook.svg';
import Insta from './Logo/Insta.svg';
import Twitter from './Logo/Twitter.svg';
import './index.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footerContact">
      <div className="footerContent">
        <section className="contactUs">
          <h3 className="contact">Contact</h3>
          <h3 className="cgu">CGU</h3>
          <h3 className="aboutUs">About Us</h3>
        </section>
        <section className="followUs">
          <h3 className="titleFollow">Follow Us</h3>
          <div className="logo">
            <img src={Facebook} alt="Logo Facebook" />
            <img src={Insta} alt="Logo Instagram" />
            <img src={Twitter} alt="Logo Twitter" />
          </div>
        </section>
      </div>
      <h3 className="copyright">
        Copyright <span className="copyrightYear"> {currentYear} </span>
      </h3>
    </footer>
  );
}

export default Footer;
