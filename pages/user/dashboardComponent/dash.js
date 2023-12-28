import Head from "next/head";
import Image from "next/image";
import Script from "next/script";


const Dash = () => {
    return (<>
        <Head>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" />
        </Head>



        {/* <!-- first part --> */}
        <div className="page_innerdatas">

            <div className="container first-page">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="card-body first-card">
                            <div className="row">
                                <div className="col-5">
                                    <div className="icon-bigger">
                                        <i className="fas fa-cogs"></i>
                                    </div>
                                </div>
                                <div className="col-7 col-stats">
                                    <div className="numbers">
                                        <p className="card-category-a">Skills</p>
                                        <h4 className="card-title-a">3</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card-body" id="card-warning">
                            <div className="row">
                                <div className="col-5">
                                    <div className="icon-big">
                                        <i className="fas fa-address-card"></i>
                                    </div>
                                </div>
                                <div className="col-7 col-stats">
                                    <div className="numbers">
                                        <p className="card-category">Portfolios</p>
                                        <h4 className="card-title">6</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-4">
                        <div className="card-body" id="card-info">
                            <div className="row">
                                <div className="col-5">
                                    <div className="icon-big">
                                        <i className="fas fa-user-shield"></i>
                                    </div>
                                </div>
                                <div className="col-7 col-stats">
                                    <div className="numbers">
                                        <p className="card-category">Services</p>
                                        <h4 className="card-title">6</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* <!-- second part --> */}

            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="card-body" id="card-primary">
                            <div className="row">
                                <div className="col-5">
                                    <div className="icon-big">
                                        <i className="far fa-comment"></i>
                                    </div>
                                </div>
                                <div className="col-7 col-stats">
                                    <div className="numbers">
                                        <p className="card-category">Testimonials</p>
                                        <h4 className="card-title">4</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-sm-4">
                        <div className="card-body" id="card-success">
                            <div className="row">
                                <div className="col-5">
                                    <div className="icon-big">
                                        <i className="fas fa-file-alt"></i>
                                    </div>
                                </div>
                                <div className="col-7 col-stats">
                                    <div className="numbers">
                                        <p className="card-category">Blogs</p>
                                        <h4 className="card-title">6</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-sm-4">
                        <div className="card-body" id="card-danger">
                            <div className="row">
                                <div className="col-5">
                                    <div className="icon-big">
                                        <i className="fas fa-book"></i>
                                    </div>
                                </div>
                                <div className="col-7 col-stats">
                                    <div className="numbers">
                                        <p className="card-category">Job Experiences</p>
                                        <h4 className="card-title">3</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- third part --> */}

            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="card-body" id="card-secondary">
                            <div className="row">
                                <div className="col-5">
                                    <div className="icon-big">
                                        <i className="fas fa-book"></i>
                                    </div>
                                </div>
                                <div className="col-7 col-stats">
                                    <div className="numbers">
                                        <p className="card-category">Achievements</p>
                                        <h4 className="card-title">4</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-sm-4">
                        <div className="card-body" id="card-default">
                            <div className="row">
                                <div className="col-5">
                                    <div className="icon-big">
                                        <i className="fas fa-book"></i>
                                    </div>
                                </div>
                                <div className="col-7 col-stats">
                                    <div className="numbers">
                                        <p className="card-category">Followers</p>
                                        <h4 className="card-title">0</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card-body" id="card-primary">
                            <div className="row">
                                <div className="col-5">
                                    <div className="icon-big">
                                        <i className="fas fa-book"></i>
                                    </div>
                                </div>
                                <div className="col-7 col-stats">
                                    <div className="numbers">
                                        <p className="card-category">Followings</p>
                                        <h4 className="card-title">5</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- table --> */}


            <div className="card-body-a">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="dataset">
                                <h4 className="dashboard-head">Recent Payment Logs</h4>
                                <h6 className="dashboard-tittle">10 latest payment logs</h6>
                                <div className="karan">
                                    <div className="table-responsive">
                                        <table className="table  table-striped mt-3" id="shri-table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Transaction Id</th>
                                                    <th scope="col">Amount</th>
                                                    <th scope="col">Payment Status</th>
                                                    <th scope="col">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>76b77138</td>
                                                    <td>$19</td>
                                                    <td>success</td>
                                                    <td className="td-data"><a><button type="button" className="btn btn-primary"><span>Detail</span></button></a></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="dataset">
                                <h4 className="dashboard-head">Latest Followings</h4>
                                <h6 className="dashboard-tittle">10 latest followings</h6>
                                <div className="karan">
                                    <div className="table-responsive">
                                        <table className="table table-striped  mt-3 " id="shri-table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Image</th>
                                                    <th scope="col">UserName</th>
                                                    <th scope="col">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Mark</td>
                                                    <td>Immobile</td>
                                                    <td className="td-data"><a><button type="button" className="btn btn-primary"><i
                                                        className="fa fa-eye"></i><span>View</span></button></a>
                                                        <a><button type="button" className="btn btn-danger"><span>Unfollow</span>
                                                        </button></a></td>
                                                </tr>
                                                <tr>
                                                    <td>Jacob</td>
                                                    <td>Rakitic</td>
                                                    <td className="td-data"><a><button type="button" className="btn btn-primary"><i
                                                        className="fa fa-eye"></i><span>View</span></button></a>
                                                        <a><button type="button" className="btn btn-danger"><span>Unfollow</span>
                                                        </button></a></td>
                                                </tr>
                                                <tr>
                                                    <td>Larry the Bird</td>
                                                    <td>pooja</td>
                                                    <td className="td-data"><a><button type="button" className="btn btn-primary"><i
                                                        className="fa fa-eye"></i>View</button></a> <a><button
                                                            type="button" className="btn btn-danger"><span>Unfollow</span>
                                                        </button></a></td>

                                                </tr>
                                                <tr>
                                                    <td>Larry the Bird</td>
                                                    <td>Berrardi</td>
                                                    <td className="td-data"><a><button type="button" className="btn btn-primary"><i
                                                        className="fa fa-eye"></i>View</button></a> <a><button
                                                            type="button" className="btn btn-danger"><span>Unfollow</span>
                                                        </button></a></td>

                                                </tr>
                                                <tr>
                                                    <td>Larry the Bird</td>
                                                    <td>veratti</td>
                                                    <td className="td-data"><a><button type="button" className="btn btn-primary"><i
                                                        className="fa fa-eye"></i>View</button></a> <a><button
                                                            type="button" className="btn btn-danger"><span>Unfollow</span>
                                                        </button></a></td>

                                                </tr>
                                                <tr>
                                                    <td>Larry the Bird</td>
                                                    <td>chiesa</td>
                                                    <td className="td-data"><a><button type="button" className="btn btn-primary"><i
                                                        className="fa fa-eye"></i>View</button></a> <a><button
                                                            type="button" className="btn btn-danger"><span>Unfollow</span>
                                                        </button></a></td>

                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            {/* <!-- footer --> */}

            <footer className="footer">
                <div className="container-fluid">
                    <div className="setting-footer">Copyright © 2021. All rights reserved by Sasso.</div>
                </div>
            </footer>

        </div>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
        ></Script>

    </>)
}
export default Dash;