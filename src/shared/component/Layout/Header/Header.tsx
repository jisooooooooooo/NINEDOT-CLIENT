import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as styles from './Header.css';

import { PATH } from '@/route/path';

const MENUS = [
  { label: '나의 할 일', path: PATH.TODO },
  { label: '나의 만다르트', path: PATH.MANDAL },
  { label: '나의 히스토리', path: PATH.HISTORY },
];

const Header = () => {
  const [activeMenu, setActiveMenu] = useState<string>(MENUS[0].label);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    // 로그인 로직 추가하기
    setIsLoggedIn(true);
  };

  const handleMenuClick = (menuLabel: string, path: string) => {
    setActiveMenu(menuLabel);
    navigate(path);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <h1 className={styles.logo}>NINEDOT</h1>

        <nav className={styles.navWrapper}>
          {MENUS.map((menu) => (
            <button
              key={menu.label}
              className={`${styles.navItem} ${activeMenu === menu.label ? styles.navItemActive : ''}`}
              onClick={() => handleMenuClick(menu.label, menu.path)}
              aria-current={activeMenu === menu.label ? 'page' : undefined}
            >
              {menu.label}
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
