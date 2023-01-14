import React from "react";
import MessageItem from "../components/MessageItem";
import { useTheme } from "../contexts/ThemeContext";
import Header from "../components/Header";

function Pages({ i18n }) {
  const { theme } = useTheme();
  return (
    <div className={`bg-${theme} h-screen`}>
      <Header i18n={i18n} />
      <MessageItem i18n={i18n} />
    </div>
  );
}

export default Pages;
