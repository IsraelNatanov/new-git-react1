import React, { useEffect, useState } from 'react'
import axios from 'axios';
import MarketItem from './marketItem';
export default function MarketList() {

    let [ar, setAr]= useState([]);
    let [loading, setLoading]= useState(false);

    useEffect(()=>{
        doApi();
    },[])

    const doApi=async()=>{
        setLoading(true);
        let url= "https://fakestoreapi.com/products";
        let resp = await axios.get(url);
        setAr(resp.data)
        setLoading(false);

    }
    return (
    <div className='container'>
        <h2>My market:</h2>
        {loading?
        <div className='text-center'>
            <img src="/img/Loading_icon.gif" width="500" alt='loading'/>
        </div>
        :""
        }
           <div className="row">
               {ar.map(item => {
                    return (
                       <MarketItem key={item.id} item={item}/>
                       )
                    })}
           </div>
    </div>
  )
}
