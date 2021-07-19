import React, { useState, useRef } from "react";
import "./accordion.css";
import { FiChevronRight } from "react-icons/fi";
import { FiMoreHorizontal } from "react-icons/fi";
const Accordion = () => {
  const [activeState, setActiveState] = useState("");
  const [heightState, setHeightState] = useState("0px");
  const [rotateState, setRotateState] = useState("");
  const content = useRef(null);
  function toggleAccordion() {
    setActiveState(activeState === "" ? "active" : "");
    setHeightState(
      activeState === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotateState(activeState === "" ? "rotate" : "");
  }
  return (
    <div className="wrapper">
      <ul className="accordion-widget">
        <li
          className={`accordion-title ${activeState}`}
          onClick={toggleAccordion}
        >
          <FiChevronRight size={18} className={`chevron ${rotateState}`} />
          Team 1
          <FiMoreHorizontal size={18} className="more-icon" />
        </li>

        <ul
          ref={content}
          style={{ maxHeight: `${heightState}` }}
          className="accordion-submenu"
        >
          <li className="accordion-menu-item">channel1</li>
          <li className="accordion-menu-item">channel2</li>
          <li className="accordion-menu-item">channel3</li>
          <li className="accordion-menu-item">channel4</li>
        </ul>
      </ul>
    </div>
  );
};

export default Accordion;
