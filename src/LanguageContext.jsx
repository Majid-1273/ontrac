import { createContext, useState, useContext, useEffect } from "react";

// Create the context
const LanguageContext = createContext();

// Create a provider component
export const LanguageProvider = ({ children }) => {
  // Retrieve the language from localStorage or default to "English"
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem("selectedLanguage") || "English"
  );

  // Update localStorage whenever the language changes
  useEffect(() => {
    localStorage.setItem("selectedLanguage", selectedLanguage);
  }, [selectedLanguage]);

  return (
    <LanguageContext.Provider value={{ selectedLanguage, setSelectedLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook for consuming the context
export const useLanguage = () => {
  return useContext(LanguageContext);
};
