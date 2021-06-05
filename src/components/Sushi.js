import React from "react";

function Sushi({sushi, eatenSushi}) {

  const { name, img_url, price, eaten } = sushi;

  function handleClickEatenSushi(){
    if(!eaten){
      eatenSushi(sushi)
    } else {
      alert("Can't eat an empty plate, bud")
    }
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleClickEatenSushi}>
        {/* Tell me if this sushi has been eaten! */}
        {eaten ? null : (
          <img
            src={img_url}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
