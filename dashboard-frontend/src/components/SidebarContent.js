"use client";
import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import { lowerList, upperList } from "@/data/SidebarItems";
import { useDispatch } from "react-redux";
import { toggleDrawer } from "@/reduxController/drawerSlice";
import Link from "next/link";

const SidebarContent = () => {
  const dispatch = useDispatch();
  return (
    <Box
      sx={{
        width: 250,
        height: "calc(100vh - 64px)",
        borderRight: "1px solid #EFEFEF",
      }}
    >
      <div className="flex justify-between p-2 text-2xl lg:hidden">
        <div></div>
        <div
          className="bg-[#F5F5F5] border border-[#e2e2e2] cursor-pointer px-4"
          onClick={() => dispatch(toggleDrawer(false))}
        >
          X
        </div>
      </div>
      <List>
        {upperList.map((item) => (
          <ListItem key={item.text} disablePadding>
            <Link href={item.href} className="w-full">
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {lowerList.map((item) => (
          <ListItem key={item.text} disablePadding>
            <Link href={item.href} className="w-full">
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default SidebarContent;
