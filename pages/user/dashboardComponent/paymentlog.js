import Head from "next/head";
import Script from "next/script";

const PortfolioCategories = ()=>{
    return(<>
        <Head>
        <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
            rel="stylesheet"
        />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" />
        <title>Profilex - User Dashboard</title>
    </Head>
    <div className="page_header">
            <h4 className="table_h4">Payment Logs</h4>
            <ul className="table_ul">
                <li className="home_font"><a href=""><i className="fa fa-home"></i></a></li>
                <li className="seprator_data"><i className="fa fa-angle-right"></i></li>
                <li className="home_datas"><a> Payment Logs</a></li>
            </ul>
        </div> 
        <div className="row">
        <div className="col-md-12">
            <div className="table_card">
                <div className="table_header">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="table_title d-inline-block">Payment Logs</div>
                        </div>
                        <div className="col-lg-4 offset-lg-1 mt-2 mt-lg-0">
                            <input type="text" className=" float-right btn-sm" id="float_rigth" data-bs-toggle="modal" data-bs-target="Portfolioexample" placeholder="Search.."/>
                             
                        </div>
                    </div>
                </div>
                <div className="table_body">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="table-responsive">
                                <div className="dataTables container-fluid ">
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <table className="table table-light table-striped  mt-3 " id="shri-table">
                                                <thead>
                                                  <tr>      
                                                    <th scope="col">Transaction Id</th>
                                                    <th scope="col">Package</th>                                                   
                                                    <th scope="col">Amount</th>                                                   
                                                    <th scope="col">Payment Status</th>
                                                    <th scope="col">Payment Method</th>                                                   
                                                    <th scope="col">Receipt</th>                                                   
                                                    <th scope="col">Actions</th>
                                                  </tr>
                                                </thead>
                                                <tbody>
                                                  <tr>
                                                   
                                                    <td>76b77138</td>
                                                    <td> Entrepreneur<span className="btn btn-success">monthly</span></td>                                                  
                                                    <td>$19</td> 
                                                    <td> <span className="btn btn-success">succes</span></td>                                                  
                                                    <td>Mollie Payment</td> 
                                                    <td>-</td> 
                                                    {/* <td className="td-data"><a ><button type="button" className="btn btn-primary"  id="float_rigth" data-bs-toggle="modal" data-bs-target="Portfolioexample"><span>Detail</span></button></a> </td> */}
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
            </div>
        </div>
    </div>

    {/* modal */}

<div className="modal fade" id="Portfolioexample" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <form>
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Add Portfolio Category</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <div className="row">
          <div className="col-sm-12 ">
          <label htmlFor="exampleInputEmail1" className="form-label">Language**</label>
            <select className="form-select" aria-label="Default select example">
              <option selected>Select language</option>
              <option value="1">English</option>
              <option value="2">Hindi</option>
            </select>
          </div>
          <div className="col-12 mt-3" >
                <label htmlFor="exampleInputEmail1" className="form-label">Name **</label>
                <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter name" />
            </div>
          <div className="col-sm-12 mt-3 ">
          <label htmlFor="exampleInputEmail1" className="form-label">Status **</label>
            <select className="form-select" aria-label="Default select example">
              <option selected>Select Status</option>
              <option value="1">Active</option>
              <option value="2">Deactive</option>
            </select>
          </div>
        </div>
        
        <div className="row">
          <div className="col-12 mt-3" >
                <label htmlFor="exampleInputEmail1" className="form-label">Serial Number **</label>
                <input type="number" className="form-control" id="exampleInputEmail1" placeholder="Enter serial Number" />
                <div id="emailHelp" className="form-text text-warning">The higher the serial number is, the later the experience will be shown..</div>
            </div>
        </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Submit</button>
      </div>
    </div>
  </div>
</form>
</div>

<Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" ></Script>
    </>)
}


export default PortfolioCategories;