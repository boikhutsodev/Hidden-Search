import { useState } from "react";
import { IconContext } from "react-icons";
import { FaFolder, FaSearch } from "react-icons/fa";

function HiddenSearch() {
  const [showInput, setShowInput] = useState(false);
  const [bgColor, setBgColor] = useState("white");

  const handleClick = (e) => {
    setBgColor("#1a1a1a");
    if (e.target.className === "container") {
      setShowInput(false);
      setBgColor("#fff");
    }
  };

  return (
    <>
      <section
        className="container"
        style={{ backgroundColor: bgColor }}
        onClick={handleClick}
      >
        {showInput ? (
          <input type="text" placeholder="Search..." />
        ) : (
          <FaSearch onClick={() => setShowInput(true)} />
        )}
      </section>
      <IconContext.Provider
        value={{ color: "blue", className: "global-class-name" }}
      >
        <div>
          <FaFolder />
        </div>
      </IconContext.Provider>
    </>
  );
}

export default HiddenSearch;
