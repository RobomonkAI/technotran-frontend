import React, { useState } from "react";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";
import { Menu, MenuItem } from "@mui/material";
import Link from "next/link";

const Dropdown = ({
  title,
  items,
  subMenus,
}: {
  title: string;
  items: { label: string; href: string }[];
  subMenus?: {
    label: string;
    subItems: { label: string; href: string }[];
  }[];
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const toggleSubMenu = (menu: string) =>
    setActiveSubMenu(activeSubMenu === menu ? null : menu);

  return (
    <div style={{ position: "relative" }}>
      <div
        onClick={toggleDropdown}
        style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
      >
        <h2>{title}</h2>
        {isDropdownOpen ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
      </div>
      {isDropdownOpen && (
        <Menu
          open={isDropdownOpen}
          onClose={() => setIsDropdownOpen(false)}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
        >
          {items.map((item) => (
            <MenuItem key={item.label}>
              <Link href={item.href}>{item.label}</Link>
            </MenuItem>
          ))}
          {subMenus &&
            subMenus.map((subMenu) => (
              <div key={subMenu.label}>
                <MenuItem onClick={() => toggleSubMenu(subMenu.label)}>
                  {subMenu.label}
                  {activeSubMenu === subMenu.label ? (
                    <KeyboardArrowUp />
                  ) : (
                    <KeyboardArrowDown />
                  )}
                </MenuItem>
                {activeSubMenu === subMenu.label && (
                  <div style={{ paddingLeft: "1rem" }}>
                    {subMenu.subItems.map((subItem) => (
                      <MenuItem key={subItem.label}>
                        <Link href={subItem.href}>{subItem.label}</Link>
                      </MenuItem>
                    ))}
                  </div>
                )}
              </div>
            ))}
        </Menu>
      )}
    </div>
  );
};

export default Dropdown;
