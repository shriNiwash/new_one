import Head from "next/head";
import Script from "next/script";
import Image from "next/image";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import Portfolios from "../components/portfolios";

const Portfolio = () => {
    return (<>
        <Head>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" />
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                <title>Romario - Portfolio</title>

        </Head>
        <Navigation />
        <section className="hero-ecommerce">
            <div className="container-ecommerce">
                <div className="row-ecommerce">
                    <div className="col-lg-12">
                        <div className="page-title">
                            <h1 className="div_title">Portfolios</h1>
                            <ul className="breadcrumbs-link">
                                <li>

                                    <a>Home</a>

                                </li>
                                <li><i className="fa fa-chevron-right"></i></li>
                                <li>Portfolios</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
           
        </section>
        <Portfolios />
        
        <Footer />


    </>)
}

export default Portfolio;