import React from 'react'
import Image from 'next/image'
import Layoutimage from '../userAdminComponent/Layoutimage'
import Script from 'next/script'
import Link from 'next/link'
export default function Home() {
  return (
    <>
      <section>
        <div id='karanss'>
          <Layoutimage Layoutitle="Pricing" hometitle="Pricing" />
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4">
              <div className="tabs-pricing mt-5">
                <ul className="nav nav-tabs">
                  <li className='nav-item'>
                    <a className="nav-link active" data-bs-toggle="pill" href="#monthlys">Monthly</a>
                  </li>
                  <li className='nav-item'>
                    <a className="nav-link " data-bs-toggle="pill" href="#yearlys">Yearly</a>
                  </li>
                  <li className='nav-item'>
                    <a className="nav-link " data-bs-toggle="pill" href="#lifetimes">Lifetime</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="tab-content">
            <div className="tab-pane active" id="monthlys">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="item-pricing">
                    <div className="title">
                      <h3>Freelancer</h3>
                      <h2 className="price">
                        $11
                        <span className="month">/ monthly</span>
                      </h2>
                    </div>
                    <div className="body-pricing">
                      <ul className="list">
                        <li className="checked">
                          Custom Domain
                        </li>
                        <li className="unchecked">
                          QR Builder
                        </li>
                        <li className="unchecked">
                          Online CV & Export
                        </li>
                        <li className="checked">
                          Follow/Unfollow
                        </li>
                        <li className="unchecked">
                          Blog
                        </li>
                        <li className="checked">
                          Portfolio
                        </li>
                        <li className="unchecked">
                          Achievements
                        </li>
                        <li className="checked">
                          Skill
                        </li>
                        <li className="checked">
                          Service
                        </li>
                        <li className="checked">
                          Experience
                        </li>
                        <li className="unchecked">
                          Testimonial
                        </li>
                      </ul>
                    </div>
                    <div className="button-btn">
                      <Link href={`/registration/final-step/regular/1`} legacyBehavior><a className="btn-mains" >Trials</a></Link>
                      <Link href={`/registration/final-step/regular/1`} legacyBehavior><a className="btn-mains" >Purchase</a></Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="item-pricing">
                    <div className="title">
                      <h3>Entrepreneur</h3>
                      <h2 className="price">
                        $19
                        <span className="month">/ monthly</span>
                      </h2>
                    </div>
                    <div className="body-pricing">
                      <ul className="list">
                        <li className="checked">
                          Custom Domain
                        </li>
                        <li className="unchecked">
                          QR Builder
                        </li>
                        <li className="unchecked">
                          Online CV & Export
                        </li>
                        <li className="checked">
                          Follow/Unfollow
                        </li>
                        <li className="unchecked">
                          Blog
                        </li>
                        <li className="checked">
                          Portfolio
                        </li>
                        <li className="unchecked">
                          Achievements
                        </li>
                        <li className="checked">
                          Skill
                        </li>
                        <li className="checked">
                          Service
                        </li>
                        <li className="checked">
                          Experience
                        </li>
                        <li className="unchecked">
                          Testimonial
                        </li>
                      </ul>
                    </div>
                    <div className="button-btn">
                      <Link href={`/registration/final-step/regular/2`} legacyBehavior><a className="btn-mains" >Trials</a></Link>
                      <Link href={`/registration/final-step/regular/2`} legacyBehavior><a className="btn-mains" >Purchase</a></Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="item-pricing">
                    <div className="title">
                      <h3>Begninner</h3>
                      <h2 className="price">
                        $6
                        <span className="month">/ monthly</span>
                      </h2>
                    </div>
                    <div className="body-pricing">
                      <ul className="list">
                        <li className="checked">
                          Custom Domain
                        </li>
                        <li className="unchecked">
                          QR Builder
                        </li>
                        <li className="unchecked">
                          Online CV & Export
                        </li>
                        <li className="checked">
                          Follow/Unfollow
                        </li>
                        <li className="unchecked">
                          Blog
                        </li>
                        <li className="checked">
                          Portfolio
                        </li>
                        <li className="unchecked">
                          Achievements
                        </li>
                        <li className="checked">
                          Skill
                        </li>
                        <li className="checked">
                          Service
                        </li>
                        <li className="checked">
                          Experience
                        </li>
                        <li className="unchecked">
                          Testimonial
                        </li>
                      </ul>
                    </div>
                    <div className="button-btn">
                      <Link href={`/registration/final-step/regular/3`} legacyBehavior><a className="btn-mains" >Trials</a></Link>
                      <Link href={`/registration/final-step/regular/3`} legacyBehavior><a className="btn-mains" >Purchase</a></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="yearlys">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="item-pricing">
                    <div className="title">
                      <h3>Begninner</h3>
                      <h2 className="price">
                        $40
                        <span className="month">/ yearly</span>
                      </h2>
                    </div>
                    <div className="body-pricing">
                      <ul className="list">
                        <li className="checked">
                          Custom Domain
                        </li>
                        <li className="unchecked">
                          QR Builder
                        </li>
                        <li className="unchecked">
                          Online CV & Export
                        </li>
                        <li className="checked">
                          Follow/Unfollow
                        </li>
                        <li className="unchecked">
                          Blog
                        </li>
                        <li className="checked">
                          Portfolio
                        </li>
                        <li className="unchecked">
                          Achievements
                        </li>
                        <li className="checked">
                          Skill
                        </li>
                        <li className="checked">
                          Service
                        </li>
                        <li className="checked">
                          Experience
                        </li>
                        <li className="unchecked">
                          Testimonial
                        </li>
                      </ul>
                    </div>
                    <div className="button-btn">
                      <Link href={`/registration/final-step/regular/4`} legacyBehavior><a className="btn-mains" >Trials</a></Link>
                      <Link href={`/registration/final-step/regular/4`} legacyBehavior><a className="btn-mains" >Purchase</a></Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="item-pricing">
                    <div className="title">
                      <h3>Freelancer</h3>
                      <h2 className="price">
                        $110
                        <span className="month">/ yearly</span>
                      </h2>
                    </div>
                    <div className="body-pricing">
                      <ul className="list">
                        <li className="checked">
                          Custom Domain
                        </li>
                        <li className="unchecked">
                          QR Builder
                        </li>
                        <li className="unchecked">
                          Online CV & Export
                        </li>
                        <li className="checked">
                          Follow/Unfollow
                        </li>
                        <li className="unchecked">
                          Blog
                        </li>
                        <li className="checked">
                          Portfolio
                        </li>
                        <li className="unchecked">
                          Achievements
                        </li>
                        <li className="checked">
                          Skill
                        </li>
                        <li className="checked">
                          Service
                        </li>
                        <li className="checked">
                          Experience
                        </li>
                        <li className="unchecked">
                          Testimonial
                        </li>
                      </ul>
                    </div>
                    <div className="button-btn">
                      <Link href={`/registration/final-step/regular/5`} legacyBehavior><a className="btn-mains" >Trials</a></Link>
                      <Link href={`/registration/final-step/regular/5`} legacyBehavior><a className="btn-mains" >Purchase</a></Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="item-pricing">
                    <div className="title">
                      <h3>Entrepreneur</h3>
                      <h2 className="price">
                        $180
                        <span className="month">/ yearly</span>
                      </h2>
                    </div>
                    <div className="body-pricing">
                      <ul className="list">
                        <li className="checked">
                          Custom Domain
                        </li>
                        <li className="unchecked">
                          QR Builder
                        </li>
                        <li className="unchecked">
                          Online CV & Export
                        </li>
                        <li className="checked">
                          Follow/Unfollow
                        </li>
                        <li className="unchecked">
                          Blog
                        </li>
                        <li className="checked">
                          Portfolio
                        </li>
                        <li className="unchecked">
                          Achievements
                        </li>
                        <li className="checked">
                          Skill
                        </li>
                        <li className="checked">
                          Service
                        </li>
                        <li className="checked">
                          Experience
                        </li>
                        <li className="unchecked">
                          Testimonial
                        </li>
                      </ul>
                    </div>
                    <div className="button-btn">
                      <a className="btn-mains" >Trial</a>
                      <a className="btn-mains" >Purchase</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="lifetimes">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="item-pricing">
                    <div className="title">
                      <h3>Free</h3>
                      <h2 className="price">
                        Free
                        <span className="month">/ lifetime</span>
                      </h2>
                    </div>
                    <div className="body-pricing">
                      <ul className="list">
                        <li className="checked">
                          Custom Domain
                        </li>
                        <li className="unchecked">
                          QR Builder
                        </li>
                        <li className="unchecked">
                          Online CV & Export
                        </li>
                        <li className="checked">
                          Follow/Unfollow
                        </li>
                        <li className="unchecked">
                          Blog
                        </li>
                        <li className="checked">
                          Portfolio
                        </li>
                        <li className="unchecked">
                          Achievements
                        </li>
                        <li className="checked">
                          Skill
                        </li>
                        <li className="checked">
                          Service
                        </li>
                        <li className="checked">
                          Experience
                        </li>
                        <li className="unchecked">
                          Testimonial
                        </li>
                      </ul>
                    </div>
                    <div className="button-btn">
                      <a className="btn-mains" >Trial</a>
                      <a className="btn-mains" >Purchase</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="item-pricing">
                    <div className="title">
                      <h3>Golden</h3>
                      <h2 className="price">
                        $499
                        <span className="month">/ lifetime</span>
                      </h2>
                    </div>
                    <div className="body-pricing">
                      <ul className="list">
                        <li className="checked">
                          Custom Domain
                        </li>
                        <li className="unchecked">
                          QR Builder
                        </li>
                        <li className="unchecked">
                          Online CV & Export
                        </li>
                        <li className="checked">
                          Follow/Unfollow
                        </li>
                        <li className="unchecked">
                          Blog
                        </li>
                        <li className="checked">
                          Portfolio
                        </li>
                        <li className="unchecked">
                          Achievements
                        </li>
                        <li className="checked">
                          Skill
                        </li>
                        <li className="checked">
                          Service
                        </li>
                        <li className="checked">
                          Experience
                        </li>
                        <li className="unchecked">
                          Testimonial
                        </li>
                      </ul>
                    </div>
                    <div className="button-btn">
                      <a className="btn-mains" >Trial</a>
                      <a className="btn-mains" >Purchase</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="item-pricing">
                    <div className="title">
                      <h3>Plutinum</h3>
                      <h2 className="price">
                        $999
                        <span className="month">/ lifetime</span>
                      </h2>
                    </div>
                    <div className="body-pricing">
                      <ul className="list">
                        <li className="checked">
                          Custom Domain
                        </li>
                        <li className="unchecked">
                          QR Builder
                        </li>
                        <li className="unchecked">
                          Online CV & Export
                        </li>
                        <li className="checked">
                          Follow/Unfollow
                        </li>
                        <li className="unchecked">
                          Blog
                        </li>
                        <li className="checked">
                          Portfolio
                        </li>
                        <li className="unchecked">
                          Achievements
                        </li>
                        <li className="checked">
                          Skill
                        </li>
                        <li className="checked">
                          Service
                        </li>
                        <li className="checked">
                          Experience
                        </li>
                        <li className="unchecked">
                          Testimonial
                        </li>
                      </ul>
                    </div>
                    <div className="button-btn">
                      <a className="btn-mains" >Trial</a>
                      <a className="btn-mains" >Purchase</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* profile table */}
      <section>
        {/* <div>
						<Layoutimage Layoutitle="All Profiles" hometitle="Profiles"/>
					</div> */}
        <div className="container  mb-5">

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
                    <ul className="all-list">
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
                    <ul className="all-list">
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
                    <ul className="all-list">
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
                    <ul className="all-list">
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
                    <ul className="all-list">
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
                    <ul className="all-list">
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
                    <ul className="all-list">
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
                    <ul className="all-list">
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
                    <ul className="all-list">
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

      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></Script>


    </>
  )
}
