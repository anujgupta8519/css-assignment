import React from 'react'
import './pricePage.css'

function PriceingPage() {
  return (
    <div className='card'>
        <div className='basic'>Basic</div>
        <div className='stroge'>100Gb Stroge</div>
        <div className='stroge'>10 Emails</div>
        <div className='stroge'>10 Domains</div>
        <div className='stroge'>Endless Support</div>
        <div className='div1'>
            <h3>$ 10</h3>
            <p className='text'>per month</p>
        </div>
        <div className='div2'>
            <button className='button'>
                signup
            </button>
        </div>

    </div>
  )
}

export default PriceingPage