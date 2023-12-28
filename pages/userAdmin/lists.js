import React, { useState } from 'react'
import { useRouter } from 'next/router';
import axios from 'axios';
import Cookies from 'js-cookie';
import dynamic from "next/dynamic";

const Khalti = dynamic(
  () => {
    return import("../../config/khalti");
  },
  { ssr: false }
);



export  default  function Lists({data}) {
    const router = useRouter();
    const [formData,setformData] = useState({
      first_name: "",
      last_name : "",
      username: "",
      phone: "",
      email: "",
      city:"",
      state:"",
      country:"",
      password: ""
    })
    const getData = (e)=>{
        setformData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      }

      const handleClick = (e)=>{
        e.preventDefault();
        // console.log(formData);
        const {first_name,last_name,username,phone,email,city,state,country,password} = formData
        const datas = {
            first_name,
            last_name,
            username,
            phone,
            email,
            city,
            state,
            country,
            password,
            package_value:data?.package_value
        }
    
      axios.post("http://localhost:4000/user",datas).then((data)=>{
        // console.log(data);
        // alert("Data has been inserted");
        Cookies.set("username",data.data.username)
        Cookies.set("package_value",data.data.package_value);
        // console.log(datas.username);
        if(data){
            if(window.confirm("You have been registerd. Now would you like to Log-in") ==true)
            {
                router.push("/login")
            }
            else{
                return false;
            }
        }
    
      }).catch(err=>console.log(err));
    
    
      }
  


  return (
    <>
        <div className="container" id="containerss-data">
        <div className="row">
            <div className="col-lg-6">
                <h3 className="home">Billing Details</h3>
                <br />
                <div className="container" id="containerss-data">
                    <div className="row">
                        <div className="col-sm">
                            <form>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">First Name*</label>
                                    <input type="text" className="form-control p-2" id="exampleInputFirstName"  placeholder="First Name" name='first_name' onChange={e=>getData(e)} />
                                </div>
                            </form>
                        </div>
                        <div className="col-sm">
                            <form>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Last Name*</label>
                                    <input type="text" className="form-control p-2" id="exampleInputLastName"  placeholder="Last Name" name='last_name' onChange={e=>getData(e)} />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="container" id="containerss-data">
                    <div className="row">
                       <div className="col-lg-12">
                        <form>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Phone Number*</label>
                                <input type="text" className="form-control p-2" id="Phone"  placeholder="Phone Number" name="phone" onChange={e=>getData(e)}  required />
                            </div>
                        </form>
                       </div>
                    </div>
                </div>

                <div className="container" id="containerss-data">
                    <div className="row">
                        <div className="col-sm">
                            <form>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input type="email" className="form-control p-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name='email' onChange={e=>getData(e)} />
                                </div>
                            </form>
                        </div>
                        <div className="col-sm">
                            <form>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Country</label>
                                    <input type="text" className="form-control p-2" id="Company_Name"  placeholder="Company Name" name='country' onChange={e=>getData(e)} />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
        
                <div className="container" id="containerss-data">
                    <div className="row">
                       <div className="col-lg-12">
                        <form>
                            <div className="form-group">
                                <label for="exampleInputEmail1">username</label>
                                <input type="text" className="form-control p-2" id="Street_Address"  placeholder="Street Address" name='username' onChange={e=>getData(e)} />
                            </div>
                        </form>
                       </div>
                    </div>
                </div>
                <div className="container" id="containerss-data">
                    <div className="row">
                        <div className="col-sm">
                            <form>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">City *</label>
                                    <input type="text" className="form-control p-2" id="City"  placeholder="City" name='city' onChange={e=>getData(e)} />
                                </div>
                            </form>
                        </div>
                        <div className="col-sm">
                            <form>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">State</label>
                                    <input type="text" className="form-control p-2" id="State"  placeholder="State" name='state' onChange={e=>getData(e)} />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="container" id="containerss-data">
                    <div className="row">
                        <div className="col-sm-12">
                            <form>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Password</label>
                                    <input type="password" className="form-control p-2" id="Postcode"  placeholder="Enter the Password" name='password' onChange={e=>getData(e)} />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <h3 className="home">Package Summary</h3>
                <div className="order_list_info">
                    <ul>
                        <li>Package <span>Begninner</span></li>
                        <li>Duration <span> {data?.package_term}</span></li>
                        <li>Type <span>{data?.package_title}</span></li>
                        <li>Total<span>{data?.price}</span></li>


                    </ul>
                </div>
                <h3 className="home">Payment Method</h3>
                <Khalti records={data.price} />
                <button className="main-btn" onClick={e=>handleClick(e)}>Upload</button>
            </div>
        </div>
    </div>
    </>
  )
}
