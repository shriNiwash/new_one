import Script from "next/script";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import axios from "axios";

const Blogcomponent = ({ blogData }) => {
    const [blogsData,setBlogData] = useState({
        username: "pooja",
        language: "",
        name : "",
        status: "",
        serialnumber : ""
    })

    const onData = (e)=>{
        setBlogData({
            ...blogsData,
            [e.target.name]: e.target.value,
          });
    }

    const onDataClick = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:4000/blogcategory",blogsData).then((data)=>{
            alert("Data has been inserted");
            router.push("/user/blog-categories");
        
          }).catch(err=>console.log(err));

    }




    const router = useRouter();

    function handleDelete(id) {
        console.log(id);
        fetch(`http://localhost:4000/blogcategory/${id}`, {
          method: "DELETE",
        })
        .then((response)=>response.json())
        .then((daa)=>{
          const setdd = blogData.filter((dat)=>{
            return dat._id !== id;
          })
          router.push("/user/blog-categories");
        })
        .catch((err)=>console.log(err));
    
      }
  
    return (<>
        <Head>
            <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
                rel="stylesheet"
            />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" />
            <title>Profilex - User Service</title>
        </Head>
        <div className="page_header">
            <h4 className="table_h4">Blog Categories</h4>
            <ul className="table_ul">
                <li className="home_font"><a href=""><i className="fa fa-home"></i></a></li>
                <li className="seprator_data"><i className="fa fa-angle-right"></i></li>
                <li className="home_datas"><a>Blogs </a></li>
                <li className="seprator_data"><i className="fa fa-angle-right"></i></li>
                <li className="home_datas"><a href=""> Categories</a></li>
            </ul>
        </div>

        <div className="row">
            <div className="col-md-12">
                <div className="table_card">
                    <div className="table_header">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="table_title d-inline-block">Categories</div>
                            </div>
                            <div className="col-lg-4 offset-lg-1 mt-2 mt-lg-0">
                                <a href="" className="btn btn-primary float-right btn-sm" id="float_rigth" data-bs-toggle="modal" data-bs-target="#exampleModalblogservices"><i className="fa fa-plus"></i>Add Blog Category</a>
                            </div>
                        </div>
                    </div>
                    <div className="table_body">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="table-responsive">
                                    <div className="dataTables container-fluids ">
                                        <div className="row">
                                            <div className="col-sm-12 col-md-6">
                                                <div className="tatabaseTableLenght">
                                                    <h6>Show</h6>
                                                    <label  >

                                                        <select className="form-select" aria-label="Default select example">
                                                            <option selected>10</option>
                                                            <option value="2">50</option>
                                                            <option value="3">100</option>
                                                        </select>

                                                    </label>
                                                    <h6>entries</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <table className="table table-light table-striped  mt-3 " id="shri-table">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col"><input type="checkbox" name="" id="" /></th>
                                                            <th scope="col">Name</th>
                                                            <th scope="col">Status</th>
                                                            <th scope="col">Serial Number</th>
                                                            <th scope="col">Actions</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            blogData?.map((data) => {
                                                                return (<>
                                                                    <tr>
                                                                        <td><input type="checkbox" name="" id="" /></td>
                                                                        <td>{data.name}</td>
                                                                        <td>{(data.status==false) ? 'Deactive' : 'Active'}</td>
                                                                        <td>{data.serialnumber}</td>
                                                                        <td className="td-data"><a ><button type="button" className="btn btn-primary"><i className="fa fa-edit"></i><span>Edit</span></button></a>  <a><button type="button" className="btn btn-danger" onClick={()=>handleDelete(data._id)}><i className="fa fa-trash"></i><span>Delete</span> </button></a></td>
                                                                    </tr>

                                                                </>)
                                                            })
                                                        }
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

        <div className="modal fade" id="exampleModalblogservices" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <form>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Add Blog Category</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            <div className="row">
                                <div className="col-sm-12 mt-3">
                                    <label for="exampleInputEmail1" className="form-label">Language**</label>
                                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Select a Language" name="language" onChange={(e)=>onData(e)} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12 mt-3">
                                    <label for="exampleInputEmail1" className="form-label">Name**</label>
                                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name" name="name" onChange={(e)=>onData(e)}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12 mt-3">
                                    <label for="exampleInputEmail1" className="form-label">Status **</label>
                                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Select a satatus" name="status" onChange={(e)=>onData(e)} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12 mt-5">
                                    <label for="exampleInputEmail1" className="form-label">Serial Number**</label>
                                    <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Serial Number" name="serialnumber" onChange={(e)=>onData(e)} />
                                    <div id="emailHelp" className="form-text text-warning">The higher the serial number is, the later the Skill will be shown.</div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={e=>onDataClick(e)}>Submit</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></Script>

    </>)
}


export default Blogcomponent;