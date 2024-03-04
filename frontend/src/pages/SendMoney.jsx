import { useSearchParams, useNavigate } from "react-router-dom";
import React from "react";

const SendMoney = () => {
    const navigate = useNavigate();

    const [searchParams] = useSearchParams();

    const id = searchParams.get("id");
    const name = searchParams.get("name");
    const [amount, setAmount] = React.useState('');


    const handleSubmit = async function(event){

        event.preventDefault();
        const payLoad = {
            to: id,
            amount: amount
        }

        // Set headers from the Auth token and then launch the fetch request..
        const response = await fetch("http://localhost:3000/api/v1/account/transfer", {
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
            body: JSON.stringify(payLoad)

        })

        const parsedRes = await response.json()

        console.log(parsedRes);
        if(parsedRes.status===400){
            // Show Error code or Transaction failed or Balance low messages
            console.log("error has occured");

        }else{

            // Transaction Successfull message display
            console.log("Payment successfull")
            navigate('/dashboard');



        }

    }


    return <div className="flex justify-center h-screen bg-gray-100">
        <div className="h-full flex flex-col justify-center">
            <div
                className="border h-min text-card-foreground max-w-md p-4 space-y-8 w-96 bg-white shadow-lg rounded-lg"
            >
                <div className="flex flex-col space-y-1.5 p-6">
                <h2 className="text-3xl font-bold text-center">Send Money</h2>
                </div>
                <div className="p-6">
                <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                    <span className="text-2xl text-white">A</span>
                    </div>
                    <h3 className="text-2xl font-semibold">{name}</h3>
                </div>
                <div className="space-y-4">
                    <div className="space-y-2">
                    <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        
                    >
                        Amount (in Rs)
                    </label>
                    <input
                        type="number"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                        id="amount"
                        placeholder="Enter amount"
                        onChange={(e)=>{setAmount(e.target.value)}}
                    />
                    </div>
                    <button onClick={handleSubmit}
                    className="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-green-500 text-white">
                        Initiate Transfer
                    </button>
                </div>
                </div>
        </div>
      </div>
    </div>
}


export default SendMoney;