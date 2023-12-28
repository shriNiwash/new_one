import Head from "next/head"
const UploadcvData = () => {
  return (<>
    <Head>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" />
      <title>Profilex - User Dashboard-changepass profile</title>
    </Head>
    
    <div className="cvuplod-page-inner">
      <div className="cvuplod-page-header">
        <h4 className="cvuplod-page-title">CV Upload</h4>
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
              CV Upload
            </a>
          </li>
          <li className="nav-separator">
            <a>
              <i className="fas fa-angle-right"> </i>
            </a>
          </li>
          <li className="nav-item">
            <a>
              CV Upload
            </a>
          </li>
        </ul>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="cvuplod-card">
            <div className="cvuplod-card-header ">
              <div className="cvuplod-card-title">Update CV Upload</div>
            </div>
            <div className="cvuplod-card-body">
              <div className="row">
                <div className="col-lg-6 offset-lg-3">
                  <form >
                    <div className="row ">
                      <div className="form-group">
                        <a className="btn btn-primary btn-smm">
                          <i className="fas fa-download"></i>
                          <span>Download</span>
                        </a>
                        <span className="ml-2"><strong>sample.pdf</strong></span>
                        <form  className="d-inline-block">
                          <button type="submit" className="btn btn-danger text-white btn-smm ml-2">
                            <i className="fa fa-times"></i>
                          </button>
                        </form>
                      </div>
                      <div className="form-group">
                        <label htmlFor="">CV upload*</label>
                        <input type="file" className="form-control" />
                      </div>
                    </div>
                  </form>
                  <div className="cvuplod-card-footer mt-3">
                    <form >
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
          </div>
        </div>
      </div>
    </div>
  </>)
}
export default UploadcvData