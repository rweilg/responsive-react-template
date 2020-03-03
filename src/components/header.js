import React from "react"
import { Link } from "gatsby"

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasOpened: false,
    }
  }

  componentDidMount() {
    window.addEventListener("click", this.hasOpened)
  }

  render() {
    return (
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
                    <Link className="menu" to="#top">
                      Page 1
                    </Link>
                    <Link className="menu" to="#experience">
                      Page 2
                    </Link>
                    <Link className="menu" to="#projectsy">
                      Page 3
                    </Link>
                    <Link className="menu" to="#contact-title">
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
  }
}

export default Header
