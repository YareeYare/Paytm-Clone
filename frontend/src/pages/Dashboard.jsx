import AppBar from "../components/AppBar";
import Balance from "../components/Balance";
import Users from "../components/Users";

export default function Dashboard() {
  return <div>
    <AppBar />
    <div className="flex flex-col mx-8">
      <Balance value={'23,000'}/>
      <Users />
    </div>
  </div>
}
