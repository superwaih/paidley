import { useDashboardProvider } from "@/context/DashboardProvider";
import { MenuIcon } from "@/public/svgs/MenuIcon";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import MobileSidebar from "./mobile-componets/MobileSidebar";

const SimpleNav = ({ title, user }) => {
  const { showMenu, setShowMenu } = useDashboardProvider();
  //  const [showMenu, setShowMenu] = useState(false)
  return (
    <div className="relative">
      <div className="md:px-9 px-6">

     
      </div>

    {showMenu && <MobileSidebar />}
    </div>
  );
};

export default SimpleNav;
