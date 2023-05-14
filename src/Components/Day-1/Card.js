import React from 'react'
import './Card.css'

function Card() {
  return (
    <div className='outer'>
        <img className='img' src="https://th.bing.com/th/id/OIP.Y86ZDR75DZFFdXfG0FyDsQHaEo?pid=ImgDet&rs=1" alt="new-york" />
       <div className='down'>
        <p className='newyork'>New York</p>
        <p className='date'>Fri 27 Nov 2016</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, qui!</p>
        <button className='button'>Buy Ticktes</button>
       </div>
    </div>
  )
}

export default Card