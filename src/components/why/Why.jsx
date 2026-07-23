import React, { useRef } from 'react';
import './why.css';

// Importing Image Assets
import mainVideoImg from '../../assets/dimg.png';

// Company Logos
import zoomerrLogo from '../../assets/z1.png';
import shellsLogo from '../../assets/s1.png';
import artVenueLogo from '../../assets/a1.png';
import kontrastrLogo from '../../assets/l1.png';
import wavesLogo from '../../assets/w1.png';

// User Profiles
import hellenUser from '../../assets/z2.png';
import hellenaUser from '../../assets/w2.png';
import davidUser from '../../assets/a2.png';
import ralphUser from '../../assets/l2.png';

const Why = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  const testimonials = [
    {
      id: 1,
      logo: zoomerrLogo,
      text: 'Non risus viverra enim, quis. Eget vitae arcu mauris vitae elementum nunc felis. Sit purus venenatis velit semper lectus mollis id habitant.',
      userImg: hellenUser,
    },
    {
      id: 2,
      logo: shellsLogo,
      text: 'Aliquet ridiculus mi porta habitant vulputate rhoncus, sollicitudin. Et, tempus, te. Sit purus venenatis velit semper lectus pretium vulputate justo sed.',
      userImg: hellenaUser,
    },
    {
      id: 3,
      logo: artVenueLogo,
      text: 'A eget sed posuere dui risus habitasse mauris. Venenatis aliquet habitant elementum ac lacus. Pretium vulputate pretium posuere justo sed.',
      userImg: davidUser,
    },
    {
      id: 4,
      logo: kontrastrLogo,
      text: 'Magna egestas leo sapien sit per Integer. Vulputate vulputate pretium arcu ac pretium. Semper arcu habitant risus et scelerisque.',
      userImg: ralphUser,
    },
    {
      id: 5,
      logo: wavesLogo,
      text: 'Non risus viverra enim, quis. Eget vitae arcu mauris vitae elementum nunc felis. Sit purus venenatis velit semper lectus mollis id habitant.',
      userImg: hellenUser,
    },
  ];

  return (
    <div className="why-section-wrapper">
      {/* ==========================================
          1. WHY JOIN US SECTION
         ========================================== */}
      <section className="why-join">
        <div className="why-join__container">
          <div className="why-join__card">
            {/* Left Column */}
            <div className="why-join__content">
              <h2 className="why-join__title">Why join us</h2>
              <ul className="why-join__list">
                <li>
                  <span className="check-icon">✓</span>
                  Est et in pharetra magna adipiscing ornare aliquam.
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  Tellus orci sed consequat ac vulputate ut eu blandit.
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  Ullamcorper ornare in et egestas dolor orc.
                </li>
              </ul>
              <a href="#signup" className="why-join__btn">
                Sign up now
              </a>
            </div>

            {/* Right Visual Image */}
            <div className="why-join__visual">
              <img
                src={mainVideoImg}
                alt="Why Join Us Visual"
                className="why-join__video-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          2. BECAUSE THEY LOVE US (TESTIMONIALS SLIDER)
         ========================================== */}
      <section className="testimonials">
        {/* Header container aligned to main grid */}
        <div className="testimonials__header-container">
          <h2 className="testimonials__title">Because they love us</h2>
          <div className="testimonials__arrows">
            <button onClick={scrollLeft} className="arrow-btn" aria-label="Previous">
              ←
            </button>
            <button onClick={scrollRight} className="arrow-btn" aria-label="Next">
              →
            </button>
          </div>
        </div>

        {/* Figma Amber Background Banner */}
        <div className="testimonials__bg-amber"></div>

        {/* Full-bleed Slider Track */}
        <div className="testimonials__slider-wrapper">
          <div className="testimonials__slider" ref={sliderRef}>
            {testimonials.map((item) => (
              <div className="testi-card" key={item.id}>
                <div className="testi-card__logo-wrapper">
                  <img src={item.logo} alt="Company Logo" className="testi-card__logo" />
                </div>
                <p className="testi-card__text">{item.text}</p>
                <div className="testi-card__user-wrapper">
                  <img src={item.userImg} alt="User Info" className="testi-card__user-img" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Why;