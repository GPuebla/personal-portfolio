import React, { useState } from 'react'


export const Technology = ({title,description,imgUrl}) => {
    const [isHovered, setIsHovered] = useState(false);
    
  return (
    <>
        <div className={`tech-imgbx ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img src={imgUrl} />
            <div className="tech-txtx">
                <h3>{title}</h3>
                <span><h4>{description}</h4></span>
            </div>
      </div>
    </>
    
  )
}
