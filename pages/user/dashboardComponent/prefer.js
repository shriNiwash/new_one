import Head from "next/head";
import Image from "next/image";

const Prefer = () =>{
    return(<>
    <Head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" />
    </Head>

    <div className="container">
        <div className="page-head">
            <h4 className="page-tittle"> perference</h4>
            <ul className="page-subdomain">
                <li><a href=""><i className="fa fa-home"></i></a></li>
                <li><i className="fa fa-chevron-right"></i></li>
                <li> User</li>
                <li><i className="fa fa-chevron-right"></i></li>
                <li> perference</li>
            </ul>
        </div>
    </div>
    <div className="container">
        <div className="row">
            <div className="col-sm">
                <div className="subdomain">
                    <h4 className="subdomain-head">perference</h4>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 setting-form">
                                <form action="" method="post">
                                    <input type="hidden" name="_token" />
                                    <div className="perference-group">
                                        <div className="selectgroup selectgroup-pills mt-2">
                                            <label className="selectgroup-item">
                                                <input type="checkbox" name="permissions[]" value="Follow/Unfollow" className="selectgroup-input" checked />
                                                <span className="selectgroup-button">Follow/Unfollow</span>
                                            </label>
                                            <label className="selectgroup-item">
                                                <input type="checkbox" name="permissions[]" value="Follow/Unfollow" className="selectgroup-input" checked />
                                                <span className="selectgroup-button">Blog</span>
                                            </label>
                                            <label className="selectgroup-item">
                                                <input type="checkbox" name="permissions[]" value="Follow/Unfollow" className="selectgroup-input" checked />
                                                <span className="selectgroup-button">Portfolio</span>
                                            </label>
                                            <label className="selectgroup-item">
                                                <input type="checkbox" name="permissions[]" value="Follow/Unfollow" className="selectgroup-input" checked />
                                                <span className="selectgroup-button">Achievements</span>                                            
                                                </label>
                                            <label className="selectgroup-item">
                                                <input type="checkbox" name="permissions[]" value="Follow/Unfollow" className="selectgroup-input" checked />
                                                <span className="selectgroup-button">Skill</span>
                                            </label>
                                            <label className="selectgroup-item">
                                                <input type="checkbox" name="permissions[]" value="Follow/Unfollow" className="selectgroup-input" checked />
                                                <span className="selectgroup-button">Service</span>
                                            </label>
                                            <label className="selectgroup-item">
                                                <input type="checkbox" name="permissions[]" value="Follow/Unfollow" className="selectgroup-input" checked/>
                                                <span className="selectgroup-button">Experience</span>
                                            </label>
                                            <label className="selectgroup-item">
                                                <input type="checkbox" name="permissions[]" value="Follow/Unfollow" className="selectgroup-input" checked />
                                                <span className="selectgroup-button">Testimonial</span>
                                            </label>
                                            <label className="selectgroup-item">
                                                <input type="checkbox" name="permissions[]" value="Follow/Unfollow" className="selectgroup-input" checked/>
                                                <span className="selectgroup-button">Contact</span>
                                            </label>
                                            <label className="selectgroup-item">
                                                <input type="checkbox" name="permissions[]" value="Follow/Unfollow" className="selectgroup-input" checked />
                                                <span className="selectgroup-button">Footer Mail</span>
                                            </label>
                                            <label className="selectgroup-item">
                                                <input type="checkbox" name="permissions[]" value="Follow/Unfollow" className="selectgroup-input" checked />
                                                <span className="selectgroup-button">Profile Listing</span>
                                            </label>
                                        </div>

                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="color-card">
                            <div className="row">
                                <div className="col-12  color-footer">
                                    <button type="submit" id="submitbtn"
                                        className="btn btn-success button-type">Update</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>

    <footer className="footer-type">
        <div className="container-fluid">
            <div className="setting-footer">Copyright © 2021. All rights reserved by Sasso.</div>
        </div>
    </footer>
    </>)
}
export default Prefer;