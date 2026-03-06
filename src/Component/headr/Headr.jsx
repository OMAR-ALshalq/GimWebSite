import "./Headr.css";

import { MdDarkMode } from "react-icons/md";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { IoCloseCircleSharp } from "react-icons/io5";

import { useState } from "react";
import Logo from "../../../public/Image/logo.png";

const arrayLi = [
  { id: 1, name: "Home", link: "#home" },
  { id: 2, name: "About", link: "#about" },
  { id: 3, name: "Services", link: "#services" },
  { id: 5, name: "Contact", link: "#contact" }
];

export default function Headr({ dark, setdark }) {
  const [showtags, setshowtags] = useState(false);
  const [animation, setAnimation] = useState(""); // "show" أو "hide"
  // const [Dark, setdark] = useState();

  function handeltags() {
    setshowtags(true);
    setAnimation("show");
  }

  function closeTags() {
    setAnimation("hide"); // شغّل أنميشن الإغلاق
  }

  function darkMode() {
    setdark(!dark);
    console.log(dark);
  }

  return (
    <div className="Box">
      <div
        className="continer continerHeadr"
      >
        <div className="headrBox">
          <div className="Logo">
            <img src={Logo}></img>
          </div>
          <div className="Links">
            <ul>
              {arrayLi.map(({ id, name, link }) => (
                <a key={id} href={link}>
                  <li>{name}</li>
                </a>
              ))}
            </ul>
            <MdDarkMode className="Dark" onClick={darkMode} />
            <PiDotsThreeOutlineVerticalFill
              className="DotsIcon"
              onClick={handeltags}
              style={{ display: showtags ? "none" : "block" }}
            />
          </div>
        </div>
      </div>
      {showtags && (
        <div
          className={`tagsTow ${
            animation === "show" ? "animateShow" : "animateHide"
          }`}
          onAnimationEnd={() => {
            if (animation === "hide") {
              setshowtags(false); // أخفي العنصر بعد انتهاء الأنميشن
            }
          }}
        >
          <div className="divClosTags">
            <IoCloseCircleSharp className="Closeicon" onClick={closeTags} />
          </div>

          <ul>
            {arrayLi.map(({ id, name, link }) => (
              <li key={id}>
                <a
                  // className={activ === id ? "activ" : ""}
                  onClick={closeTags}
                  href={link}
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
