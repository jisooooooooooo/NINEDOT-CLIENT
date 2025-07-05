import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      {/* TODO: Header 컴포넌트 추가 */}
      <header>
        {/* 임시 헤더 */}
        <h1>NINEDOT</h1>
      </header>

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
