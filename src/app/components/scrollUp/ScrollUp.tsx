"use client"
import React, { useEffect } from "react";
import "./ScrollUp.css";

const ScrollUp = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollUP = document.querySelector(".scroll_up");

      if (window.scrollY >= 500) {
        scrollUP?.classList.add("show_scroll");
      } else {
        scrollUP?.classList.remove("show_scroll");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <a href="#home" className="scroll_up">
      <i className="uil uil-arrow-up scroll_up_icon"></i>
    </a>
  );
};

export default ScrollUp;
