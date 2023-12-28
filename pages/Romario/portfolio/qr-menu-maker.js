import Head from "next/head"
import Image from "next/image";
import Script from "next/script";
import Navigation from "../components/navigation";
import Footer from "../components/footer";

const Qr_Menu_Maker = () =>{
    return (<>
        <Head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"/>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"/>
        </Head>
        <Navigation/>
        <section className="hero-ecommerce">
        <div className="container-ecommerce">
            <div className="row-ecommerce">
                <div className="col-lg-10">
                    <div className="page-title">
                        <h1>Portfolio Details</h1>
                        <ul className="breadcrumbs-link">
                            <li>
                                <a>Home</a>
                            </li>
                            <li><i className="fa fa-chevron-right"></i></li>
                            <li>Service Details</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div className="container">
        <div className="row">
            {/* <!-- for cursor first part--> */}
            <div className="col-sm-8 Portfolio-carousel">
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">

                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            {/* <img src="/cr1.jpg" className="d-block w-100" alt="..."/> */}
                            <Image src="/images/portfolio/cr1.jpg" width={770} height={462} alt="carouser-1"/>
                            <div className="carousel-caption d-none d-md-block">
                            </div>
                        </div>
                        <div className="carousel-item">
                            {/* <img src="/cr2.jpg" className="d-block w-100" alt="..."/> */}
                            <Image src="/images/portfolio/cr2.jpg" width={770} height={462} alt="carouser-1"/>
                            <div className="carousel-caption d-none d-md-block">
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <div className="entry-portfolio">
                    <h3>QR Menu Maker</h3>

                    <div className="summerynote">

                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                        alteration in
                        some form, by injected humour, or randomised words which donot look even slightly believable. If
                        you are
                        going to use a passage of Lorem Ipsum, you need to be sure there isnot anything embarrassing
                        hidden in
                        the
                        middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks
                        as
                        necessary, making this the first true generator on the Internet. It uses a dictionary of over
                        200 Latin
                        words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks
                        reasonable.
                        The generated Lorem Ipsum is therefore always free from repetition, injected humour, or
                        non-characteristic
                        words etc.

                    </div>
                </div>
                <div className="post">
                    <ul className="social-portfolio">
                        <li>
                            <a>
                                <i className="fab fa-facebook"></i>
                                Facebook</a>
                        </li>
                        <li>
                            <a>
                                <i className="fab fa-twitter"></i>
                                Twitter</a>
                        </li>
                        <li>
                            <a>
                                <i className="fab fa-linkedin"></i>
                                LinkedIn</a>
                        </li>
                    </ul>
                </div>

            </div>
            {/* <!-- first part half --> */}
            <div className="col-sm-4">
                <div className="sidebar-catogory">
                    <h4 className="sidebar-catogory-title">categories</h4>
                    <ul className="catogory-link">
                        <li className="active-li">
                            <a >All</a>
                            <span className="spn-number">(6)</span>
                        </li>
                        <li>
                            <a >Web Development</a>
                            <span className="spn-number">(2)</span>
                        </li>
                        <li>
                            <a >Graphic Design</a>
                            <span className="spn-number">(2)</span>
                        </li>
                        <li>
                            <a >MISC</a>
                            <span className="spn-number">(2)</span>
                        </li>
                    </ul>
                </div>
                
                <div className="sidebar-catogory">
                    <h4 className="sidebar-catogory-title">Related Portfolios</h4>
                            <ul className="catogory-link">
                                <li className="active-li">
                                    <div>
                                    {/* <img src="/p1.jpg" className="img-fluid rounded-start" alt="..."/> */}
                                    <Image src="/images/portfolio/desk1.jpg" width={80} height={80} alt="carouser-1"/>

                                  
                                        <a id="ecommerce-a">Ecommerce Website</a>
                                    </div>
                                </li>
                           
                            </ul>
                       
                    
                </div>
            </div>
        </div>
    </div>
    <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></Script>
        <Footer/>
    </>)
}

export default Qr_Menu_Maker;