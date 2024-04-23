import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link = "https://github.com/GPuebla" }) => {
  return (
    <Col size={12} sm={6} md={4} style={{cursor:'pointer'}}>
      <div className="proj-imgbx" >
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div><a href={link} target="_blank">Take a look ➡️</a></div> 
        </div>
      </div>
    </Col>
  )
}
