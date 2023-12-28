import Head from "next/head"
import Image from "next/image"
const Changepassword = () => {
    return (<>
    <Head>
    <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" />
        <title>Profilex - User Dashboard-changepass profile</title>
    </Head>
    
            <div className="changepass-page-header">
                <h4 className="changepass-page-title">Password</h4>
                <ul className="breadcrumbs">
                    <li className="nav-home">
                        <a>
                          <i className="fa fa-home"></i>
                        </a>
                    </li>
                    <li className="nav-separator">
                        <a>
                          <i className="fas fa-angle-right"> </i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a>
                        Profile Settings
                        </a>
                    </li>
                    <li className="nav-separator">
                        <a>
                          <i className="fas fa-angle-right"> </i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a>
                        Password
                        </a>
                    </li>
                </ul>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="changepass-card">
                  <div className="changepass-card-header ">
                    <div className="changepass-card-title">Update Password</div>
                  </div>
                  <div className="changepass-card-body">
                    <div className="row">
                      <div className="col-lg-6 offset-lg-3">
                        <form action="">
                          <div className="row ">
                           
                            <div className="form-group">
                              <label for>Current Password</label>
                              <input type="text" name="first_name" className="form-control" value="" placeholder="Your curnet password"/>
                            </div>
                            <div className="form-group">
                              <label for>New Password</label>
                              <input type="text" name="last_name"  className="form-control" value=""  placeholder="New Password"/>
                            </div>
                            <div className="form-group">
                              <label for>New Password Again</label>
                              <input type="text" name="user_name" className="form-control" value=""  placeholder="New Password Again"/>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="changepass-card-footer mt-3">
                    <form action="">
                      <div className="form-group">
                        <div className="col-md-12 btn-center">
                          <button type="submit" id="btn-submit" className="btn btn-success">Update</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          
    </>)
}
export default Changepassword