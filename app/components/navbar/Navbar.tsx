import Link from "next/link";
import NavLinks from "./NavLinks";

const Navbar = (): React.ReactNode => {
  return (
    <header>
      <nav className="flex flex-col items-center justify-between sm:flex-row">
        <h1 className="text-3xl font-bold text-purple-950">
          <Link href={"/"}>Next Blogs</Link>
        </h1>
        <ul className="flex flex-col items-center justify-between sm:flex-row">
          <NavLinks />
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
