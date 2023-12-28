import Head from "next/head"
import Script from "next/script"
import Image from "next/image";
import Autotyper from "./components/autotyper";
import Navigation from "./components/navigation";
import Footer from "./components/footer";
import { motion } from 'framer-motion';
import Portfolios from "./components/portfolios";
import Services_home from "./components/services_home";
import Cookies from "js-cookie";
const Index = () => {
    const username = Cookies.get("username");
    return (<>
    <Head>
    <title>Romorio - Home</title>
    </Head>


        <Navigation />

        <section className="main_typer">
            <div className="container" id="hero_container">
                <div className="row" id="hero_row">
                    <div className="col-lg-6 col-md-6 ">
                        <div className="first_hero">
                            <span className="hero_span">Welcome to </span>
                            <h1 className="hero_h1">{(username) ? username :"A Ecommerce Site"}</h1>
                            <div className="first_typer">
                                {/* <p id="type_p" className="d-inline-block"><span className="auto-type"></span></p> */}
                                <Autotyper />

                            </div>
                            <ul className="social_links">
                                <li><a href=""><i className="fa fa-facebook"></i></a></li>
                                <li><a href=""><i className="fa fa-twitter"></i></a></li>
                                <li><a href=""><i className="fa fa-linkedin"></i></a></li>
                                <li><a href=""><i className="fa fa-dribbble"></i></a></li>
                                <li><a href=""><i className="fa fa-github"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 " id="next-col-6">
                        <motion.div
                            animate={{ rotate: [0, 0, 0, 0], x: [0, 0, 0, 0], y: [5, 1, 1, 5] }}
                            transition={{ repeat: Infinity, duration: 1 }}
                        >
                            <div className="second_hero_section text-right">
                                {/* <img src="desk.png" alt="deskphoto" id="image_second" /> */}
                                <Image src="/images/desk.png" id="image_second" width={665} height={629} alt="Desk Image" />
                            </div> </motion.div>

                    </div>
                </div>
            </div>
        </section>





        <Services_home />

     

        <section  className="portFolio_sec">
            <div className="contaner">
                <div className="common-heading text-center mb-50">
                    <span className="lineTag">Products</span>
                    <h2 className="div_title">Awesome Products</h2>
                </div>
                <Portfolios />
            </div>
        </section>
        <Footer />

        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" />
        <Script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12" />

    </>)
}

export default Index;