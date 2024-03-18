import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import InputBox from '../components/InputBox'
import Button from '../components/Button'
import BottomWarning from '../components/BottomWarning'

const Signup = () => {
  return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 h-max text-center p-2 px-4 ">
        <Heading label='Sign Up' />
        <SubHeading label='Enter your information to create an account' />
        <InputBox label='First Name' placeholder='Mehul' />
        <InputBox label='Last Name' placeholder='Shakya' />
        <InputBox label='Email' placeholder='mehul@gmail.com' />
        <InputBox label='Password' placeholder='123456' />
        <Button label='Sign Up'/>
        <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"}/>
      </div>
    </div>
  </div>
  
}

export default Signup