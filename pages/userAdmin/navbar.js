import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

const navbar = () => {
    return (
        <>

            <div className="navs md-6">
                <div className="navs-image">
                <Image
                      src="/useradmin/profileimage/navimage.png"
                      width="111"
                      height="33"
                      alt="image"
                      className="logo-image"
                    />
                </div>
                <div className="navs-list m-d-6">
                    <ul>
                        <li>Home</li>
                        <li>Profile</li>
                        <li>Pricing</li>
                        <li>page</li>
                        <li>blog</li>
                        <li>FAQs</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="navs-btn md-6">
                    <Link href="/login" legacyBehavior><button>
                        <i className="fa fa-sign-in-alt"></i>
                        Login
                    </button></Link>
                </div>
                <div className="navs-lang md-6">
                    <select name="" id="">
                        <option value=""> Englis</option>
                        <option value=""> عربى</option>
                    </select>
                </div>
            </div>
        </>
    )
}

export default navbar
