import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/router"


const Slidercanvas = () =>{
    const router = useRouter();
    return(<>
    <div className="slider_convas slidebar-style-2" id="offcanvasExample">
    <div className="scroll-wrappers">
      <div className="slder-wrappers">
        <div className="slidebar-contents">
          <div className="user_data_login">
            <div className="avatar_div">
              <div className="avatar_photo float-left mr-2">
                {/* <img src="aadmi.jpg" alt="photo" /> */}
                <Image src="/dashboard/aadmi.jpg" width={40} height={40} alt="userpic" />
              </div>
              <a data-bs-toggle="collapse" href="#collapseExamp" role="button" aria-expanded="false" aria-controls="collapseExample"><div className="info_daata">
                <span>Romario Sara</span>
                <p>Romario</p>
              </div>
              </a>
              <span className="paret_sara"></span>
            </div>
            <div className="collapse  div-collapse data_collapse" id="collapseExamp" >
              <ul className="nav_collapsed">
                <li>Edit Profile</li>
                <li>Change Password</li>
                <li>Logout</li>
              </ul>
            </div>

          </div>

          <div className="users">
            <ul className="nav">
              <div className="row mb-2 row_data" >
                <li className={router.asPath == '/user/dashboard' ? 'activated' : 'nav-items'}>
                  <Link href="/user/dashboard" legacyBehavior><a href="" className="a-active"><i className="fa fa-palette a-active"></i><p>Dashboard</p></a></Link>
                </li>
                <li className={router.asPath == '/user/editProfile' ? 'activated' : 'nav-items'} >
                  <Link href="/user/editProfile" legacyBehavior><a className=""><i className="fa fa-user-circle"></i><p>Edit Profile</p></a></Link>
                </li>
                <li className="nav-items ">
                  {/* <!-- <a href="" className=""><i className="fa fa-link"></i><p>Domains & URLs</p></a> */}
                  <a data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                    <i className="fa fa-link"></i><p>Domain & URLs</p><span className="paret_domain"></span>
                  </a>

                </li>
                <div className="collapse  div-collapse" id="collapseExample" >
                  <ul className="nav_collapse">
                    <Link href="/user/customdomain" legacyBehavior><li ><a>Custom Domain</a></li></Link>
                    <li>Sub-Domain</li>
                  </ul>
                </div>
                <li className={router.asPath == ('/user/setting/favicon' || '/user/setting/logo' || '/user/setting/preloader') ? 'activated' : 'nav-items'}>
                  <a data-bs-toggle="collapse" href="#collapseExamples" role="button" aria-expanded="false" aria-controls="collapseExample">
                    <i className="fa fa-home"></i><p>Settings</p><span className="paret_setting"></span>
                  </a>
                </li>
                <div className="collapse  div-collapse" id="collapseExamples" >
                  <ul className="nav_collapse">
                    <li>Themes</li>
                    <Link href="/user/setting/favicon" legacyBehavior><li><a>Fevicon</a></li></Link>
                    <Link href="/user/setting/logo" legacyBehavior><li><a>Logo</a></li></Link>
                    <Link href="/user/setting/preloader" legacyBehavior><li><a>Preloader</a></li></Link>
                    <Link href="/user/setting/colorsetting" legacyBehavior><li>Color Setting</li></Link>
                    <li>Social Links</li>
                    <Link href="/user/setting/seoinformation" legacyBehavior><li>SEO Information</li></Link>

                  </ul>
                </div>
                <li className={router.asPath == '/user/homesection' ? 'activated' : 'nav-items'}>
                  <Link href="/user/homesection" legacyBehavior><a className=""><i className="fa fa-home"></i><p>Home Sections</p></a></Link>
                </li>
                <li className={router.asPath == '/user/preference' ? 'activated' : 'nav-items'}>
                  <Link href="/user/preference" legacyBehavior><a  className=""><i className="fa fa-toggle-on"></i><p>Preference</p></a></Link>
                </li>
                <li className={router.asPath == '/user/skill' ? 'activated' : 'nav-items'}>
                  <Link href="/user/skill" legacyBehavior ><a className=""><i className="fa fa-pencil-ruler"></i><p>Skills</p></a></Link>
                </li>
                <li className={router.asPath == '/user/services' ? 'activated' : 'nav-items'}>
                  <Link href="/user/services" legacyBehavior><a className=""><i className="fa fa-hands"></i><p>Services</p></a></Link>
                </li>
                <li className={router.asPath == ('/user/jobexperiance' || '/user/educations') ? 'activated' : 'nav-items'}>
                  <a data-bs-toggle="collapse" href="#collapseExampled" role="button" aria-expanded="false" aria-controls="collapseExample">
                    <i className="fa fa-user-cog"></i><p>Experiences</p><span className="paret_experience"></span>
                  </a>
                </li>
                <div className="collapse  div-collapse" id="collapseExampled" >
                  <ul className="nav_collapse">
                    <Link href="/user/jobexperiance" legacyBehavior><li>Job Experiences</li></Link>
                    <Link href="/user/educations" legacyBehavior><li>Educations</li></Link>

                  </ul>
                </div>
                <li className={router.asPath == '/user/achievements' ? 'activated' : 'nav-items'}>
                 <Link href="/user/achievements" legacyBehavior><a href="" className=""><i className="fa fa-trophy"></i><p>Achievements</p></a></Link>
                </li>
                <li className="nav-items ">
                  <a data-bs-toggle="collapse" href="#collapseExampled_portfolio" role="button" aria-expanded="false" aria-controls="collapseExample">
                    <i className="fa fa-chalkboard-teacher"></i><p>Portfolio</p><span className="paret_portfolio"></span>
                  </a>
                </li>
                <div className="collapse  div-collapse" id="collapseExampled_portfolio" >
                  <ul className="nav_collapse">
                    <li>Category</li>
                    <li>Portfolios</li>

                  </ul>
                </div>
                <li className={router.asPath == '/user/testimonials' ? 'activated' : 'nav-items'}>
                  <Link href="/user/testimonials" legacyBehavior><a className=""><i className="fa fa-comment"></i><p>Testimonial</p></a></Link>
                </li>
                <li className="nav-items ">
                  <a data-bs-toggle="collapse" href="#collapseExampled_blogs" role="button" aria-expanded="false" aria-controls="collapseExample">
                    <i className="fa fa-blog"></i><p>Blogs</p><span className="paret_blogs"></span>
                  </a>
                </li>
                <div className="collapse  div-collapse" id="collapseExampled_blogs" >
                  <ul className="nav_collapse">
                  <Link href="/user/blog-categories" legacyBehavior><li>Category</li></Link>
                    <Link href="/user/blog" legacyBehavior><li>Blogs</li></Link>

                  </ul>
                </div>
                <li className="nav-items ">
                  <a data-bs-toggle="collapse" href="#collapseExample_qr" role="button" aria-expanded="false" aria-controls="collapseExample">
                    <i className="fa fa-qrcode"></i><p>QR Codes</p><span className="paret_qr"></span>
                  </a>
                </li>
                <div className="collapse  div-collapse" id="collapseExample_qr" >
                  <ul className="nav_collapse">
                    <Link href="/user/qr-code" legacyBehavior><li>Generate QR Code</li></Link>
                    <Link href="/user/saved-qr" legacyBehavior><li>Saved QR Codes</li></Link>

                  </ul>
                </div>
                <li className="nav-items ">
                  <a data-bs-toggle="collapse" href="#collapseExample_vcards" role="button" aria-expanded="false" aria-controls="collapseExample">
                    <i className="fa fa-address-card"></i><p>vCards Management</p><span className="paret"></span>
                  </a>
                </li>
                <div className="collapse  div-collapse" id="collapseExample_vcards" >
                  <ul className="nav_collapse">
                    <li>vCards</li>
                    <Link href="/user/addvcard" legacyBehavior><li>Add vCard</li></Link>

                  </ul>
                </div>
                <li className="nav-items ">
                  <a href="" className=""><i className="fa fa-file"></i><p>CVs Managements</p></a>
                </li>
                <li className="nav-items ">
                  <a data-bs-toggle="collapse" href="#collapseExample_follower" role="button" aria-expanded="false" aria-controls="collapseExample">
                    <i className="fa fa-user-friends"></i><p>Follower/Following</p><span className="paret_follower"></span>
                  </a>
                </li>
                <div className="collapse  div-collapse" id="collapseExample_follower" >
                  <ul className="nav_collapse">
                    <Link href="/follower/follower" legacyBehavior><li>Follower</li></Link>
                    <Link href="/follower/follo" legacyBehavior><li>Following</li></Link>

                  </ul>
                </div>
                <li className="nav-items ">
                  <a href="" className=""><i className="fa fa-language"></i><p>Language Management</p></a>
                </li>
                <li className={router.asPath == '/user/package-list' ? 'activated' : 'nav-items'}>
                  <Link href="/user/package-list" legacyBehavior><a href="" className=""><i className="fa fa-file-invoice-dollar"></i><p>Buy Plan</p></a></Link>
                </li>
                <li className={router.asPath == '/user/payment-log' ? 'activated' : 'nav-items'}>
                  <Link href="/user/payment-log" legacyBehavior><a  className=""><i className="fa fa-list-ol"></i><p>Payment Logs</p></a></Link>
                </li>
                <li className={router.asPath == '/user/uploadcv' ? 'activated' : 'nav-items'}>
                  <Link href="/user/uploadcv" legacyBehavior><a className=""><i className="fa fa-cloud-upload-alt"></i><p>Upload CV</p></a></Link>
                </li>
                <li className={router.asPath == '/user/changepassword' ? 'activated' : 'nav-items'}>
                  <Link href="/user/changepassword" legacyBehavior><a className=""><i className="fa fa-key"></i><p>Change Password</p></a></Link>
                </li>

              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

    </>)
    
    
}

export default Slidercanvas