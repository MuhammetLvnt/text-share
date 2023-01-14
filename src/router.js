import React from "react";
import { Routes, Route } from "react-router-dom";
import MessageList from "./components/MessageList";
import Pages from "./View/Pages";
import i18nTr from "./i18n/Tr";
import i18nEn from "./i18n/En";

function router({ lang }) {
  return (
    <Routes>
      <Route
        path="/"
        element={<Pages i18n={lang === "Tr" ? i18nTr : i18nEn} />}
      ></Route>
      <Route
        path="/messagelist"
        element={<MessageList i18n={lang === "Tr" ? i18nTr : i18nEn} />}
      ></Route>
    </Routes>
  );
}

export default router;
