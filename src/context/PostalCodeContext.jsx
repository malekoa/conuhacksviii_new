import { createContext, useContext, useState } from "react";

const PostalCodeContext = createContext();

export const PostalCodeProvider = ({ children }) => {
  const [postalCode, setPostalCode] = useState("");

  const setPostalCodeValue = (value) => {
    setPostalCode(value);
  };

  return (
    <PostalCodeContext.Provider value={{ postalCode, setPostalCodeValue }}>
      {children}
    </PostalCodeContext.Provider>
  );
};

export const usePostalCode = () => {
  const context = useContext(PostalCodeContext);
  if (!context) {
    throw new Error("usePostalCode must be used within a PostalCodeProvider");
  }
  return context;
};
