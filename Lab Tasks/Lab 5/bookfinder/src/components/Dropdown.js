import React from "react";

const Dropdown = (props) => {
  return (
    <div>
      <a className='dropdown-trigger btn' href='#' data-target='dropdown1'>Drop Me!</a>

      <ul id="dropdown1" className="dropdown-content">
        <li><a href="#!">one</a></li>
        <li><a href="#!">two</a></li>
        <li className="divider"></li>
        <li><a href="#!">three</a></li>
      </ul>
    </div>
  );
};

export default Dropdown;