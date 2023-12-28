import React from "react";
import Image from "next/image";
import Head from "next/head";

const Layoutimage = ({Layoutitle,hometitle}) => {
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
        <title>Profilex - Admin User</title>
      </Head>
        
      <header>
        <Image
            src="/useradmin/profileimage/asset 12.jpeg"
            width="1349"
            height="389"
            alt="image"
            className="image-layout"
            />
            <section className='hero-header-text'>
                <h2 className="layout-title">{Layoutitle}</h2>
                <div className="home-title">
                    <span className="home-title_home">Home</span>
                    <span className="home-title_term">{hometitle}</span>
                </div>
            </section>
        </header>
    </>
  );
};

export default Layoutimage;
