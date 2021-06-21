import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [name, setName] = useState("Ramesh");
  const [location, setLocation] = useState("cumbum");

  return (
    <UserContext.Provider
      value={{
        name,
        location,
        setName,
        setLocation,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
