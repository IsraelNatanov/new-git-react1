import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom';


export default function MarketInfo() {

    let [product, setProduct]= useState([]);
    let [loading, setLoading]= useState(false);
    let params = useParams();

    useEffect(()=>{
        doApi();
    },[])

    const doApi=async()=>{
        setLoading(true);
       
        let url= "https://fakestoreapi.com/products/"+params.id;
        let resp = await axios.get(url);
        console.log(resp.data)
        setProduct(resp.data)
        setLoading(false)

    }
    return (
       <div className='container text-center my-4'>
           {loading?
               <div className='text-center'>
                   <img src="/img/Loading_icon.gif" width="500" alt='loading'/>
                </div>:
                <article>
         
                    <img src={product.image} alt={product.title} className="col-md-2"/>
                    <h2>{product.title}</h2>
                    <h4>Price:{product.price}</h4>
                    <h4>Category:{product.category}</h4>
                    <h4>Rating:{product.rating?.rate}</h4>
                    <p>{product.description}</p>
                    <Link to="/market">Back to list</Link>
                </article>}
        </div>
           )
}
