import React from "react"
import { Link } from "gatsby"

const ChangeTheme = () => {
  let bgChange = document.getElementById("page-content")
  bgChange.classList.toggle("page-content-dark")
  let txtChange = document.getElementById("about")
  txtChange.classList.toggle("p-dark")
  let headerChange = document.getElementById("contenitore")
  headerChange.classList.toggle("header-dark")
  let btnChange = document.getElementById("cv-buttonid")
  btnChange.classList.toggle("cv-button-dark")
  let expChange = document.getElementById("experience")
  expChange.classList.toggle("experience-dark")
  let prjChange = document.getElementById("projectsy")
  prjChange.classList.toggle("experience-dark")
  let footerChanger = document.getElementById("footer-bg")
  footerChanger.classList.toggle("footer-bg-dark")
  let darkBtnChange = document.getElementById("scuro")
  darkBtnChange.classList.toggle("dark-mode-btn-inverted")
  let post0Title = document.getElementById("post0-title")
  post0Title.classList.toggle("post-title-dark")
  let post1Title = document.getElementById("post1-title")
  post1Title.classList.toggle("post-title-dark")
  let post2Title = document.getElementById("post2-title")
  post2Title.classList.toggle("post-title-dark")
  let post3Title = document.getElementById("post3-title")
  post3Title.classList.toggle("post-title-dark")
  let interntext = document.getElementById("internship")
  interntext.classList.toggle("p-dark")
  let post0Desc = document.getElementById("post0-desc")
  post0Desc.classList.toggle("post-description-dark")
  let post1Desc = document.getElementById("post1-desc")
  post1Desc.classList.toggle("post-description-dark")
  let post2Desc = document.getElementById("post2-desc")
  post2Desc.classList.toggle("post-description-dark")
  let post3Desc = document.getElementById("post3-desc")
  post3Desc.classList.toggle("post-description-dark")
  let lineupChange = document.getElementById("lineup")
  lineupChange.classList.toggle("lineup-dark")
  let linedownChange = document.getElementById("linedown")
  linedownChange.classList.toggle("linedown-dark")
  let contactChange = document.getElementById("contact-title")
  contactChange.classList.toggle("contact-title-dark")
  let mailtoChange = document.getElementById("mailto")
  mailtoChange.classList.toggle("mailto-dark")
}

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
                  rodrigo weilg
                </Link>
              </div>
              <div className="header-tranne-logo">
                <svg
                  role="img"
                  width="24"
                  height="24"
                  onClick={ChangeTheme}
                  className="dark-mode-btn"
                  id="scuro"
                >
                  <path d="M12,0 C18.627417,0 24,5.372583 24,12 C24,18.627417 18.627417,24 12,24 C5.372583,24 0,18.627417 0,12 C0,5.372583 5.372583,0 12,0 Z M12.0005248,3.51443136 C7.53858773,3.77298054 4,7.47324955 4,12 C4,16.4413401 7.40631585,20.0870924 11.748966,20.4672756 L12.0005248,20.4855686 L12.0005248,3.51443136 Z"></path>
                </svg>
                <div className="navigation" id="elementi-menu">
                  <nav>
                    <Link className="menu" to="#top">
                      about
                    </Link>
                    <Link className="menu" to="#experience">
                      experience
                    </Link>
                    <Link className="menu" to="#projectsy">
                      projects
                    </Link>
                    <Link className="menu" to="#contact-title">
                      contact
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
