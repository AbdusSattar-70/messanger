import SideLink from "./SideLink";

const SideBar = (): React.ReactNode => {
  return (
    <aside className=" flex min-h-[98vh] gap-4">
      <div className="flex flex-col gap-4 ">
        <h1 className="pt-4 text-3xl font-bold text-purple-950">Dashboard</h1>
        <ul className="flex flex-col gap-4">
          <SideLink />
        </ul>
      </div>
      <hr className="min-h-screen w-[1px] bg-slate-500" />
    </aside>
  );
};

export default SideBar;
