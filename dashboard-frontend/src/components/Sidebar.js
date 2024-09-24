import React from "react";

import SidebarContent from "./SidebarContent";
export default function Sidebar() {
  return (
    <div className="hidden lg:block mt-16 fixed">
      <SidebarContent />
    </div>
  );
}
