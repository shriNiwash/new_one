import Layout from "../../components/layout";
import Blogcomponent from "./dashboardComponent/blogcomponent";

export const getServerSideProps = async()=>{
  const res = await fetch("http://localhost:4000/blogcategory");
  const data = await res.json();
  return{
    props:{
      data
    }
  }
}


const Blog_Categories = ({data}) => {
    return (
      <Layout>
        <Blogcomponent blogData={data} />
      </Layout>
    )
}

export default Blog_Categories;