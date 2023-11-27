import Footer from "@/components/Footer";
import Navbar from "@/components/navbar/Navbar";
import Search from "@/components/wikiSearch/Search";

const WithNavLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <Search />
      {children}
      <Footer />
    </>
  );
};

export default WithNavLayout;
