import Head from "next/head";
import React from "react";
import Image from "next/image";

const FooterAdmin = () => {
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
      <div className="footer-widget pt pb">
        <div className="f-conatiner">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="widget about-widget">
                <a href="">
                  <Image
                    src="/footer/headerimg.png"
                    width="111"
                    height="33"
                    alt="image"
                    className="logo-image"
                  />
                </a>
                <p>
                  We are a awward winning multinaitonal Company. We Believe
                  quality and standard worlwidex Consider.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="widget useful-link-widget">
                <a href="">
                  <h4 className="widget-title">Useful Links</h4>
                </a>
                <p>
                  Our BlogsContact Us Privacy Policy Terms & Conditions About Us
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="widget newsletter-widget">
                <a href="">
                <h4 className="widget-title">Newsletter</h4>
                </a>
                <p>
                Get latest updates first
                </p>
                <div className="form-group">
                <input type="text" className="form-control" placeholder="Enter Your Email" />
                <button type="button" class="btn btn-outline-success bts">Success</button>
                </div>
                <div className="box-socail">
                    <ul className="link-socail">
                    <li className="hoverbtn-inline">
                        <a>
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                    <li className="hoverbtn-inline">
                        <a>
                          <i className="fab fa-linkedin-in iconpicker-component circle"></i>
                        </a>
                      </li>
                    <li className="hoverbtn-inline">
                        <a>
                          <i className="fab fa-dribbble"></i>
                        </a>
                      </li>
                    <li className="hoverbtn-inline">
                        <a>
                          <i className="fab fa-github"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterAdmin;
