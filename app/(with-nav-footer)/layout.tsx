import Footer from "../components/Footer";
import Navbar from "../components/navbar/Navbar";

const WithNavLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default WithNavLayout;
