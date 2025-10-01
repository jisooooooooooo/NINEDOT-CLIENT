import * as styles from './Footer.css';

const Footer = () => {
  const link = import.meta.env.VITE_TOS_LINK;

  return (
    <footer className={styles.footerContainer}>
      <nav className={styles.linkWrapper}>
        <a href={link} target="_blank" rel="noopener noreferrer" className={styles.linkText}>
          이용약관
        </a>
        <a href={link} target="_blank" rel="noopener noreferrer" className={styles.linkText}>
          개인정보처리방침
        </a>
      </nav>
      <address className={styles.infoWrapper}>
        <p className={styles.infoText}>대표: 이현준</p>
        <p className={styles.infoText}>이메일: 999inedot@gmail.com</p>
      </address>
    </footer>
  );
};

export default Footer;
