import { Menu, MenuItem } from "@mui/material";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { FC } from "react";
import styles from "../styles/NavBar.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

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
  const containerVariant = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.li variants={containerVariant} initial="hidden" animate="visible">
      <div
        aria-haspopup="true"
        aria-expanded={activeDropdown === title}
        onClick={(e) => onDropdownOpen(e, title)}
        style={{
          display: "flex",
          alignItems: "center",
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
              <h2 className={styles.dropDownTxt}>{item}</h2>
            </MenuItem>
          ))}
        </Menu>
      )}
    </motion.li>
  );
};

export default DropdownMenu;
