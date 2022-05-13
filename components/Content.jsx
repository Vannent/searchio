import React from "react";
import { useStateContext } from "../context/StateContext";
import styles from "../styles/Content.module.scss";
import Search from "./Search";

const Content = () => {
  const { subheader } = useStateContext();
  return (
    <div className={styles.contentContainer}>
      <div className={styles.circle}></div>
      <Search />
    </div>
  );
};

export default Content;
