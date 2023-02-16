import React from 'react'
import Card from './Card'

const Events = ({events}) => {
  return (
    <div>
        {events?.map(e => (
            <Card 
                key={e.event.name}
                image={e?.performers?.[0].hero_image_url} 
                title={e.event.name} 
                subtitle={e.venue.name}/>
        ))}
    </div>
  )
}

export default Events