import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Layout = () => {
  const location = useLocation();

  // Add the paths where you want to hide the footer
  const hideFooterPaths = ["/quiz"];

  const shouldShowFooter = !hideFooterPaths.includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen bg-[#f1f1f1]">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      {shouldShowFooter && <Footer />}
    </div>
  );
};

export default Layout;
