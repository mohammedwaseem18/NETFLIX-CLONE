import React, {useState ,useEffect } from "react";
import "./Nav.css";

function Nav() {

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsTop(window.scrollY < 30);
    });

    document.body.addEventListener(
      "click",
      (e) => {
        if (!e.target.classList.contains("hamburger")) {
          setIsHamburgerOpen(false);
        }
      },
      false
    );
  }, []);
  return (
    //  <div className={`nav ${show && "Nav__black"}`}>
     <div className={`nav `}> 
        <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
        />

        <img
        className="nav__avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/OOjs_UI_icon_userAvatar-constructive.svg/480px-OOjs_UI_icon_userAvatar-constructive.svg.png"
        alt="Netflix Logo"
        />
        </div>
        
        );
}

export default Nav;
