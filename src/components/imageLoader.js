import React from "react"
import { Link } from "gatsby"
import "../styles/styles.scss"

const ImageLoader = props => (
  <div className="image-component">
    <div className="rectangle"></div>
    <img className="my-photo" src={props.Photo}></img>
  </div>
)

export default ImageLoader
