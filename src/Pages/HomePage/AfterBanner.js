import React, {useEffect} from "react";
import brokerFree from "../../Assest/Image/brokerFree.jpg";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";


import bnn1 from "../../Assest/Banner/1.jpg";
import bnn2 from "../../Assest/Banner/2.jpg";
import bnn3 from "../../Assest/Banner/3.jpg";
import bnn4 from "../../Assest/Banner/4.jpg";
import bnn5 from "../../Assest/Banner/5.jpg";
const sliderImages = [bnn1, bnn2, bnn3, bnn4, bnn5];

const AfterBanner = () => {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true, 
    pauseOnHover: false,  
    autoplaySpeed: 1000,
  }; 

  return (
    <div className="">
      <div className="broker-free pt-5">
        <div>
          <img src={brokerFree} alt="" className="w-100" />
        </div>
      </div>
      <div className="sliderw-100 py-5">
        <Slider {...settings}>
          {sliderImages.map((item, index) => (
            <div key={index}>
              <img className="w-100" src={item} alt="" />
            </div>
          ))}
        </Slider>
      </div> 

      <div className="Customer111 pt-4 pb-5 -mb50px">
        <div className="container">
          <div className="mt-3">
            <h2 className="text-white text-center bounded py-2 after-title pb-4 mb-3">
              Direct easier communication platform between BUYER and SELLER
            </h2>
          </div>
          <div className="text-center text-white pb-3">
            <h2 className="mb-3 mt-4 pt-2 pb-2">Valuable Customers</h2>
            <h4 className="buyer-count mb-3">
              <VisibilitySensor partialVisibility offset={{ bottom: 0 }}>
                {({ isVisible }) => (
                  <div className="text-black">
                    {isVisible ? (
                      <CountUp end={111} start={0} duration={1} suffix="+" />
                    ) : (
                      99
                    )}
                  </div>
                )}
              </VisibilitySensor>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AfterBanner;
