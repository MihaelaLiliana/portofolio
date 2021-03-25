import React from "react";
import "./HeaderNavBar.css"

function HeaderNavBar({ title, setCurentScreen }) {
  return (
    <div>

      
      <button
        className="button"
        onClick={() => {
          setCurentScreen(title);
        }}
      >
        {title}
      </button>
      
    </div>
  );
}

export default HeaderNavBar;