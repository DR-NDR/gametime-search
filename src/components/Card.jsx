import React from 'react';

const Card = ({image, title, subtitle}) => {
    // card can be reused in the different entities
  return (
    <div className='card'>
        <div>
            <img className='card-image' src={image} alt="image" />
        </div>
        <div>
            <h4>
                {title}
            </h4>
            <p className='subtitle'>
                {subtitle}
            </p>
        </div>
        
    </div>
  )
}

export default Card