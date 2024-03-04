import React, { useEffect } from 'react'
import { Appbar } from '../components/Appbar'
import { Heading } from '../components/Heading'
import { Users } from '../components/Users'
function Dashboard() {

  const [balance, setBalance] = React.useState('');

  useEffect(() => {
    fetch('http://localhost:3000/api/v1/account/balance', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    }).then(
      async (response) => {

        const Resbody = await response.json();

        if (response.status === 400) {
          console.log('Users Data Fetch Unsuccessful');
        }else{
          console.log('Users Data Fetch Successful', Resbody);
          setBalance(Math.round(Resbody.balance));
        }


      }
    );
  }, [])




  return (
    <div className='grid px-10'>
      <div>
        <Appbar />
      </div>
      <div>
        <Heading label={"Your Balance is "+ balance}/>
      </div>
    
      <div>
        <Users/>
      </div>
      
    </div>
  )
}




export default Dashboard