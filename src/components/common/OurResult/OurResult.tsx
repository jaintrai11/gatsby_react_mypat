/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/style-prop-object */
import * as React from 'react'
import './ourResult.css'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
// eslint-disable-next-line prettier/prettier
interface OurResultProps { }

const OurResult: React.FC<OurResultProps> = () => (
  <>
    {/* <!-- our results start--> */}
    <section className="mypat-result-wrap">
      <h2 className="sometools-h text-center">Our Results</h2>
      <div className="student-numb-wrp">
        <ul className="results-subj-name new">
          <li className="active">
            <a data-toggle="tab" href="#tab1default" aria-expanded="true">
              JEE Advanced
            </a>
          </li>
          <li className="">
            <a data-toggle="tab" href="#tab2default" aria-expanded="false">
              JEE Main
            </a>
          </li>
          <li className="">
            <a data-toggle="tab" href="#tab3default" aria-expanded="false">
              NTSE
            </a>
          </li>
          <li className="">
            <a data-toggle="tab" href="#tab4default" aria-expanded="false">
              KVPY
            </a>
          </li>
        </ul>

        <div className="tab-content">
          <div className="container tab-pane fade active in" id="tab1default">
            <div className="tab-content">
              <ul className="sub-tab-result">
                <li className="active">
                  <a
                    data-toggle="tab"
                    href="#tab1default777"
                    aria-expanded="true"
                  >
                    2019
                  </a>
                </li>
                <li>
                  {' '}
                  <a
                    data-toggle="tab"
                    href="#tab1default888"
                    aria-expanded="true"
                  >
                    2018
                  </a>
                </li>
                <li>
                  {' '}
                  <a
                    data-toggle="tab"
                    href="#tab1default2017"
                    aria-expanded="true"
                  >
                    2017
                  </a>
                </li>
              </ul>
            </div>
            <div className="tab-pane fade in active" id="tab1default777">
              {/* <!-- slider section --> */}
              <div className="container">
                <div
                  id="Carousel-web"
                  className="carousel slide hidden-sm hidden-xs"
                  data-ride="carousel"
                  data-interval="false"
                >
                  {/* <!-- Wrapper for slides --> */}
                  <div className="carousel-inner">
                    {' '}
                    0
                    <div className="item {{ i == 0 ? 'active' : '' }}">
                      <div className="carousel_block">
                        <div className="carousel_img">
                          <a className="thumbnail">
                            <img src="" alt="Image" />
                          </a>
                          23232
                          <br />
                          <p>AIR - 32343</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Left and right controls --> */}
                  <a
                    className="left carousel-control"
                    href="#Carousel-web"
                    data-slide="prev"
                  >
                    <span className="glyphicon glyphicon-chevron-left">
                      <img
                        alt="content"
                        src="../../../static/images/s3-images/next+arrow.svg"
                      />
                    </span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="right carousel-control"
                    href="#Carousel-web"
                    data-slide="next"
                  >
                    <span className="glyphicon glyphicon-chevron-right">
                      <img
                        alt="content"
                        src="../../../static/images/s3-images/next-arrow-right.svg"
                        className="right_arrow_img"
                      />
                    </span>
                    <span className="total_img">54354</span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- New Design --> */}
        </div>
      </div>
    </section>
  </>
)

export default OurResult
