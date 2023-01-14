import React, { useEffect, useState } from "react";
import axios from "axios";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useTheme } from "../contexts/ThemeContext";
import { useLang } from "../contexts/LangContext";

function MessageList({ i18n }) {
  const [enteredId, setEnteredId] = useState();
  const [text, setText] = useState();
  const { toggleTheme, theme } = useTheme();
  const { toggleLang, lang } = useLang();

  useEffect(() => {
    axios
      .get(`http://167.172.166.69:8080/api/text/${enteredId}`)
      .then((res) => setText(res.data.text))
      .catch((err) => console.log(err));
  }, [enteredId]);

  return (
    <div className={`bg-${theme} h-screen`}>
      <div>
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5  dark:bg-gray-900">
          <div className="container flex flex-wrap items-center justify-between mx-auto">
            <a href="/" className="flex items-center">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-6 mr-3 sm:h-9"
                alt="Flowbite Logo"
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                Text Share
              </span>
            </a>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <div
              className="hidden w-full md:block md:w-auto"
              id="navbar-default"
            >
              <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <a
                    href="/"
                    className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    {i18n.returnToHomePage}
                  </a>
                </li>
                <li>
                  <button
                    onClick={toggleTheme}
                    className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    {i18n.darkTheme}
                  </button>
                </li>
                <li>
                  <button
                    onClick={toggleLang}
                    className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    {lang}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="flex justify-center h-56 mt-5 ">
        <div className="border border-gray-900 rounded-md mx-5 my-5">
          <input
            type="number"
            className="border my-5 ml-5"
            value={enteredId}
            placeholder={i18n.id}
            onChange={(e) => setEnteredId(e.target.value)}
          ></input>
          <div className="mx-5">
            <input
              type="text"
              placeholder={i18n.text}
              value={text}
              className="border"
            ></input>
            <CopyToClipboard text={text}>
              <button className="bg-indigo-700 rounded-md ml-2 w-24 text-white">
                {i18n.copy}
              </button>
            </CopyToClipboard>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessageList;
