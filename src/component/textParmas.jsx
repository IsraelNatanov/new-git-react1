import React from 'react'
import { useParams } from 'react-router-dom'

export default function TextParmas() {
    let params = useParams();
  return (
    <div className='container'>
        <h2>{params.id}</h2>
    </div>
  )
}
