import React, { useState, useEffect } from 'react'
import Coin from './CoinData'

function App() {

  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState("")


  console.log(search)
  console.log(coins);

  useEffect(()=> {
    
    async function getData() {
      let response = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=200&page=1&sparkline=false")
      
      let data = await response.json()
      setCoins(data)
      // console.log(data)
    }
    getData()
  }, [])

  // function to store serach value in search variable
  function handleChange(event) {
    setSearch(prevSearch => event.target.value)
  }
  
  // to store filtered coin(s) based on search input
  const filteredCoins = coins.filter((coin) => 
    coin.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="main--section">
      <div className="coin--search--div">
        <input className="coin--input--box"
        type="text"
        placeholder="Enter the coin name"
        value={search}
        onChange={handleChange}
        />
      </div>

      {filteredCoins.map((coin) => {
        return(
          <Coin
          key={coin.id}
          name={coin.name}
          symbol={coin.symbol}  
          image={coin.image}  
          marketCap={coin.market_cap}
          price={coin.current_price}
          priceChange={coin.price_change_percentage_24h}
          />
        )
      })}
    </div>
  )
}

export default App