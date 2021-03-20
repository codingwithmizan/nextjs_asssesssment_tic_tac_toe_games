import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className=" text-gray-500 md:px-24 pt-12">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
