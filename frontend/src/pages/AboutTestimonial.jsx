import React from 'react';
import blogImage1 from '../img/blog-1.jpg';
import blogImage2 from '../img/blog-2.jpg';
import blogImage3 from '../img/blog-3.jpg';
import bannerImage from '../img/banner-1.jpg';
import teamImage1 from '../img/team-1.jpg';
import teamImage2 from '../img/team-2.jpg';
import teamImage3 from '../img/team-3.jpg';
import teamImage4 from '../img/team-4.jpg';

const AboutTestimonial = () => {
    return (
        <div>
            {/* Blog Start */}
            <div className="container-fluid blog py-5">
                <div className="container py-5">
                    <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '800px' }}>
                        <h1 className="display-5 text-capitalize mb-3">Central<span className="text-primary"> Blog & News</span></h1>
                        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet nemo expedita asperiores commodi accusantium at cum harum, excepturi, quia tempora cupiditate! Adipisci facilis modi quisquam quia distinctio,</p>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="blog-item">
                                <div className="blog-img">
                                    <img src={blogImage1} className="img-fluid rounded-top w-100" alt="Image" />
                                </div>
                                <div className="blog-content rounded-bottom p-4">
                                    <div className="blog-date">30 Dec 2025</div>
                                    <div className="blog-comment my-3">
                                        <div className="small"><span className="fa fa-user text-primary"></span><span className="ms-2">Martin.C</span></div>
                                        <div className="small"><span className="fa fa-comment-alt text-primary"></span><span className="ms-2">6 Comments</span></div>
                                    </div>
                                    <a href="#" className="h4 d-block mb-3">Rental Cars how to check driving fines?</a>
                                    <p className="mb-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius libero soluta impedit eligendi? Quibusdam, laudantium.</p>
                                    <a href="#" className="">Read More <i className="fa fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="blog-item">
                                <div className="blog-img">
                                    <img src={blogImage2} className="img-fluid rounded-top w-100" alt="Image" />
                                </div>
                                <div className="blog-content rounded-bottom p-4">
                                    <div className="blog-date">25 Dec 2025</div>
                                    <div className="blog-comment my-3">
                                        <div className="small"><span className="fa fa-user text-primary"></span><span className="ms-2">Martin.C</span></div>
                                        <div className="small"><span className="fa fa-comment-alt text-primary"></span><span className="ms-2">6 Comments</span></div>
                                    </div>
                                    <a href="#" className="h4 d-block mb-3">Rental cost of sport and other cars</a>
                                    <p className="mb-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius libero soluta impedit eligendi? Quibusdam, laudantium.</p>
                                    <a href="#" className="">Read More <i className="fa fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="blog-item">
                                <div className="blog-img">
                                    <img src={blogImage3} className="img-fluid rounded-top w-100" alt="Image" />
                                </div>
                                <div className="blog-content rounded-bottom p-4">
                                    <div className="blog-date">27 Dec 2025</div>
                                    <div className="blog-comment my-3">
                                        <div className="small"><span className="fa fa-user text-primary"></span><span className="ms-2">Martin.C</span></div>
                                        <div className="small"><span className="fa fa-comment-alt text-primary"></span><span className="ms-2">6 Comments</span></div>
                                    </div>
                                    <a href="#" className="h4 d-block mb-3">Document required for car rental</a>
                                    <p className="mb-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius libero soluta impedit eligendi? Quibusdam, laudantium.</p>
                                    <a href="#" className="">Read More <i className="fa fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Blog End */}

            {/* Banner Start */}
            <div className="container-fluid banner pb-5 wow zoomInDown" data-wow-delay="0.1s">
                <div className="container pb-5">
                    <div className="banner-item rounded">
                        <img src={bannerImage} className="img-fluid rounded w-100" alt="" />
                        <div className="banner-content">
                            <h2 className="text-primary">Rent Your Car</h2>
                            <h1 className="text-white">Interested in Renting?</h1>
                            <p className="text-white">Don't hesitate and send us a message.</p>
                            <div className="banner-btn">
                                <a href="#" className="btn btn-secondary rounded-pill py-3 px-4 px-md-5 me-2">WhatsApp</a>
                                <a href="#" className="btn btn-primary rounded-pill py-3 px-4 px-md-5 ms-2">Contact Us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Banner End */}

            {/* Team Start */}
            <div className="container-fluid team pb-5">
                <div className="container pb-5">
                    <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '800px' }}>
                        <h1 className="display-5 text-capitalize mb-3">Customer<span className="text-primary"> Support</span> Center</h1>
                        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet nemo expedita asperiores commodi accusantium at cum harum, excepturi, quia tempora cupiditate! Adipisci facilis modi quisquam quia distinctio,</p>
                    </div>
                    <div className="row g-4">
                        <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="team-item p-4 pt-0">
                                <div className="team-img">
                                    <img src={teamImage1} className="img-fluid rounded w-100" alt="Image" />
                                </div>
                                <div className="team-content pt-4">
                                    <h4>MARTIN DOE</h4>
                                    <p>Profession</p>
                                    <div className="team-icon d-flex justify-content-center">
                                        <a className="btn btn-square btn-light rounded-circle mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-square btn-light rounded-circle mx-1" href=""><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-square btn-light rounded-circle mx-1" href=""><i className="fab fa-instagram"></i></a>
                                        <a className="btn btn-square btn-light rounded-circle mx-1" href=""><i className="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Repeat for team members */}
                        <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="team-item p-4 pt-0">
                                <div className="team-img">
                                    <img src={teamImage2} className="img-fluid rounded w-100" alt="Image" />
                                </div>
                                <div className="team-content pt-4">
                                    <h4>MARTIN DOE</h4>
                                    <p>Profession</p>
                                    <div className="team-icon d-flex justify-content-center">
                                        <a className="btn btn-square btn-light rounded-circle mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-square btn-light rounded-circle mx-1" href=""><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-square btn-light rounded-circle mx-1" href=""><i className="fab fa-instagram"></i></a>
                                        <a className="btn btn-square btn-light rounded-circle mx-1" href=""><i className="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="team-item p-4 pt-0">
                                <div className="team-img">
                                    <img src={teamImage3} className="img-fluid rounded w-100" alt="Image" />
                                </div>
                                <div className="team-content pt-4">
                                    <h4>MARTIN DOE</h4>
                                    <p>Profession</p>
                                    <div className="team-icon d-flex justify-content-center">
                                        <a className="btn btn-square btn-light rounded-circle mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-square btn-light rounded-circle mx-1" href=""><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-square btn-light rounded-circle mx-1" href=""><i className="fab fa-instagram"></i></a>
                                        <a className="btn btn-square btn-light rounded-circle mx-1" href=""><i className="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="team-item p-4 pt-0">
                                <div className="team-img">
                                    <img src={teamImage4} className="img-fluid rounded w-100" alt="Image" />
                                </div>
                                <div className="team-content pt-4">
                                    <h4>MARTIN DOE</h4>
                                    <p>Profession</p>
                                    <div className="team-icon d-flex justify-content-center">
                                        <a className="btn btn-square btn-light rounded-circle mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-square btn-light rounded-circle mx-1" href=""><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-square btn-light rounded-circle mx-1" href=""><i className="fab fa-instagram"></i></a>
                                        <a className="btn btn-square btn-light rounded-circle mx-1" href=""><i className="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Team End */}
        </div>
    );
};

export default AboutTestimonial;
