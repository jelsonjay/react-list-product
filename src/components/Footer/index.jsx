import styles from "./footer.module.css";
import { FaInstagram, FaLinkedin, FaTwitter, FaCodepen } from "react-icons/fa";

const Footer = () => {
  return (
    <section className={styles.footer}>
      <p className={styles.footerText}>Design by Jelson J &copy; 2023</p>
      <div className={styles.sociaIcons}>
        <FaInstagram />
        <FaLinkedin />
        <FaTwitter />
        <FaCodepen />
      </div>
    </section>
  );
};

export default Footer;