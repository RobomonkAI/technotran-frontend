"use client";

import { Menu, MenuItem } from "@mui/material";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { FC, useState, useEffect } from "react";
import styles from "../styles/NavBar.module.css";
import { motion } from "framer-motion";
import Link from "next/link";

interface DropdownMenuProps {
  title: string;
  activeDropdown: string | null;
  menuItems: (string | { title: string; submenu: string[] })[];
  onDropdownOpen: (e: React.MouseEvent<HTMLElement>, menu: string) => void;
  anchorEl: null | HTMLElement;
  onDropdownClose: () => void;
  activeNavItem: string;
  handleNavItemClick: (item: string) => void;
}

const DropdownMenu: FC<DropdownMenuProps> = ({
  title,
  activeDropdown,
  menuItems,
  onDropdownOpen,
  anchorEl,
  onDropdownClose,
  handleNavItemClick,
  activeNavItem,
}) => {
  const [subMenuAnchorEl, setSubMenuAnchorEl] = useState<null | HTMLElement>(
    null
  );
  const [activeSubDropdown, setActiveSubDropdown] = useState<string | null>(
    null
  );

  useEffect(() => {
    if (!anchorEl) {
      handleSubDropdownClose(); // Close submenu when main menu closes
    }
  }, [anchorEl]);

  const handleSubDropdownOpen = (
    e: React.MouseEvent<HTMLElement>,
    subMenuTitle: string
  ) => {
    if (activeSubDropdown === subMenuTitle) {
      handleSubDropdownClose(); // Toggle submenu off
    } else {
      setSubMenuAnchorEl(e.currentTarget);
      setActiveSubDropdown(subMenuTitle);
    }
  };

  const handleSubDropdownClose = () => {
    setSubMenuAnchorEl(null);
    setActiveSubDropdown(null);
  };

  return (
    <motion.li initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
      <div
        aria-haspopup="true"
        aria-expanded={activeDropdown === title}
        onClick={(e) => onDropdownOpen(e, title)}
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <h2
          className={
            activeNavItem === title.toLowerCase().replace(/\s+/g, "-")
              ? styles.activeNavItem
              : ""
          }
        >
          {title}
        </h2>
        {activeDropdown === title ? (
          <KeyboardArrowUp className={styles.arrows} />
        ) : (
          <KeyboardArrowDown className={styles.arrows} />
        )}
      </div>
      {activeDropdown === title && (
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={onDropdownClose}
          style={{ zIndex: 10000 }}
        >
          {menuItems.map((item, index) => {
            if (typeof item === "string") {
              return (
                <MenuItem
                  key={index}
                  onClick={() => {
                    handleNavItemClick(item);
                    onDropdownClose();
                  }}
                  className={styles.dropDownContainer}
                >
                  <h2 className={styles.dropDownTxt}>{item}</h2>
                </MenuItem>
              );
            } else {
              return (
                <MenuItem
                  key={index}
                  onClick={
                    item.submenu.length > 0
                      ? (e) => handleSubDropdownOpen(e, item.title)
                      : () => {
                          handleNavItemClick(item.title);
                          onDropdownClose(); // Close menu if no submenu
                        }
                  }
                  className={styles.dropDownContainer}
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div
                    className={
                      activeNavItem === title.toLowerCase().replace(/\s+/g, "-")
                        ? styles.activeNavItem
                        : ""
                    }
                  >
                    <h2 className={styles.dropDownTxt}>{item.title}</h2>
                  </div>
                  {item.submenu.length > 0 && // Only show arrow if submenu exists
                    (activeSubDropdown === item.title ? (
                      <KeyboardArrowUp />
                    ) : (
                      <KeyboardArrowDown />
                    ))}
                  {activeSubDropdown === item.title &&
                    item.submenu.length > 0 && (
                      <Menu
                        anchorEl={subMenuAnchorEl}
                        open={Boolean(subMenuAnchorEl)}
                        onClose={handleSubDropdownClose}
                        style={{ zIndex: 11000 }}
                      >
                        {item.submenu.map((subItem, subIndex) => (
                          <MenuItem
                            key={subIndex}
                            onClick={() => {
                              handleNavItemClick(subItem);
                              handleSubDropdownClose();
                              onDropdownClose(); // Ensure the whole menu closes
                            }}
                            className={styles.dropDownContainer}
                          >
                            <Link className={styles.dropDownTxt} href={"/"}>
                              {subItem}
                            </Link>
                          </MenuItem>
                        ))}
                      </Menu>
                    )}
                </MenuItem>
              );
            }
          })}
        </Menu>
      )}
    </motion.li>
  );
};

export default DropdownMenu;
