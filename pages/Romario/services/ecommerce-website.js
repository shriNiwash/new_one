import Head from "next/head"
import Image from "next/image";
import Navigation from "../components/navigation";
import Footer from "../components/footer";

const Ecommerce_website = () =>
{
    return (<>
    <Head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"/>
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"/>
<title>Romario - services - Ecommerce_website</title>
    </Head>
    <Navigation />
    <section class="hero-ecommerce">
        <div class="container-ecommerce">
            <div class="row-ecommerce">
                <div class="col-lg-10">
                    <div class="page-title">
                        <h1>Service Details</h1>
                        <ul class="breadcrumbs-link">
                            <li>
                                <a>Home</a>

                            </li>
                            <li><i class="fa fa-chevron-right"></i></li>
                            <li>Service Details</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="services-first">
        <div class="container-a">

        <Image src="/services/card 1.jpg"  width={330} height={218} alt="dask 1"/>

        </div>
        <div class="entry">
            <h3>Ecommerce Website</h3>

            <div class="summerynote">

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
        <div class="post">
            <ul class="social">
                <li>
                    <a>
                        <i class="fab fa-facebook"></i>
                        Facebook</a>
                </li>
                <li>
                    <a>
                        <i class="fab fa-twitter"></i>
                        Twitter</a>
                </li>
                <li>
                    <a>
                        <i class="fab fa-linkedin"></i>
                        LinkedIn</a>
                </li>
            </ul>
        </div>

    </section>
    <Footer />
    </>)
}

export default Ecommerce_website;