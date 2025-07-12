import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import * as styles from './Header.css';

import { PATH } from '@/route/path';
import IcLogo from '@/assets/svg/IcLogo';

const MENUS = [
  { label: '나의 할 일', path: PATH.TODO },
  { label: '나의 만다르트', path: PATH.MANDAL },
  { label: '나의 히스토리', path: PATH.HISTORY },
];

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const findActiveMenu = MENUS.find((menu) => location.pathname.startsWith(menu.path));
  const initialMenu = findActiveMenu ? findActiveMenu.label : '';

  const [activeMenu, setActiveMenu] = useState<string>(initialMenu);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleMenuClick = (menuLabel: string, path: string) => {
    setActiveMenu(menuLabel);
    navigate(path);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <h1 className={styles.logo}>
          <IcLogo className={styles.logoImage} />
        </h1>

        {isLoggedIn ? (
          <>
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
            <div className={styles.profilePlaceholder} />
          </>
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
