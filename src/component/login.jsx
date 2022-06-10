import React from 'react'
import {useForm} from "react-hook-form"
import { useNavigate } from 'react-router-dom';


export default function Login() {

    
    let {register , handleSubmit , formState: { errors } } = useForm()
    let nav = useNavigate();
    
    let emailRef = register("email",{required:true,pattern:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i});
    let PasswordRef = register("password",{ required:true, minLength:3});
    


    const onSub = (_dataBody)=>{
        console.log(_dataBody);
        doApi(_dataBody);
    
    
    }

    const doApi = async(_dataBody)=>{
        let url = "http://localhost:3011/users/login"

        let resp = await fetch(url, {
          method:"POST",
          body:JSON.stringify(_dataBody),
          headers: { 'content-type': "application/json"
         }
        
        })
        let data = await resp.json();
        console.log(data);
        if(data.token){
            nav("/market");
        }

    }
    
    

    return (
        <div className='container'>
            
            <form onSubmit={handleSubmit(onSub)} className='col-md-6 shadow p-3'>
            <h2 className='text-center'>Login</h2>
            <label>Email:</label>
            <input {...emailRef} type="text" className='form-control' />
            {errors.email && <small className='d-block text-danger'>Enter valid email, min 3 chars</small>}
            
            <label>Password:</label>
            <input {...PasswordRef} type="text" className='form-control' />
            {errors.Password && <small className='d-block text-danger'>Enter valid passowrd, min 3 chars</small>}
            <div className='my-3'>
                <button className='btn btn-danger '>Login</button>
            </div>
            </form>
        </div>
    )
        
}
