import React from "react"
import { Link } from "gatsby"
import "../styles/sidemenu.scss"

const ToggleMenuCLasses = () => {
  let hamburgerLineUp = document.getElementById("upperline")
  hamburgerLineUp.classList.toggle("upperline-active")
  let hamburgerLineDwon = document.getElementById("lowerline")
  hamburgerLineDwon.classList.toggle("lowerline-active")
  let showClosedMenu = document.getElementById("menu-container")
  showClosedMenu.classList.toggle("menu-container-opened")
}

const SideMenu = () => (
  <menumobile>
    <div id="hamburger">
      <div className="hamburger">
        <div
          className="upperline"
          id="upperline"
          onClick={ToggleMenuCLasses}
        ></div>
        <div
          className="lowerline"
          id="lowerline"
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
