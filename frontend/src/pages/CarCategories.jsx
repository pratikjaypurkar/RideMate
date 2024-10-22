import React from 'react';
import car1Img from '../img/car-1.png'; // Replace with your image paths
import car2Img from '../img/car-2.png';
import car3Img from '../img/car-3.png';
import car4Img from '../img/car-4.png';

const CarShowcase = () => {
    return (
        <div className="container my-0">
            <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '800px' }}>
            <h1 className="display-5 text-capitalize mb-3">Vehicle <span className="text-primary">Categories</span></h1>
            <p className="mb-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet nemo expedita asperiores commodi accusantium at cum harum, excepturi, quia tempora cupiditate! Adipisci facilis modi quisquam quia distinctio,
            </p>
          </div>
            <div className="row">
                {/* Car Item 1 */}
                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="card shadow-sm">
                        <img src={car1Img} className="card-img-top" alt="Car 1" />
                        <div className="card-body">
                            <h5 className="card-title">Tesla Model S</h5>
                            <p className="card-text">$120.00 / Day</p>
                            <p className="card-text">4 Seats | Electric | 2023</p>
                            <a href="#" className="btn btn-primary">Book Now</a>
                        </div>
                    </div>
                </div>

                {/* Car Item 2 */}
                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="card shadow-sm">
                        <img src={car2Img} className="card-img-top" alt="Car 2" />
                        <div className="card-body">
                            <h5 className="card-title">BMW X5</h5>
                            <p className="card-text">$150.00 / Day</p>
                            <p className="card-text">5 Seats | Petrol | 2022</p>
                            <a href="#" className="btn btn-primary">Book Now</a>
                        </div>
                    </div>
                </div>

                {/* Car Item 3 */}
                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="card shadow-sm">
                        <img src={car3Img} className="card-img-top" alt="Car 3" />
                        <div className="card-body">
                            <h5 className="card-title">Audi Q7</h5>
                            <p className="card-text">$180.00 / Day</p>
                            <p className="card-text">7 Seats | Diesel | 2022</p>
                            <a href="#" className="btn btn-primary">Book Now</a>
                        </div>
                    </div>
                </div>

                {/* Car Item 4 */}
                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="card shadow-sm">
                        <img src={car4Img} className="card-img-top" alt="Car 4" />
                        <div className="card-body">
                            <h5 className="card-title">Ford Mustang</h5>
                            <p className="card-text">$170.00 / Day</p>
                            <p className="card-text">4 Seats | Petrol | 2022</p>
                            <a href="#" className="btn btn-primary">Book Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarShowcase;
