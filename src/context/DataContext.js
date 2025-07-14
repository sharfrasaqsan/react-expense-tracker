import { createContext } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  <DataContext.Provider value={{}}>{children}</DataContext.Provider>;
};

export default DataContext;
