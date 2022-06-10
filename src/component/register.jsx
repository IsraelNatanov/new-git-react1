import React from 'react'
import {useForm} from "react-hook-form"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Register() {
   
  let {register, getValues, handleSubmit , formState: { errors } } = useForm()
  let nav = useNavigate();
  
  let nameRef = register("name",{ required:true, minLength:3});
  let emailRef = register("email",{required:true,pattern:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i});
  let PasswordRef = register("password",{ required:true, minLength:3});
  let Password2Ref = register("password2",{ required:true, validate: value => value == getValues("password")});
 
 

  


  const onSub = (_dataBody)=>{
      
      delete _dataBody.password2;
      console.log(_dataBody);
      doApi(_dataBody);
  
  
  }

  const doApi = async(_dataBody)=>{
      let url = "http://localhost:3011/users"

      let resp = await axios.post(url, _dataBody);
      console.log(resp.data);
      if(resp.data._id){
        alert("users added to the system");
      // משגר אותו לכתובת שנכניס
     
        window.document.location = "/login"
      }
      console.log(data);
      

  }
  
  

  return (
      <div className='container'>
          
          <form onSubmit={handleSubmit(onSub)} className='col-md-6 shadow p-3'>
          <h2 className='text-center'>create Account</h2>
          <label>Name:</label>
          <input {...nameRef} type="text" className='form-control' />
          {errors.name && <small className='d-block text-danger'>Enter valid email, min 3 chars</small>}
          <label>Email:</label>
          <input {...emailRef} type="text" className='form-control' />
          {errors.email && <small className='d-block text-danger'>Enter valid email, min 3 chars</small>}
          
          <label>Password:</label>
          <input {...PasswordRef} type="text" className='form-control' />
          {errors.Password && <small className='d-block text-danger'>Enter valid passowrd, min 3 chars</small>}
         

          <label>Confirm Password:</label>
          <input {...Password2Ref} type="text" className='form-control' />
          {errors.Password2 && <small className='d-block text-danger'>passowrd not eqoul</small>}
          <div className='my-3'>
              <button className='btn btn-danger'>register</button>
          </div>
          </form>
      </div>
  )
}
