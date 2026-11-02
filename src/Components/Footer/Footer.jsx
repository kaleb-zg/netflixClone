import { SiNetlify } from "react-icons/si";
// import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

// Import social media icons
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  // Social media icons
  const socialIcons = [
    { icon: <FaFacebookF />, link: "https://www.facebook.com/" },
    { icon: <FaInstagram />, link: "https://www.instagram.com/" },
    { icon: <FaTwitter />, link: "https://twitter.com/" },
    { icon: <FaYoutube />, link: "https://www.youtube.com/" },
  ];

  // Footer links arranged in four columns
  const footerLinks = [
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
        {/* Social media icons */}
        <div className={styles.socialIcons}>
          {socialIcons.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Social media ${index + 1}`}
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Footer links in four columns */}
        <div className={styles.footerLinks}>
          {footerLinks.map((column, index) => (
            <ul key={index}>
              {column.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          ))}
        </div>
        <div className={styles.footerNetlify}>
          <button onClick={handleClick}>
            <a href="https://www.netlify.com" className={styles.netlifyBadge}>
              <SiNetlify className={styles.netlifyIcon} />
              <span>
                Powered by <strong>Netlify</strong>
              </span>
            </a>
          </button>
        </div>
        {/* Copyright information */}
        <p className={styles.copyright}>© 1997-2026 Netflix, Inc.</p>
      </div>
    </footer>
  );
}

export default Footer;

