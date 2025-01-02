"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NavBanner from "@/sections/NavBanner";
import DropdownMenu from "@/components/DropdownMenu";
import styles from "../styles/NavBar.module.css";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeNavItem, setActiveNavItem] = useState<string>("home");

  // Close mobile menu on resize to larger screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(true); // Close menu in web view
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initialize on mount

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  const handleDropdownOpen = (
    event: React.MouseEvent<HTMLElement>,
    menu: string
  ) => {
    setAnchorEl(event.currentTarget);
    setActiveDropdown(menu === activeDropdown ? null : menu); // Toggle the dropdown
  };

  const handleDropdownClose = () => {
    setAnchorEl(null);
    setActiveDropdown(null);
  };

  const handleNavItemClick = (item: string) => {
    setActiveNavItem(item);
    setIsMobileMenuOpen(false); // Ensure the menu closes when a nav item is clicked
  };

  const containerVariant = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const logoVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
    hover: { scale: 1.1, transition: { duration: 0.3 } },
  };

  return (
    <>
      <NavBanner />
      <nav className={styles.navbar}>
        <motion.div
          variants={logoVariant}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          className={styles.logo}
        >
          <Link href="/">
            <Image
              src="/images/Technotran-logo.png"
              alt="Technotran Nav Logo"
              className={styles.logoImg}
              height={100}
              width={200}
              priority
            />
          </Link>
        </motion.div>
        <div className={styles.hamburger} onClick={toggleMenu}>
          <MenuIcon aria-label="Toggle Menu" />
        </div>
        <ul
          role="menu"
          aria-hidden={!isMobileMenuOpen}
          className={`${styles.navLinks} ${
            isMobileMenuOpen || window.innerWidth > 768
              ? styles.navLinksActive
              : ""
          }`}
        >
          <motion.li
            variants={containerVariant}
            initial="hidden"
            animate="visible"
          >
            <Link className={styles.navLinksTxt} href="/">
              <h2
                className={activeNavItem === "home" ? styles.activeNavItem : ""}
                onClick={() => handleNavItemClick("home")}
              >
                Home
              </h2>
            </Link>
          </motion.li>
          <motion.li
            variants={containerVariant}
            initial="hidden"
            animate="visible"
          >
            <DropdownMenu
              title="Training Services"
              activeDropdown={activeDropdown}
              menuItems={["Workshops", "Internships", "Job Oriented Courses"]}
              onDropdownOpen={handleDropdownOpen}
              anchorEl={anchorEl}
              onDropdownClose={handleDropdownClose}
            />
          </motion.li>
          <motion.li
            variants={containerVariant}
            initial="hidden"
            animate="visible"
          >
            <Link className={styles.navLinksTxt} href="/design-services">
              <h2
                className={
                  activeNavItem === "design-services"
                    ? styles.activeNavItem
                    : ""
                }
                onClick={() => handleNavItemClick("design-services")}
              >
                Design Services
              </h2>
            </Link>
          </motion.li>
          <motion.li
            variants={containerVariant}
            initial="hidden"
            animate="visible"
          >
            <DropdownMenu
              title="Innovation Labs"
              activeDropdown={activeDropdown}
              menuItems={["School", "College"]}
              onDropdownOpen={handleDropdownOpen}
              anchorEl={anchorEl}
              onDropdownClose={handleDropdownClose}
            />
          </motion.li>
          <motion.li
            variants={containerVariant}
            initial="hidden"
            animate="visible"
          >
            <Link className={styles.navLinksTxt} href="/">
              <h2
                className={
                  activeNavItem === "projects" ? styles.activeNavItem : ""
                }
                onClick={() => handleNavItemClick("projects")}
              >
                Projects
              </h2>
            </Link>
          </motion.li>
          <motion.li
            variants={containerVariant}
            initial="hidden"
            animate="visible"
          >
            <DropdownMenu
              title="Company"
              activeDropdown={activeDropdown}
              menuItems={["About Us", "MOU", "Careers", "Contact Us"]}
              onDropdownOpen={handleDropdownOpen}
              anchorEl={anchorEl}
              onDropdownClose={handleDropdownClose}
            />
          </motion.li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
