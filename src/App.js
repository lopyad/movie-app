import { useEffect, useState } from "react";

function CoinsList({coins, changeCoin}){
  const onLiClick = (event) => {
    changeCoin([event.target.dataset.price, event.target.dataset.name]);
  };

  return (
    <div>
      <div style={{
        border: "1px solid black",
        height: "300px",
        overflowY: "scroll",
        margin: "10px 0px"
      }}>
      <ul>
          {coins.map((coin, index) => 
            /*<div>
              <li>{coin.name} #{coin.symbol}: {coin.quotes.USD.price}</li>
            </div>*/
            <div key={index} style={{border: "1px solid black", margin: "2px 0px", borderRadius: "5px", textAlign: "center"}}>
              <div 
                onClick={onLiClick} 
                data-name={coin.symbol} 
                data-price={coin.quotes.USD.price}>
                {coin.name} #{coin.symbol}
              </div>
            </div>
          )}
      </ul>
      </div>
    </div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [inputUSD, setInputUSD] = useState(0);
  const [selectedCoin, setSelectedCoin] = useState(["NaN", "None"]);
  useEffect(()=>{
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((res)=>res.json())
    .then(json => {
      setCoins(json);
      setLoading(false);
    });
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();
    setInputUSD(event.target[0].value);
  };

  return (
    <div style={{textAlign: "center"}}>
      <h1>The Coins! ({coins.length})</h1>
      <div>select coin</div>
      {loading ? <strong>Loading...</strong> : <CoinsList coins={coins} changeCoin={setSelectedCoin}/>}
      <h2>{selectedCoin[0]} USD = 1 {selectedCoin[1]}</h2>
      <div>input USD</div>
      <form onSubmit={onSubmit}>
        <input 
          placeholder="your USD..."
          type="number"
        />
        <button>input</button>
      </form>
      <h2>{inputUSD} USD = {inputUSD/selectedCoin[0]} {selectedCoin[1]}</h2>
    </div>
  );
}

export default App;