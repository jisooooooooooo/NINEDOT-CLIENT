import { Outlet } from 'react-router-dom';

import * as styles from './Layout.css';
import Header from './layoutHeader/Header';
import Footer from './layoutFooter/Footer';

const Layout = () => {
  return (
    <div className={styles.layoutContainer}>
      <Header />
      <main className={styles.layoutMain}>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
