import React from 'react'
import FeedReels from './FeedReels'
import './Feed.css'
import MessageSender from '../MessageSender/MessageSender'
import Posts from '../Post/Posts'

const Feed = () => {
  return (
    <div className='Feed__mainBox'>
      <div className="reels">
      <FeedReels />
      <MessageSender />
      <Posts />
      </div>
    </div>
  )
}

export default Feed