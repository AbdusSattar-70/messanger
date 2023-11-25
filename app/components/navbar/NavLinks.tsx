import ActiveLink from "@/components/ActiveLink";

const NavLink = (): React.ReactNode => {
  const navLink = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/profile",
      title: "Profile",
    },
    {
      path: "/about",
      title: "About",
    },
    {
      path: "/contact",
      title: "Contact",
    },
    {
      path: "/dashboard",
      title: "Dashboard",
    },
    {
      path: "/blogs",
      title: "Blogs",
    },
  ];

  return (
    <>
      {navLink.map(({ path, title }) => (
        <li key={path} className="mx-3">
          <ActiveLink
            isRoot={path === "/"}
            href={path}
            activeClassName="text-red-500 font-bold"
          >
            {title}
          </ActiveLink>
        </li>
      ))}
    </>
  );
};

export default NavLink;
