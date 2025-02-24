import React from 'react'
type cardProps={
    src: string,
    name: string,
    desc: string,
    price: string
}

const CardBuy = ({src, name, desc, price}: cardProps) => {
  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={src}
      alt="car" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{desc}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">{price}</button>
    </div>
  </div>
</div>
  )
}

export default CardBuy