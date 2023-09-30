import { Outlet } from 'react-router-dom';
import Header from '../component/header';
import NavbarSection from '../component/navbar';

const MainLayout = () => {
  return (
    <div>
      <Header />
      <NavbarSection />
      <Outlet />
    </div>
  );
};

export default MainLayout;
