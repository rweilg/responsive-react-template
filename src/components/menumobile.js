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

const SideMenu = () => (
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
          Page 1
        </Link>
        <Link className="menu-mobile-item2" to="#projectsy">
          Page 2
        </Link>
        <Link className="menu-mobile-item3" to="#experience">
          Page 3
        </Link>
        <Link className="menu-mobile-item4" to="#contact-title">
          Page 4
        </Link>
      </div>
    </div>
  </menumobile>
)

export default SideMenu
