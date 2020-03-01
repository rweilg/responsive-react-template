import React from "react"
import { Link } from "gatsby"
import "../styles/styles.scss"

const ToggleMenuCLasses = () => {
  let hamburgerLineUp = document.getElementById("lineup")
  hamburgerLineUp.classList.toggle("lineup-active")
  let hamburgerLineDwon = document.getElementById("linedown")
  hamburgerLineDwon.classList.toggle("linedown-active")
  let showClosedMenu = document.getElementById("menu-container")
  showClosedMenu.classList.toggle("menu-container-opened")
}

const MenuMobile = () => (
  <menumobile>
    <div id="burghy">
      <div className="burghy">
        <div className="lineup" id="lineup" onClick={ToggleMenuCLasses}></div>
        <div
          className="linedown"
          id="linedown"
          onClick={ToggleMenuCLasses}
        ></div>
      </div>
      <div
        className="menu-container"
        id="menu-container"
        onClick={ToggleMenuCLasses}
      >
        <Link className="menu-mobile-item1" to="/">
          about
        </Link>
        <Link className="menu-mobile-item2" to="#projects">
          projects
        </Link>
        <Link className="menu-mobile-item3" to="#experience">
          experience
        </Link>
        <Link className="menu-mobile-item4" to="#contact-title">
          contact
        </Link>
        <Link className="menu-mobile-item5" to="https://drive.google.com/file/d/1VDWtZgTrU-uSt873jotFUrF_yXhMXpWq/view?usp=sharing">
          CV🇬🇧
        </Link>
        <Link className="menu-mobile-item6" to="https://drive.google.com/file/d/1VDWtZgTrU-uSt873jotFUrF_yXhMXpWq/view?usp=sharing">
          CV🇮🇹
        </Link>
      </div>
    </div>
  </menumobile>
)

export default MenuMobile
