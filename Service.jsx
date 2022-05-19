import React from 'react';
import Slider from 'react-slick';

const Service = () => {
  const serviceData = [
    { title: 'Pet Boarding' },
    { title: 'Pet Feeding' },
    { title: 'Pet Grooming' },
    { title: 'Per Training' },
    { title: 'PetExercise' },
    { title: 'Pet Treatment' },
  ];
  const testimonialData = [
    { name: 'Client Name', profession: 'Profession' },
    { name: 'Client Name', profession: 'Profession' },
    { name: 'Client Name', profession: 'Profession' },
    { name: 'Client Name', profession: 'Profession' },
    { name: 'Client Name', profession: 'Profession' },
    { name: 'Client Name', profession: 'Profession' },
    { name: 'Client Name', profession: 'Profession' },
    { name: 'Client Name', profession: 'Profession' },
    { name: 'Client Name', profession: 'Profession' },
    { name: 'Client Name', profession: 'Profession' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      {/*  Services Start  */}
      <div className="container-fluid bg-light pt-5">
        <div className="container py-5">
          <div className="d-flex flex-column text-center mb-5">
            <h4 className="text-secondary mb-3">Our Services</h4>
            <h1 className="display-4 m-0">
              <span className="text-primary">Premium</span> Pet Services
            </h1>
          </div>
          <div className="row pb-3">
            {serviceData.map((showData) => {
              return (
                <>
                  <div className="col-md-6 col-lg-4 mb-4">
                    <div className="d-flex flex-column text-center bg-white mb-2 p-3 p-sm-5">
                      <h3 className="flaticon-house display-3 font-weight-normal text-secondary mb-3"></h3>
                      <h3 className="mb-3">{showData.title}</h3>
                      <p>
                        Diam amet eos at no eos sit lorem, amet rebum ipsum
                        clita stet, diam sea est magna diam eos, rebum sit vero
                        stet ipsum justo
                      </p>
                      <a className="text-uppercase font-weight-bold" href="">
                        Read More
                      </a>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
      {/*  Services End  */}

      {/* <!-- Testimonial Start --> */}
      <div className="container-fluid p-0 py-5">
        <div className="container p-0 pt-5">
          <div className="d-flex flex-column text-center mb-5">
            <h4 className="text-secondary mb-3">Testimonial</h4>
            <h1 className="display-4 m-0">
              Our Client <span className="text-primary">Says</span>
            </h1>
          </div>
          <Slider {...settings}>
          {testimonialData.map((showData)=>{
              return (
                <>
            <div className="bg-light mx-3 p-4">
              <div className="d-flex align-items-end mb-3 mt-n4 ml-n4">
                <img
                  className="img-fluid"
                  src="img/testimonial-1.jpg"
                  style={{ width: '80px', height: '80px' }}
                  alt=""
                />
                <div className="ml-3">
                  <h5>{showData.name}</h5>
                  <i>{showData.profession}</i>
                </div>
              </div>
              <p className="m-0">
                Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr
                eirmod clita lorem. Dolor tempor ipsum sanct clita
              </p>
            </div>
            </>
              )
            })} 
          </Slider>
        </div>
      </div>
      {/* <!-- Testimonial End --> */}
    </>
  );
};
export default Service;
