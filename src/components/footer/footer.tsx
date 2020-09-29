/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/style-prop-object */
import * as React from 'react'
import './footer.css'
// import OurResult from '../common/OurResult/OurResult'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
// eslint-disable-next-line prettier/prettier
interface FooterProps { }

const Footer: React.FC<FooterProps> = () => (
  <>
    <div className="footer-bg">
      <div className="container-fluid">
        <div className="row">
          {/* <!-- for desktop only --> */}
          <div className="footer-dasktop-only">
            <div className="col-sm-12">
              <div className="row">
                <div className="new-footer-wrp">
                  <div className="new-footernav">
                    <div className="label-hed">Features </div>
                    <ul className="">
                      <li>
                        <a href="/community">Community </a>
                      </li>

                      <li>
                        <a href="/test-series/all">Courses</a>
                      </li>
                      <li>
                        <a href="/refer-friend">Refer & Earn </a>
                      </li>
                    </ul>
                  </div>

                  <div className="new-footernav">
                    <div className="label-hed">Resources </div>
                    <ul className="">
                      <li>
                        <a href="http://mypat.in/blog/" target="_blank">
                          Blog
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.youtube.com/c/mypatlearning?sub_confirmation=1"
                          target="_blank"
                        >
                          Webinar
                        </a>
                      </li>
                      <li>
                        <a href="/support" title="support">
                          Support
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="new-footer-wrp">
                  <div className="new-footernav">
                    <div className="label-hed">Examinations </div>
                    <ul className="">
                      <li>
                        <a href="/exam','jee-main">JEE Main</a>
                      </li>
                      <li>
                        <a href="/exam','jee-advanced">JEE Advanced</a>
                      </li>
                      <li>
                        <a href="/exam','bitsat">BITSAT</a>
                      </li>
                      <li>
                        <a href="/exam','ntse">NTSE</a>
                      </li>
                      <li>
                        <a href="/exam','kvpy">KVPY</a>
                      </li>
                    </ul>
                    <div className="label-hed">Free Mock Tests </div>
                    <ul>
                      <li>
                        <a href="/jee-main-mock-test-2020">
                          JEE Main Mock Test
                        </a>
                      </li>
                      <li>
                        <a href="/jee-advanced-mock-test-2020">
                          JEE Advanced Mock Test
                        </a>
                      </li>
                      <li>
                        <a href="/free-test','bitsat">BITSAT Mock Test</a>
                      </li>
                      <li>
                        <a href="/kvpy-mock-test">KVPY Mock Test</a>
                      </li>
                      <li>
                        <a href="/ntse-mock-test">NTSE Mock Test</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="new-footer-wrp">
                  <div className="new-footernav">
                    <div className="label-hed">TOOLS </div>
                    <ul className="">
                      <li>
                        <a href="/prep-tracker','jee-main">
                          JEE Main Prep Tracker
                        </a>
                      </li>
                      <li>
                        <a href="/prep-tracker','jee-advanced">
                          JEE Advanced Prep Tracker
                        </a>
                      </li>
                      <li>
                        <a href="/prep-tracker','bitsat">BITSAT Prep Tracker</a>
                      </li>
                      <li>
                        <a href="/prep-tracker','kvpy">KVPY Prep Tracker</a>
                      </li>
                      <li>
                        <a href="/prep-tracker','ntse">NTSE Prep Tracker</a>
                      </li>
                      <li>
                        <a href="/college-predictor">
                          JEE Advanced College Predictor
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="new-footer-wrp">
                  <div className="new-footernav">
                    <div className="label-hed">Previous Test Papers </div>
                    <ul className="">
                      <li>
                        <a href="/previous-year-papers','iit-jee">
                          JEE Main and Advanced
                        </a>
                      </li>
                      <li>
                        <a href="/previous-year-papers','ntse">NTSE</a>
                      </li>
                      <li>
                        <a href="/previous-year-papers','kvpy">KVPY</a>
                      </li>

                      <li>
                        <a href="/sample-paper/board">Board Sample paper</a>
                      </li>
                    </ul>
                    <div className="label-hed">E-Books</div>
                    <ul>
                      <li>
                        <a href="/ebook/ultimate-guide-to-jee-main-2020-success">
                          Ultimate Guide to JEE Main Exam
                        </a>
                      </li>
                      <li>
                        <a href="/ebook/tips-to-crack-bitsat-by-toppers">
                          Tips to Crack BITSAT By Toppers
                        </a>
                      </li>
                      <li>
                        <a href="/ebook/how-to-prepare-for-kvpy">
                          How to Prepare For KVPY
                        </a>
                      </li>
                      <li>
                        <a href="/ebook/top-5-preparation-tips-for-ntse">
                          Top 5 Preparation Tips for NTSE
                        </a>
                      </li>
                      <li>
                        <a href="/ebook/one-month-mantra-to-jee-main-2020-success">
                          One-month Mantra to Crack JEE Main 2020
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="new-footer-wrp bg-ft-clr">
                  <div className="new-footernav">
                    <div className="label-hed">Call us at </div>
                    <ul className="">
                      <li className="call-wrp">
                        <b>
                          <a href="tel:18001210206">1800-121-0206</a>
                          <span className="small">(Toll Free)</span>
                        </b>
                        <p className="time-date"> 10 AM - 9 PM (All 7 Days)</p>
                        <p className="time-date">
                          {' '}
                          <b>*Except National Holidays</b>
                        </p>
                        <p className="email-txt">
                          Email ID:
                          <a href="mailto:support@mypat.in">support@mypat.in</a>
                        </p>
                      </li>

                      <li className="call-wrp">
                        <span className="addres-hed">Address</span>
                        <p className="addres-txt">
                          N 161 A, Saira Tower, 2nd Floor Gulmohar Commercial
                          Complex, Green Park, New Delhi – 110049
                        </p>
                      </li>
                      <li className="call-wrp">
                        <span className="addres-hed">Download Our App</span>
                        <div className="mypat-apps">
                          <a href="{{androidAppLink}}">
                            <img
                              src="/assets/img/s3-images/android-ico.png"
                              className="img-responsive img-phone2"
                              alt=""
                            />
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- end -->

                <!-- for mobile only --> */}

          <div className="footer-mobile-only">
            <div
              className="panel-group"
              id="accordion"
              role="tablist"
              aria-multiselectable="true"
            >
              <div className="panel panel-default">
                <div className="panel-heading" role="tab" id="headingOne">
                  <h4 className="panel-title">
                    <a
                      className=""
                      role="button"
                      data-toggle="collapse"
                      data-parent="#accordion"
                      href="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Features
                    </a>
                  </h4>
                </div>
                <div
                  id="collapseOne"
                  className="panel-collapse collapse in"
                  role="tabpanel"
                  aria-labelledby="headingOne"
                >
                  <div className="panel-body">
                    <ul className="m-new-footernav">
                      <li>
                        <a href="/community">Community </a>
                      </li>
                      <li>
                        <a href="http://jee-mock.mypat.in/" target="_blank">
                          JEE Advanced Mock Test
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://mypat.in/free-test-bitsat"
                          target="_blank"
                        >
                          BITSAT Mock Test
                        </a>
                      </li>
                      <li>
                        <a href="/test-series/all">Courses</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="panel panel-default">
                <div className="panel-heading" role="tab" id="headingTwo">
                  <h4 className="panel-title">
                    <a
                      className="collapsed"
                      role="button"
                      data-toggle="collapse"
                      data-parent="#accordion"
                      href="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Resources
                    </a>
                  </h4>
                </div>
                <div
                  id="collapseTwo"
                  className="panel-collapse collapse"
                  role="tabpanel"
                  aria-labelledby="headingTwo"
                >
                  <div className="panel-body">
                    <ul className="m-new-footernav">
                      <li>
                        <a href="http://mypat.in/blog/" target="_blank">
                          Blog
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.youtube.com/channel/UCHNzbB0yeaP0q8Zm3Ais2AQ"
                          target="_blank"
                        >
                          Webinar
                        </a>
                      </li>
                      <li>
                        <a href="/support" title="support">
                          Support
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="panel panel-default">
                <div className="panel-heading" role="tab" id="headingThree">
                  <h4 className="panel-title">
                    <a
                      className="collapsed"
                      role="button"
                      data-toggle="collapse"
                      data-parent="#accordion"
                      href="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Examination
                    </a>
                  </h4>
                </div>
                <div
                  id="collapseThree"
                  className="panel-collapse collapse"
                  role="tabpanel"
                  aria-labelledby="headingThree"
                >
                  <div className="panel-body">
                    <ul className="m-new-footernav">
                      <li>
                        <a href="/exam','jee-main">JEE Main</a>
                      </li>
                      <li>
                        <a href="/exam','jee-advanced">JEE Advanced</a>
                      </li>
                      <li>
                        <a href="/exam','bitsat">BITSAT</a>
                      </li>
                      <li>
                        <a href="/exam','ntse">NTSE</a>
                      </li>
                      <li>
                        <a href="/exam','kvpy">KVPY</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="panel panel-default">
                <div className="panel-heading" role="tab" id="ebooks-list">
                  <h4 className="panel-title">
                    <a
                      className="collapsed"
                      role="button"
                      data-toggle="collapse"
                      data-parent="#accordion"
                      href="#collapseexamination-list"
                      aria-expanded="false"
                      aria-controls="examination-list"
                    >
                      FREE MOCK TESTS
                    </a>
                  </h4>
                </div>
                <div
                  id="collapseexamination-list"
                  className="panel-collapse collapse"
                  role="tabpanel"
                  aria-labelledby="examination-list"
                >
                  <div className="panel-body">
                    <ul className="m-new-footernav">
                      <li>
                        <a href="/jee-main-mock-test-2020">
                          JEE Main Mock Test
                        </a>
                      </li>
                      <li>
                        <a href="/jee-advanced-mock-test-2020">
                          JEE Advanced Mock Test
                        </a>
                      </li>
                      <li>
                        <a href="/free-test/bitsat">BITSAT Mock Test</a>
                      </li>
                      <li>
                        <a href="/kvpy-mock-test">KVPY Mock Test</a>
                      </li>
                      <li>
                        <a href="/ntse-mock-test">NTSE Mock Test</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="panel panel-default">
                <div className="panel-heading" role="tab" id="headingfoure">
                  <h4 className="panel-title">
                    <a
                      className="collapsed"
                      role="button"
                      data-toggle="collapse"
                      data-parent="#accordion"
                      href="#collapsefoure"
                      aria-expanded="false"
                      aria-controls="collapsefoure"
                    >
                      TOOLS
                    </a>
                  </h4>
                </div>
                <div
                  id="collapsefoure"
                  className="panel-collapse collapse"
                  role="tabpanel"
                  aria-labelledby="headingfoure"
                >
                  <div className="panel-body">
                    <ul className="m-new-footernav">
                      <li>
                        <a href="/prep-tracker','jee-main">
                          JEE Main Prep Tracker
                        </a>
                      </li>
                      <li>
                        <a href="/prep-tracker','jee-advanced">
                          JEE Advanced Prep Tracker
                        </a>
                      </li>
                      <li>
                        <a href="/prep-tracker','bitsat">BITSAT Prep Tracker</a>
                      </li>
                      <li>
                        <a href="/prep-tracker','kvpy">KVPY Prep Tracker</a>
                      </li>
                      <li>
                        <a href="/prep-tracker','ntse">NTSE Prep Tracker</a>
                      </li>
                      <li>
                        <a href="/college-predictor">
                          JEE Advanced College Predictor
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="panel panel-default">
                <div className="panel-heading" role="tab" id="ebooks-list">
                  <h4 className="panel-title">
                    <a
                      className="collapsed"
                      role="button"
                      data-toggle="collapse"
                      data-parent="#accordion"
                      href="#collapseebooks-list"
                      aria-expanded="false"
                      aria-controls="collapsefoure"
                    >
                      E-Books
                    </a>
                  </h4>
                </div>
                <div
                  id="collapseebooks-list"
                  className="panel-collapse collapse"
                  role="tabpanel"
                  aria-labelledby="ebooks-list"
                >
                  <div className="panel-body">
                    <ul className="m-new-footernav">
                      <li>
                        <a href="/ebook/ultimate-guide-to-jee-main-2020-success">
                          Ultimate Guide to JEE Main Exam
                        </a>
                      </li>
                      <li>
                        <a href="/ebook/tips-to-crack-bitsat-by-toppers">
                          Tips to Crack BITSAT By Toppers
                        </a>
                      </li>
                      <li>
                        <a href="/ebook/how-to-prepare-for-kvpy">
                          How to Prepare For KVPY
                        </a>
                      </li>
                      <li>
                        <a href="/ebook/top-5-preparation-tips-for-ntse">
                          Top 5 Preparation Tips for NTSE
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="panel panel-default">
                <div className="panel-heading" role="tab" id="headingfive">
                  <h4 className="panel-title">
                    <a
                      className="collapsed"
                      role="button"
                      data-toggle="collapse"
                      data-parent="#accordion"
                      href="#collapsefive"
                      aria-expanded="false"
                      aria-controls="collapsefive"
                    >
                      Previous Test Papers
                    </a>
                  </h4>
                </div>
                <div
                  id="collapsefive"
                  className="panel-collapse collapse"
                  role="tabpanel"
                  aria-labelledby="headingfive"
                >
                  <div className="panel-body">
                    <ul className="m-new-footernav">
                      <li>
                        <a href="/previous-year-papers','iit-jee">
                          JEE Main and Advanced
                        </a>
                      </li>
                      <li>
                        <a href="/previous-year-papers','ntse">NTSE</a>
                      </li>
                      <li>
                        <a href="/previous-year-papers','kvpy">KVPY</a>
                      </li>
                      <li>
                        <a href="/sample-paper/board">Board Sample paper</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--./panel-group--> */}
          </div>

          {/* <!-- for mobile only end --> */}
        </div>
      </div>

      <div className="clearfix" />
      <div className="new-footer-wrp mobile-footer-address">
        <div className="new-footernav">
          <div className="label-hed">Call us at </div>
          <ul className="">
            <li className="call-wrp">
              <b>
                <a href="tel:18001210206">1800-121-0206</a>
                <span className="small">(Toll Free)</span>
              </b>
              <p className="time-date"> 10 AM - 9 PM (All 7 Days)</p>
              <p className="time-date">
                {' '}
                <b>*Except National Holidays</b>{' '}
              </p>
              <p className="email-txt">
                Email ID:
                <a href="mailto:support@mypat.in">support@mypat.in</a>
              </p>
            </li>

            <li className="call-wrp">
              <span className="addres-hed">Address</span>
              <p className="addres-txt">
                N 161 A, Saira Tower, 2nd Floor Gulmohar Commercial Complex,
                Green Park, New Delhi – 110049
              </p>
            </li>
            <li className="call-wrp">
              <span className="addres-hed">Download Our App</span>
              <div className="mypat-apps">
                <a href="{{androidAppLink}}">
                  <img
                    src="/assets/img/s3-images/android-ico.png"
                    className="img-responsive img-phone2"
                    alt=""
                  />
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-socialmediaicon">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-9 col-sm-12">
              <ol className="footer-sub-links">
                <li className="nobord">
                  <a href="/about-us" title="About Us">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/methodology" title="Methodology">
                    Methodology
                  </a>
                </li>
                <li>
                  <a href="/terms-of-use" title="Terms of Use">
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a href="/privacy-policy" title="Privacy Policy">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/disclaimer" title="Disclaimer">
                    Disclaimer
                  </a>
                </li>
                <li>
                  <a href="/copyright" title="Copyright">
                    Copyright
                  </a>
                </li>
                <li>
                  <a href="/contact-us" title="Contact Us">
                    Contact Us
                  </a>
                </li>
              </ol>
            </div>
            <div className="col-md-3 col-sm-4">
              <div className="footerSocail">
                <ul>
                  <li>
                    <a
                      className="fb"
                      href="https://www.facebook.com/pages/MyPatin/249818108402322"
                    >
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="tweeter"
                      href="https://twitter.com/myPAT_india"
                      target="_blank"
                    >
                      <i aria-hidden="true" className="fa fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="instagram"
                      href="https://www.instagram.com/mypat_india/"
                      target="_blank"
                    >
                      <i className="fa fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="linkinn"
                      href="https://www.linkedin.com/company/mypat---my-performance-analysis-test?report%2Esuccess=KJ_KkFGTDCfMt-A7wV3Fn9Yvgwr02Kd6AZHGx4bQCDiP6-2rfP2oxyVoEQiPrcAQ7Bf"
                      target="_blank"
                    >
                      <i aria-hidden="true" className="fa fa-linkedin" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 copyright">
              &copy; Copyright 2019-2020 Edfora. All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default Footer
