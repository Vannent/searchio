import React from "react";
import styles from "../styles/Sidebar.module.scss";
import Search from "./Search";

const Sidebar = () => {
  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.time}></div>
    </div>
  );
};

export default Sidebar;
