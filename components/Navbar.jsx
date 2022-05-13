import { IconButton } from "@material-ui/core";
import { GitHub, Widgets } from "@material-ui/icons";
import Link from "next/link";
import React from "react";
import { useStateContext } from "../context/StateContext";
import styles from "../styles/Navbar.module.scss";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const { toggleNavbar, setToggleNavbar } = useStateContext();
  return (
    <div className={styles.headerContainer}>
      <div className={styles.toggle}>
        <IconButton onClick={() => setToggleNavbar((prevState) => !prevState)}>
          <Widgets />
        </IconButton>
      </div>
      {toggleNavbar && <Sidebar />}
      <Link href="/">
        <div className={styles.logo}>Searchio</div>
      </Link>
      <div className={styles.githubIcon}>
        <IconButton>
          <GitHub />
        </IconButton>
      </div>
    </div>
  );
};

export default Navbar;
