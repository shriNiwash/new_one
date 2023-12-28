import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navigation from "../components/navigation";
import Footer from "../components/footer";

const Index = () => {
    return (<>
        <Head>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" />
            <title>Romario - services</title>
        </Head>
        <Navigation />
        <section className="hero-ecommerce">
            <div className="container-ecommerce">
                <div className="row-ecommerce">
                    <div className="col-lg-10">
                        <div className="page-title">
                            <h1 className="div_title">Services</h1>
                            <ul className="breadcrumbs-link">
                                <li>

                                    <a>Home</a>

                                </li>
                                <li><i className="fa fa-chevron-right"></i></li>
                                <li>Services</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="page-content-section inner-section-gap">
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="services-card" id="div-services">
                            {/* <img src="/card 1.jpg" className="card-img-top" id="img-top" /> */}
                            <Image src="/services/card 1.jpg" className="card-img-top" id="img-top" width={330} height={218} alt="dask 1" />
                            <h4 className="services-tittle">
                                <Link href="/Romario/services/ecommerce-website" legacyBehavior>
                                    <a>Ecommerce Website</a>
                                </Link>
                            </h4>

                            <p className="card-text">There are many variations of passages of Lorem Ipsum available, but the majority have suff</p>

                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="services-card" id="div-services">
                            <Image src="/services/card 2.jpg" className="card-img-top" id="img-top" width={330} height={218} alt="dask 1" />
                            <h4 className="services-tittle">
                                <Link href="/Romario/services/logo-design" legacyBehavior>
                                    <a>Logo Design</a>
                                </Link>
                            </h4>

                            <p className="card-text">There are many variations of passages of Lorem Ipsum available, but the majority have suff</p>

                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="services-card" id="div-services">
                            <Image src="/services/card 3.jpg" className="card-img-top" id="img-top" width={330} height={218} alt="dask 1" />
                            <h4 className="services-tittle">
                                <Link href="/Romario/services/html-templates" legacyBehavior>
                                    <a>HTML Templates</a>

                                </Link>
                            </h4>

                            <p className="card-text">There are many variations of passages of Lorem Ipsum available, but the majority have suff</p>

                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="services-card" id="div-services">
                            <Image src="/services/card 4.jpg" className="card-img-top" id="img-top" width={330} height={218} alt="dask 1" />
                            <h4 className="services-tittle">
                                <Link href="/Romario/services/update-websites" legacyBehavior>
                                    <a>Update Websites</a>

                                </Link>
                            </h4>

                            <p className="card-text">There are many variations of passages of Lorem Ipsum available, but the majority have suff</p>

                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="services-card" id="div-services">
                            <Image src="/services/card 5.jpg" className="card-img-top" id="img-top" width={330} height={218} alt="dask 1" />
                            <h4 className="services-tittle">
                                <Link href="/Romario/services/after-project-support" legacyBehavior>
                                    <a>After Project Support</a>

                                </Link>
                            </h4>

                            <p className="card-text">There are many variations of passages of Lorem Ipsum available, but the majority have suff</p>

                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="services-card" id="div-services">
                            <Image src="/services/card 6.jpg" className="card-img-top" id="img-top" width={330} height={218} alt="dask 1" />
                            <h4 className="services-tittle">
                                <Link href="/Romario/services/mobile-apps" legacyBehavior>
                                    <a>Mobile Apps</a>

                                </Link>
                            </h4>

                            <p className="card-text">There are many variations of passages of Lorem Ipsum available, but the majority have suff</p>

                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </>)
}

export default Index;