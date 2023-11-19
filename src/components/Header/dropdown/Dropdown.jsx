import React, { useState } from "react";

const Dropdown = () => {
  const getUser = sessionStorage.getItem("userData");
  const getEmail = sessionStorage.getItem("emailData");

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = async () => {
    sessionStorage.removeItem("userData");
    sessionStorage.removeItem("senhaData");
    window.location = '/';
  };

  return (
    <div className={`dropdown ${isOpen ? "open" : ""}`}>
      <button className="toggle-button" onClick={toggleDropdown}>
        <div>{(getUser[0]).toUpperCase()}</div>
      </button>
      {isOpen && (
        <div className="dropdown-content">
          <div className="account">
            <p className="name">{getUser}</p>
            <p className="email">{getEmail}</p>
          </div>
          <div className="logout">
            <button onClick={handleLogout}>Logout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
