import React from 'react'

const FeedReel = ({image,name}) => {
  return (
    <div className='feedreel__images' style={{backgroundImage: `url(${image})`}} >
        <h4 className='image__name'>{name}</h4>
    </div>
  )
}

export default FeedReel