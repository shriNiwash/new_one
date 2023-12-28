import Head from "next/head";
import Image from "next/image";
import Layoutimage from "../userAdminComponent/Layoutimage";


const Profile = () => {
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
      <section>
          <div>
						<Layoutimage Layoutitle="All Profiles" hometitle="Profiles"/>
					</div>
        <div className="container  mb-5">
          <div className="filter-search">
            <div className="row">
              <div className="col-lg-4 ">
                <div className="box-search ">
                  <input
                    type="text"
                    className="form_control"
                    placeholder="Search by first name, last name, username"
                  />
                </div>
              </div>
              <div className="col-lg-4 ">
                <div className="box-search">
                  <input
                    type="text"
                    className="form_control"
                    placeholder="Search by first name, last name, username"
                  />
                </div>
              </div>
              <div className="col-lg-4 ">
                <div className="box-search">
                  <input
                    type="text"
                    className="form_control"
                    placeholder="Search by first name, last name, username"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="card-image">
            <div className="row ">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="title-card mt-5 ml-5">
                  <div className="card-imagefile">
                    <Image
                      src="/useradmin/profileimage/asset 2.jpeg"
                      width="114"
                      height="114"
                      alt="image"
                      className="logo-image"
                    />
                  </div>
                  <div className="text-tx">
                  <strong className="text">Federico Chiesa</strong>
                  </div>
                  <div className="spn">
                  <span>Rome, Italy</span>
                  </div>
                  <div className="hoverbtn">
                  <ul  className="all-list">
                      <li className="hoverbtn-inline">
                        <a className="btn-main">
                          <i className="fas fa-eye"></i>
                          View Profile
                        </a>
                      </li>
                      <li className="hoverbtn-inline">
                        <a className="btn-main">
                          <i className="fas fa-user-plus"></i>
                          Follow
                        </a>
                      </li>
                    </ul>
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
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="title-card mt-5">
                  <div className="card-imagefile">
                    <Image
                      src="/useradmin/profileimage/asset 3.png"
                      width="114"
                      height="114"
                      alt="image"
                      className="logo-image"
                    />
                  </div>
                  <div className="text-tx">
                  <strong className="text">Federico Chiesa</strong>
                  </div>
                  <div className="spn">
                  <span>Rome, Italy</span>
                  </div>
                  <div className="hoverbtn">
                  <ul  className="all-list">
                      <li className="hoverbtn-inline">
                        <a className="btn-main">
                          <i className="fas fa-eye"></i>
                          View Profile
                        </a>
                      </li>
                    <li className="hoverbtn-inline">
                        <a className="btn-main">
                          <i className="fas fa-user-plus"></i>
                          Follow
                        </a>
                      </li>
                    </ul>
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
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="title-card mt-5">
                  <div className="card-imagefile">
                    <Image
                      src="/useradmin/profileimage/asset 4.png"
                      width="114"
                      height="114"
                      alt="image"
                      className="logo-image"
                    />
                  </div>
                  <div className="text-tx">
                  <strong className="text">Federico Chiesa</strong>
                  </div>
                  <div className="spn">
                  <span>Rome, Italy</span>
                  </div>
                  <div className="hoverbtn">
                  <ul  className="all-list">
                      <li className="hoverbtn-inline">
                        <a className="btn-main">
                          <i className="fas fa-eye"></i>
                          View Profile
                        </a>
                      </li>
                    <li className="hoverbtn-inline">
                        <a className="btn-main">
                          <i className="fas fa-user-plus"></i>
                          Follow
                        </a>
                      </li>
                    </ul>
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
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="title-card mt-5">
                  <div className="card-imagefile">
                    <Image
                      src="/useradmin/profileimage/asset 5.png"
                      width="114"
                      height="114"
                      alt="image"
                      className="logo-image"
                    />
                  </div>
                  <div className="text-tx">
                  <strong className="text">Federico Chiesa</strong>
                  </div>
                  <div className="spn">
                  <span>Rome, Italy</span>
                  </div>
                  <div className="hoverbtn">
                  <ul  className="all-list">
                      <li className="hoverbtn-inline">
                        <a className="btn-main">
                          <i className="fas fa-eye"></i>
                          View Profile
                        </a>
                      </li>
                    <li className="hoverbtn-inline">
                        <a className="btn-main">
                          <i className="fas fa-user-plus"></i>
                          Follow
                        </a>
                      </li>
                    </ul>
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
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="title-card mt-5">
                  <div className="card-imagefile">
                    <Image
                      src="/useradmin/profileimage/asset 6.jpeg"
                      width="114"
                      height="114"
                      alt="image"
                      className="logo-image"
                    />
                  </div>
                  <div className="text-tx">
                  <strong className="text">Federico Chiesa</strong>
                  </div>
                  <div className="spn">
                  <span>Rome, Italy</span>
                  </div>
                  <div className="hoverbtn">
                  <ul  className="all-list">
                      <li className="hoverbtn-inline">
                        <a className="btn-main">
                          <i className="fas fa-eye"></i>
                          View Profile
                        </a>
                      </li>
                    <li className="hoverbtn-inline">
                        <a className="btn-main">
                          <i className="fas fa-user-plus"></i>
                          Follow
                        </a>
                      </li>
                    </ul>
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
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="title-card mt-5">
                  <div className="card-imagefile">
                    <Image
                      src="/useradmin/profileimage/asset 7.png"
                      width="114"
                      height="114"
                      alt="image"
                      className="logo-image"
                    />
                  </div>
                  <div className="text-tx">
                  <strong className="text">Federico Chiesa</strong>
                  </div>
                  <div className="spn">
                  <span>Rome, Italy</span>
                  </div>
                  <div className="hoverbtn">
                  <ul  className="all-list">
                      <li className="hoverbtn-inline">
                        <a className="btn-main">
                          <i className="fas fa-eye"></i>
                          View Profile
                        </a>
                      </li>
                    <li className="hoverbtn-inline">
                        <a className="btn-main">
                          <i className="fas fa-user-plus"></i>
                          Follow
                        </a>
                      </li>
                    </ul>
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
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="title-card mt-5">
                  <div className="card-imagefile">
                    <Image
                      src="/useradmin/profileimage/asset 8.jpeg"
                      width="114"
                      height="114"
                      alt="image"
                      className="logo-image"
                    />
                  </div>
                  <div className="text-tx">
                  <strong className="text">Federico Chiesa</strong>
                  </div>
                  <div className="spn">
                  <span>Rome, Italy</span>
                  </div>
                  <div className="hoverbtn">
                  <ul  className="all-list">
                      <li className="hoverbtn-inline">
                        <a className="btn-main">
                          <i className="fas fa-eye"></i>
                          View Profile
                        </a>
                      </li>
                    <li className="hoverbtn-inline">
                        <a className="btn-main">
                          <i className="fas fa-user-plus"></i>
                          Follow
                        </a>
                      </li>
                    </ul>
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
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="title-card mt-5">
                  <div className="card-imagefile">
                    <Image
                      src="/useradmin/profileimage/asset 9.jpeg"
                      width="114"
                      height="114"
                      alt="image"
                      className="logo-image"
                    />
                  </div>
                  <div className="text-tx">
                  <strong className="text">Federico Chiesa</strong>
                  </div>
                  <div className="spn">
                  <span>Rome, Italy</span>
                  </div>
                  <div className="hoverbtn">
                  <ul  className="all-list">
                      <li className="hoverbtn-inline">
                        <a className="btn-main">
                          <i className="fas fa-eye"></i>
                          View Profile
                        </a>
                      </li>
                    <li className="hoverbtn-inline">
                        <a className="btn-main">
                          <i className="fas fa-user-plus"></i>
                          Follow
                        </a>
                      </li>
                    </ul>
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
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="title-card mt-5">
                  <div className="card-imagefile">
                    <Image
                      src="/useradmin/profileimage/asset 10.jpeg"
                      width="114"
                      height="114"
                      alt="image"
                      className="logo-image"
                    />
                  </div>
                  <div className="text-tx">
                  <strong className="text">Federico Chiesa</strong>
                  </div>
                  <div className="spn">
                  <span>Rome, Italy</span>
                  </div>
                  <div className="hoverbtn">
                  <ul  className="all-list">
                      <li className="hoverbtn-inline">
                        <a className="btn-main">
                          <i className="fas fa-eye"></i>
                          View Profile
                        </a>
                      </li>
                    <li className="hoverbtn-inline">
                        <a className="btn-main">
                          <i className="fas fa-user-plus"></i>
                          Follow
                        </a>
                      </li>
                    </ul>
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
      </section>
    </>
  );
};

export default Profile;
