"use client";
import React from "react";
import Drawer from "@mui/material/Drawer";
import { useDispatch, useSelector } from "react-redux";
import { toggleDrawer } from "@/reduxController/drawerSlice";
import SidebarContent from "./SidebarContent";

export default function MobileDrawer() {
  const open = useSelector((store) => store.drawer.open);
  const dispatch = useDispatch();

  return (
    <Drawer open={open} onClose={() => dispatch(toggleDrawer(false))}>
      <SidebarContent />
    </Drawer>
  );
}
