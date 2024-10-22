import React from 'react';
import '../css/css/style.css';
import '../css/lib/owlcarousel/assets/owl.carousel.min.css';
import '../css/lib/animate/animate.min.css';
import '../css/css/bootstrap.min.css';
import carouselImage from '../img/carousel-2.jpg';
import carouselImage1 from '../img/features-img.png';
import CarCategories from './CarCategories.jsx';
import AboutTestimonial from './AboutTestimonial.jsx';

import aboutImg from '../img/about-img.jpg';
import aboutImg1 from '../img/about-img-1.jpg';
import aboutIcon1 from '../img/about-icon-1.png';
import aboutIcon2 from '../img/about-icon-2.png';
import attachmentImg from '../img/attachment-img.jpg';

import '@fortawesome/fontawesome-free/css/all.min.css';


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

      <div className="container-fluid overflow-hidden about py-5">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-xl-6 wow fadeInLeft" data-wow-delay="0.2s">
              <div className="about-item">
                <div className="pb-5">
                  <h1 className="display-5 text-capitalize">Central <span className="text-primary">About</span></h1>
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet nemo expedita asperiores commodi accusantium at cum harum, excepturi, quia tempora cupiditate! Adipisci facilis modi quisquam quia distinctio.
                  </p>
                </div>
                <div className="row g-4">
                  <div className="col-lg-6">
                    <div className="about-item-inner border p-4">
                      <div className="about-icon mb-4">
                        <img src={aboutIcon1} className="img-fluid w-50 h-50" alt="Icon" />
                      </div>
                      <h5 className="mb-3">Our Vision</h5>
                      <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="about-item-inner border p-4">
                      <div className="about-icon mb-4">
                        <img src={aboutIcon2} className="img-fluid h-50 w-50" alt="Icon" />
                      </div>
                      <h5 className="mb-3">Our Mission</h5>
                      <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                  </div>
                </div>
                <p className="text-item my-4">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, aliquam ipsum. Sed suscipit dolorem libero sequi aut natus debitis reprehenderit facilis quaerat similique, est at in eum. Quo, obcaecati in!
                </p>
                <div className="row g-4">
                  <div className="col-lg-6">
                    <div className="text-center rounded bg-secondary p-4">
                      <h1 className="display-6 text-white">17</h1>
                      <h5 className="text-light mb-0">Years Of Experience</h5>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="rounded">
                      <p className="mb-2"><i className="fa fa-check-circle text-primary me-1"></i> Morbi tristique senectus</p>
                      <p className="mb-2"><i className="fa fa-check-circle text-primary me-1"></i> A scelerisque purus</p>
                      <p className="mb-2"><i className="fa fa-check-circle text-primary me-1"></i> Dictumst vestibulum</p>
                      <p className="mb-0"><i className="fa fa-check-circle text-primary me-1"></i> Dio aenean sed adipiscing</p>
                    </div>
                  </div>
                  <div className="col-lg-5 d-flex align-items-center">
                    <a href="#" className="btn btn-primary rounded py-3 px-5">More About Us</a>
                  </div>
                  <div className="col-lg-7">
                    <div className="d-flex align-items-center">
                      <img src={attachmentImg} className="img-fluid rounded-circle border border-4 border-secondary" style={{ width: '100px', height: '100px' }} alt="Founder Image" />
                      <div className="ms-4">
                        <h4>William Burgess</h4>
                        <p className="mb-0">Carveo Founder</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 wow fadeInRight" data-wow-delay="0.2s">
              <div className="about-img">
                <div className="img-1">
                  <img src={aboutImg} className="img-fluid rounded h-100 w-100" alt="About Image 1" />
                </div>
                <div className="img-2">
                  <img src={aboutImg1} className="img-fluid rounded w-100" alt="About Image 2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid counter bg-secondary py-5">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
              <div className="counter-item text-center">
                <div className="counter-item-icon mx-auto">
                  <i className="fas fa-thumbs-up fa-2x"></i>
                </div>
                <div className="counter-counting my-3">
                  <span className="text-white fs-2 fw-bold" data-toggle="counter-up">829</span>
                  <span className="h1 fw-bold text-white">+</span>
                </div>
                <h4 className="text-white mb-0">Happy Clients</h4>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.3s">
              <div className="counter-item text-center">
                <div className="counter-item-icon mx-auto">
                  <i className="fas fa-car-alt fa-2x"></i>
                </div>
                <div className="counter-counting my-3">
                  <span className="text-white fs-2 fw-bold" data-toggle="counter-up">56</span>
                  <span className="h1 fw-bold text-white">+</span>
                </div>
                <h4 className="text-white mb-0">Number of Cars</h4>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.5s">
              <div className="counter-item text-center">
                <div className="counter-item-icon mx-auto">
                  <i className="fas fa-building fa-2x"></i>
                </div>
                <div className="counter-counting my-3">
                  <span className="text-white fs-2 fw-bold" data-toggle="counter-up">127</span>
                  <span className="h1 fw-bold text-white">+</span>
                </div>
                <h4 className="text-white mb-0">Car Center</h4>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.7s">
              <div className="counter-item text-center">
                <div className="counter-item-icon mx-auto">
                  <i className="fas fa-clock fa-2x"></i>
                </div>
                <div className="counter-counting my-3">
                  <span className="text-white fs-2 fw-bold" data-toggle="counter-up">589</span>
                  <span className="h1 fw-bold text-white">+</span>
                </div>
                <h4 className="text-white mb-0">Total kilometers</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Start */}
      <div className="container-fluid service py-5">
        <div className="container py-5">
          <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '800px' }}>
            <h1 className="display-5 text-capitalize mb-3">Cental <span className="text-primary">Services</span></h1>
            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet nemo expedita asperiores commodi accusantium at cum harum, excepturi, quia tempora cupiditate! Adipisci facilis modi quisquam quia distinctio,</p>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
              <div className="service-item p-4">
                <div className="service-icon mb-4">
                  <i className="fa fa-phone-alt fa-2x"></i>
                </div>
                <h5 className="mb-3">Phone Reservation</h5>
                <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsam quasi quibusdam ipsa perferendis iusto?</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
              <div className="service-item p-4">
                <div className="service-icon mb-4">
                  <i className="fa fa-money-bill-alt fa-2x"></i>
                </div>
                <h5 className="mb-3">Special Rates</h5>
                <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsam quasi quibusdam ipsa perferendis iusto?</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
              <div className="service-item p-4">
                <div className="service-icon mb-4">
                  <i className="fa fa-road fa-2x"></i>
                </div>
                <h5 className="mb-3">One Way Rental</h5>
                <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsam quasi quibusdam ipsa perferendis iusto?</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
              <div className="service-item p-4">
                <div className="service-icon mb-4">
                  <i className="fa fa-umbrella fa-2x"></i>
                </div>
                <h5 className="mb-3">Life Insurance</h5>
                <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsam quasi quibusdam ipsa perferendis iusto?</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
              <div className="service-item p-4">
                <div className="service-icon mb-4">
                  <i className="fa fa-building fa-2x"></i>
                </div>
                <h5 className="mb-3">City to City</h5>
                <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsam quasi quibusdam ipsa perferendis iusto?</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
              <div className="service-item p-4">
                <div className="service-icon mb-4">
                  <i className="fa fa-car-alt fa-2x"></i>
                </div>
                <h5 className="mb-3">Free Rides</h5>
                <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsam quasi quibusdam ipsa perferendis iusto?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CarCategories />
      <AboutTestimonial />

    </>



  );
};

export default IndexPage;
