import { createContext, useContext, useState } from "react";

const Context = createContext();
const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";

export const StateContext = ({ children }) => {
  const [toggleNavbar, setToggleNavbar] = useState(false);
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("JSMastery");

  const getResults = async (type) => {
    setIsLoading(true);

    const response = await fetch(`${baseUrl}${type}`, {
      method: "GET",
      headers: {
        "X-User-Agent": "desktop",
        "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
        "X-RapidAPI-Key": "fc8d5bec72msh819c775b387fc07p1bdf00jsndd2ebd5323b0",
      },
    });

    const data = await response.json();
    setResults(data);
    setIsLoading(false);
  };

  return (
    <Context.Provider
      value={{
        toggleNavbar,
        setToggleNavbar,
        getResults,
        results,
        searchTerm,
        setSearchTerm,
        isLoading,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
