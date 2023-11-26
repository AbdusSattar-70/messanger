import Footer from "@/components/Footer";
import Navbar from "@/components/navbar/Navbar";
import Search from "@/components/wikiSearch/Search";

const WithNavLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container mx-auto">
      <Navbar />
      <Search />
      {children}
      <Footer />
    </div>
  );
};

export default WithNavLayout;
