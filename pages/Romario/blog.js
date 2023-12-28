import Head from "next/head";
import Image from "next/image";
import Navigation from "./components/navigation";
import Footer from "./components/footer";
const Blog = () =>{
    return(<>
    
    <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
         <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"/>
         <title>Romario - Blog</title>
      </Head>
      <Navigation />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="row ">
              <div className="col-md-6 " id="cont-1">
                <div className="blog-post">
                  <div className="blog-post-content">
                    <h5 className="blog-post-titile">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing ....!</p>
                    </h5>
                    <ul className="blog-post-meat">
                      <li>
                        <a>
                          <i className="fas fa-user">
                        </i>
                          <span>by Romario</span>
                        </a>
                      </li>
                      <li>
                        <a>
                          <i className="fas fa-calendar-alt"> 
                          </i>
                            <span>July 26, 2021</span>
                        </a>
                      </li>
                    </ul> 
                      <Image src="/blogs/image1.jpg" width="300" height="250" className="blog-image" alt="images"/>
                  </div>
                </div>
              </div>
              <div className="col-md-6" id="cont-1">
                <div className="blog-post">
                  <div className="blog-post-content">
                    <h5 className="blog-post-titile">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing ....!</p>
                    </h5>
                    <ul className="blog-post-meat">
                      <li>
                        <a><i className="fas fa-user"></i>
                        <span>by Romario</span>
                        </a>
                      </li>
                      <li>
                        <a><i className="fas fa-calendar-alt"> </i><span>July 26, 2021</span></a>
                      </li>
                    </ul>
                      <Image src="/blogs/image2.jpg" width="300" height="250"  className="blog-image" alt="images"/>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mt-4" id="cont-1">
                <div className="blog-post">
                  <div className="blog-post-content">
                    <h5 className="blog-post-titile">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing ....!</p>
                    </h5>
                    <ul className="blog-post-meat">
                      <li>
                        <a><i className="fas fa-user"></i><span>by Romario</span></a>
                      </li>
                      <li>
                        <a><i className="fas fa-calendar-alt"></i><span>July 26, 2021</span></a>
                      </li>
                    </ul>
                      <Image src="/blogs/image3.jpg" width="300" height="250" className="blog-image" alt="image3"/>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mt-4" id="cont-1">
                <div className="blog-post">
                  <div className="blog-post-content">
                    <h5 className="blog-post-titile">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing ....!</p>
                    </h5>
                    <ul className="blog-post-meat">
                      <li>
                        <a><i className="fas fa-user"></i><span>by Romario</span></a>
                      </li>
                      <li>
                        <a><i className="fas fa-calendar-alt"></i><span>July 26, 2021</span></a>
                      </li>
                    </ul>
                      <Image src="/blogs/image1.jpg" width="300" height="250" className="blog-image" alt="image1"/>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mt-4" id="cont-1">
                <div className="blog-post">
                  <div className="blog-post-content">
                    <h5 className="blog-post-titile">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing ....!</p>
                    </h5>
                    <ul className="blog-post-meat">
                      <li>
                        <a><i className="fas fa-user"></i><span>by Romario</span></a>
                      </li>
                      <li>
                        <a><i className="fas fa-calendar-alt"></i><span>by Romario</span></a>
                      </li>
                    </ul>
                      <Image src="/blogs/image2.jpg" width="300" height="250" className="blog-image" alt="image2"/>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mt-4" id="cont-1">
                <div className="blog-post">
                  <div className="blog-post-content">
                    <h5 className="blog-post-titile">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing ....!</p>
                    </h5>
                    <ul className="blog-post-meat">
                      <li>
                        <a><i className="fas fa-user"></i><span>by Romario</span></a>
                      </li>
                      <li>
                        <a><i className="fas fa-calendar-alt"></i><span>July 26, 2021</span></a>
                      </li>
                    </ul>
                      <Image src="/blogs/image3.jpg" width="300" height="250" className="blog-image" alt="image3"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4" id="sidbar">
            <div className="sidebar-area">
              <h4 className="sidebar-title">Search Here</h4>
            <form action="">
              <div className="form-group">
              <input type="text" placeholder="Search your keyword..." className="sidebar-form_control"/>
              <button type="submit" className="search-btn">
              <i className="fa fa-search" aria-hidden="true"></i>
              </button>
              </div>
            </form>
          </div>
          <div className="sidebar-catogory">
            <h4 className="sidebar-catogory-title">categories</h4>
            <ul className="catogory-link">
              <li className="active-li">
                <a >All</a>
                <span className="spn-number">(6)</span>
              </li>
              <li>
                <a >Tech</a>
                <span className="spn-number">(2)</span>
              </li>
              <li>
                <a >Lifestyle</a>
                <span className="spn-number">(2)</span>
              </li>
              <li>
                <a >MISC</a>
                <span className="spn-number">(2)</span>
              </li>
            </ul>
          </div>
          <div className="sidebar-post">
            <h4 className="sidebar-post-title">Latest Blogs</h4>
            <ul className="sidebar-post-list">
              <li className="sidebar-post-content">
              <Image src="/blogs/image3.jpg" width="300" height="250" className="post-image" alt="image3"/>
              <div className="sidebar-post-title-date">
                <h6>Richard McClintock, a Latin pr...</h6>
                <span className="post-on">
                  <i className="fas fa-calendar-alt">
                  </i>
                    <a id="post-on-id">July 26, 2021</a>
                </span>
              </div>
              </li>
              <li className="sidebar-post-content">
              <Image src="/blogs/image2.jpg" width="300" height="250" className="post-image" alt="image2"/>
              <div className="sidebar-post-title-date">
                <h6>Richard McClintock, a Latin pr...</h6>
                <span className="post-on">
                  <i className="fas fa-calendar-alt">
                  </i>
                    <a id="post-on-id">July 26, 2021</a>
                </span>
              </div>
              </li>
              <li className="sidebar-post-content">
              <Image src="/blogs/image1.jpg" width="300" height="250" className="post-image" alt="image1"/>
              <div className="sidebar-post-title-date">
                <h6>Richard McClintock, a Latin pr...</h6>
                <span className="post-on">
                  <i className="fas fa-calendar-alt">
                  </i>
                    <a id="post-on-id">July 26, 2021</a>
                </span>
              </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      </div>

      <Footer />
    </>)
}

export default Blog;