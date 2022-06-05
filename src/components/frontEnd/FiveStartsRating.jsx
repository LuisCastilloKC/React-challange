import React, { useState } from "react";

const EMPTY_STAR =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Five-pointed_star.svg/1088px-Five-pointed_star.svg.png";
const FULL_STAR =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/1200px-Gold_Star.svg.png";

const FiveStartsRating = () => {

    const StartIds = [1,2,3,4,5];

    const [hovered, setHovered] = useState(0)
    const [clicked, setClicked] = useState(0)

    return( 
    <div>

    </div>

    )
};

export default FiveStartsRating;
