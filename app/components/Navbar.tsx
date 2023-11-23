import Link from "next/link";
import { ReactNode } from "react";

const navLink = [
  {
    path: "/",
    title: "Home"
  },
  {
    path: "/profile",
    title: "Profile"
  },
  {
    path: "/about",
    title: "About"
  },
  {
    path: "/contact",
    title: "Contact"
  },
  {
    path: "/dashboard",
    title: "Dashboard"
  },
  {
    path: "/blogs",
    title: "Blogs"
  },
];

const Navbar = (): ReactNode => {
  return (
    <header>
      <h1>Next Blogs</h1>
      <nav>
    <ul>
      {
        navLink.map(({path,title})=>( <li key={path}>
            <Link href={path}> {title}</Link>
          </li>)
        )
      }
    </ul>
      </nav>
    </header>
  )
}

export default Navbar