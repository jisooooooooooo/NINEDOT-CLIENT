import { useState } from 'react';

import * as styles from './Header.css';

const MENUS = ['나의 할 일', '나의 만다르트', '나의 히스토리'];

const Header = () => {
  const [activeMenu, setActiveMenu] = useState<string>(MENUS[0]);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const handleLogin = () => {
    // 로그인 로직 추가하기
    setIsLoggedIn(true);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <h1 className={styles.logo}>NINEDOT</h1>

        <nav className={styles.navWrapper}>
          {MENUS.map((menu) => (
            <button
              key={menu}
              className={`${styles.navItem} ${activeMenu === menu ? styles.navItemActive : ''}`}
              onClick={() => setActiveMenu(menu)}
              aria-current={activeMenu === menu ? 'page' : undefined}
            >
              {menu}
            </button>
          ))}
        </nav>

        {isLoggedIn ? (
          <div className={styles.profilePlaceholder} />
        ) : (
          <button className={styles.loginButton} onClick={handleLogin}>
            로그인
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
