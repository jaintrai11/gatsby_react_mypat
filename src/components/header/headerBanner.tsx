import React from "react"
import { Container, Row, Col } from 'react-bootstrap'
import Slider from "react-slick";

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  vertical: true,
  verticalSwiping: true,
  autoplay: true,
  cssEase: "ease-out",
  rtl: true
};

interface Props {
  siteTitle?: string
}

const HeaderBanner: React.FC<Props> = ({ siteTitle }) => (
  <>
      <div className="responsive-background">
        <img src="https://mypat.in/assets/img/s3-images/responsive-bg.svg" width="100%" height="100%" alt="banner" />
      </div>
      <Container>
        <Row>
          <Col sm={12} lg={6}>
          <Slider {...settings}>
            <div>
              <h1>
                Turn Weaknesses<br />into Strengths
                  </h1>
            </div>
            <div>
              <h1>
                Get Personalised<br />Analysis
                  </h1>
            </div>
            <div>
              <h1>
                Practice on actual<br />test screens
                  </h1>
            </div>
            <div>
              <h1>
                Boost your Exam<br />Preparation
                  </h1>
            </div>
          </Slider>

          <p>Stress free preparation for your exam.
          Accelerate your success with myPAT.
              <br /><strong>Free 14-day trial</strong>for first time ever.
            </p>

          <form id="mainBanner-form">
            <div className="input-group mainBanner-form mx-auto">
              <div className="countrycode  rel" data-toggle="dropdown">
                <input type="text" className="form-control border-inpt" id="enterdesk-home" name="number"
                  placeholder="Enter your mobile number" required />
              </div>
              <span className="input-group-btn">
                <button className="orangeButton" type="button"
                  id="taketest-btn-home-page">Try for Free</button>
              </span>
            </div>
          </form>

          <div>
            <ul className="exam">
              <li>JEE(M)</li>
              <li>JEE(A)</li>
              <li>BITSAT</li>
              <li>NTSE</li>
              <li>KVPY</li>
            </ul>
          </div>
          </Col>

        <Col sm={12} lg={6}>
          <div className="header-banner-image">
            <img src="https://mypat.in/assets/img/s3-images/laptop-new.svg" alt="laptop" />
          </div> 
        </Col>       
        </Row>
      </Container>
  </>
);

HeaderBanner.defaultProps = {
  siteTitle: ``,
}

export default HeaderBanner