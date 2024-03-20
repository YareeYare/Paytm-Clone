import { useSearchParams } from "react-router-dom"
import axios from 'axios'
import { useState } from "react";
useSearchParams


const SendMoney = () => {

  const [searchParams] = useSearchParams();
  const id = searchParams.get('id')
  const name = searchParams.get('name')

  const [amount, setAmount] = useState(0)

  return <div className="flex justify-center h-screen bg-gray-100">
    <div className="flex flex-col justify-center h-full">
      <div className="border rounded-lg max-w-md p-4 w-96 bg-white shadow-lg h-min text-card-foreground ">
        <div className="flex justify-center p-6">
          <h2 className="text-3xl font-bold ">Send Money</h2>
        </div>

        <div className="p-6 space-y-5">
          <div className="flex items-center space-x-4">
            <div className="bg-green-500 h-12 w-12 rounded-full flex justify-center items-center">
              <div className="text-2xl text-white">{name[0].toUpperCase()}</div>
            </div>
            <h3 className="text-2xl font-semibold">
              {name}
            </h3>
          </div>

          <div className="space-y-4">
            <div className="space-y-2 flex flex-col">
              <label htmlFor="amount" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Amount (in Rs)
              </label>
              <input 
                onChange={ (e) => setAmount(e.target.value) }
                type="number"
                placeholder="Enter Amount"
                id="amount"
                className="flex border rounded-md bg-background px-3 py-2 text-sm w-full h-10 border-input"
              />
            </div>
            <button onClick={() => {
              axios.post('http://localhost:3000/api/v1/account/transfer', {
                to: id,
                amount: amount
              },{
                headers: {
                  Authorization: "Bearer " + localStorage.getItem('token')
                }
              })
            }} className="text-white text-sm rounded-md bg-green-500 w-full h-10 font-medium transition-colors ring-offset-background">
              Initiate Transfer
            </button>

          </div>
        </div>

      </div>
    </div>
  </div>
}

export default SendMoney