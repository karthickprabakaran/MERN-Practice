import React from "react";

import { CORE_CONCEPTS } from "../assets/data.js";

export default function Coreconcept({image,title,description}){
  return (

    <li>
      <h3>{title}</h3>
      <p>{description}</p>
      <img src={image} alt="" />
    </li>
  );
}

