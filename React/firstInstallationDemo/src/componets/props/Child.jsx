import React from 'react'
import PropsIntro from './PropsIntro'

const Child = (props) => {
    console.log(props);
  return (
    <div>
      
      <h1>Products</h1>
      <ul>
        {props.val.map((product) => (
          <li key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <img src={product.image} alt={product.title} width="100" />
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Child;