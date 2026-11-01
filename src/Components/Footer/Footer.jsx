import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

import styles from "./Footer.module.css";

function Footer() {
  const footerColumns = [
    ["Audio Description", "Investor Relations", "Legal Notices"],
    ["Help Centre", "Jobs", "Cookie Preferences"],
    ["Gift Cards", "Terms of Use", "Corporate Information"],
    ["Media Centre", "Privacy", "Contact Us"],
  ];
  
  const handleClick = () => {
   alert("Welcome to Netflix");
  };
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Social Media Icons */}
        <div className={styles.socialIcons}>
          <a href="#facebook" aria-label="Facebook">
            <FaFacebookF />
          </a>

          <a href="#instagram" aria-label="Instagram">
            <FaInstagram />
          </a>

          <a href="#twitter" aria-label="Twitter">
            <FaTwitter />
          </a>

          <a href="#youtube" aria-label="YouTube">
            <FaYoutube />
          </a>
        </div>

        {/* Footer Links */}
        <div className={styles.linksContainer}>
          {footerColumns.map((column, index) => (
            <div className={styles.column} key={index}>
              {column.map((link) => (
                <a
                  href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                  key={link}
                >
                  {link}
                </a>
              ))}
            </div>
          ))}
          <div className={styles.endLink}>
            <div>
              <button className={styles.power} onClick={handleClick}>
                Powered by Netflify
              </button>
              <div>
                <h2>hello</h2>
              </div>
            </div>
            <div></div>
          </div>
        </div>

        {/* Copyright */}
        <p className={styles.copyright}>© 1997–2026 Netflix, Inc.</p>
      </div>
    </footer>
  );
}

export default Footer;
