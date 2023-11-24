import Link from "next/link";
import ActiveLink from "../ActiveLink";

const SideLink = (): React.ReactNode => {
  const sideLink = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/dashboard",
      title: "Dashboard",
    },
    {
      path: "/dashboard/add-product",
      title: "Add Product",
    },
    {
      path: "/dashboard/manage-products",
      title: "Manage Products",
    },
  ];

  return (
    <>
      {sideLink.map(({ path, title }) => (
        <li key={path} className="bg-slate-400 p-4 text-white">
          <ActiveLink href={path} isRoot activeClassName="text-slate-950">
            {title}
          </ActiveLink>
        </li>
      ))}
    </>
  );
};

export default SideLink;
