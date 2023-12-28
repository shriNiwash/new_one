import Image from "next/image";
import Link from "next/link";

const Services_home = () =>{
    return(<>
            <section className="page-content-section inner-section-gap">
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="services-card" id="div-services">
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

        </section>


    </>)
}

export default Services_home;