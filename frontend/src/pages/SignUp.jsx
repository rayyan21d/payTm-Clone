import React from 'react'
import { useNavigate } from 'react-router-dom'

// function SignUp() {

//   const navigate = useNavigate();

//   const [username, setUsername] = React.useState('');
//   const [password, setPassword] = React.useState('');
//   const [firstName, setFirstName] = React.useState('');
//   const [lastName, setLastName] = React.useState('');



//   const handleSubmit = async function handleSubmit(event){

//     event.preventDefault();

    
//     // Here launch a post request and handle the signUp logic..
//     const body = {
//       username: username,
//       password: password,
//       firstName: firstName,
//       lastName: lastName
//     }

//     console.log('Body', body);

//     const response = await fetch('http://localhost:3000/api/v1/user/signup', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: await JSON.stringify(body)
//     });


//       const Resbody = await response.json();
//       if(response.status === 200){
//         console.log('User created successfully', Resbody);
//         // const jwtToken = Resbody.token;

//         // Store this as a cookie and send it back as authorization header for every fetch api call...



//         navigate('/dashboard');
        
//       }else{
//         console.log('Error creating user ', Resbody);
//         navigate('/error')
//       }

    

//   }


//   return (
//     <div className='grid justify-center shadow-lg rounded-lg '>
//      <div className=''>
//         <h2>Sign Up</h2>
//         <h3>Enter your information to create an account </h3>
//      </div>
      
//       <div>

//         <form>
//           <div>
//             <div>First Name</div>
//             <input type="text" onChange={(e)=>{setFirstName(e.target.value)}}/>
//           </div>
//           <div>
//             <div>Last Name</div>
//             <input type="text" onChange={(e)=>{setLastName(e.target.value)}}/>
//           </div>
//           <div>
//             <div>Email</div>
//             <input type="email" onChange={(e)=>{setUsername(e.target.value)}}/>
//           </div>
//           <div>
//             <div>Password</div>
//             <input type="password" onChange={(e)=>{setPassword(e.target.value); console.log(password)}}/>
//           </div>
//           <div>
//             <div>Confirm Password</div>
//             <input type="password" />
//           </div>
//           <button type="submit" onClick={handleSubmit}>Sign Up</button>
//         </form>

//       </div>


//     </div>
//   )
// }


import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"

export const Signup = () => {

  const navigate = useNavigate();


  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');

  const handleSubmit = async function handleSubmit(event){

    event.preventDefault();

    
    // Here launch a post request and handle the signUp logic..
    const body = {
      username: username,
      password: password,
      firstName: firstName,
      lastName: lastName
    }

    console.log('Body', body);

    const response = await fetch('http://localhost:3000/api/v1/user/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });


      const Resbody = await response.json();
      if(response.status === 200){
        console.log('User created successfully', Resbody);
        const jwtToken = Resbody.token;

        // Store this as a cookie and send it back as authorization header for every fetch api call...
        localStorage.setItem('token', jwtToken);


        navigate('/dashboard');
        
      }else{
        console.log('Error creating user ', Resbody);
        navigate('/error')
      }

    

  }




  return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign up"} />
        <SubHeading label={"Enter your infromation to create an account"} />
        <InputBox placeholder="John" label={"First Name"} onChange={(e)=>{setFirstName(e.target.value)}}/>
        <InputBox placeholder="Doe" label={"Last Name"} onChange={(e)=>{setLastName(e.target.value)}}/>
        <InputBox placeholder="example@email.com" label={"Email"} onChange={(e)=>{setUsername(e.target.value)}} />
        <InputBox placeholder="*****" label={"Password"} onChange={(e)=>{setPassword(e.target.value)}}/>
        <div className="pt-4">
          <Button label={"Sign up"} onClick={(event)=>{
            handleSubmit(event);
          }} />
        </div>
        <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
      </div>
    </div>
  </div>
}

export default Signup