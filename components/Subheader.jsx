import Link from "next/link";
import React from "react";
import { useStateContext } from "../context/StateContext";
import styles from "../styles/Subheader.module.scss";

const Subheader = () => {
  const { subheader, setSubheader } = useStateContext();
  return (
    <div className={styles.subheaderWrapper}>
      <div className={styles.subheaderContent}>
        <Link href="/search">
          <div className={styles.subheaderSites}>Sites</div>
        </Link>
        <Link href="/image">
          <div className={styles.subheaderImages}>Images</div>
        </Link>
      </div>
    </div>
  );
};

export default Subheader;
