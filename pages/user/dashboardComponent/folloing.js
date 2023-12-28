import Head from "next/head";
import Image from "next/image";

const Folloing = () => {
    return (<>
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
                    <li> Followers</li>
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
                                <div className="col-sm">

                                    <div className="table-responsive">
                                        <table className="table table-light table-striped  mt-3 " id="shri-table">
                                            <thead>
                                                <tr className="folloing-group">
                                                    <th scope="col">Image</th>
                                                    <th scope="col">UserName</th>
                                                    <th scope="col">Email</th>
                                                    <th scope="col">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="folloing-group">
                                                    <td ><Image src="/folloing/k1.jpg" width={80} height={80} alt="userpic" /></td>
                                                    <td>Otto</td>
                                                    <td>poojakushwaha@gmail.com</td>
                                                    <td className="td-data"><a><button type="button"
                                                        className="btn btn-primary"><i
                                                            className="fa fa-eye"></i><span>View</span></button></a>
                                                        <a><button type="button"
                                                            className="btn btn-danger"><span>Unfollow</span>
                                                        </button></a>
                                                    </td>
                                                </tr>
                                                <tr className="folloing-group">
                                                    <td ><Image src="/folloing/k1.jpg" width={80} height={80} alt="userpic" /></td>
                                                    <td>Thornton</td>
                                                    <td>poojakushwaha@gmail.com</td>

                                                    <td className="td-data"><a><button type="button"
                                                        className="btn btn-primary"><i
                                                            className="fa fa-eye"></i><span>View</span></button></a>
                                                        <a><button type="button"
                                                            className="btn btn-danger"><span>Unfollow</span>
                                                        </button></a>
                                                    </td>
                                                </tr>
                                                <tr className="folloing-group">
                                                    <td ><Image src="/folloing/k1.jpg" width={80} height={80} alt="userpic" /></td>
                                                    <td>pooja</td>
                                                    <td>poojakushwaha@gmail.com</td>
                                                    <td className="td-data"><a><button type="button"
                                                        className="btn btn-primary"><i
                                                            className="fa fa-eye"></i>View</button></a>
                                                        <a><button type="button"
                                                            className="btn btn-danger"><span>Unfollow</span>
                                                        </button></a>
                                                    </td>

                                                </tr>
                                                <tr className="folloing-group">
                                                    <td ><Image src="/folloing/k1.jpg" width={80} height={80} alt="userpic" /></td>
                                                    <td>Pooja</td>
                                                    <td>poojakushwaha@gmail.com</td>
                                                    <td className="td-data"><a><button type="button"
                                                        className="btn btn-primary"><i
                                                            className="fa fa-eye"></i>View</button></a>
                                                        <a><button type="button"
                                                            className="btn btn-danger"><span>Unfollow</span>
                                                        </button></a>
                                                    </td>

                                                </tr>
                                                <tr className="folloing-group">
                                                    <td ><Image src="/folloing/k1.jpg" width={80} height={80} alt="userpic" /></td>
                                                    <td>Pooja</td>
                                                    <td>poojakushwaha@gmail.com</td>
                                                    <td className="td-data"><a><button type="button"
                                                        className="btn btn-primary"><i
                                                            className="fa fa-eye"></i>View</button></a>
                                                        <a><button type="button"
                                                            className="btn btn-danger"><span>Unfollow</span>
                                                        </button></a>
                                                    </td>

                                                </tr>
                                                <tr className="folloing-group">
                                                    <td ><Image src="/folloing/k1.jpg" width={80} height={80} alt="userpic" /></td>
                                                    <td>Pooja</td>
                                                    <td>poojakushwaha@gmail.com</td>
                                                    <td className="td-data"><a><button type="button"
                                                        className="btn btn-primary"><i
                                                            className="fa fa-eye"></i>View</button></a>
                                                        <a><button type="button"
                                                            className="btn btn-danger"><span>Unfollow</span>
                                                        </button></a>
                                                    </td>

                                                </tr>


                                            </tbody>
                                        </table>
                                    </div>


                                </div>
                                <script
                                    src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
                                    integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
                                    crossorigin="anonymous"></script>
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
export default Folloing;