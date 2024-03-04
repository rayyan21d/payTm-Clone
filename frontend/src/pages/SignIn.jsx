import React from 'react'
import { useNavigate } from 'react-router-dom'

// function SignIn() {

  
//   const navigate = useNavigate();
  
//   const [username, setUsername] = React.useState('');
//   const [password, setPassword] = React.useState('');

//   const handleSubmit = async function handleSubmit(event){

//     event.preventDefault();

    
//     // Here launch a post request and handle the signUp logic..
//     const body = {
//       username: username,
//       password: password,
//     }

//     console.log('Body', body);

//     const response = await fetch('http://localhost:3000/api/v1/user/signin', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: await JSON.stringify(body)
//     });


//       const Resbody = await response.json();
//       if(response.status === 200){
//         console.log('User SignIn successful', Resbody);
//         // const jwtToken = Resbody.token;

//         // Store this as a cookie and send it back as authorization header for every fetch api call...
//         navigate('/dashboard');
        
//       }else{
//         console.log('Error SignIning in ', Resbody);
//         navigate('/error')
//       }

    

//     }

  
//   return (
//      <div>
//      <div>
//         <h1>Sign In</h1>
//         <h3>Enter your information to create an account </h3>
//      </div>
      
//       <div>

//         <form>
         
//           <div>
//             <div>Email</div>
//             <input type="email" onChange={(e)=>{setUsername(e.target.value)}}/>
//           </div>
//           <div>
//             <div>Password</div>
//             <input type="password" onChange={(e)=>{setPassword(e.target.value); console.log(password)}}/>
//           </div>
         
//           <button type="submit" onClick={handleSubmit}>Sign Up</button>
//         </form>

//       </div>

//       <div>
//         <p>Don't have an account? <a href="/signup">Sign Up</a></p>
//       </div>


//     </div>
//   )
// }

import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"

export const Signin = () => {

  const navigate = useNavigate();
  
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = async function handleSubmit(event){

    event.preventDefault();

    
    // Here launch a post request and handle the signUp logic..
    const body = {
      username: username,
      password: password,
    }

    console.log('Body', body);

    const response = await fetch('http://localhost:3000/api/v1/user/signin', 
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: await JSON.stringify(body)
    });


    const Resbody = await response.json();
    if(response.status === 200){
        console.log('User SignIn successful', Resbody);
        const jwtToken = Resbody.token;

        localStorage.setItem('token', jwtToken);

        // Store this as a cookie and send it back as authorization header for every fetch api call...
        navigate('/dashboard');
        
    }else{
        console.log('Error SignIning in ', Resbody);
        navigate('/error')
    }

    

    
  }


  


  return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign in"} />
        <SubHeading label={"Enter your credentials to access your account"} />
        <InputBox placeholder="example@email.com" label={"Email"} onChange={(e)=>{setUsername(e.target.value)}}/>
        <InputBox placeholder="****" label={"Password"} onChange={(e)=>{setPassword(e.target.value)}} />
        <div className="pt-4">
          <Button label={"Sign in"} onClick={handleSubmit}/>
        </div>
        <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
      </div>
    </div>
  </div>
}

export default Signin