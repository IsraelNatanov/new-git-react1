import React from 'react'
import { Link } from 'react-router-dom';

export default function MarketItem(props) {
    let item = props.item;
    return (
           <div className='col-md-4 border p-2'>
               <img src={item.image} alt={item.title} 
               className="w-25 float-start me-2" />
               <h3>{item.title}</h3>
               <h4 className='h6'>Price: {item.price} USD</h4>
               <Link className='btn btn-dark' to={"/market/"+item.id}>More info</Link>
            </div>
    )

}
