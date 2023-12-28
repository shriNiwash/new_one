import React from 'react'
import Head from 'next/head'
import Script from 'next/script'
import AdminSlider from '../pages/admin/dashboardComponents/adminSlider'
import AdminNavbar from '../pages/admin/dashboardComponents/adminNavbar'
import Footer from '../pages/user/dashboardComponent/footered'

export default function AdminLayout({children}) {
  return (
    <div>
    <Head>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" />
      <title>Profilex - User Serivices</title>
    </Head>

    <div className="wrapper">

      <AdminNavbar />

      {/* <!-- slider --> */}
      <AdminSlider />
      <div className="main_panel">
        <div className="main_contents">
          <div className="pageinner_data">
            {children}
          </div>
        </div>
        <Footer />

      </div>
    </div>
    <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></Script>
    </div>
  )
}
