import React from "react"
import { Link } from "gatsby"

const NewHeader = () => (
  <div className="new-header">
    <nav className="new-nav">
      <Link className="menu" to="#top">
        about
      </Link>
      <Link className="menu" to="#projects">
        projects
      </Link>
      <Link className="menu" to="#experience">
        experience
      </Link>
      <Link className="menu" to="#contact">
        contact
      </Link>
    </nav>
  </div>
)

export default NewHeader
