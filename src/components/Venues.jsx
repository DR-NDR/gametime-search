import React from 'react';
import Card from './Card';


const Venues = ({venues}) => {
  return (
    <div>
        {venues?.map(v => (
            <Card
                image={v.image_url} 
                title={v.name} 
                subtitle={v.city}/>
        ))}
    </div>
  )
}

export default Venues