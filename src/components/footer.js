import * as React from "react";
import { Link } from "gatsby";
import * as styles from "./footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../utils/font-awesome";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.footerCol}>
            <h4>Company</h4>
            <ul>
              <li>
                <Link to="/footer-pages/about">About Us</Link>
              </li>
              <li>
                <Link to="/footer-pages/contact">Contact Information</Link>
              </li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h4>Online Shop</h4>
            <ul>
              <li>
                <Link to="/footer-pages/store">Store</Link>
              </li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h4>Get Help</h4>
            <ul>
              <li>
                <Link to="/footer-pages/privacy-policy">Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h4>Social Media</h4>
            <div className={styles.socialLinks}>
              <Link to="https://www.youtube.com/channel/UCllUWKkOi3OvNPCdEj7UMOg">
                <FontAwesomeIcon icon={"fa-brands fa-youtube"} />
              </Link>
              <Link to="https://www.youtube.com/channel/UCllUWKkOi3OvNPCdEj7UMOg">
                <FontAwesomeIcon icon={"fa-brands fa-twitter"} />
              </Link>
              <Link to="https://www.youtube.com/channel/UCllUWKkOi3OvNPCdEj7UMOg">
                <FontAwesomeIcon icon={"fa-brands fa-facebook"} />
              </Link>
              <Link to="https://www.youtube.com/channel/UCllUWKkOi3OvNPCdEj7UMOg">
                <FontAwesomeIcon icon={"fa-brands fa-instagram"} />
              </Link>
              <Link to="https://www.youtube.com/channel/UCllUWKkOi3OvNPCdEj7UMOg">
                <FontAwesomeIcon icon={"fa-brands fa-linkedin"} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
