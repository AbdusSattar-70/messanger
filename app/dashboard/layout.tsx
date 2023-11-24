import type { Metadata } from "next";
import SideBar from "../components/sideBar/SideBar";

export const metadata: Metadata = {
  title: "Dashboard | Next Blogs",
  description: "Blog App for Learning Next.js",
};

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-4">
      <div className="flex gap-4">
        <SideBar />
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
