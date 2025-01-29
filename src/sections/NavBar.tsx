"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import NavBanner from "@/sections/NavBanner";
import DropdownMenu from "@/components/DropdownMenu";
import styles from "../styles/NavBar.module.css";
import { useRouter, usePathname } from "next/navigation";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeNavItem, setActiveNavItem] = useState<string>("home");
  const [isClient, setIsClient] = useState(false); // Track if the app is running on the client
  useEffect(() => {
    // Only run this code on the client side
    console.log(isClient);
    setIsClient(true);
  }, []);

  const router = useRouter();

  const pathname = usePathname();

  useEffect(() => {
    // Update the active nav item based on the current route
    const path = pathname;

    if (path === "/") {
      setActiveNavItem("home");
    } else if (path.includes("industrial-solutions")) {
      setActiveNavItem("industrial-solutions");
    } else if (path.includes("projects")) {
      setActiveNavItem("projects");
    } else if (path.includes("training-solutions")) {
      setActiveNavItem("training-solutions");
    } else if (path.includes("workshops")) {
      setActiveNavItem("training-solutions");
    } else if (path.includes("job-oriented-courses")) {
      setActiveNavItem("training-solutions");
    } else if (path.includes("about-us")) {
      setActiveNavItem("company");
    } else if (path.includes("mou")) {
      setActiveNavItem("company");
    } else if (path.includes("careers")) {
      setActiveNavItem("company");
    } else if (path.includes("contact-us")) {
      setActiveNavItem("company");
    } else if (path.includes("robotics-es-lab")) {
      setActiveNavItem("lab-solutions");
    } else if (path.includes("r&d-projects")) {
      setActiveNavItem("lab-solutions");
    } else if (path.includes("atal-tinkering-lab")) {
      setActiveNavItem("lab-solutions");
    } else if (path.includes("iot-lab")) {
      setActiveNavItem("lab-solutions");
    } else if (path.includes("school-robotics-lab")) {
      setActiveNavItem("lab-solutions");
    } else if (path.includes("ar-vr-lab")) {
      setActiveNavItem("lab-solutions");
    } else if (path.includes("center-of-excellence")) {
      setActiveNavItem("lab-solutions");
    }
  }, [pathname]);

  useEffect(() => {
    if (isClient) {
      if (typeof window !== "undefined") {
        const handleResize = () => {
          if (window.innerWidth > 768) {
            setIsMobileMenuOpen(false);
          }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }
    }
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
    setActiveNavItem(item); // Update active item
    setIsMobileMenuOpen(false); // Close the mobile menu

    if (item === "home" || item === "projects") {
      router.push("/");
    } else if (item === "AR/VR Lab") {
      router.push("/ar-vr-lab");
    } else if (item === "Robotics & ES Lab") {
      router.push("/robotics-es-lab");
    } else if (item === "Internships") {
      window.open("https://internships.technotran.in/", "_blank"); // Opens in a new tab
    } else if (item === "R & D Projects") {
      router.push("/r&d-projects");
    } else if (item === "Media & Awards") {
      router.push("/media&awards");
    } else {
      router.push(item.toLowerCase().replace(/\s+/g, "-")); // Ensure the route matches the item
    }
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
        <div className={styles.navbarSub}>
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
              isMobileMenuOpen || (isClient && window.innerWidth > 768)
                ? styles.navLinksActive
                : ""
            }`}
          >
            <motion.li
              variants={containerVariant}
              initial="hidden"
              animate="visible"
            >
              <h2
                className={activeNavItem === "home" ? styles.activeNavItem : ""}
                onClick={() => handleNavItemClick("home")}
              >
                Home
              </h2>
            </motion.li>

            <DropdownMenu
              title="Training Solutions"
              activeDropdown={activeDropdown}
              menuItems={["Workshops", "Internships", "Job Oriented Courses"]}
              onDropdownOpen={handleDropdownOpen}
              anchorEl={anchorEl}
              onDropdownClose={handleDropdownClose}
              handleNavItemClick={handleNavItemClick}
              activeNavItem={activeNavItem}
            />

            <motion.li
              variants={containerVariant}
              initial="hidden"
              animate="visible"
            >
              <h2
                className={
                  activeNavItem === "industrial-solutions"
                    ? styles.activeNavItem
                    : ""
                }
                onClick={() => handleNavItemClick("industrial-solutions")}
              >
                Industrial Solutions
              </h2>
            </motion.li>

            <DropdownMenu
              title="Lab Solutions"
              activeDropdown={activeDropdown}
              menuItems={[
                {
                  title: "Academic Lab Solutions",
                  submenu: [
                    "School Robotics Lab",
                    "ATAL Tinkering Lab",
                    "IoT Lab",
                    "Robotics & ES Lab",
                    "AR/VR Lab",
                    "Center Of Excellence",
                  ],
                },
                {
                  title: "Industrial Lab Solutions",
                  submenu: [],
                },
              ]}
              onDropdownOpen={handleDropdownOpen}
              anchorEl={anchorEl}
              onDropdownClose={handleDropdownClose}
              handleNavItemClick={handleNavItemClick}
              activeNavItem={activeNavItem}
            />

            <DropdownMenu
              title="Projects"
              activeDropdown={activeDropdown}
              menuItems={["Academic Projects", "R & D Projects"]}
              onDropdownOpen={handleDropdownOpen}
              anchorEl={anchorEl}
              onDropdownClose={handleDropdownClose}
              handleNavItemClick={handleNavItemClick}
              activeNavItem={activeNavItem}
            />

            <DropdownMenu
              title="Company"
              activeDropdown={activeDropdown}
              menuItems={[
                "About Us",
                "MOU",
                "Media & Awards",
                "Events",
                "Careers",
                "Contact Us",
              ]}
              onDropdownOpen={handleDropdownOpen}
              anchorEl={anchorEl}
              onDropdownClose={handleDropdownClose}
              handleNavItemClick={handleNavItemClick}
              activeNavItem={activeNavItem}
            />
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
