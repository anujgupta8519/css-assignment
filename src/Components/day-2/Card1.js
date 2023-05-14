import React from 'react'
import { TbBallFootball } from 'react-icons/tb';
import './Card1.css'

function Card1() {
  return (
    <div className='card'>
        <img className='img' src="https://th.bing.com/th/id/OIP.74-2lAKjsaO-eNdQZfyCZwHaKQ?pid=ImgDet&rs=1" alt="" />
        <div className="below">
            <p className='jhon'>Jhon Doe</p>
            <p className='ceo'>CEO & Founder, Example</p>
            <p className='harw'>Harvard University</p>
            <div><TbBallFootball/></div>
            <button className='button'>Contact</button>
        </div>

    </div>
  )
}

export default Card1