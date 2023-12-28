import Head from "next/head"
import Image from "next/image"
import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";

const homesection = () => {
    const username = Cookies.get("username");
    const [image,setImage] = useState();
    const [about_image,setAbouImage] = useState();
    const[skillImage,setSkillImage] = useState();
    const[achievement,setachienve] = useState();
    const[data,setData] = useState({
        username:"",
        image:"",
        first_name:"",
        last_name:"",
        designation:"",
        about_image:"",
        about_title:"",
        about_subtitle:"",
        about_content:"",
        skill_image:"",
        skill_title:"",
        skill_subtitle:"",
        skill_content:"",
        service_title:"",
        service_subtitle:"",
        experience_title:"",
        experience_subtitle:"",
        achievement_image:"",
        achievement_title:"",
        achievement_subtitle:"",
        portfolio_title:"",
        portfolio_subtitle:"",
        blog_title:"",
        blog_subtitle:"",
        contact_title:"",
        contact_subtitle:"",

    })
    function setFile(files) {
        var formData = new FormData();
        formData.append("file", files[0]);
        formData.append("upload_preset", "bb6yahep");
    
        axios
          .post("https://api.cloudinary.com/v1_1/deam2hdcg/image/upload", formData)
          .then((response) => setImage(response.data.url));
      }
      function setFiles(files) {
        var formData = new FormData();
        formData.append("file", files[0]);
        formData.append("upload_preset", "bb6yahep");
    
        axios
          .post("https://api.cloudinary.com/v1_1/deam2hdcg/image/upload", formData)
          .then((response) => setAbouImage(response.data.url));
      }

      function setFiled(files) {
        var formData = new FormData();
        formData.append("file", files[0]);
        formData.append("upload_preset", "bb6yahep");
    
        axios
          .post("https://api.cloudinary.com/v1_1/deam2hdcg/image/upload", formData)
          .then((response) => setSkillImage(response.data.url));
      }
      function setFiless(files) {
        var formData = new FormData();
        formData.append("file", files[0]);
        formData.append("upload_preset", "bb6yahep");
    
        axios
          .post("https://api.cloudinary.com/v1_1/deam2hdcg/image/upload", formData)
          .then((response) => setachienve(response.data.url));
      }

      const getData = (e)=>{
        setData({
          ...data,
          [e.target.name]: e.target.value,
        });
      }

      const handleClick = (e)=>{
        e.preventDefault();
        // console.log(formData);
        // const {first_name,last_name,username,phone,email,city,state,country,password} = formData
        // const datas = {
        //     first_name,
        //     last_name,
        //     username,
        //     phone,
        //     email,
        //     city,
        //     state,
        //     country,
        //     password,
        //     package_value:data?.package_value
        // }
        console.log(data);
    
    //   axios.post("http://localhost:4000/user",datas).then((data)=>{
    //     // console.log(data);
    //     // alert("Data has been inserted");
    //     Cookies.set("username",data.data.username)
    //     Cookies.set("package_value",data.data.package_value);
    //     // console.log(datas.username);
    //     if(data){
    //         if(window.confirm("You have been registerd. Now would you like to Log-in") ==true)
    //         {
    //             router.push("/login")
    //         }
    //         else{
    //             return false;
    //         }
    //     }
    
    //   }).catch(err=>console.log(err));
    
    
      }





    return (<>
    <Head>
        <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
            rel="stylesheet"
        />
         <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"/>

        <title>Profilex - User Dashboard</title>
    </Head>

        <div className="home-page-header">
            <h4 className="home-page-title">Home Sections</h4>
            <ul className="breadcrumbs">
                <li className="nav-home">
                    <a>
                      <i className="fa fa-home"></i>
                    </a>
                </li>
                <li className="nav-separator">
                    <a>
                      <i className="fa fa-angle-right"></i>
                    </a>
                </li>
                <li className="nav-item">
                    <a>
                      Home Section
                    </a>
                </li>
            </ul>
        </div>
        <div className="row">
            <div className="col-md-12">
                <div className="home-card">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="home-card-header ">
                                <div className="home-card-title">Update Profile</div>
                              </div>
                        </div>
                        <div className="col-lg-3 offset-lg-3 line">
                            <select className="form-select"  id="select-text"aria-label="Default select example">
                                <option value="selected disabled">Select a Language</option>
                                <option value="en" selected>English</option>
                                <option value="ar">عربى</option>
                            </select>
                        </div>
                        <div className="home-card-body">
                            <div className="row">
                                <div className="col-lg-8 offset-lg-2">
                                    <form action="">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <br/>
                                                    <h3 className="text-hero">Hero section</h3>
                                                    <hr className="border-hero"/>
                                                </div>
                                                <div className="form-group">
                                                    <div className="col">
                                                      <label for="image1">
                                                        <strong className="image1">Hero Section Image</strong>
                                                      </label>
                                                    </div>
                                                    <div className="col-md-12 show-image">
                                                      <Image src="/dashboard/homesection/homeimage.png" alt="image" width="300" height="250" className="home-image"/>
                                                      <button className="btn btn-danger btn-sm image-cross-btn" data-type="hero">
                                                        <i className="fas fa-times"></i>
                                                      </button>
                                                    </div>
                                                </div>
                                                <input type="file" name="image" id="image" className="form-control" required onChange={(e) => setFile(e.target.files)}/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 pr-0">
                                                <div className="form-group">
                                                    <label >First Name</label>
                                                    <input type="text" className="form-control"  name="first_name" onChange={e=>getData(e)}/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 pr-0">
                                                <div className="form-group">
                                                    <label >Last Name</label>
                                                    <input type="text" className="form-control"  name="last_name" onChange={e=>getData(e)}/>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- Remain to write code from --> */}
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <label>Designation **</label>
                                                    <div className="bootstrap-tagsinput">
                                                        <span className="tag label label-info">
                                                            Web Designer
                                                        </span>
                                                    <input type="text" className="form-control"  name="designaton" onChange={e=>getData(e)}/>
                                                        <span data-role="remove"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- to --> */}
                                        {/* <!-- about section of home  --> */}
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <br/>
                                                    <h3 className="text-hero">About Section</h3>
                                                    <hr className="border-hero"/>
                                                </div>
                                                <div className="form-group">
                                                    <div className="col">
                                                      <label for="image1">
                                                        <strong className="image1">About Section image</strong>
                                                      </label>
                                                    </div>
                                                    <div className="col-md-12 show-image">
                                                      <img src="/dashboard/homesection/QRMenu.jpg" alt="image" width="300" height="250" className="home-image"/>
                                                    </div>
                                                </div>
                                                <input type="file" name="photo" id="image" className="form-control" onChange={(e) => setFiles(e.target.files)}/>
                                            </div>
                                        </div> 
                                        <div className="row">
                                            <div className="col-lg-6 pr-0">
                                                <div className="form-group">
                                                    <label >About Section Title</label>
                                                    <input type="text" className="form-control"  name="about_title" onChange={e=>getData(e)}/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 pr-0">
                                                <div className="form-group">
                                                    <label >About Section Subtitle</label>
                                                    <input type="text" className="form-control" name="about_subtitle" onChange={e=>getData(e)}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>About Section Content</label>
                                            <textarea name="about_content" className="form-control" rows="5" onChange={e=>getData(e)}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at est id leo luctus gravida a in ipsum. Vivamus vel molestie nisi. Aliquam maximus maximus velit, id scelerisque urna elementum nec. Aenean laoreet bibendum tellus sed tincidunt. Proin commodo blandit gravida. Etiam sollicitudin aliquet vehicula. Morbi ante libero, porttitor ut sodales non, gravida at lacus.
                                            </textarea>
                                        </div>
                                        {/* <!-- end of about section --> */}
                                        {/* <!-- start of about section --> */}
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <br/>
                                                    <h3 className="text-hero">Skill Section</h3>
                                                    <hr className="border-hero"/>
                                                </div>
                                                <div className="form-group">
                                                    <div className="col">
                                                      <label for="image1">
                                                        <strong className="image1">Skill Section image</strong>
                                                      </label>
                                                    </div>
                                                    <div className="col-md-12 show-image">
                                                      <img src="/dashboard/homesection/skill.png" alt="image" width="300" height="250" className="home-image"/>
                                                    </div>
                                                </div>
                                                <input type="file" name="photo" id="image" className="form-control" onChange={(e) => setFiled(e.target.files)}/>
                                            </div>
                                        </div> 
                                        <div className="row">
                                            <div className="col-lg-6 pr-0">
                                                <div className="form-group">
                                                    <label >Skill Section Title</label>
                                                    <input type="text" className="form-control"  name="skill_title" onChange={e=>getData(e)}/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 pr-0">
                                                <div className="form-group">
                                                    <label >Skill Section Subtitle</label>
                                                    <input type="text" className="form-control"  name="skill_subtitle"onChange={e=>getData(e)}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>Skill Section Content</label>
                                            <textarea name="about_content" className="form-control" rows="5" onChange={e=>getData(e)}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at est id leo luctus gravida a in ipsum. Vivamus vel molestie nisi. Aliquam maximus maximus velit, id scelerisque urna elementum nec. Aenean laoreet bibendum tellus sed tincidunt. Proin commodo blandit gravida. Etiam sollicitudin aliquet vehicula. Morbi ante libero, porttitor ut sodales non, gravida at lacus.
                                            </textarea>
                                        </div>
                                        {/* <!-- end of skill section --> */}
                                        {/* <!-- start of Service Section --> */}
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <br/>
                                                    <h3 className="text-hero">Service  Section</h3>
                                                    <hr className="border-hero"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 pr-0">
                                                <div className="form-group">
                                                    <label >Service Section Title</label>
                                                    <input type="text" className="form-control"  name="service_title" onChange={e=>getData(e)}/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 pr-0">
                                                <div className="form-group">
                                                    <label >Service  Section Subtitle</label>
                                                    <input type="text" className="form-control" name="service_subtitle" onChange={e=>getData(e)}/>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- end of service section --> */}
                                        {/* <!-- start of Experience section--> */}
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <br/>
                                                    <h3 className="text-hero">Experience Section</h3>
                                                    <hr className="border-hero"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 pr-0">
                                                <div className="form-group">
                                                    <label >Experience  Section Title</label>
                                                    <input type="text" className="form-control"  name="experience_title" onChange={e=>getData(e)}/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 pr-0">
                                                <div className="form-group">
                                                    <label >Experience Section Subtitle</label>
                                                    <input type="text" className="form-control"  name="experience_subtitle" onChange={e=>getData(e)}/>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- end of Experience section -->
                                        <!-- start Achievement setion --> */}
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <br/>
                                                    <h3 className="text-hero">Achievements section</h3>
                                                    <hr className="border-hero"/>
                                                </div>
                                                <div className="form-group">
                                                    <div className="col">
                                                      <label for="image1">
                                                        <strong className="image1">Achievements Section Image</strong>
                                                      </label>
                                                    </div>
                                                    <div className="col-md-12 show-image">
                                                      <img src="/dashboard/homesection/color.jpg" alt="image" width="300" height="250" className="home-image"/>
                                                    </div>
                                                </div>
                                                <input type="file" name="photo" id="image" className="form-control" onChange={(e) => setFiless(e.target.files)}/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 pr-0">
                                                <div className="form-group">
                                                    <label >Achievement Section Title</label>
                                                    <input type="text" className="form-control" value="Achievement"  onChange={e=>getData(e)}/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 pr-0">
                                                <div className="form-group">
                                                    <label >Achievement Section Subtitle</label>
                                                    <input type="text" className="form-control" value="My Achievement" onChange={e=>getData(e)}/>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- end of Achievement setion -->
                                        <!-- start Portfolios section --> */}
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <br/>
                                                    <h3 className="text-hero">Portfolio Section</h3>
                                                    <hr className="border-hero"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 pr-0">
                                                <div className="form-group">
                                                    <label >Portfolio  Section Title</label>
                                                    <input type="text" className="form-control"  name="portfolio_title" onChange={e=>getData(e)}/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 pr-0">
                                                <div className="form-group">
                                                    <label >Portfolio Section Subtitle</label>
                                                    <input type="text" className="form-control"  name="portfolio_subtitle" onChange={e=>getData(e)}/>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- end Portfolio section -->
                                        <!-- start Testimonial section --> */}
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <br/>
                                                    <h3 className="text-hero">Testimonial  Section</h3>
                                                    <hr className="border-hero"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 pr-0">
                                                <div className="form-group">
                                                    <label >Testimonial Section Title</label>
                                                    <input type="text" className="form-control"  />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 pr-0">
                                                <div className="form-group">
                                                    <label >Testimonial Section Subtitle</label>
                                                    <input type="text" className="form-control"  />
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- end Testimonial section -->
                                        <!-- start Blog  section --> */}
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <br/>
                                                    <h3 className="text-hero">Blog Section</h3>
                                                    <hr className="border-hero"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 pr-0">
                                                <div className="form-group">
                                                    <label >Blog Section Title</label>
                                                    <input type="text" className="form-control"  name="blog_title" onChange={e=>getData(e)}/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 pr-0">
                                                <div className="form-group">
                                                    <label >Blog Section Subtitle</label>
                                                    <input type="text" className="form-control"   name="blog_subtitle" onChange={e=>getData(e)}/>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- end Blog section -->
                                         <!-- start Contact   section --> */}
                                         <div className="row">
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <br/>
                                                    <h3 className="text-hero">Contact Section</h3>
                                                    <hr className="border-hero"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 pr-0">
                                                <div className="form-group">
                                                    <label >Contact Section Title</label>
                                                    <input type="text" className="form-control"  name="content_title" onChange={e=>getData(e)}/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 pr-0">
                                                <div className="form-group">
                                                    <label >Contact Section Subtitle</label>
                                                    <input type="text" className="form-control"  name="content_subtitle" onChange={e=>getData(e)}/>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- end Blog section --> */}
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="home-card-footer mt-3">
                            <form action="">
                              <div className="form-group">
                                <div className="col-md-12 btn-center">
                                  <button type="submit" id="btn-submit" className="btn btn-success" onClick={e=>handleClick(e)}>Update</button>
                                </div>
                              </div>
                            </form>
                          </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
export default homesection