import React, { useState } from 'react';
import Modal from 'react-modal';
import Facebook from './Logo/Facebook.svg';
import Insta from './Logo/Insta.svg';
import Twitter from './Logo/Twitter.svg';
import './index.css';

Modal.setAppElement('#root');

function Footer() {
  const currentYear = new Date().getFullYear();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <footer className="footerContact">
      <div className="footerContent">
        <section className="contact">
          <button
            className="btnContact"
            type="button"
            onClick={() => setModalIsOpen(true)}
          >
            Contact
          </button>
          <section>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={() => setModalIsOpen(false)}
              className="windowOpenContact"
            >
              <section className="modalHeader">
                <h2 className="titleContact">Contact</h2>
                <button
                  className="closeModal"
                  type="button"
                  onClick={() => setModalIsOpen(false)}
                >
                  X
                </button>
              </section>
              <form className="form">
                <label className="firstName" htmlFor="firstName">
                  <h3>Firstname</h3>
                  <input type="text" />
                </label>
                <label className="lastName" htmlFor="lastName">
                  <h3>Lastname</h3>
                  <input type="text" />
                </label>
                <label className="email" htmlFor="email">
                  <h3>Email</h3>
                  <input type="text" />
                </label>
                <div className="message">
                  <h3>Your message</h3>
                  <textarea placeholder="Description" />
                </div>

                <input className="submitContact" type="submit" value="Submit" />
              </form>
            </Modal>
          </section>
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
