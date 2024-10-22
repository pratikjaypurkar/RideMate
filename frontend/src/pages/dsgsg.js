import React from 'react';
import '../css/css/style.css';
import '../css/css/bootstrap.min.css';
import carouselImage from '../img/carousel-2.jpg';
import carouselImage1 from '../img/features-img.png';

import aboutImg from '../img/about-img.jpg';
import aboutImg1 from '../img/about-img-1.jpg';
import aboutIcon1 from '../img/about-icon-1.png';
import aboutIcon2 from '../img/about-icon-2.png';
import attachmentImg from '../img/attachment-img.jpg';


const IndexPage = () => {
  return (
    <><div className="relative">
      {/* Hero Section */}
      <div className="header-carousel">
        <div id="carouselId" className="carousel slide" data-bs-ride="carousel" data-bs-interval="false">
          <ol className="carousel-indicators">
            <li data-bs-target="#carouselId" data-bs-slide-to="0" className="active" aria-current="true" aria-label="First slide"></li>
            <li data-bs-target="#carouselId" data-bs-slide-to="1" aria-label="Second slide"></li>
          </ol>
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <img src={carouselImage} className="img-fluid w-100" alt="First slide" />
              <div className="carousel-caption">
                <div className="container py-4">
                  <div className="row g-5">
                    <div className="col-lg-6 fadeInLeft animated" data-animation="fadeInLeft" data-delay="1s" style={{ animationDelay: "1s" }}>
                      <div className="bg-secondary rounded p-5">
                        <h4 className="text-white mb-4">CONTINUE CAR RESERVATION</h4>
                        <form>
                          <div className="row g-3">
                            <div className="col-12">
                              <select className="form-select" aria-label="Select Car Type">
                                <option defaultValue>Select Your Car type</option>
                                <option value="1">VW Golf VII</option>
                                <option value="2">Audi A1 S-Line</option>
                                <option value="3">Toyota Camry</option>
                                <option value="4">BMW 320 ModernLine</option>
                              </select>
                            </div>
                            <div className="col-12">
                              <div className="input-group">
                                <div className="d-flex align-items-center bg-light text-body rounded-start p-2">
                                  <span className="fas fa-map-marker-alt"></span>
                                  <span className="ms-1">Pick Up</span>
                                </div>
                                <input className="form-control" type="text" placeholder="Enter a City or Airport" aria-label="Enter a City or Airport" />
                              </div>
                            </div>
                            <div className="col-12">
                              <a href="#" className="text-start text-white d-block mb-2">Need a different drop-off location?</a>
                              <div className="input-group">
                                <div className="d-flex align-items-center bg-light text-body rounded-start p-2">
                                  <span className="fas fa-map-marker-alt"></span>
                                  <span className="ms-1">Drop off</span>
                                </div>
                                <input className="form-control" type="text" placeholder="Enter a City or Airport" aria-label="Enter a City or Airport" />
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="input-group">
                                <div className="d-flex align-items-center bg-light text-body rounded-start p-2">
                                  <span className="fas fa-calendar-alt"></span>
                                  <span className="ms-1">Pick Up</span>
                                </div>
                                <input className="form-control" type="date" />
                                <select className="form-select ms-3" aria-label="Select Time">
                                  <option defaultValue>12:00 AM</option>
                                  <option value="1">1:00 AM</option>
                                  <option value="2">2:00 AM</option>
                                  <option value="3">3:00 AM</option>
                                  <option value="4">4:00 AM</option>
                                  <option value="5">5:00 AM</option>
                                  <option value="6">6:00 AM</option>
                                  <option value="7">7:00 AM</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="input-group">
                                <div className="d-flex align-items-center bg-light text-body rounded-start p-2">
                                  <span className="fas fa-calendar-alt"></span>
                                  <span className="ms-1">Drop off</span>
                                </div>
                                <input className="form-control" type="date" />
                                <select className="form-select ms-3" aria-label="Select Time">
                                  <option defaultValue>12:00 AM</option>
                                  <option value="1">1:00 AM</option>
                                  <option value="2">2:00 AM</option>
                                  <option value="3">3:00 AM</option>
                                  <option value="4">4:00 AM</option>
                                  <option value="5">5:00 AM</option>
                                  <option value="6">6:00 AM</option>
                                  <option value="7">7:00 AM</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-12">
                              <button className="btn btn-light w-100 py-2">Book Now</button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-lg-6 d-none d-lg-flex fadeInRight animated" data-animation="fadeInRight" data-delay="1s" style={{ animationDelay: "1s" }}>
                      <div className="text-start">
                        <h1 className="display-5 text-white">Get 15% off your rental Plan your trip now</h1>
                        <p>Treat yourself in the USA</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid feature py-5">
        <div className="container py-5">
          <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '800px' }}>
            <h1 className="display-5 text-capitalize mb-3">Central <span className="text-primary">Features</span></h1>
            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet nemo expedita asperiores commodi accusantium at cum harum, excepturi, quia tempora cupiditate!</p>
          </div>
          <div className="row g-4 align-items-center">
            <div className="col-xl-4">
              <div className="row gy-4 gx-0">
                <div className="col-12 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="feature-item">
                    <div className="feature-icon">
                      <span className="fa fa-trophy fa-2x"></span>
                    </div>
                    <div className="ms-4">
                      <h5 className="mb-3">First Class Services</h5>
                      <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, in illum aperiam ullam magni eligendi?</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 wow fadeInUp" data-wow-delay="0.3s">
                  <div className="feature-item">
                    <div className="feature-icon">
                      <span className="fa fa-road fa-2x"></span>
                    </div>
                    <div className="ms-4">
                      <h5 className="mb-3">24/7 Road Assistance</h5>
                      <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, in illum aperiam ullam magni eligendi?</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-xl-4 wow fadeInUp" data-wow-delay="0.2s">
              <img src={carouselImage1} className="img-fluid" alt="Features" />
            </div>
            <div className="col-xl-4">
              <div className="row gy-4 gx-0">
                <div className="col-12 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="feature-item">
                    <div className="feature-icon">
                      <span className="fa fa-star fa-2x"></span>
                    </div>
                    <div className="ms-4">
                      <h5 className="mb-3">Wide Range of Vehicles</h5>
                      <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, in illum aperiam ullam magni eligendi?</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 wow fadeInUp" data-wow-delay="0.3s">
                  <div className="feature-item">
                    <div className="feature-icon">
                      <span className="fa fa-user fa-2x"></span>
                    </div>
                    <div className="ms-4">
                      <h5 className="mb-3">Highly Trained Staff</h5>
                      <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, in illum aperiam ullam magni eligendi?</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    
    <div className="container py-5">
      <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
        <h1 className="display-5 mb-5">About Us</h1>
      </div>
      <div className="row g-5">
        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="position-relative overflow-hidden rounded ps-5 pt-5 h-100" style={{ minHeight: '400px' }}>
            <img className="position-absolute w-100 h-100" src={carouselImage} style={{ objectFit: 'cover' }} />
          </div>
        </div>
        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
          <div className="h-100">
            <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptas?</p>
            <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptas?</p>
            <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptas?</p>
          </div>
        </div>
      </div>
    </div>
    
    </>

  );
};

export default IndexPage;
