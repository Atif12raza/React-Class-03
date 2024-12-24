import React from 'react'
const Card = ({id,title,price,img,description}) => {
  return (
    <div key={id} class="card ms-3 mb-3" style={{width: "18rem"}}>
    <img height='300px' src={img} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">{title}</h5>
      <p class="card-text">{description}</p>
      <h3>{price}</h3>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
    )
}

export default Card