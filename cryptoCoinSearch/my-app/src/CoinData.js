import React from 'react'

function CoinData(props) { 
  return (
    <div className='coin--details'>
      <div>
        <img src={props.image} alt='coin image' className='coin--image'/>
      </div>
      <div>{props.name}</div>
      <div>${props.price.toLocaleString()}</div>
      <div>{props.priceChange}</div>
      <div>{props.marketCap}</div>
    </div>
  )
}

export default CoinData