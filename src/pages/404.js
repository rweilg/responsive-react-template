import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

const NotFoundPage = () => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>{"Nothing Here"}</title>
    </Helmet>
    <h2>Page not found</h2>
    <Link to="/">go back home</Link>
  </div>
)

export default NotFoundPage
