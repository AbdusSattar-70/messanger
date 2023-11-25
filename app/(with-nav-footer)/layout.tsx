import Footer from "../components/Footer";
import Navbar from "../components/navbar/Navbar";

const WithNavLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container mx-auto">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default WithNavLayout;
