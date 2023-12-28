import axios from "axios";
import Layout from "../../components/layout";
import Table from "./dashboardcomponents/table";

export const getStaticProps = async()=>{
  const res = await fetch("http://localhost:4000/skills");
  const data = await res.json();
  // console.log(data);
  return{
    props:{
      data
    },
  }
}

const Skill = ({data}) => {
  // console.log(data);
  return (
  <Layout>
    <Table data={data}/>
  </Layout>)
}

export default Skill