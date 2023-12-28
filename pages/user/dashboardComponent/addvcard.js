import Head from "next/head";
import Image from "next/image";
const Addvcard = () => {
  return (
    <>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
        />
        <title>Profilex - User Dashboard-changepass profile</title>
      </Head>
      <div className="addvcard-page-inner">
        <div className="addvcard-page-header">
          <h4 className="addvcard-page-title">Add vCard</h4>
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
              <a>vCards Management</a>
            </li>
            <li className="nav-separator">
              <a>
                <i className="fas fa-angle-right"> </i>
              </a>
            </li>
            <li className="nav-item">
              <a>Add vCard</a>
            </li>
          </ul>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="addvcard-card">
              <div className="addvcard-card-header ">
                <div className="addvcard-card-title">Add vCard</div>
              </div>
              <div className="addvcard-card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="row">
                      <div className="col-12">
                        <div className="form-group">
                          <label className="label-form">
                            Choose a Template
                          </label>
                          <div className="row">
                            <div className="col-2">
                              <label className="imagecheck mb-4">
                                <input type="radio" value="1" className="check-image"checked />
                                <figure className="check-imagefigure">
                                  <Image
                                    src="/dashboard/addcard/asset 2.jpeg"
                                    width={137}
                                    height={240}
                                  />
                                </figure>
                              </label>
                            </div>
                            <div className="col-2">
                              <label className="imagecheck mb-4">
                                <input type="radio" value="2" className="check-image" />
                                <figure className="check-imagefigure">
                                  <Image
                                    src="/dashboard/addcard/asset 3.jpeg"
                                    width={137}
                                    height={240}
                                  />
                                </figure>
                              </label>
                            </div>
                            <div className="col-2">
                              <label className="imagecheck mb-4">
                                <input type="radio" value="3" className="check-image" />
                                <figure className="check-imagefigure">
                                  <Image
                                    src="/dashboard/addcard/asset 4.jpeg"
                                    width={137}
                                    height={240}
                                  />
                                </figure>
                              </label>
                            </div>
                            <div className="col-2">
                              <label className="imagecheck mb-4">
                                <input type="radio" value="4" className="check-image" />
                                <figure className="check-imagefigure">
                                  <Image
                                    src="/dashboard/addcard/asset 5.jpeg"
                                    width={137}
                                    height={240}
                                  />
                                </figure>
                              </label>
                            </div>
                            <div className="col-2">
                              <label className="imagecheck mb-4">
                                <input type="radio" value="5" className="check-image" />
                                <figure className="check-imagefigure">
                                  <Image
                                    src="/dashboard/addcard/asset 6.jpeg"
                                    width={137}
                                    height={240}
                                  />
                                </figure>
                              </label>
                            </div>
                            <div className="col-2">
                              <label className="imagecheck mb-4">
                                <input type="radio" value="6" className="check-image" />
                                <figure className="check-imagefigure">
                                  <Image
                                    src="/dashboard/addcard/asset 7.jpeg"
                                    width={137}
                                    height={240}
                                  />
                                </figure>
                              </label>
                            </div>
                            <div className="col-2">
                              <label className="imagecheck mb-4">
                                <input type="radio" value="7" className="check-image" />
                                <figure className="check-imagefigure">
                                  <Image
                                    src="/dashboard/addcard/asset 8.jpeg"
                                    width={137}
                                    height={240}
                                  />
                                </figure>
                              </label>
                            </div>
                            <div className="col-2">
                              <label className="imagecheck mb-4">
                                <input type="radio" value="8" className="check-image" />
                                <figure className="check-imagefigure">
                                  <Image
                                    src="/dashboard/addcard/asset 9.jpeg"
                                    width={137}
                                    height={240}
                                  />
                                </figure>
                              </label>
                            </div>
                            <div className="col-2">
                              <label className="imagecheck mb-4">
                                <input type="radio" value="9" className="check-image" />
                                <figure className="check-imagefigure">
                                  <Image
                                    src="/dashboard/addcard/asset 10.jpeg"
                                    width={137}
                                    height={240}
                                  />
                                </figure>
                              </label>
                            </div>
                            <div className="col-2">
                              <label className="imagecheck mb-4">
                                <input type="radio" value="10" className="check-image" />
                                <figure className="check-imagefigure">
                                  <Image
                                    src="/dashboard/addcard/asset 2.jpeg"
                                    width={137}
                                    height={240}
                                  />
                                </figure>
                              </label>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="form-group">
                                <div className="col-12">
                                  <label htmlFor="image">
                                    <strong>Profile Image</strong>
                                  </label>
                                  <div className="col-12">
                                    <Image src="/dashboard/testimonials/testimonialimg1.jpg" width={150} height={150} alt="userpic" ty className="testimonials-image" />  
                                    <div className=" testimonialsImg mt-3">
                                      <input type="file" name="photo" id="image" className="form-control "/>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="form-group">
                                <div className="col-12">
                                  <label htmlFor="image">
                                    <strong>Cover Image</strong>
                                  </label>
                                  <div className="col-12">
                                    <Image src="/dashboard/testimonials/testimonialimg1.jpg" width={150} height={150} alt="userpic" ty className="testimonials-image" />  
                                    <div className=" testimonialsImg mt-3">
                                      <input type="file" name="photo" id="image" className="form-control "/>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="form-group">
                                <div className="col-12">
                                  <label htmlFor="name">
                                    <strong>vCard Name **</strong>
                                  </label>
                                  <div className="col-12">
                                      <input type="text" name="vCard-name" id="vCard-name" className="form-control "placeholder="Enter vCard name"/>
                                    </div>
                                      <div id="emailHelp" className="form-text text-warning">Use this name to identify sepcific vcard from your vcards list.</div>
                                    
                                  </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="form-group">
                                <div className="col-12">
                                    <label htmlFor="direction">
                                      <strong>Direction **</strong>
                                    </label>
                                  </div>
                                  <div className="col-12 mt-2">
                                    <select className="form-select" aria-label="Default select example">
                                      <option selected>Select Direction </option>
                                      <option value="1">LTR (Left to Right)</option>
                                      <option value="2">RTL (Right to Left)</option>
                                    </select>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-4">
                              <div className="form-group">
                                <div className="col-12">
                                  <label htmlFor="name">
                                    <strong>Name</strong>
                                  </label>
                                  <div className="col-12">
                                      <input type="text" name="name" id="name" className="form-control "placeholder="Enter  name"/>
                                    </div>
                                    
                                  </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                              <div className="form-group">
                                <div className="col-12">
                                  <label htmlFor="name">
                                    <strong>Company Name</strong>
                                  </label>
                                  <div className="col-12">
                                      <input type="text" name="company-name" id="compan-name" className="form-control "placeholder="Enter company name"/>
                                    </div>
                                    
                                  </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                              <div className="form-group">
                                <div className="col-12">
                                  <label htmlFor="name">
                                    <strong>Occupation</strong>
                                  </label>
                                  <div className="col-12">
                                      <input type="text" name="Occupation" id="Occupation" className="form-control "placeholder="Enter Occupation"/>
                                    </div>
                                  </div>
                                </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="form-group">
                                <div className="col-12">
                                  <label >
                                    <strong>Email</strong>
                                  </label>
                                  <div className="col-12">
                                      <input type="text" name="Email" id="Email" className="form-control "placeholder="Enter  email"/>
                                    </div>
                                    
                                  </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="form-group">
                                <div className="col-12">
                                  <label >
                                    <strong>Phone</strong>
                                  </label>
                                  <div className="col-12">
                                      <input type="text" name="Phone" id="Phone" className="form-control "placeholder="Enter Phone"/>
                                    </div>
                                    <div id="emailHelp" className="form-text text-warning">Enter Phone Number with Country Code</div>

                                    
                                  </div>
                                </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="form-group">
                                <div className="col-12">
                                  <label >
                                    <strong>Address</strong>
                                  </label>
                                  <div className="col-12">
                                      <input type="text" name="Address" id="Address" className="form-control "placeholder="Enter  Address"/>
                                    </div>
                                    
                                  </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="form-group">
                                <div className="col-12">
                                  <label >
                                    <strong>Website URL</strong>
                                  </label>
                                  <div className="col-12">
                                      <input type="text" name="Website_URL" id="Website-URL" className="form-control "placeholder="Enter Website URL"/>
                                    </div>
                                  </div>
                                </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="form-group">
                                <div className="col-12">
                                  <label >
                                    <strong>Introduction</strong>
                                  </label>
                                  </div>
                                  <div className="col-12">
                                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="4" placeholder="Enter Introduction"></textarea>

                                    </div>
                                    
                                </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="form-group">
                                  <div className="col-12">
                                    <label >
                                      <strong>Other Infromation</strong>
                                    </label>
                                  </div>
                                  <div className="col-12">
                                      <button className="btn btn-primary">Add Information</button>
                                  </div>
                                    
                                </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="addvcard-card-footer mt-3">
                    <form action="">
                      <div className="form-group">
                        <div className="col-md-12 btn-center">
                          <button
                            type="submit"
                            id="btn-submit"
                            className="btn btn-success"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Addvcard;
