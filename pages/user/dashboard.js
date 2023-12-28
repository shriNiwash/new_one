
import Dash from "./dashboardComponent/dash";
import Layout from "../../components/layout";
import Cookies from "js-cookie";
// import { useRouter } from "next/router";
import Link from "next/link";

const Dashboard = () => {
  const token = Cookies.get("token");
  const data = "shri";
  // const router = useRouter();

  if(data)
  {
    return (
  
      <Layout>
        <Dash />
      </Layout>)
  }
  else{
    return(<>
    <div style={{justifyContent:"center",textAlign:"center",background:"red"}}>
      <h1>You arenot Authorized. Please Login first.</h1>
      <Link href="/login" legacyBehavior><a style={{fontSize:"35px"}}>Log-In</a></Link>
    </div>
    </>)
  }


}

export default Dashboard;