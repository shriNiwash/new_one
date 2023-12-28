import AdminWebsiteLayout from "../../../../components/adminWebsiteLayout";
import Lists from "../../../userAdmin/lists";

export const getServerSideProps = async(context)=>{

  console.log(Number(context.query.regularList));
  const res = await fetch(`http://localhost:4000/package/${context.query.regularList}`);
  const data = await res.json();
  // console.log(data);
  return{
    props:{
      data
    },
  }
}

import React from 'react'

export default function RegularList({data}) {
  // console.log(data)
  return (<AdminWebsiteLayout>
    <Lists data={data}/>
  </AdminWebsiteLayout>)
  
}
