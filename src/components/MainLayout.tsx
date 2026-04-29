import { Outlet } from "react-router-dom";
import SiteNav from "@/components/SiteNav";

const MainLayout = () => (
  <>
    <SiteNav />
    <Outlet />
  </>
);

export default MainLayout;
