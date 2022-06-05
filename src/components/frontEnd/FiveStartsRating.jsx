import React, { useState } from "react";

const EMPTY_STAR =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Five-pointed_star.svg/1088px-Five-pointed_star.svg.png";
const FULL_STAR =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/1200px-Gold_Star.svg.png";

const FiveStartsRating = () => {

    const startIds = [1,2,3,4,5];

    const [hovered, setHovered] = useState(0)
    const [clicked, setClicked] = useState(0)

    const getImg = (id) =>{
        return hovered >= id || clicked >= id ? FULL_STAR : EMPTY_STAR
    }

    return( 
    <div>
        {startIds.map((id) =>(
            <img src={getImg(id)}
                ></img>
        ))}
    </div>

    )
};

export default FiveStartsRating;
