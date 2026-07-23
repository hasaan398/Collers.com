import React from "react";
import "./hero.css";

// Assets Import
import sneaker from "../../assets/Col.png";
import c1 from "../../assets/c1.png";
import c2 from "../../assets/c2.png";
import c3 from "../../assets/c3.png";
import p1 from "../../assets/p1.png";
import p2 from "../../assets/p2.png";
import p3 from "../../assets/p3.png";

// Agr react-icons installed hai toh ye import use kar sakte hain:
// import { FiShoppingCart } from "react-icons/fi";

const Hero = () => {
  return (
    <div className="landing-container">
      {/* ===== HERO & FEATURES COMBINED WRAPPER ===== */}
      <div className="hero-features-wrapper">
        {/* Background Diagonal Amber Shape */}
        <div className="top-diagonal-shape"></div>

        {/* ===== HERO SECTION ===== */}
        <section className="hero">
          <div className="hero__container">
            {/* Left Text Content */}
            <div className="hero__left">
              <h1 className="hero__title">Collectible Sneakers</h1>
              <p className="hero__subtitle">
                Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
                suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices
                amet.
              </p>
              <div className="hero__buttons">
                <a href="#signup" className="hero__btn-primary">
                  Sign up now
                </a>
                <a href="#demo" className="hero__btn-ghost">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polygon points="10 8 16 12 10 16 10 8" />
                  </svg>
                  Watch Demo
                </a>
              </div>
            </div>

            {/* Right Main Image */}
            <div className="hero__right">
              <div className="hero__image-wrapper">
                <img src={sneaker} alt="Collectible Sneaker" className="hero__sneaker-img" />
              </div>
            </div>
          </div>
        </section>

        {/* ===== FEATURES SECTION ===== */}
        <section className="features">
          <div className="features__container">
            <div className="features__card">
              <img src={c1} alt="Trophy" className="features__icon" />
              <h3 className="features__title">Nibh viverra</h3>
              <p className="features__text">
                Sit bibendum donec dolor fames neque vulputate non sit aliquam.
                Consequat turpis natoque leo, massa.
              </p>
            </div>

            <div className="features__card">
              <img src={c2} alt="Tunnel" className="features__icon" />
              <h3 className="features__title">Cursus amet</h3>
              <p className="features__text">
                Sit bibendum donec dolor fames neque vulputate non sit aliquam.
                Consequat turpis natoque leo, massa.
              </p>
            </div>

            <div className="features__card">
              <img src={c3} alt="TV Icon" className="features__icon" />
              <h3 className="features__title">Ipsum fermentum</h3>
              <p className="features__text">
                Sit bibendum donec dolor fames neque vulputate non sit aliquam.
                Consequat turpis natoque leo, massa.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* ===== BEST OF THE BEST SECTION ===== */}
      <section className="best">
        <div className="best__container">
          <div className="best__header">
            <h2 className="best__title">The best of the best</h2>
            <a href="#signup" className="best__btn">
              Sign up now
            </a>
          </div>

          <div className="best__cards">
            {/* Card 1 */}
            <div className="best__card-wrapper">
              <div className="best__shape shape--blue"></div>
              <div className="best__card">
                <img src={p1} alt="Product 1" className="best__card-img" />
                <div className="best__card-body">
                  <h3 className="best__card-title">Title</h3>
                  <p className="best__card-text">
                    Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
                  </p>
                  <a href="#buy" className="best__card-btn">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ marginRight: "8px" }}
                    >
                      <circle cx="9" cy="21" r="1" />
                      <circle cx="20" cy="21" r="1" />
                      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                    </svg>
                    Buy Now
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="best__card-wrapper">
              <div className="best__shape shape--pink"></div>
              <div className="best__card">
                <img src={p2} alt="Product 2" className="best__card-img" />
                <div className="best__card-body">
                  <h3 className="best__card-title">Title</h3>
                  <p className="best__card-text">
                    Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
                  </p>
                  <a href="#buy" className="best__card-btn">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ marginRight: "8px" }}
                    >
                      <circle cx="9" cy="21" r="1" />
                      <circle cx="20" cy="21" r="1" />
                      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                    </svg>
                    Buy Now
                  </a>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="best__card-wrapper">
              <div className="best__shape shape--green"></div>
              <div className="best__card">
                <img src={p3} alt="Product 3" className="best__card-img" />
                <div className="best__card-body">
                  <h3 className="best__card-title">Title</h3>
                  <p className="best__card-text">
                    Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
                  </p>
                  <a href="#buy" className="best__card-btn">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ marginRight: "8px" }}
                    >
                      <circle cx="9" cy="21" r="1" />
                      <circle cx="20" cy="21" r="1" />
                      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                    </svg>
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;