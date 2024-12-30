import React, { MouseEvent, FC } from "react";
import { Menu, MenuItem } from "@mui/material";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import styles from "../styles/NavBar.module.css";

interface DropdownMenuProps {
  label: string;
  isOpen: boolean;
  anchorEl: HTMLElement | null;
  onClose: () => void;
  onToggle: (e: React.MouseEvent<HTMLDivElement>) => void; // Updated type here
  menuItems: { label: string; href: string }[];
  children?: React.ReactNode;
}

const DropdownMenu: FC<DropdownMenuProps> = ({
  label,
  isOpen,
  anchorEl,
  onClose,
  onToggle,
  menuItems,
  children,
}) => {
  return (
    <div>
      <div
        aria-haspopup="true"
        aria-expanded={isOpen}
        onClick={onToggle}
        style={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <h2>{label}</h2>
        {isOpen ? (
          <KeyboardArrowUp className={styles.arrows} />
        ) : (
          <KeyboardArrowDown className={styles.arrows} />
        )}
      </div>
      {isOpen && (
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={onClose}>
          {menuItems.map((item, index) => (
            <MenuItem key={index} onClick={onClose}>
              <a className={styles.navLinksTxt} href={item.href}>
                {item.label}
              </a>
            </MenuItem>
          ))}
        </Menu>
      )}
      {children} {/* Render any children passed to this component */}
    </div>
  );
};

export default DropdownMenu;
