import { Outlet } from 'react-router-dom';

import Header from './Header/Header';

const Layout = () => {
  return (
    <div>
      <Header />

      <main>
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
