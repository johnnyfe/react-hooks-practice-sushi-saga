import React, {useState , useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis]=useState([]);
  const [wallet, setWallet]=useState(100);

  useEffect(()=> {
    fetch(API)
    .then(r=>r.json())
    .then((sushis)=>{
      const sushiAdded = sushis.map((sushi)=> {
        return {...sushi, eaten:false}
      })
      setSushis (sushiAdded);
    })
  },[]);

  function handleEateanSushi(sushiToEat){
    if(wallet>=sushiToEat.price){
      const updatedSushis=sushis.map((sushi)=> {
        if(sushi.id===sushiToEat.id) return {...sushi,eaten: true};
        return sushi;
      })
      setSushis(updatedSushis)
      setWallet((wallet)=> wallet - sushiToEat.price)
    } else {
      alert("Need more 💸")
    }
  }

  function handleAddMoney(moreMoney){
    setWallet((wallet)=>wallet+moreMoney)
  }

  const sushiToEat=sushis.filter((sushi)=>sushi.eaten)

  return (
    <div className="app">
      <SushiContainer sushis={sushis} eatenSushi={handleEateanSushi}/>
      <Table wallet={wallet} onAddMoney={handleAddMoney} plates={sushiToEat}/>
    </div>
  );
}

export default App;
