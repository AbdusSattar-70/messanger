import Link from "next/link";
import NavLinks from "./NavLinks";

const Navbar = (): React.ReactNode => {
  return (
    <header>
      <nav className="container mx-auto flex items-center justify-between">
        <h1 className="text-3xl font-bold text-purple-950">
          <Link href={"/"}>Next Blogs</Link>
        </h1>
        <ul className="flex items-center justify-between">
          <NavLinks />
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
