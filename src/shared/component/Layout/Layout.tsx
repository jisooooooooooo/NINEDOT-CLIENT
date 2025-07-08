import { Outlet } from 'react-router-dom';

import Header from './Header/Header';
import * as styles from './Layout.css';

const Layout = () => {
  return (
    <div className={styles.layoutContainer}>
      <Header />
      <main className={styles.layoutMain}>
        <Outlet />
      </main>

      {/* TODO: Footer 컴포넌트 추가 */}
      <footer>
        {/* 임시 푸터 */}
        <p>© 2024 NINEDOT</p>
      </footer>
    </div>
  );
};

export default Layout;
