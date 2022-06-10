import React from 'react'
import GoogleLogin from 'react-google-login'

export default function Google() {

    const responseSeuccessGoogle = (googleData) =>{
        console.log(googleData)

    }
    const responseErrorGoogle = (result) =>{
        alert(result)
        
    }

  return (
    <div className='text-center'>
        <h1>google</h1>
        <GoogleLogin
            clientId="627741638918-ea9m7tn05gcsbheq97lcffgcg8qqmkhj.apps.googleusercontent.com"
            buttonText="Login with google"
            onSuccess={responseSeuccessGoogle}
            onFailure={responseErrorGoogle}
            cookiePolicy={'single_host_origin'}
        />,
    </div>
    
  )
}
