import { useEffect, useState } from "react"
import Button from "./Button"
import axios from 'axios'
import { useNavigate } from "react-router-dom"

export default function Users() {

      const [users, setUsers] = useState([])
      const [filter, setFilter] = useState('')

      useEffect(() => {
            DeboucedGetUsers()
      },[filter])

      let timeout
      function DeboucedGetUsers() {
            clearTimeout( timeout )
            timeout = setTimeout(() => GetUsers(),700)
      }

      function GetUsers() {
            axios.get('http://localhost:3000/api/v1/user/bulk?filter=' + filter)
                  .then( response => setUsers( response.data.user ) )
      }


console.log(filter)

      return <div>
            <div className="font-bold mt-5 text-lg">
                  Users
            </div>
            <div className="my-2">
                  <input onChange={(e) => setFilter(e.target.value)} placeholder="Search users..." className="w-full px-2 py-1 border rounded border-slate-200" />
            </div>
            <div>
                  { users.map( user => <User user={user} key={user._id}/> )}
            </div>
      </div>
}

function User({ user }) {
      const navigate = useNavigate()

      return <div className="flex justify-between">
            <div className="flex">
                  <div className="bg-slate-200 rounded-full h-12 w-12 flex justify-center mt-1 mr-2">
                        <div className="flex flex-col justify-center text-xl h-full">
                              { user.firstName[0] }
                        </div>
                  </div>
                  <div className="flex flex-col justify-center h-full">
                        <div>
                              {user.firstName} {user.lastName}
                        </div>
                  </div>
            </div>

            <div className="flex flex-col justify-center h-full">
                  <Button onClick={() => navigate(`/send?id=${user._id}&name=${user.firstName}`) } label={'Send Money'} />
            </div>
      </div>
}
