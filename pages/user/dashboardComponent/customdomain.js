import Head from "next/head"
const Customdomain = () => {
    return (<>
    <Head>
    <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" />
        <title>Profilex - User Dashboard-edit profile</title>
    </Head>
    <div className="domain-page-inner">
        <div className="domain-page-header">
            <h4 className="domain-page-title">Custom Domain</h4>
            <ul className="breadcrumbs">
                <li className="nav-home">
                    <a>
                      <i className="fa fa-home"></i>
                    </a>
                </li>
                <li className="nav-separator">
                    <a>
                      <i className="fas fa-angle-right"></i>
                    </a>
                </li>
                <li className="nav-item">
                    <a>
                      Domain&URLs
                    </a>
                </li>
                <li className="nav-separator">
                    <a>
                      <i className="fas fa-angle-right"></i>
                    </a>
                </li>
                <li className="nav-item">
                    <a>
                     CustomDomain
                    </a>
                </li>
            </ul>
        </div>
        <div className="row">
            <div className="col-md-12">
                <div className="domain-card">
                    <div className="domain-card-header ">
                        <div className="row">
                            <div className="col-lg-4">
                                 <div className="domain-card-title">Custom Domain </div>
                            </div>
                            <div className="offset-lg-4 col-lg-4 Dtext-right">
                                <button className="btn btn-primary">Requested Custom Domain</button>
                            </div>
                        </div>
                      </div>
                      <div className="domain-card-body">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="domain-table-responsive">
                                    <table className="table borderless mt-3">
                                        <thead className="mt-3" >
                                            <tr>
                                              <th scope="col">Requested Domain</th>
                                              <th scope="col">Current Domain</th>
                                            </tr>
                                          </thead>
                                        <tbody className="t-bd mt-5">
                                            <tr>
                                              <td>-</td>
                                              <td>
                                                <a >romario.com</a>
                                              </td>
                                            </tr>
                                          </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                      </div>
                </div>
                <div className="domain-card">
                    <div className="domain-card-header">
                        <h4 className="domain-card-title"><strong>Read Before Sending Custom Domain Request</strong></h4>
                    </div>
                    <div className="domain-card-body">
                        <ul className="text-domain">
                            <li>
                                <span>Before sending request for your custom domain, You need to add CNAME records (given in below table) in your custom domain from your domain registrar account (like - namecheap, godaddy etc...).</span>
                            </li>
                            <li>
                                <span> CNAME records are needed to point your custom domain to our domain ( sassotest.xyz ), so that our website can show your website on your custom domain</span>
                            </li>
                            <li>
                                <span> Different domain registrar (like - godaddy, namecheap etc...) has different interface for adding CNAME records. If you cannot find the place to add CNAME record in your domain registrar account, then please contact your domain registrar support, they will show you the place to add CNAME record for your custom domain. They can also help you with adding CNAME record for you.</span>
                            </li>
                        </ul>
                        <p>
                            <span>Add CNAME records (take data from below table) in your custom domain from your domain registrar panel:</span>
                        </p>
                        <table className="table table-bordered mx-10">
                            <tbody >
                                <tr>
                                    <td>Type</td>
                                    <td>Host</td>
                                    <td>Value</td>
                                    <td>TTL</td>
                                </tr>
                                <tr>
                                    <td>CNAME Record</td>
                                    <td>Host</td>
                                    <td>sassotest.xyz.</td>
                                    <td>Automatic</td>
                                </tr>
                                <tr>
                                    <td>CNAME Record</td>
                                    <td>@</td>
                                    <td>sassotest.xyz.</td>
                                    <td>Automatic</td>
                                </tr>
                            </tbody>
                        </table>
                        <p>
                            <span>
                                <b>Screenshots for Example Purpose:</b>
                                {/* <img alt=""> */}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
       
    </div>

    </>)

}
export default Customdomain;