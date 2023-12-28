import Head from "next/head"
import Image from "next/image"
const profiles = () => {
  return (
    <>
      <Head>
      <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
         <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"/>
      </Head> 


        <div className="container">
            <div className="filter-search">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="box-search">
                            <input type="text" className="form_control" placeholder="Search by first name, last name, username" value="search" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </>  
  )
}

export default profiles
