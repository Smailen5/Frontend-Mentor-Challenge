/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// singolo progetto
import images from "../data/images.js";


const Project = ({ image, title, technologies, liveSite, github }) => {
    // console.log(image);
  return (
    <article>
        <img src={images[image]} alt={title} className="w-full "/>
    </article>
  )
}

export default Project