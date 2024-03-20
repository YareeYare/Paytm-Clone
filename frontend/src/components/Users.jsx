import { useState } from "react"
import Button from "./Button"

export default function Users() {

      const [users, setUsers] = useState([{
            firstName: 'Mehul',
            lastName: 'Shakya',
            _id: 1
      }])

      return <div>
            <div className="font-bold mt-5 text-lg">
                  Users
            </div>
            <div className="my-2">
                  <input placeholder="Search users..." className="w-full px-2 py-1 border rounded border-slate-200" />
            </div>
            <div>
                  { users.map( user => <User user={user} /> )}
            </div>
      </div>
}

function User({ user }) {
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
                  <Button label={'Send Money'} />
            </div>
      </div>
}
