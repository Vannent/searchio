import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { Loading } from ".";
import { useStateContext } from "../context/StateContext";
import styles from "../styles/Results.module.scss";

const Results = () => {
  const { results, isLoading, getResults, searchTerm, subheader } =
    useStateContext();
  const { asPath, pathname } = useRouter();

  useEffect(() => {
    if (searchTerm) {
      if (pathname === "/videos") {
        getResults(`/search/q=${searchTerm} videos`);
      } else {
        getResults(`${location.pathname}/q=${searchTerm}&num=40`);
      }
    }
  }, [searchTerm, pathname]);
  console.log(results);

  switch (pathname) {
    case "/search":
      return (
        <div className={styles.searchContainer}>
          {results?.results?.map(({ link, title, description }, index) => (
            <div key={index} className={styles.resultsContainer}>
              <a href={link} target="_blank" rel="noreferrer">
                <p className={styles.link}>
                  {link.length > 30 ? link.substring(0, 30) : link}
                </p>
                <h3 className={styles.title}>{title}</h3>
              </a>
              <p>{description}</p>
            </div>
          ))}
        </div>
      );
    case "/image":
      return (
        <div className={styles.searchContainerImages}>
          {results?.image_results?.map(
            ({ image, link: { href, title } }, index) => (
              <a href={href} target="_blank" key={index} rel="noreferrer">
                <img src={image?.src} alt={title} loading="lazy" />
                <p>{title}</p>
              </a>
            )
          )}
        </div>
      );
    default:
      return "ERROR";
  }
};

export default Results;
