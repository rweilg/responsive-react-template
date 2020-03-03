import React from "react"
import { Link } from "gatsby"

const Header = () => (
  <header>
    <div className="container" id="contenitore">
      <div className="semi-inner">
        <div className="inner-header">
          <div className="logo">
            <Link style={{ marginLeft: "0px" }} to="/">
              {" "}
              Your Name
            </Link>
          </div>
          <div className="header-tranne-logo">
            <div className="navigation" id="elementi-menu">
              <nav>
                <Link className="menu" to="/page1">
                  Page 1
                </Link>
                <Link className="menu" to="/page2">
                  Page 2
                </Link>
                <Link className="menu" to="/page3">
                  Page 3
                </Link>
                <Link className="menu" to="/page4">
                  Page 4
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
)

export default Header
