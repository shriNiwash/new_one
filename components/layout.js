import React from 'react'
import Head from 'next/head'
import Script from 'next/script'
import Navbar from '../pages/user/dashboardComponent/navbar'
import Slider from '../pages/user/dashboardComponent/slider'
import Footer from '../pages/user/dashboardComponent/footered'
import Cookies from 'js-cookie'

export default function Layout({children}) {
  // const username = Cookies.get("username");

  return (
    <div>
    <Head>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" />
      <title>Profilex - User Serivices</title>
    </Head>

    <div className="wrapper">

      <Navbar />

      {/* <!-- slider --> */}
      <Slider />
      <div className='shrinwas'>
      <div className="main_panel">
        <div className="main_contents">
          <div className="pageinner_data">
            {children}
          </div>
        </div>

        <Footer />

      </div>
    </div>
    </div>
    <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></Script>
    </div>
  )
}
