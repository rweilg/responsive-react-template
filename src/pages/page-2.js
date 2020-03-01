import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

const SecondPage = () => (
  <>
    <Header />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </>
)

export default SecondPage
