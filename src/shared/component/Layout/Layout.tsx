import { Outlet } from 'react-router-dom';

import * as styles from './Layout.css';
import Header from './testheader/Header';
import Footer from './footer/Footer';

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
