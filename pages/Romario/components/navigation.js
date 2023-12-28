import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import { useRouter } from "next/router";


const Navigation = () => {
 const router = useRouter();

    return (<>
        <Head>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" />
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
          
        </Head>
        <nav className="navbar navbar-expand-lg " id="home_nav">
            <div className="container-fluid">
                <a className="navbar-brand me-auto " href="#" id="home_logo"><Image src="/images/logo.png" width={70} height={70} alt="logo" id="logo_id" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0  " id="home_ul">
                        <li className="nav-item mx-3 text-black fs-4">
                            <Link href="/Romario" legacyBehavior><a className={router.pathname == "/Romario" ? "nav-link active" : "nav-link"}   aria-current="page" >Home</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/Romario/services" legacyBehavior><a className={router.pathname == "/Romario/services" ? "nav-link active" : "nav-link"} >Products</a></Link>
                        </li>
                        <li className="nav-item">

                            <Link href="/Romario/portfolio" legacyBehavior>
                                <a className={router.pathname == "/Romario/portfolio" ? "nav-link active" : "nav-link"} >Portfolios</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/Romario/blog" legacyBehavior><a className={router.pathname == "/Romario/blog" ? "nav-link active" : "nav-link"} >Blogs</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/Romario/contact" legacyBehavior><a className={router.pathname == "/Romario/contact" ? "nav-link active" : "nav-link"} >Contacts</a></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></Script>
    </>)
}

export default Navigation;