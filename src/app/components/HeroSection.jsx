const HeroSection = () => {
  return (
    <section className="hero p-0 odd featured">
      <div className="swiper-container no-slider slider-h-100">
        <div className="swiper-wrapper">
          <div className="swiper-slide slide-center">
            <video loop className="full-image" muted autoPlay>
              <source src="/assets/colors.mp4" type="video/mp4" />
            </video>
            <div className="slide-content row text-center">
              <div className="col-12 mx-auto inner">
                <div className="center align-self-center text-center">
                  <h1 className="title effect-static-text">
                    Authentic, Fast & Easy.
                  </h1>

                  <div className="hide-1024 row mt-4 justify-content-center text-center items">
                    <div className="col-12 col-md-6 col-lg-4 item">
                      <div className="card no-hover">
                        <i className="icon icon-cup"></i>
                        <h4>20+ Pre-built Websites</h4>
                        <p className="cardText">
                          Allow yourself to have the most amazing website ever.
                          Your customer will love it.
                        </p>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 item">
                      <div className="card no-hover">
                        <i className="icon icon-rocket"></i>
                        <h4>Form Validation</h4>
                        <p className="cardText">
                          Save time with ready-to-use forms with Google
                          reCAPCTHA validation and mail send.
                        </p>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 item">
                      <div className="card no-hover">
                        <i className="icon icon-shield"></i>
                        <h4>GDPR Ready</h4>
                        <p className="cardText">
                          It is now required! Warn visitor that your site uses
                          cookies and complies with GDPR.
                        </p>
                      </div>
                    </div>
                  </div>

                  <a
                    href="#demos"
                    className="smooth-anchor ml-auto mr-auto mt-5 btn bigger primary-button"
                  >
                    SEE ALL
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
