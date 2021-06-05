import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({sushis, handleGetMoreSushi, eatenSushi}) {

  const [sushiIndex, setSushiIndex]=useState(0);

  const sushiComponent= sushis
  .slice(sushiIndex,sushiIndex + 4)
  .map((sushi)=>(
    <Sushi eatenSushi={eatenSushi} key={sushi.id} sushi={sushi}/>
  ))

  function handleGetMoreSushi (){
    setSushiIndex((sushiIndex)=> (sushiIndex+ 4) % sushis.length)
  }


  return (
    <div className="belt">
      {sushiComponent}
      <MoreButton getMoreSushi={handleGetMoreSushi}/>
    </div>
  );
}

export default SushiContainer;
