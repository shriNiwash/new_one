import Head from "next/head"
import Layoutimage from "../userAdminComponent/Layoutimage"
const termsandcondtion = () => {
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
                        <Layoutimage Layoutitle="Terms & Conditions" hometitle="Terms & Conditions"/>
                    </div>
                <div className="container">
                    <div className="terms">
                        <h2 className="terms-title">Terms & Conditions:</h2>
                        <ul className='terms-list'>
                            <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
                            <li>psum dolor sit amet, consectetuer adipiscing elit.</li>
                            <li>Aliquam tincidunt mauris eu risus.</li>
                            <li>Vestibulum auctor dapibus neque.</li>
                            <li>Nunc dignissim risus id metus.</li>
                            <li>Cras ornare tristique elit.</li>
                            <li>Vivamus vestibulum ntulla nec ante.</li>
                            <li>Donec quis dui at dolor tempor interdum</li>
                            <li>Cras iaculis ultricies nulla.</li>
                            <li>Ut aliquam sollicitudin leo.</li>
                            <li>Vestibulum commodo felis quis tortor.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default termsandcondtion
