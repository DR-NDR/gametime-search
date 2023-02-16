import React from 'react'
import Card from './Card'

const Performers = ({performers}) => {
  return (
    <div>
        {performers?.map(p => (
            <Card
                image={p.hero_image_url} 
                title={p.name} 
                subtitle={p.category}/>
        ))}
    </div>
  )
}

export default Performers