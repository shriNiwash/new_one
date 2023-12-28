import Head from "next/head"
import Script from "next/script";
import Layoutimage from './../userAdminComponent/Layoutimage';

const Pricing = () => {
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
						<Layoutimage Layoutitle="Pricing" hometitle="Pricing"/>
					</div>
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-lg-4">
								<div className="tabs-pricing mt-5">
									<ul className="nav nav-tabs">
										<li className='nav-item'>
											<a className="nav-link active" data-bs-toggle="pill" href="#monthly">Monthly</a>
										</li>
										<li className='nav-item'>
											<a className="nav-link " data-bs-toggle="pill" href="#yearly">Yearly</a>
										</li>
										<li className='nav-item'>
											<a className="nav-link " data-bs-toggle="pill" href="#lifetime">Lifetime</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
							<div className="tab-content">
								<div className="tab-pane active" id="monthly">
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
													<a className="btn-mains" >Trial</a>
													<a className="btn-mains" >Purchase</a>
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
													<a className="btn-mains" >Trial</a>
													<a className="btn-mains" >Purchase</a>
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
													<a className="btn-mains" >Trial</a>
													<a className="btn-mains" >Purchase</a>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="tab-pane fade" id="yearly">
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
													<a className="btn-mains" >Trial</a>
													<a className="btn-mains" >Purchase</a>
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
													<a className="btn-mains" >Trial</a>
													<a className="btn-mains" >Purchase</a>
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
								<div className="tab-pane fade" id="lifetime">
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
							<h1>hello</h1>
					</div>
				</section>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></Script>

        </>
    )
}

export default Pricing
