import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("./public.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <AppContext.Provider value={{ services }}>{children}</AppContext.Provider>
  );
};

export const useDefaultContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
