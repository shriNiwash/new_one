import Head from "next/head"
import Image from "next/image"
const Editprofiles = () => {
    return (<>
    <Head>
    <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" />
        <title>Profilex - User Dashboard-edit profile</title>
    </Head>
            <div className="edit-page-header">
                <h4 className="edit-page-title">Edit Profile</h4>
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
                          Edit Profile
                        </a>
                    </li>
                </ul>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="edit-card">
                  <div className="edit-card-header ">
                    <div className="edit-card-title">Update Profile</div>
                  </div>
                  <div className="edit-card-body">
                    <div className="row">
                      <div className="col-lg-6 offset-lg-3">
                        <form action="">
                          <div className="row ">
                            <div className="col-g-12">
                              <div className="form-group">
                                <div className="col">
                                  <label htmlFor="image">
                                    <strong>Profile Image ***</strong>
                                  </label>
                                </div>
                                <div className="col-md-12 show-image">
                                {/* <Image src="dashboard/blogs/image3.jpg" width="300" height="250" className="blog-image" alt="image3"/> */}

                                  <Image src="/dashboard/editprofile/editiimg.jpg" width="300" height="250" alt="image" className="edit-image"/>
                                </div>
                                <input type="file" name="photo" id="image" className="form-control"/>
                              </div>
                            </div>
                            <div className="form-group">
                              <label>First Name **</label>
                              <input type="text" name="first_name" className="form-control" value="Romario"/>
                            </div>
                            <div className="form-group">
                              <label >Last Name **</label>
                              <input type="text" name="last_name"  className="form-control" value="Sara"/>
                            </div>
                            <div className="form-group">
                              <label>User Name **</label>
                              <input type="text" name="user_name" className="form-control" value="Romario"/>
                            </div>
                            <div className="form-group">
                              <label >Phone **</label>
                              <input type="number" name="number" className="form-control" value="1253447823"/>
                            </div>
                            <div className="form-group">
                              <label >Address **</label>
                              <textarea type="text" name="addres" className="form-control" cols="30" rows="10">CA ,USA</textarea>
                            </div>
                            <div className="form-group">
                              <label >City **</label>
                              <input type="text" name="citry"  className="form-control" value="CA"/>
                            </div>
                            <div className="form-group">
                              <label >State **</label>
                              <input type="text" name="state" id="" className="form-control" value="CA"/>
                            </div>
                            <div className="form-group">
                              <label >Country **</label>
                              <input type="text" name="country" id="" className="form-control" value="USA"/>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="edit-card-footer mt-3">
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
export default Editprofiles