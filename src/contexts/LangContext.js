import { createContext, useContext, useEffect, useState } from "react";

const LangContext = createContext();
const defaultLang = localStorage.getItem("lang") || "Tr";

export const LangContextProvider = ({ children }) => {
  const [lang, setLang] = useState(defaultLang);

  const toggleLang = () => {
    setLang((prev) => (prev === "Tr" ? "En" : "Tr"));
  };

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  const values = {
    toggleLang,
    lang,
  };

  return <LangContext.Provider value={values}>{children}</LangContext.Provider>;
};

export const useLang = () => {
  const context = useContext(LangContext);

  if (context === undefined) {
    throw new Error("useLang must be used withing a LangProvider");
  }
  return context;
};
