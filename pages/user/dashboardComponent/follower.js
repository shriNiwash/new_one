import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Follower = () =>{
    return(<>
    <Head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" />
    </Head>

    <div className="container">
        <div className="page-head">
            <h4 className="page-tittle">Follower List</h4>
            <ul className="page-subdomain">
                <li><a href=""><i className="fa fa-home"></i></a></li>
                <li><i className="fa fa-chevron-right"></i></li>
                <li> Follower Page </li>
                <li><i className="fa fa-chevron-right"></i></li>
                <li>  Followers</li>
            </ul>
        </div>
    </div>
    <div className="container">
        <div className="row">
            <div className="col-sm">
                <div className="subdomain">
                    <h4 className="subdomain-head">Followers</h4>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 setting-form">
                               <h3 className="follower-group">NO FOLLOWER FOUND</h3>
                            </div>
                        </div>
                        <div className="color-card">
                            <div className="row">
                                
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>

    <footer className="footer-type">
        <div className="container-fluid">
            <div className="setting-footer">Copyright © 2021. All rights reserved by Sasso.</div>
        </div>
    </footer>
   
   </>)
}
export default Follower;