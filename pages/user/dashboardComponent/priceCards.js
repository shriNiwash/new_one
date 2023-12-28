import Head from "next/head";
import Script from "next/script";


const PriceCards = () => {
    return (<>
        <Head>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" />
            <title>Pricing Cards</title>
        </Head>

        <div className="page_header">
      <h4 className="table_h4">Service</h4>
      <ul className="table_ul">
        <li className="home_font"><a href=""><i className="fa fa-home"></i></a></li>
        <li className="seprator_data"><i className="fa fa-angle-right"></i></li>
        <li className="home_datas"><a>Package-list</a></li>
        <li className="seprator_data"><i className="fa fa-angle-right"></i></li>
        <li className="home_datas"><a href="">Package</a></li>
      </ul>
    </div>

        <div className="row">
            <div className="col-md-3 col-sm-6">
                <div className="pricing-table-3 basic">
                    <div className="pricing-table-header">
                        <h4><strong>Beginner</strong></h4>
                        <p className="text-white">Portfolio Builder</p>
                    </div>
                    <div className="price"><strong>$6</strong> / monthly</div>
                    <div className="pricing-body">
                        <ul className="pricing-table-ul">
                            <li><i className="fa fa-check"></i>Follow/Unfollow</li>
                            <li><i className="fa fa-check"></i>Portfolio</li>
                            <li><i className="fa fa-check"></i>Skill</li>
                            <li className="not-avail"><i className="fa fa-check"></i> Services</li>
                            <li className="not-avail"><i className="fa fa-check"></i> Experience</li>
                        </ul><a href="#" className="view-more" >Buy Now</a>
                    </div>
                </div>
            </div>

            <div className="col-md-3 col-sm-6">
                <div className="pricing-table-3 basic">
                    <div className="pricing-table-header">
                        <h4><strong>Beginner</strong></h4>
                        <p className="text-white">Portfolio Builder</p>
                    </div>
                    <div className="price"><strong>$6</strong> / monthly</div>
                    <div className="pricing-body">
                        <ul className="pricing-table-ul">
                            <li><i className="fa fa-check"></i>Follow/Unfollow</li>
                            <li><i className="fa fa-check"></i>Portfolio</li>
                            <li><i className="fa fa-check"></i>Skill</li>
                            <li className="not-avail"><i className="fa fa-check"></i> Services</li>
                            <li className="not-avail"><i className="fa fa-check"></i> Experience</li>
                        </ul><a href="#" className="view-more" >Buy Now</a>
                    </div>
                </div>
            </div>

            <div className="col-md-3 col-sm-6">
                <div className="pricing-table-3 basic">
                    <div className="pricing-table-header">
                        <h4><strong>Beginner</strong></h4>
                        <p className="text-white">Portfolio Builder</p>
                    </div>
                    <div className="price"><strong>$6</strong> / monthly</div>
                    <div className="pricing-body">
                        <ul className="pricing-table-ul">
                            <li><i className="fa fa-check"></i>Follow/Unfollow</li>
                            <li><i className="fa fa-check"></i>Portfolio</li>
                            <li><i className="fa fa-check"></i>Skill</li>
                            <li className="not-avail"><i className="fa fa-check"></i> Services</li>
                            <li className="not-avail"><i className="fa fa-check"></i> Experience</li>
                        </ul><a href="#" className="view-more" >Buy Now</a>
                    </div>
                </div>
            </div>
            <div className="col-md-3 col-sm-6">
                <div className="pricing-table-3 basic">
                    <div className="pricing-table-header">
                        <h4><strong>Beginner</strong></h4>
                        <p className="text-white">Portfolio Builder</p>
                    </div>
                    <div className="price"><strong>$6</strong> / monthly</div>
                    <div className="pricing-body">
                        <ul className="pricing-table-ul">
                            <li><i className="fa fa-check"></i>Follow/Unfollow</li>
                            <li><i className="fa fa-check"></i>Portfolio</li>
                            <li><i className="fa fa-check"></i>Skill</li>
                            <li className="not-avail"><i className="fa fa-check"></i> Services</li>
                            <li className="not-avail"><i className="fa fa-check"></i> Experience</li>
                        </ul><a href="#" className="view-more" >Buy Now</a>
                    </div>
                </div>
            </div>
        </div>


<Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></Script>

    </>)
}

export default PriceCards;