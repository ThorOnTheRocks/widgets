import React from "react";
import Link from "./Link";

import './Header.css'

const Header = () => {
  return (
    <div className="ui secondary pointing menu navbar">
      <div className="icon-box">
        <i className="fab fa-react react-icon"></i>
        <p className="item">React Widgets</p>
      </div>

      <Link href='/' className="item">
        Accordion
      </Link>
      <Link href='/list' className="item">
        Search
      </Link>
      <Link href='/dropdown' className="item">
        Dropdown
      </Link>
      <Link href='/translate' className="item">
        Translate
      </Link>
    </div>
  )
}

export default Header;