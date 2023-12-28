
import Link from 'next/link'
import Head from 'next/head';
import React, { useState } from 'react'
import axios from 'axios';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

export default function Login() {
    const router = useRouter();
    const [user,setUser] =  useState({
        username:"",
        password:""
    })

    function onTextFiled(e) {
        setUser({
          ...user,
          [e.target.name]: e.target.value,
        });
      }
    //   var userDetails = {};
    
      const onSubmit = async (e) => {
        e.preventDefault();
        console.log(user)
        try{
                
       const userDetails = await axios.post("http://localhost:4000/user/login",user);
       console.log(userDetails)
       if(userDetails.status == 200)
       {
        Cookies.set("token",userDetails.data);
        Cookies.set("username",user.username);
        router.push("/user/dashboard")
        
       }
       

        }
        catch(err){
            alert("Email Id or password is Incorrect");
        }

    }
  return (
<>
      <Head>
        <title>Login Page</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Head>
      <div className="shri_login" id="shri_login">
        <div className="wrappers">
          <div className="tittle">
            <span>Login Form</span>
          </div>
          <form action="/login" method="post" onSubmit={(e) => onSubmit(e)}>
            <div className="row">
              <i className="fa fa-user"></i>
              <input
                type="text"
                placeholder="Email or UserName"
                required
                onChange={(e) => onTextFiled(e)}
                name="username"
                id="username"
              />
            </div>
            <div className="row">
              <i className="fa fa-lock"></i>
              <input
                type="password"
                placeholder="password"
                name="password"
                id="password"
                required
                onChange={(e) => onTextFiled(e)}
              />
            </div>
            <div className="pass">
              <a href="#">Forgot Password?</a>
            </div>
            <div className="row button">
              <input type="submit" value="Login" />
            </div>
            <div className="signup-link">
              <Link href="/" legacyBehavior>
                <a>Skip Login ! Go to Home Page</a>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
