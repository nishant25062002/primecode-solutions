import { Outlet } from 'react-router-dom';
import Header from '../components/global/Header';
import Footer from '../components/Footer';

const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;