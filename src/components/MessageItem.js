import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import QRCode from "react-qr-code";
import axios from "axios";
import { useTheme } from "../contexts/ThemeContext";

function MessageItem({ i18n }) {
  const [text, setText] = useState("");
  const [value, onChange] = useState(new Date());
  const [textId, setTextId] = useState();
  const { theme } = useTheme();

  const handleClick = async (e) => {
    e.preventDefault();

    await axios
      .post("http://167.172.166.69:8080/api/text", {
        text: text,
        expireDate: value,
      })
      .then((res) => {
        setText("");
        alert(i18n.alert);
        setTextId(res.data.id);
      });
  };

  return (
    <div className={`flex h-screen`}>
      <div className=" w-1/2 rounded-md mt-5 ml-2 border">
        <textarea
          type="text"
          placeholder={i18n.enterText}
          className="border mt-5 ml-5"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <div>
          <DateTimePicker
            onChange={onChange}
            value={value}
            className="mt-5 ml-5 bg-emerald-300 text-sky-800"
          />
        </div>
        <button
          className="rounded-md bg-neutral-700 text-white w-28 mt-5 ml-5"
          onClick={handleClick}
        >
          {i18n.send}
        </button>
      </div>
      <div className="w-1/2 flex justify-center">
        <div>
          <h1
            className={`mt-5 ml-5 ${
              theme === "light" ? "text-black" : "text-white"
            }`}
          >
            {i18n.Qrcode}
          </h1>
          {textId ? (
            <>
              <h2 className="mt-5 ml-5 border w-64 bg-white">{textId}</h2>
              <QRCode
                value={`${textId}`}
                className="ml-5 mt-5 border border-white"
              />
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default MessageItem;
