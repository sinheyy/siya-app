import React from 'react'
import './Homepage.style.css';
import Banner from './components/Banner/Banner';

// 1. 배너 만들기 -> popular movie를 들고와서 첫번째 아이템을 보여주자
// 2. popular movie
// 3. top rated movie
// 4. upcoming movie

const Homepage = () => {
  return (
    <div className='main'>
      <Banner />
    </div>
  )
}

export default Homepage
