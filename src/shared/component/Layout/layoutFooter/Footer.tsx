import { Link } from 'react-router-dom';

import * as styles from './Footer.css';

import { PATH } from '@/route';

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <nav className={styles.linkWrapper}>
        <Link to={PATH.TERMS} className={styles.linkText}>
          이용약관
        </Link>
        <Link to={PATH.PRIVACY} className={styles.linkText}>
          개인정보처리방침
        </Link>
      </nav>
      <address className={styles.infoWrapper}>
        <p className={styles.infoText}>대표: 이현준</p>
        <p className={styles.infoText}>이메일: 999inedot@gmail.com</p>
      </address>
    </footer>
  );
};

export default Footer;
