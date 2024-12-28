"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
// import Logo from "/images/Technotran-logo.png";
import styles from "../styles/NavBar.module.css";
import { Menu, MenuItem, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";
import NavBanner from "./NavBanner";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState<string | null>(
    null
  );
  const [activeNavItem, setActiveNavItem] = useState<string>("home");

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
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
    setActiveSubDropdown(null);
  };

  const handleSubDropdownToggle = (menu: string) => {
    setActiveSubDropdown(menu === activeSubDropdown ? null : menu); // Toggle the sub-dropdown
  };

  const handleNavItemClick = (item: string) => {
    setActiveNavItem(item);
    handleDropdownClose();
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
            />
          </Link>
        </motion.div>
        <div className={styles.hamburger}>
          <IconButton onClick={toggleMenu}>
            <MenuIcon />
          </IconButton>
        </div>
        <motion.ul
          variants={containerVariant}
          initial="hidden"
          animate="visible"
          className={`${styles.navLinks} ${
            isMobileMenuOpen ? styles.navLinksActive : ""
          }`}
        >
          <li>
            <Link className={styles.navLinksTxt} href="/">
              <h2
                className={activeNavItem === "home" ? styles.activeNavItem : ""}
                onClick={() => handleNavItemClick("home")}
              >
                Home
              </h2>
            </Link>
          </li>
          <li>
            <div
              aria-haspopup="true"
              aria-expanded={activeDropdown === "training"}
              onClick={(e) => handleDropdownOpen(e, "training")}
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <h2>Training Services</h2>
              {activeDropdown === "training" ? (
                <KeyboardArrowUp className={styles.arrows} />
              ) : (
                <KeyboardArrowDown className={styles.arrows} />
              )}
            </div>
            {activeDropdown === "training" && (
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleDropdownClose}
              >
                <MenuItem onClick={handleDropdownClose}>
                  <Link className={styles.navLinksTxt} href="/">
                    Workshops
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleDropdownClose}>
                  <Link className={styles.navLinksTxt} href="/">
                    Internships
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleDropdownClose}>
                  <Link className={styles.navLinksTxt} href="/">
                    Job Oriented Courses
                  </Link>
                </MenuItem>
              </Menu>
            )}
          </li>
          <li>
            <Link className={styles.navLinksTxt} href="/">
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
          </li>
          <li>
            <div
              aria-haspopup="true"
              aria-expanded={activeDropdown === "innovation"}
              onClick={(e) => handleDropdownOpen(e, "innovation")}
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <h2>Innovation Labs</h2>
              {activeDropdown === "innovation" ? (
                <KeyboardArrowUp className={styles.arrows} />
              ) : (
                <KeyboardArrowDown className={styles.arrows} />
              )}
            </div>
            {activeDropdown === "innovation" && (
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleDropdownClose}
              >
                <MenuItem
                  onClick={() => handleSubDropdownToggle("school")}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <span>School</span>
                  {activeSubDropdown === "school" ? (
                    <KeyboardArrowUp className={styles.arrows} />
                  ) : (
                    <KeyboardArrowDown className={styles.arrows} />
                  )}
                </MenuItem>

                {/* Render submenu items below if active */}
                {activeSubDropdown === "school" && (
                  <div className={styles.subMenu}>
                    <MenuItem
                      className={styles.subMenuItem}
                      onClick={handleDropdownClose}
                    >
                      <Link className={styles.navLinksTxt} href="/">
                        STEM Programs
                      </Link>
                    </MenuItem>
                    <MenuItem
                      className={styles.subMenuItem}
                      onClick={handleDropdownClose}
                    >
                      <Link className={styles.navLinksTxt} href="/">
                        Science Exhibitions
                      </Link>
                    </MenuItem>
                  </div>
                )}

                <MenuItem
                  onClick={() => handleSubDropdownToggle("college")}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <span>College</span>
                  {activeSubDropdown === "college" ? (
                    <KeyboardArrowUp className={styles.arrows} />
                  ) : (
                    <KeyboardArrowDown className={styles.arrows} />
                  )}
                </MenuItem>

                {/* Render College submenu items below if active */}
                {activeSubDropdown === "college" && (
                  <div style={{ paddingLeft: "1rem", marginTop: "-0.5rem" }}>
                    <MenuItem onClick={handleDropdownClose}>
                      <Link className={styles.navLinksTxt} href="/">
                        Research Labs
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={handleDropdownClose}>
                      <Link className={styles.navLinksTxt} href="/">
                        Innovation Hackathons
                      </Link>
                    </MenuItem>
                  </div>
                )}
              </Menu>
            )}
          </li>
          <li>
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
          </li>
          <li>
            <div
              aria-haspopup="true"
              aria-expanded={activeDropdown === "company"}
              onClick={(e) => handleDropdownOpen(e, "company")}
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <h2>Company</h2>
              {activeDropdown === "company" ? (
                <KeyboardArrowUp className={styles.arrows} />
              ) : (
                <KeyboardArrowDown className={styles.arrows} />
              )}
            </div>
            {activeDropdown === "company" && (
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleDropdownClose}
              >
                <MenuItem onClick={handleDropdownClose}>
                  <Link className={styles.navLinksTxt} href="/">
                    About Us
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleDropdownClose}>
                  <Link className={styles.navLinksTxt} href="/">
                    MOU
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleDropdownClose}>
                  <Link className={styles.navLinksTxt} href="/">
                    Careers
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleDropdownClose}>
                  <Link className={styles.navLinksTxt} href="/">
                    Contact Us
                  </Link>
                </MenuItem>
              </Menu>
            )}
          </li>
        </motion.ul>
      </nav>
    </>
  );
};

export default NavBar;
