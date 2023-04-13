import React, { useState } from 'react';
import FeedReel from './FeedReel';
import ReactSimplyCarousel from 'react-simply-carousel';

const FeedReels = () => {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <div className='feedReel__box'>
        <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        forwardBtnProps={{
          style: {
            alignSelf: 'center',
            background: 'white',
            border: 'none',
            borderRadius: '50%',
            color: 'black',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
          },
          children: <span>{`>`}</span>,
        }}
        backwardBtnProps={{
          style: {
            alignSelf: 'center',
            background: 'white',
            border: 'none',
            borderRadius: '50%',
            color: 'black',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
          },
          children: <span>{`<`}</span>,
        }}
        responsiveProps={[
          {
            itemsToShow: 5,
            itemsToScroll: 1,
            minWidth: 768,
          },
        ]}
        speed={1000}
        easing="linear"
        >
        <FeedReel image = "https://i.pinimg.com/originals/26/49/b5/2649b5fe94db2ec533286a942506b2cd.jpg" name = "aditya" />
        <FeedReel image = "https://www.techcenturion.com/wp-content/uploads/2019/02/marshmello-335x335.jpg"  name = "nanu" />
        <FeedReel image = "https://www.techcenturion.com/wp-content/uploads/2018/06/Fortnite-Fate-Skin-335x335.jpg" name = "anil" />
        <FeedReel image = "https://progameguides.com/wp-content/uploads/2019/10/fortnite-outfit-8-ball-vs-scratch.jpg?fit=875%2C915" name = "vamsi" />
        <FeedReel image = "https://lh3.googleusercontent.com/8BTG3Wx-pg9Z1vn82-oaUPKUsxTGb5KBx7QYrAPKf4MSDQmd9AqdSjROwy1LyhiD9NGSfFwLMtrPkJjc2zbwYjY8lETFOfXrQVbv3OpgHZLYUd9uTg3EPSGAdD-FDhITj9wjzpdG" name = "uday" />
        <FeedReel image = "https://ftw.usatoday.com/wp-content/uploads/sites/90/2022/10/Fortnite-Chrome-Punk.jpg" name = "srinivas" />
        <FeedReel image = "https://imgix.ranker.com/user_node_img/50104/1002069153/original/1002069153-photo-u1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&w=375" name = "prudhvi" />
        <FeedReel image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmL5wLToM3w_DKwAwaNBcZR4WFEGz73yUYAA&usqp=CAU" name = "jashuva" />
        <FeedReel image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4LM3b6dwXfhR64iii37wrntAHwCu_m7Z5Ew&usqp=CAU" name = "azeem" />
        </ReactSimplyCarousel>
    </div>
  )
}

export default FeedReels