import React, { useState } from 'react';
import Modal from 'react-modal';
import Facebook from './Logo/Facebook.svg';
import Insta from './Logo/Insta.svg';
import Twitter from './Logo/Twitter.svg';
import './index.css';

Modal.setAppElement('#root');

function Footer() {
  const currentYear = new Date().getFullYear();
  const [contactModalIsOpen, setContactModalIsOpen] = useState(false);
  const [cguModalIsOpen, setCguModalIsOpen] = useState(false);
  return (
    <footer className="footerContact">
      <div className="footerContent">
        <div className="listItemsFooter">
          <section className="contact">
            <button
              className="btnContact"
              type="button"
              onClick={() => setContactModalIsOpen(true)}
            >
              Contact
            </button>
            <Modal
              isOpen={contactModalIsOpen}
              onRequestClose={() => setContactModalIsOpen(false)}
              className="windowOpenContact"
            >
              <section className="modalHeader">
                <h2 className="titleContact">Contact</h2>
                <button
                  className="closeModal"
                  type="button"
                  onClick={() => setContactModalIsOpen(false)}
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
          <section className="cgu">
            <button
              className="btnCgu"
              type="button"
              onClick={() => setCguModalIsOpen(true)}
            >
              CGU
            </button>
          </section>
          <Modal
            isOpen={cguModalIsOpen}
            onRequestClose={() => setCguModalIsOpen(false)}
            className="windowOpenCgu"
          >
            <section className="modalHeader">
              <h2 className="titleContact">CGU</h2>
              <button
                className="closeModal"
                type="button"
                onClick={() => setCguModalIsOpen(false)}
              >
                X
              </button>
            </section>
            <section className="contentsCgu">
              <h2 className="titleArticle">Article 1: Object</h2>
              <p className="contentsArticle">
                1.1 The hereby Terms of Use have for object the access,
                consultation and use of the website published by the Wild Heroes
                company. These T.o.U. form a contract between the company and
                the user of the website and all of the services it offers.
              </p>
              <h2 className="titleArticle">
                Article 2: Agreement to the website’s Terms of Use
              </h2>
              <p className="contentsArticle">
                2.1 Entering, using or reading the website commits users to
                agree wholeheartedly to the hereby T.o.U.. Reading the website
                does not require to be registered beforehand.
              </p>
              <h2 className="titleArticle">Article 3: Use of services</h2>
              <p className="contentsArticle">
                3.1 Users are committed to respect all of the rules established
                in the website’s T.o.U.. Users are committed to not create,
                broadcast, or hold illegal content, slanderous or abusive
                language, whatever the means or recipient. 3.2 Users are
                committed to respect other users, their private lives and to not
                cause harm to any users’ rights. 3.3 Users are forbidden to
                cause harm to the website’s intellectual property rights in any
                way as well as its content or services. Users are committed to
                not reproduce, share or hand over the website’s content and
                assets to a third party business-oriented website. 3.4 Users are
                committed to not hinder, disturb, or more generally to not act
                in any way that would go against the T.o.U.. 3.5 Users are
                forbidden to broadcast their own content, solicit financial help
                from other users on the website or modify the website in a way
                that would harm other users. 3.6 Whenever users wish to share
                content through one of the website’s features such as the
                Commentary section, they are giving up any right to claim
                financial compensation for the post they have written, may it be
                for its creation, title, content or broadcasting. By using the
                website, users agree with our company as to what is « common
                interest » and « necessary free use » of the website. 3.7 Users
                acknowledge the public aspect of the chatting areas and thus are
                forbidden to share personal pieces of information in those
                sections of the website. 3.8 In accordance with law n° 2004-575
                from June 21st 2004, users are invited to report every piece of
                illegal or illicit content.
              </p>
              <h2 className="titleArticle">Article 4: Responsibility </h2>
              <p className="contentsArticle">
                4.1 The company will implement any necessary mean so that the
                website and its services are of the finest quality. However, the
                company would not be held responsible for any unavailability,
                breakdown, alteration or mistake that would arise from the use
                of its website or services with the exceptions mentioned in the
                T.o.U. and inherent to certains services. The company can not
                guarantee the continuity, accessibility or absolute security of
                its services especially considering the risks that come from the
                use of internet as a whole. Users expressly acknowledge using
                the website and its services at their own risks and perils. The
                company can not be held responsible for any sustained damage
                arising from the use of its website or services with the
                exception of those that would lead to a breach of its
                obligations. 4.2 The company can not be held responsible for any
                relation that may occur, through a contract or not, between
                users and partnered advertisers unless expressly stated by the
                aforementioned contract. 4.3 Users are committed to consent to
                measures regarding cases of force majeure. Force majeure is
                constituted by any event taking on the form of the external,
                compelling and unpredictable features covered by the case law of
                courts of Laws that would prevent one or the other party from
                carrying out the entirety or a part of its engagements mentioned
                in the T.o.U.. 4.4 The company reserves the right to alter,
                delete or neutralize the whole website or a part of its services
                at any time without explanation.
              </p>
              <h2 className="titleArticle">Article 5: Price </h2>
              <p className="contentsArticle">
                5.1 The access to the website is free of charge. All services
                that are not will be labeled as such. Those services are
                subjects to the Specific Conditions of Use that Users are
                committed to. By agreeing to those S.C.U., users notably agree
                to pay the displayed price of aforementioned paid services.
              </p>
              <h2 className="titleArticle">Article 6: Intellectual Property</h2>
              <p className="contentsArticle">
                6.1 The website, its content and services, as well as its
                softwares, drawings, designs, databases, trademarks and logos
                are subjects to Intellectual Property Laws. The ownership of
                aforementioned assets belongs to the company. The reference to
                these rights also features in the legal notices and users are
                committed to follow said rights. The company only grants users a
                non-exclusive and non-transferable right of the use of its
                website and services (the extent of a non-commercial use is
                characterized by the browsing, the participation and the
                decision to subscribe to various services) and thus reserves the
                management, broadcasting and handover rights as well as any
                other right regarding the components of its website and
                services. 6.2 The products and games available on the website
                are registered trademarks that belong to their respective
                owners. 6.3 Wild Heroes ® is a registered trademark of the
                company. Any unauthorized copy is strictly forbidden.
              </p>
              <h2 className="titleArticle">Article 7: Duration </h2>
              <p className="contentsArticle">
                7.1 The hereby contract is concluded between the company and the
                user as soon as agreed upon by the latter. In the event of
                refusal, users are committed to cease its use of the website and
                its services. The contract is concluded for the whole duration
                of the use of the website and its services. 7.2 The failure to
                respect any obligation featuring in the hereby T.o.U. will
                result in the immediate termination of the contract between the
                company and the user without prejudice to potential loss or gain
                for the company.
              </p>
              <h2 className="titleArticle">
                Article 8: Competent jurisdiction and practical exercise of the
                Law
              </h2>
              <p className="contentsArticle">
                8.1 The hereby T.o.U. are exclusively subjects to French Law.
                Any disputes that could not be resolved in an amicable manner
                will be subject to a competent court of Law.
              </p>
              <h2 className="titleArticle">Article 9: Additional terms</h2>
              <p className="contentsArticle">
                9.1 The hereby T.o.U. are concluded between the company and the
                user. The latter can not yield them. 9.2 If one or several
                stipulations of the hereby contract were to be invalidated by a
                law, a rule, or following the final decision of a competent
                jurisdiction, the remaining of the contract would retain its
                full force and scope. 9.3 Any notification concerning the hereby
                T.o.U. can be done by email by the company in the interests of
                the website. 9.4 The hereby T.o.U. are the only ones enforced
                for the website « WildHeroesWebsite » and are enforced
                throughout the whole website. Users can not alter them. 9.5 The
                company reserves the right to alter at any time the hereby
                T.o.U. Users are to keep themselves aware of its updating. It is
                dependent on the user to keep the hereby T.o.U. and S.C.U. to
                which he contracted to.
              </p>
            </section>
          </Modal>
        </div>
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
