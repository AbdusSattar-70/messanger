import ActiveLink from "@/components/ActiveLink";
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
        <li
          key={path}
          className="mt-4 inline-block space-y-2 border bg-purple-600 px-3 py-2 font-semibold text-white"
        >
          <ActiveLink href={path} isRoot activeClassName="text-slate-950">
            {title}
          </ActiveLink>
        </li>
      ))}
    </>
  );
};

export default SideLink;
