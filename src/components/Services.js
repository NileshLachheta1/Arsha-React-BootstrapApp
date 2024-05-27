import React, { useState, useEffect } from 'react';
import $ from 'jquery';

import 'wowjs/css/libs/animate.css';
import WOW from 'wowjs';
import './services.css';
import testimonial1 from '../images/testimonial-1.jpg'
import testimonial2 from '../images/testimonial-2.jpg'
function Service(){
  const [searchModalVisible, setSearchModalVisible] = useState(false);


  useEffect(() => {
    new WOW.WOW().init();

    // Ensure that owlCarousel is available
    if ($.fn.owlCarousel) {
      $(document).ready(function() {
        $('.testimonial-carousel').owlCarousel({
          autoplay: true,
          smartSpeed: 1000,
          dots: true,
          loop: true,
          items: 1,
        });
      });
    } else {
      console.error('Owl Carousel is not available.');
    }
  }, []);

  return (
    <div>
      {/* Full Screen Search Start */}
      {searchModalVisible && (
        <div className="modal fade show" style={{ display: 'block' }}>
          <div className="modal-dialog modal-fullscreen">
            <div className="modal-content" style={{ background: 'rgba(20, 24, 62, 0.7)' }}>
              <div className="modal-header border-0">
                <button
                  type="button"
                  className="btn btn-square bg-white btn-close"
                  aria-label="Close"
                  onClick={() => setSearchModalVisible(false)}
                ></button>
              </div>
              <div className="modal-body d-flex align-items-center justify-content-center">
                <div className="input-group" style={{ maxWidth: '600px' }}>
                  <input
                    type="text"
                    className="form-control bg-transparent border-light p-3"
                    placeholder="Type search keyword"
                  />
                  <button className="btn btn-light px-4">
                    <i className="bi bi-search"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Full Screen Search End */}


      {/* <!-- Service Start --> */}
    <div class="container-fluid bg-light py-5">
        <div class="container py-5">
            <div class="row g-5 align-items-center">
                <div class="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
                    <div class="btn btn-sm border rounded-pill text-primary px-3 mb-3">Our Services</div>
                    <h1 class="mb-4">Our Excellent AI Solutions for Your Business</h1>
                    <p class="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam
                        amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus
                        clita duo justo et tempor eirmod magna dolore erat amet</p>
                    <a class="btn btn-primary rounded-pill px-4" href="">Read More</a>
                </div>
                <div class="col-lg-7">
                    <div class="row g-4">
                        <div class="col-md-6">
                            <div class="row g-4">
                                <div class="col-12 wow fadeIn" data-wow-delay="0.1s">
                                    <div class="service-item d-flex flex-column justify-content-center text-center rounded">
                                        <div class="service-icon btn-square">
                                            <i class="fa fa-home fa-2x"></i>
                                        </div>
                                        <h5 class="mb-3">Robotic Automation</h5>
                                        <p>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet
                                            diam sed stet lorem.</p>
                                        <a class="btn px-3 mt-auto mx-auto" href="">Read More</a>
                                    </div>
                                </div>
                                <div class="col-12 wow fadeIn" data-wow-delay="0.5s">
                                    <div class="service-item d-flex flex-column justify-content-center text-center rounded">
                                        <div class="service-icon btn-square">
                                            <i class="fa fa-home fa-2x"></i>
                                        </div>
                                        <h5 class="mb-3">Machine learning</h5>
                                        <p>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet
                                            diam sed stet lorem.</p>
                                        <a class="btn px-3 mt-auto mx-auto" href="">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 pt-md-4">
                            <div class="row g-4">
                                <div class="col-12 wow fadeIn" data-wow-delay="0.3s">
                                    <div class="service-item d-flex flex-column justify-content-center text-center rounded">
                                        <div class="service-icon btn-square">
                                            <i class="fa fa-home fa-2x"></i>
                                        </div>
                                        <h5 class="mb-3">Education & Science</h5>
                                        <p>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet
                                            diam sed stet lorem.</p>
                                        <a class="btn px-3 mt-auto mx-auto" href="">Read More</a>
                                    </div>
                                </div>
                                <div class="col-12 wow fadeIn" data-wow-delay="0.7s">
                                    <div class="service-item d-flex flex-column justify-content-center text-center rounded">
                                        <div class="service-icon btn-square">
                                            <i class="fa fa-home fa-2x"></i>
                                        </div>
                                        <h5 class="mb-3">Predictive Analysis</h5>
                                        <p>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet
                                            diam sed stet lorem.</p>
                                        <a class="btn px-3 mt-auto mx-auto" href="">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Service End --> */}


    {/* <!-- Testimonial Start --> */}
    <div class="container-xxl py-5">
        <div class="container py-5">
            <div class="row g-5">
                <div class="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
                    <div class="btn btn-sm border rounded-pill text-primary px-3 mb-3">Testimonial</div>
                    <h1 class="mb-4">What Say Our Clients!</h1>
                    <p class="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam
                        amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus
                        clita duo justo et tempor eirmod magna dolore erat amet</p>
                    <a class="btn btn-primary rounded-pill px-4" href="">Read More</a>
                </div>
                <div class="col-lg-7 wow fadeIn" data-wow-delay="0.5s">
                    <div class="owl-carousel testimonial-carousel border-start border-primary">
                        <div class="testimonial-item ps-5">
                            <i class="fa fa-quote-left fa-2x text-primary mb-3"></i>
                            <p class="fs-4">Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet</p>
                            <div class="d-flex align-items-center">
                                <img class="img-fluid flex-shrink-0 rounded-circle" src={testimonial1}
                                    style={{width: "60px", height: "60px"}} />
                                <div class="ps-3">
                                    <h5 class="mb-1">Client Name</h5>
                                    <span>Profession</span>
                                </div>
                            </div>
                        </div>
                        <div class="testimonial-item ps-5">
                            <i class="fa fa-quote-left fa-2x text-primary mb-3"></i>
                            <p class="fs-4">Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet</p>
                            <div class="d-flex align-items-center">
                                <img class="img-fluid flex-shrink-0 rounded-circle" src={testimonial2}
                                    style={{width: "60px", height: "60px"}}/>
                                <div class="ps-3">
                                    <h5 class="mb-1">Client Name</h5>
                                    <span>Profession</span>
                                </div>
                            </div>
                        </div>
                        {/* <div class="testimonial-item ps-5">
                            <i class="fa fa-quote-left fa-2x text-primary mb-3"></i>
                            <p class="fs-4">Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet</p>
                            <div class="d-flex align-items-center">
                                <img class="img-fluid flex-shrink-0 rounded-circle" src="http://127.0.0.1:55871/img/testimonial-3.jpg"
                                    style={{width: "60px", height: "60px"}} />
                                <div class="ps-3">
                                    <h5 class="mb-1">Client Name</h5>
                                    <span>Profession</span>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Testimonial End --> */}

      {/* Back to Top */}
      <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top pt-2">
        <i className="bi bi-arrow-up"></i>
      </a>
    </div>
  );
};

const ServiceItem = ({ icon, title, description, delay }) => (
  <div className={`col-12 wow fadeIn`} data-wow-delay={delay}>
    <div className="service-item d-flex flex-column justify-content-center text-center rounded">
      <div className="service-icon btn-square">
        <i className={`fa ${icon} fa-2x`}></i>
      </div>
      <h5 className="mb-3">{title}</h5>
      <p>{description}</p>
      <a className="btn px-3 mt-auto mx-auto" href="">
        Read More
      </a>
    </div>
  </div>
);

const TestimonialItem = ({ image, name, profession, text }) => (
  <div className="testimonial-item ps-5">
    <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
    <p className="fs-4">{text}</p>
    <div className="d-flex align-items-center">
      <img className="img-fluid flex-shrink-0 rounded-circle" src={image} style={{ width: '60px', height: '60px' }} alt="Client" />
      <div className="ps-3">
        <h5 className="mb-1">{name}</h5>
        <span>{profession}</span>
      </div>
    </div>
  </div>
);

export default Service;
