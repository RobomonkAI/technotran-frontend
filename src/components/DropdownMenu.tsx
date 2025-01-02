import { Menu, MenuItem } from "@mui/material";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { FC } from "react";
import styles from "../styles/NavBar.module.css";
import Link from "next/link";

interface DropdownMenuProps {
  title: string;
  activeDropdown: string | null;
  menuItems: string[];
  onDropdownOpen: (e: React.MouseEvent<HTMLElement>, menu: string) => void;
  anchorEl: null | HTMLElement;
  onDropdownClose: () => void;
}

const DropdownMenu: FC<DropdownMenuProps> = ({
  title,
  activeDropdown,
  menuItems,
  onDropdownOpen,
  anchorEl,
  onDropdownClose,
}) => {
  return (
    <li>
      <div
        aria-haspopup="true"
        aria-expanded={activeDropdown === title}
        onClick={(e) => onDropdownOpen(e, title)}
        style={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <h2>{title}</h2>
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
        >
          {menuItems.map((item, index) => (
            <MenuItem key={index} onClick={onDropdownClose}>
              <Link className={styles.navLinksTxt} href="/">
                {item}
              </Link>
            </MenuItem>
          ))}
        </Menu>
      )}
    </li>
  );
};

export default DropdownMenu;
