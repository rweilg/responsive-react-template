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
    <div id="hamburger">
      <div className="hamburger">
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
        <Link className="menu-mobile-item1" to="/page1">
          Page 1
        </Link>
        <Link className="menu-mobile-item2" to="/page2">
          Page 2
        </Link>
        <Link className="menu-mobile-item3" to="/page3">
          Page 3
        </Link>
        <Link className="menu-mobile-item4" to="/page4">
          Page 4
        </Link>
      </div>
    </div>
  </menumobile>
)

export default SideMenu
