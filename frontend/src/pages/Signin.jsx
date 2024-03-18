import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import InputBox from '../components/InputBox'
import Button from '../components/Button'
import BottomWarning from '../components/BottomWarning'

const Signin = () => {
  return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 h-max text-center p-2 px-4 ">
        <Heading label='Sign In' />
        <SubHeading label='Enter your credentials to access your account' />
        <InputBox label='Email' placeholder='mehul@gmail.com' />
        <InputBox label='Password' placeholder='123456' />
        <Button label='Sign In'/>
        <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"}/>
      </div>
    </div>
  </div>
  
}

export default Signin