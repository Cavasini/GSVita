import React, { useState } from "react";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const userSession = sessionStorage.getItem("userData")
  const emailSession = sessionStorage.getItem("emailData")
  
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown}>Toggle Dropdown</button>

      {isOpen && (
        <div className="dropdown-content">
          <p>{emailSession}</p>
          <p>Get out</p>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
