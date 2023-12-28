import Head from "next/head";
import Image from "next/image";
import Navigation from "../components/navigation";
import Footer from "../components/footer";

const After_project_support = () =>
{
    return (<>
<Head>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"/>
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"/>
<title>Romario - services - After_project_support</title>
</Head>
<Navigation />
   
    <section className="hero-ecommerce">
    <div className="container-ecommerce">
        <div className="row-ecommerce">
            <div className="col-lg-10">
                <div className="page-title">
                    <h1 className="div_title">Service Details</h1>
                    <ul className="breadcrumbs-link">
                        <li>
                            <a>Home</a>

                        </li>
                        <li><i className="fa fa-chevron-right"></i></li>
                        <li >Service Details</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>
<section className="services-first">
    <div className="container-a">

        {/* <img src="https://profilo.xyz/assets/front/img/user/services/1627283938.jpg" alt=""> */}
        <Image src="/services/card 5.jpg"  width={330} height={218} alt="dask 1"/>

    </div>
    <div className="entry">
        <h3>After Project Support</h3>

        <div className="summerynote">

            There are many variations of passages of Lorem Ipsum available, but the majority have suffered
            alteration in
            some form, by injected humour, or randomised words which donot look even slightly believable. If you are
            going to use a passage of Lorem Ipsum, you need to be sure there isnot anything embarrassing hidden in
            the
            middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as
            necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin
            words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks
            reasonable.
            The generated Lorem Ipsum is therefore always free from repetition, injected humour, or
            non-characteristic
            words etc.

        </div>
    </div>
    <div className="post">
        <ul className="social">
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

</section>
<Footer />
</>)
}

export default After_project_support;