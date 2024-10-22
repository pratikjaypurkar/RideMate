import React from 'react';
import blogImage1 from '../img/blog-1.jpg';
import blogImage2 from '../img/blog-2.jpg';
import blogImage3 from '../img/blog-3.jpg';
const BlogPage = () => {
  return (
    <>
      {/* Header Start */}
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: '900px' }}>
          <h4 className="text-white display-4 mb-4">Our Blog & News</h4>
          <ol className="breadcrumb d-flex justify-content-center mb-0">
            <li className="breadcrumb-item"><a href="/">Home</a></li>
            <li className="breadcrumb-item"><a href="#">Pages</a></li>
            <li className="breadcrumb-item active text-primary">Blog & News</li>
          </ol>
        </div>
      </div>
      {/* Header End */}

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

      {/* Fact Counter */}
      <div className="container-fluid counter py-5">
        <div className="container py-5">
          <div className="row g-5">
            {counterData.map((counter, index) => (
              <div className="col-md-6 col-lg-6 col-xl-3" key={index}>
                <div className="counter-item text-center">
                  <div className="counter-item-icon mx-auto">
                    <i className={`fas ${counter.icon} fa-2x`}></i>
                  </div>
                  <div className="counter-counting my-3">
                    <span className="text-white fs-2 fw-bold">{counter.value}</span>
                    <span className="h1 fw-bold text-white">+</span>
                  </div>
                  <h4 className="text-white mb-0">{counter.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Fact Counter */}

     
    </>
  );
};

const blogData = [
  {
    image: 'img/blog-1.jpg',
    date: '30 Dec 2025',
    author: 'Martin.C',
    comments: 6,
    title: 'Rental Cars how to check driving fines?',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius libero soluta impedit eligendi? Quibusdam, laudantium.'
  },
  {
    image: 'img/blog-2.jpg',
    date: '25 Dec 2025',
    author: 'Martin.C',
    comments: 6,
    title: 'Rental cost of sport and other cars',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius libero soluta impedit eligendi? Quibusdam, laudantium.'
  },
  {
    image: 'img/blog-3.jpg',
    date: '27 Dec 2025',
    author: 'Martin.C',
    comments: 6,
    title: 'Document required for car rental',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius libero soluta impedit eligendi? Quibusdam, laudantium.'
  }
];

const counterData = [
  { icon: 'fa-thumbs-up', value: '829', title: 'Happy Clients' },
  { icon: 'fa-car-alt', value: '56', title: 'Number of Cars' },
  { icon: 'fa-building', value: '127', title: 'Car Center' },
  { icon: 'fa-clock', value: '589', title: 'Total Kilometers' }
];

export default BlogPage;
