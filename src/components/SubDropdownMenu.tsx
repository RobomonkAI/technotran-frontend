import { MenuItem } from "@mui/material";
import { FC } from "react";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import styles from "../styles/NavBar.module.css";
import Link from "next/link";

interface SubDropdownMenuProps {
  label: string;
  isOpen: boolean;
  onToggle: () => void;
  subMenuItems: { label: string; href: string }[];
}

const SubDropdownMenu: FC<SubDropdownMenuProps> = ({
  label,
  isOpen,
  onToggle,
  subMenuItems,
}) => {
  return (
    <>
      <MenuItem
        onClick={onToggle}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <span>{label}</span>
        {isOpen ? (
          <KeyboardArrowUp className={styles.arrows} />
        ) : (
          <KeyboardArrowDown className={styles.arrows} />
        )}
      </MenuItem>

      {isOpen && (
        <div className={styles.subMenu}>
          {subMenuItems.map((item, index) => (
            <MenuItem
              className={styles.subMenuItem}
              key={index}
              onClick={onToggle}
            >
              <Link className={styles.navLinksTxt} href={item.href}>
                {item.label}
              </Link>
            </MenuItem>
          ))}
        </div>
      )}
    </>
  );
};

export default SubDropdownMenu;
