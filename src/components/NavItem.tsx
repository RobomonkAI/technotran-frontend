import Link from "next/link";
import { FC } from "react";
import styles from "../styles/NavBar.module.css";

interface NavItemProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const NavItem: FC<NavItemProps> = ({ label, isActive, onClick }) => {
  return (
    <li>
      <Link className={styles.navLinksTxt} href="/">
        <h2 className={isActive ? styles.activeNavItem : ""} onClick={onClick}>
          {label}
        </h2>
      </Link>
    </li>
  );
};

export default NavItem;
