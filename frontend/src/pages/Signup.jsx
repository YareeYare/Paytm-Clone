import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import InputBox from '../components/InputBox'
import Button from '../components/Button'
import BottomWarning from '../components/BottomWarning'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Signup = () => {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 h-max text-center p-2 px-4 ">
        <Heading label='Sign Up' />
        <SubHeading label='Enter your information to create an account' />
        <InputBox label='First Name' placeholder='Mehul'
          onChange={ e => setFirstName(e.target.value) }
        />
        <InputBox label='Last Name' placeholder='Shakya'
          onChange={ e => setLastName(e.target.value) }
        />
        <InputBox label='Email' placeholder='mehul@gmail.com'
          onChange={ e => setUsername(e.target.value) }
        />
        <InputBox label='Password' placeholder='123456'
          onChange={ e => setPassword(e.target.value) }
        />
        <Button label='Sign Up' onClick={ async () => {
          const response = await axios.post('http://localhost:3000/api/v1/user/signup', {
            firstName,
            lastName,
            username,
            password
          })
          localStorage.setItem("token", response.data.token )
          navigate('/dashboard')
        }} />
        <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"}/>
      </div>
    </div>
  </div>
  
}

export default Signup