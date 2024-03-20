import { useState } from "react";
import AppBar from "../components/AppBar";
import Balance from "../components/Balance";
import Users from "../components/Users";
import axios from "axios";

export default function Dashboard() {

  const [value, setValue] = useState(0)

  axios.get('http://localhost:3000/api/v1/account/balance',{
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token')
    }
  }).then( response => setValue(response.data.balance) )

  return <div>
    <AppBar />
    <div className="flex flex-col mx-8">
      <Balance value={value}/>
      <Users />
    </div>
  </div>
}
