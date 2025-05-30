import { ReactElement } from "react";
import "./style.scss";

export const Footer = (): ReactElement => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__section">
          <h3 className="footer__title">About</h3>
          <p className="footer__text">Simple blog app</p>
        </div>
        <div className="footer__section">
          <h3 className="footer__title">Contacts</h3>
          <a href="mailto:info@example.com" className="footer__link">info@simpleblogapp.com</a>
          <a href="tel:+1234567890" className="footer__link">+1 (234) 567-890</a>
        </div>
      </div>
      
      <div className="footer__bottom">
        <p className="footer__copyright">© {new Date().getFullYear()} All right reserved</p>
      </div>
    </footer>
  );
};