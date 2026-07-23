import React from 'react';
import './ArticlesAndEventsSection.css';

import ar0 from '../../assets/ar.png';
import ar1 from '../../assets/ar1.png';
import ar2 from '../../assets/ar2.png';
import ar3 from '../../assets/ar3.png';

import ar4 from '../../assets/ar4.png';
import ar5 from '../../assets/ar5.png';
import ar6 from '../../assets/ar6.png';
import ar7 from '../../assets/ar7.png';

import appleImg from '../../assets/apple.png';
import gplayImg from '../../assets/gplay.png';

import { FaYoutube, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGlobe } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';

const articlesData = [
  { id: 1, image: ar0, title: 'Congue velit risus', desc: 'Nunc gravida semper tellus neque scelerisque eget tincidunt in.' },
  { id: 2, image: ar1, title: 'Ut mauris', desc: 'Phasellus venenatis massa bibendum posuere dictum tristique.' },
  { id: 3, image: ar2, title: 'Aliquam tortor nunc', desc: 'Leo mollis fermentum praesent in condimentum id velit purus in.' },
  { id: 4, image: ar3, title: 'Fusce non morbi', desc: 'In sed bibendum metus pretium cursus tellus pharetra.' },
];

const eventsData = [
  { id: 1, category: 'Ipsum', title: 'Varius est diam', image: ar4 },
  { id: 2, category: 'Purus', title: 'Diam felis tempus', image: ar5 },
  { id: 3, category: 'Vitae', title: 'Vel nulla varius', image: ar6 },
  { id: 4, category: 'Ultrices', title: 'Amet tristique a', image: ar7 },
];

const ArticlesAndEventsSection = () => {
  return (
    <div className="aes-wrapper">

      {/* ===== ARTICLES SECTION ===== */}
      <section className="aes-articles">
        <div className="aes-inner">
          <div className="aes-header">
            <h2 className="aes-title">Articles by Collectors</h2>
            <a href="#more-articles" className="aes-link">
              More Articles <FiArrowRight />
            </a>
          </div>
          <div className="aes-grid">
            {articlesData.map((item) => (
              <div key={item.id} className="aes-card">
                <div className="aes-card-img">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="aes-card-body">
                  <h3 className="aes-card-title">{item.title}</h3>
                  <p className="aes-card-text">{item.desc}</p>
                  <a href="#read" className="aes-link aes-read-link">
                    Read article <FiArrowRight />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== AMAZING EVENTS SECTION ===== */}
      <section className="aes-events-section">
        <div className="aes-inner">
          <div className="aes-header">
            <h2 className="aes-title">Amazing events</h2>
            <a href="#explore" className="aes-link">
              Explore Articles <FiArrowRight />
            </a>
          </div>

          <div className="aes-grid">
            {eventsData.map((item) => (
              <div key={item.id} className="aes-card aes-event-card">
                <div className="aes-event-top">
                  <span className="aes-category">{item.category}</span>
                  <h3 className="aes-card-title">{item.title}</h3>
                </div>
                <div className="aes-card-img">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="aes-card-body">
                  <a href="#tickets" className="aes-link aes-ticket-link">
                    Buy Tickets <FiArrowRight />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CURVED WAVE BACKGROUND (Pure CSS/SVG Layer) */}
        <div className="aes-wave-bg">
          <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="aes-wave-svg">
            <path 
              fill="#0F172A" 
              d="M0,192L80,181.3C160,171,320,149,480,165.3C640,181,800,235,960,240C1120,245,1280,203,1360,181.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* ===== DARK FOOTER AREA ===== */}
      <div className="aes-dark">
        <div className="aes-banner">
          <div className="aes-inner aes-banner-inner">
            <h2 className="aes-banner-title">Collect More Sneakers Today</h2>
            <button className="aes-signup-btn">Sign up now</button>
          </div>
        </div>

        <footer className="aes-footer">
          <div className="aes-inner">
            <div className="aes-footer-grid">

              <div className="aes-footer-col">
                <h4>Product</h4>
                <ul>
                  <li><a href="#pricing">Pricing</a></li>
                  <li><a href="#overview">Overview</a></li>
                  <li><a href="#browse">Browse</a></li>
                  <li><a href="#accessibility">Accessibility</a></li>
                  <li><a href="#five">Five</a></li>
                </ul>
              </div>

              <div className="aes-footer-col">
                <h4>Solutions</h4>
                <ul>
                  <li><a href="#brainstorming">Brainstorming</a></li>
                  <li><a href="#ideation">Ideation</a></li>
                  <li><a href="#wireframing">Wireframing</a></li>
                  <li><a href="#research">Research</a></li>
                  <li><a href="#design">Design</a></li>
                </ul>
              </div>

              <div className="aes-footer-col">
                <h4>Support</h4>
                <ul>
                  <li><a href="#contact">Contact Us</a></li>
                  <li><a href="#developers">Developers</a></li>
                  <li><a href="#documentation">Documentation</a></li>
                  <li><a href="#integrations">Integrations</a></li>
                  <li><a href="#reports">Reports</a></li>
                </ul>
              </div>

              <div className="aes-footer-col">
                <h4>Get the App</h4>
                <div className="aes-store-btns">
                  <a href="#app-store"><img src={appleImg} alt="App Store" /></a>
                  <a href="#play-store"><img src={gplayImg} alt="Google Play" /></a>
                </div>
                <p className="aes-follow-label">Follow Us</p>
                <div className="aes-social">
                  <a href="#yt" aria-label="YouTube"><FaYoutube /></a>
                  <a href="#fb" aria-label="Facebook"><FaFacebookF /></a>
                  <a href="#tw" aria-label="Twitter"><FaTwitter /></a>
                  <a href="#ig" aria-label="Instagram"><FaInstagram /></a>
                  <a href="#li" aria-label="LinkedIn"><FaLinkedinIn /></a>
                </div>
              </div>

            </div>

            <hr className="aes-divider" />

            <div className="aes-footer-bottom">
              <p>Collers © 2023. All rights reserved.</p>
              <div className="aes-bottom-links">
                <a href="#terms">Terms</a>
                <a href="#privacy">Privacy</a>
                <a href="#contact">Contact</a>
                <span className="aes-lang"><FaGlobe /> EN</span>
              </div>
            </div>
          </div>
        </footer>
      </div>

    </div>
  );
};

export default ArticlesAndEventsSection;