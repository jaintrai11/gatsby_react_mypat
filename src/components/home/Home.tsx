/* eslint-disable react/jsx-no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable max-len */
/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/style-prop-object */
import * as React from 'react'
import './Home.css'


import OurResult from '../common/OurResult/OurResult'

interface HomeProps {
  title: string
}

const Home: React.FC<HomeProps> = () => (
  <>
    <span className="call-us">
      <a href="tel:1800-121-0206">1800-121-0206 (Toll Free)</a>
      <br />
      <p>10:00 AM to 21:00 (All Days)</p>
      {/* <p><b style="line-height: 14px;">*Except National Holidays</b></p> */}
    </span>

    <section className="mainBanner">
      <div
        id="carousel-example-generic"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="visible-xs">
          {/* <!-- Indicators --> */}
          <ol className="carousel-indicators">
            <li
              data-target="#carousel-example-generic"
              data-slide-to="0"
              className="active"
            />
            <li data-target="#carousel-example-generic" data-slide-to="1" />
          </ol>
        </div>

        {/* <!-- Wrapper for slides --> */}
        <div className="carousel-inner" role="listbox">
          {/* <!-- First design--> */}
          <div className="item sec-bg design1st active">
            <img
              src="../../../static/images/s3-images/responsive-bg.svg"
              className="hidden-lg img-width"
              alt="..."
              width="100%"
            />
            {/* <!-- <img src="../../../static/images/s3-images/junelaptop-bg.svg"
        className="hidden-md hidden-sm hidden-xs" alt="..." width="100%" /> --> */}
            <div className="carousel-caption new-home-page">
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 txt-center">
                    <div className="left-panel">
                      <div className="slidingVertical">
                        <span>
                          Boost your Exam
                          <br />
                          Preparation
                        </span>
                        <span>
                          Practice on actual
                          <br />
                          test screens
                        </span>
                        <span>
                          Get Personalised
                          <br />
                          Analysis
                        </span>
                        <span>
                          Turn Weaknesses
                          <br />
                          into Strengths
                        </span>
                      </div>
                      <p>
                        Stress free preparation for your exam. Accelerate your
                        success with myPAT. <br />
                        <strong>Free 14-day trial</strong> for first time ever.
                      </p>
                      {/* <form #detailsForm="ngForm" (keyup.enter)="openCaptcha(detailsForm)" novalidate id="mainBanner-form">
                    <div className="input-group mainBanner-form">
                      <div className="countrycode  rel" data-toggle="dropdown">
                        <input type="text" className="form-control border-inpt" id="enterdesk-home" name="number"
                          placeholder="Enter your mobile number"
                          onkeypress="return event.charCode === 0 || /\d/.test(String.fromCharCode(event.charCode));"
                          [(ngModel)]="mobileNumber" #number1="ngModel" [pattern]="selectedCountry.regex"
                          (ngModelChange)="checkValue()" required />
                        <div className="flag-wrp dropdown-toggle " data-toggle="dropdown" *ngIf="dataPresent">
                          <div className="df">
                            <div className="bg-img-new {{selectedCountry.className}}" id="{{selectedCountry.name}}"></div>
                            <span className="caret"></span>
                          </div>
                        </div>
                        <ul className="dropdown-menu scrl-list" *ngIf="dataPresent">
                          <li *ngFor="let country of countryData" (click)="storeCountry(country,index)">
                            <div className="bg-img-new {{country.className}}" id="{{country.name}}"></div>
                            <div className="country-name">{{country.name}}</div>
                          </li>
                        </ul>
                      </div>
                      <span className="input-group-btn">
                        <button className="btn-taketest" type="button" (click)="openCaptcha(detailsForm)"
                          id="taketest-btn-home-page">Try for Free</button>
                      </span>
                    </div>
                    <div *ngIf="number1.invalid && (number1.dirty || number1.touched)">
                      <div *ngIf="number1.errors.required" className="alert alert-danger mobile-alert">
                        Enter your mobile number
                      </div>
                      <div *ngIf="number1.errors.pattern" className="alert alert-danger mobile-alert">
                        Please enter a valid mobile number
                      </div>
                    </div>
                  </form>


                  <form #detailsForm2="ngForm" (keyup.enter)="submitDetails(detailsForm2)" novalidate
                    id="mobile-mainBanner-form">
                    <div className="mobile-mainBanner-form">
                      <div className="input-group-btn m-search-panel">
                        <button className="btn btn-default dropdown-toggle selct-cls-hm" data-toggle="dropdown" type="button"
                          aria-expanded="false">
                          <span [className]="flag?'error-home':''" id="search_concept1">Select Goal</span>
                          <span className="m-menu-ico-2">
                            <img appLazyLoad
                              src="https://mypat-v2-prod.s3-us-west-2.amazonaws.com/webcontent/gray_drop.png" /></span>
                        </button>
                        <!-- <ul className="dropdown-menu" role="menu">
                          <li *ngFor="let goal of goalsList" (click)="alertFunc(goal)">{{goal.name}}</li>
                        </ul> -->
                      </div>
                      <div className="m-search-panel rel">
                        <input id="entermob-home" className="form-control input-cls-hm" type="text" name="number"
                          placeholder="Enter your mobile number"
                          onkeypress="return event.charCode === 0 || /\d/.test(String.fromCharCode(event.charCode));"
                          pattern="{{selectedCountry.regex}}" [(ngModel)]="mobileNumber" #number="ngModel"
                          (ngModelChange)="checkValueMob()" (ngModelChange)="checkValue()" required>
                        <div className="countrycode dropdown-toggle " *ngIf="dataPresent" data-toggle="dropdown">
                          <div className="bg-img-new {{selectedCountry.className}}" id="{{selectedCountry.name}}"></div>
                          <span className="caret"></span>
                        </div>
                        <ul className="dropdown-menu scrl-list" *ngIf="dataPresent">
                          <li *ngFor="let country of countryData" (click)="storeCountry(country,index)">
                            <div className="bg-img-new {{country.className}}" id="{{country.name}}"></div>
                            <div className="country-name">{{country.name}}</div>
                          </li>
                        </ul>
                      </div>
                      <div className="m-search-panel">
                        <button className="btn default-btn button-cls-hm homepage_take_test" (click)="openCaptcha(detailsForm)">
                          Take Test </button>
                      </div>
                    </div>
                  </form> */}

                      {/* <div id="captcha-div" *ngIf="showVar==true" className="float-unset">
                    <div nbRecaptcha [config]="'qq'" [lang]="'en'" (captchaResponse)="getSuccess()"
                      (captchaExpired)="captchaExpired()"></div>
                  </div>  */}
                      <div>
                        <ul className="exam">
                          <li>JEE(M)</li>
                          <li>JEE(A)</li>
                          <li>BITSAT</li>
                          <li>NTSE</li>
                          <li>KVPY</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* <div className="img-pos">
                    {/* <!-- <img src="../../../static/images/s3-images/laptop-new.svg"
                     className="ml-36 hidden-md hidden-sm hidden-xs" title="myPat"
                  alt="myPat" width="486"> -->
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Second design--> */}
          <div className="item active sec-bg">
            <img
              src="../../../static/images/s3-images/responsive-bg.svg"
              className="hidden-lg img-width"
              alt="..."
              width="100%"
            />
            <img
              src="../../../static/images/s3-images/bg-image-july.png"
              className="hidden-md hidden-sm hidden-xs desktop-height"
              alt="..."
              width="100%"
            />
            <div className="carousel-caption new-home-page">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 txt-center text-center">
                    <div className="left-panel">
                      <div className="slidingVertical">
                        <span>
                          Boost your Exam
                          <br />
                          Preparation
                        </span>
                        <span>
                          Practice on actual
                          <br />
                          test screens
                        </span>
                        <span>
                          Get Personalised
                          <br />
                          Analysis
                        </span>
                        <span>
                          Turn Weaknesses
                          <br />
                          into Strengths
                        </span>
                      </div>
                      <p className="mtb-38">
                        Experience the difference with a{' '}
                        <strong>FREE 14 DAY TRIAL</strong>
                      </p>
                      {/* <form #detailsForm="ngForm" (keyup.enter)="openCaptcha(detailsForm)" novalidate id="mainBanner-form">
                    <div className="input-group mainBanner-form margin-auto width-600">
                      <!-- <div className="input-group-btn" id="select-className-home">
                              <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
                                <span [className]="flag?'error-home':''" id="search_concept">Select Goal </span>
                                <span className="menu-ico-2">
                                  <img appLazyLoad src="https://mypat-v2-prod.s3-us-west-2.amazonaws.com/webcontent/gray_drop.png" />
                                </span>
                              </button>
                              <ul className="dropdown-menu" role="menu">
                                <li *ngFor="let goal of goalsList" (click)="alertFunc(goal)"><a>{{goal.name}}</a></li>
                              </ul>
                            </div> -->
                      <div className="countrycode  rel" data-toggle="dropdown">
                        <input type="text" className="form-control border-inpt" id="enterdesk-home" name="number"
                          placeholder="Enter your mobile number"
                          onkeypress="return event.charCode === 0 || /\d/.test(String.fromCharCode(event.charCode));"
                          [(ngModel)]="mobileNumber" #number1="ngModel" [pattern]="selectedCountry.regex"
                          (ngModelChange)="checkValue()" required />
                        <div className="flag-wrp dropdown-toggle " data-toggle="dropdown" *ngIf="dataPresent">
                          <div className="df">
                            <div className="bg-img-new {{selectedCountry.className}}" id="{{selectedCountry.name}}"></div>
                            <span className="caret"></span>
                          </div>
                        </div>
                        <ul className="dropdown-menu scrl-list" *ngIf="dataPresent">
                          <li *ngFor="let country of countryData" (click)="storeCountry(country,index)">
                            <div className="bg-img-new {{country.className}}" id="{{country.name}}"></div>
                            <div className="country-name">{{country.name}}</div>
                          </li>
                        </ul>
                      </div>
                      <span className="input-group-btn">
                        <button className="btn-taketest" type="button" (click)="openCaptcha(detailsForm)"
                          id="taketest-btn-home-page">Try for Free</button>
                      </span>
                    </div>
                    <div *ngIf="number1.invalid && (number1.dirty || number1.touched)">
                      <div *ngIf="number1.errors.required" className="alert alert-danger mobile-alert">
                        Enter your mobile number
                      </div>
                      <div *ngIf="number1.errors.pattern" className="alert alert-danger mobile-alert">
                        Please enter a valid mobile number
                      </div>
                    </div>
                  </form> */}
                      {/*
                  <!--form OTP on banner mobile start--> */}
                      {/* <form #detailsForm2="ngForm" (keyup.enter)="submitDetails(detailsForm2)" novalidate
                    id="mobile-mainBanner-form">
                    <div className="mobile-mainBanner-form">
                      <div className="input-group-btn m-search-panel">
                        <button className="btn btn-default dropdown-toggle selct-cls-hm" data-toggle="dropdown" type="button"
                          aria-expanded="false">
                          <span [className]="flag?'error-home':''" id="search_concept1">Select Goal</span>
                          <span className="m-menu-ico-2"><img appLazyLoad
                              src="https://mypat-v2-prod.s3-us-west-2.amazonaws.com/webcontent/gray_drop.png" /></span>
                        </button>
                        <!-- <ul className="dropdown-menu" role="menu">
                          <li *ngFor="let goal of goalsList" (click)="alertFunc(goal)">{{goal.name}}</li>
                        </ul> -->
                      </div>
                      <div className="m-search-panel rel">
                        <input id="entermob-home" className="form-control input-cls-hm" type="text" name="number"
                          placeholder="Enter your mobile number"
                          onkeypress="return event.charCode === 0 || /\d/.test(String.fromCharCode(event.charCode));"
                          pattern="{{selectedCountry.regex}}" [(ngModel)]="mobileNumber" #number="ngModel"
                          (ngModelChange)="checkValueMob()" (ngModelChange)="checkValue()" required>
                        <div className="countrycode dropdown-toggle " *ngIf="dataPresent" data-toggle="dropdown">
                          <div className="bg-img-new {{selectedCountry.className}}" id="{{selectedCountry.name}}"></div>
                          <span className="caret"></span>
                        </div>
                        <ul className="dropdown-menu scrl-list" *ngIf="dataPresent">
                          <li *ngFor="let country of countryData" (click)="storeCountry(country,index)">
                            <div className="bg-img-new {{country.className}}" id="{{country.name}}"></div>
                            <div className="country-name">{{country.name}}</div>
                          </li>
                        </ul>
                      </div>
                      <div className="m-search-panel">
                        <button className="btn default-btn button-cls-hm homepage_take_test" (click)="openCaptcha(detailsForm)">
                          Take Test </button>
                      </div>
                    </div>
                  </form> */}
                      {/* // <!-- form OTP on banner mobile end -->
                  // <!--  form OTP on banner Desktop end --> */}
                      {/* // <div id="captcha-div" className="ml-36per">
                  //   <div nbRecaptcha [config]="'qq'" [lang]="'en'" (captchaResponse)="getSuccess()"
                  //     (captchaExpired)="captchaExpired()"></div>
                  // </div>
                  // <div> */}
                      <ul className="exam">
                        <li>JEE(M)</li>
                        <li>JEE(A)</li>
                        <li>BITSAT</li>
                        <li>NTSE</li>
                        <li>KVPY</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <img
            src="../../../static/images/s3-images/new-slide1.jpg"
            alt="..."
            width="100%"
          />
          <div className="carousel-caption">
            <div>
              <img
                src="../../../static/images/s3-images/pre-series-icon.svg"
                alt="..."
              />
              <div className="title">India's biggest Test Series is Back</div>
              <p className="subtitle">
                Experience exams before your actual exam to make most out of
                your preparation.
              </p>
              <div>
                <ul className="exam-title">
                  <li>JEE(M)</li>
                  <li>JEE(A)</li>
                  <li>BITSAT</li>
                  <li>NTSE</li>
                </ul>
              </div>
              <div className="slider-btn-group">
                <a
                  href="https://pre-series.mypat.in/"
                  className="btn btn-primary "
                >
                  Know More
                </a>
                <a
                  href="https://mypat.in/test-series/all"
                  className="btn btn-primary "
                >
                  Buy Now
                </a>
              </div>
              <div className="date">
                <b>
                  <span>Exam Date</span>
                </b>
                <img
                  src="../../../static/images/s3-images/calendar-icon.svg"
                  alt=""
                />
                <span>30 May 2020 - 20 Aug 2020</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden-xs">
        {/* <!-- Controls --> */}
        <a
          className="left carousel-control"
          href="#carousel-example-generic"
          role="button"
          data-slide="prev"
        >
          <span
            className="glyphicon glyphicon-chevron-left"
            aria-hidden="true"
          />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="right carousel-control"
          href="#carousel-example-generic"
          role="button"
          data-slide="next"
        >
          <span
            className="glyphicon glyphicon-chevron-right"
            aria-hidden="true"
          />
          <span className="sr-only">Next</span>
        </a>
      </div>
    </section>
    <section className="bg-gray1">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="content-footer">
              <div className="owl-slider">
                <div className="visible-xs">
                  {/* <!-- Indicators --> */}
                  <ol className="carousel-indicators bg-black">
                    <li
                      data-target="#carousel-example-generic"
                      data-slide-to="0"
                      className="active"
                    />
                    <li
                      data-target="#carousel-example-generic"
                      data-slide-to="1"
                    />
                  </ol>
                </div>
                <div className="owl-carousel carousel_partner">
                  <div className="item">
                    <div className="C_card">
                      <img
                        src="../../../static/images/s3-images/content-partner.svg"
                        title="Content Partner"
                        alt="Content Partner"
                      />
                      <p className="mt-16">
                        Content <br />
                        Partner
                      </p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="C_card">
                      <img
                        src="../../../static/images/s3-images/test-analysis.svg"
                        title="Content Partner"
                        alt="Content Partner"
                      />
                      <p>
                        Test Analysis & <br />
                        Personalised Insights
                      </p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="C_card">
                      <img
                        src="../../../static/images/s3-images/concept-preparation.svg"
                        title="Content Partner"
                        alt="Content Partner"
                      />
                      <p>
                        Concept Wise <br />
                        Preparation
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="container didYouKnow">
        <em>
          Did you know?{' '}
          <img
            src="../../../static/images//s3-images/thinkSmiley.png"
            alt="Did You Know"
          />
        </em>
        <h1>
          <strong>1</strong> in Every <strong>3</strong> IIT Selections is a{' '}
          <strong>myPAT</strong> User
        </h1>
        <a
          href="javascrupt:void(0);"
          data-toggle="modal"
          data-target="#meetTopper"
        >
          Meet our Toppers &gt;
        </a>
      </div>
    </section>

    <section className="subject-heading-wrp">
      <p className="mainsubj-hed">
        <span>700,000+ </span>students improved test scores of some of the
        toughest exams in the world{' '}
      </p>
      <ul className="main-subj-name">
        <li>
          <h2>JEE Advanced</h2>
        </li>
        <li>
          <h2>JEE Main</h2>
        </li>
        <li>
          <h2>BITSAT</h2>
        </li>
        <li>
          <h2>NTSE</h2>
        </li>
        <li>
          <h2>KVPY</h2>
        </li>
      </ul>
    </section>

    <OurResult />
    {/* <!-- testimonials  start here--> */}
    <section className="box-testimonials-wrap">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 text-center pad-set">
            <div className="sometools-h2">
              <div className="sometools-h">
                <div className="bg-img">
                  <h2>What Students Say</h2>
                </div>
              </div>
              <div className="row">
                <div className="carousel-inner">
                  <div id="owl-demo" className="owl-carousel owlnew owl-theme">
                    {/* <!-- item 1 start --> */}
                    <div className="item col-md-offset-2">
                      <div className="testimonial">
                        <div className="testimonial_img">
                          <img src="../../../static/images/s3-images/Himanshu-Gaurav-Singh.png" />
                          <div className="student_air hidden-xs">
                            Himanshu Gaurav Singh
                            <br />
                            (AIR 2) JEE Advanced 2019
                          </div>
                        </div>
                        <div className="content">
                          <p>
                            myPAT helped me throughout my journey. After reading
                            or studying any concept in the class, I used to
                            solve concept tests on myPAT. That helped me to
                            analyse what’s the depth to I've reached in that
                            particular concept. During the last phase, I also
                            attempted the Pre-JEE Main tests and Pre-JEE
                            Advanced tests that helped me to enhance my
                            performance for the final day. I indeed recommend
                            myPAT to my juniors as it’s an online portal that's
                            very user-friendly and indeed helps you to boost
                            your performance on the final day.
                          </p>
                        </div>
                        <div className="student_air hidden-sm hidden-md hidden-lg">
                          Himanshu Gaurav Singh
                          <br />
                          (AIR 2) JEE Advanced 2019
                        </div>
                      </div>
                    </div>
                    {/* <!-- item 1 end -->
                <!-- item 1 start --> */}
                    <div className="item col-md-offset-2">
                      <div className="testimonial">
                        <div className="testimonial_img">
                          <img src="../../../static/images/s3-images/Gurnoor-Singh.png" />
                          <div className="student_air hidden-xs">
                            Gurnoor Singh
                            <br />
                            (AIR 22) JEE Advanced 2019
                          </div>
                        </div>
                        <div className="content">
                          <p>
                            myPAT has a lot of concept tests and plenty of
                            questions. Doing them makes constructive use of your
                            time. The interface which myPAT has, it’s really
                            intuitive. Through Pre-JEE test series, you get to
                            know which concepts you are lagging behind in and
                            what your strengths are, so that you can adjust your
                            schedule according to that. So, it’s a great help to
                            you during the last phase of your preparation. The
                            questions at myPAT are of the same level as JEE, and
                            that helps you to have more confidence.
                          </p>
                        </div>
                        <div className="student_air hidden-sm hidden-md hidden-lg">
                          Gurnoor Singh
                          <br />
                          (AIR 22) JEE Advanced 2019
                        </div>
                      </div>
                    </div>
                    {/* <!-- item 1 end -->
                <!-- item 1 start --> */}
                    <div className="item col-md-offset-2">
                      <div className="testimonial">
                        <div className="testimonial_img">
                          <img src="../../../static/images/s3-images/Abhinav-Gupta.png" />
                          <div className="student_air hidden-xs">
                            Abhinav Gupta
                            <br />
                            (AIR 49) JEE Advanced 2019
                          </div>
                        </div>
                        <div className="content">
                          <p>
                            I took concept tests on myPAT after reading each
                            concept, then there would be clarity on the
                            part/question with which I’m facing trouble with.
                            JEE has become online, so myPAT helped a lot in this
                            aspect. It provided online tests which I could
                            attempt sitting at home, I got analysis of my tests,
                            the solution of every question which I couldn’t
                            solve or did wrong and the perfect environment for
                            JEE Main & Advanced. By practising on myPAT, you’ll
                            know beforehand what’s going to come in the future
                            and how to go about working on them.
                          </p>
                        </div>
                        <div className="student_air hidden-sm hidden-md hidden-lg">
                          Abhinav Gupta
                          <br />
                          (AIR 49) JEE Advanced 2019
                        </div>
                      </div>
                    </div>
                    {/* <!-- item 1 end -->
                <!-- item 1 start --> */}
                    <div className="item col-md-offset-2">
                      <div className="testimonial">
                        <div className="testimonial_img">
                          <img src="../../../static/images/s3-images/Ishaan-Singh.png" />
                          <div className="student_air hidden-xs">
                            Ishaan Singh
                            <br />
                            (AIR 59) JEE Advanced 2019
                          </div>
                        </div>
                        <div className="content">
                          <p>
                            I used to do concept tests on myPAT and the Pre-JEE
                            series. They were quite beneficial. They are good
                            for enhancing concept and practicing problems. It
                            has good tests. myPAT also gives you the toppers’
                            score, analysis, the time you took and the time the
                            topper took. So, that helps you realize where you
                            are. You understand the gap between you and the
                            topper. You even get the average marks.
                          </p>
                        </div>
                        <div className="student_air hidden-sm hidden-md hidden-lg">
                          Ishaan Singh
                          <br />
                          (AIR 59) JEE Advanced 2019
                        </div>
                      </div>
                    </div>
                    {/* <!-- item 1 end --> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- testimonials --> */}

    {/* <!-- 5 image section --> */}
    <div className="container">
      <div className="row">
        <section className="img-content-wrp">
          <div className="section-heading">
            <h2>How Do We Ensure Success?</h2>
            <p>
              Whether you’re halfway through your preparation or starting from
              scratch, personalised learning in the real test environment helps
              you identify weaknesses, builds exam readiness and boosts overall
              test performance.
            </p>
          </div>
          {/* <!-- 1 box --> */}
          <div className="col-md-12">
            <div className="row  vertical-align">
              <div className="col-sm-5 col-md-5 col-md-push-7 col-sm-push-7">
                <div>
                  <div className="icon-graph">
                    <em className="icon-sprite first" />
                  </div>
                  <h2 className="viewdetails"> Set Your Goal </h2>
                  <p className="icon-txt">
                    Once you’ve given your first test, tell us what you want to
                    achieve. We’ll share customized tests and exam resources
                    according to your current progress and target exam.
                  </p>
                </div>
              </div>
              <div className="col-sm-7 col-md-7 col-md-pull-5 col-sm-pull-5">
                <div className="dashboard-img">
                  <img
                    className="img-responsive lazy img-left-mins"
                    src="../../../static/images/s3-images/img_1.png"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* <!-- end --> */}
        </section>
        {/* <!-- end --> */}
        <section className="img-content-wrp ">
          {/* <!-- 2 box --> */}
          <div className="col-md-12">
            <div className="row  vertical-align">
              <div className="col-sm-5 col-md-5 ">
                <div>
                  <div className="icon-graph">
                    <em className="icon-sprite second" />
                  </div>
                  <h2 className="viewdetails"> Take Test</h2>
                  <p className="icon-txt">
                    Attempt test of your target exam(s) in the Real Test
                    Environment – same screen, test paper format and marking
                    scheme.
                  </p>
                </div>
              </div>
              <div className="col-sm-7 col-md-7">
                <div className="dashboard-img2">
                  <img
                    className="img-responsive lazy img-right-mins"
                    src="../../../static/images/s3-images/img_2.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- end --> */}
        <section className="img-content-wrp">
          {/* <!-- 3 box --> */}
          <div className="col-md-12">
            <div className="row  vertical-align">
              <div className="col-sm-5 col-md-5 col-md-push-7 col-sm-push-7">
                <div>
                  <div className="icon-graph">
                    <em className="icon-sprite third" />
                  </div>
                  <h2 className="viewdetails">Get Exam Analytics</h2>
                  <p className="icon-txt">
                    Analyse strengths, weaknesses, wasted time and much more
                    with data driven test results that help you improve faster
                    than any other traditional mode of learning.
                  </p>
                </div>
              </div>
              <div className="col-sm-7 col-md-7 col-md-pull-5 col-sm-pull-5">
                <div className="dashboard-img">
                  <img
                    className="img-responsive lazy img-left-mins"
                    src="../../../static/images/s3-images/img_3.png"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* <!-- end --> */}
        </section>
        <section className="img-content-wrp ">
          {/* <!-- 4 box --> */}
          <div className="col-md-12">
            <div className="row  vertical-align">
              <div className="col-sm-5 col-md-5 ">
                <div>
                  <div className="icon-graph">
                    <em className="icon-sprite fourth" />
                  </div>
                  <h2 className="viewdetails">Personalised Dashboard</h2>
                  <p className="icon-txt">
                    Track your goal completion progress, concept mastery and
                    detailed test performance metrics at one place.
                  </p>
                </div>
              </div>
              <div className="col-sm-7 col-md-7">
                <div className="dashboard-img2">
                  <img
                    className="img-responsive lazy img-right-mins"
                    src="../../../static/images/s3-images/img_4.png"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* <!-- end--> */}
        </section>
        <section className="img-content-wrp">
          {/* <!--5 box --> */}
          <div className="col-md-12">
            <div className="row  vertical-align">
              <div className="col-sm-5 col-md-5 col-md-push-7 col-sm-push-7">
                <div>
                  <div className="icon-graph">
                    <em className="icon-sprite fifth" />
                  </div>
                  <h2 className="viewdetails">myPAT Community</h2>
                  <p className="icon-txt">
                    An interactive student-teacher community to ask and answer
                    questions, initiate discussions and share ideas.
                  </p>
                </div>
              </div>
              <div className="col-sm-7 col-md-7 col-md-pull-5 col-sm-pull-5">
                <div className="dashboard-img">
                  <img
                    className="img-responsive lazy img-left-mins"
                    src="../../../static/images/s3-images/img_5.png"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* <!-- end --> */}
        </section>
      </div>
    </div>
    {/* <!-- 5 image section --> */}

    {/* <!-- products --> */}
    <section className="mypat-pro-price-wrap">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 text-center ">
            <div className="sometools-h">
              <div className="bg-img">
                <h2>Our Courses</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="clearfix" />
        <div id="owl-demo" className="owl-carousel owl-theme course-slider">
          <div className="item">
            <div>
              {/* <app-package-card [package]='package'></app-package-card> */}
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- products --> */}

    {/* <!-- Newsletter for Desktop start --> */}
    <section className="home-newsletter">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="single">
              <div className="susbhd">Connect with Us</div>
              <form>
                <div className="input-group">
                  <input
                    type="email"
                    className="form-control"
                    id="email-subs"
                    placeholder="Email"
                    pattern="(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)"
                    name="email"
                    required
                  />
                  <div className="nh-eror4">
                    <span>Enter Email in Valid Format</span>
                    <span>Please enter your email</span>
                  </div>
                  <span className="input-group-btn">
                    {/* <button className="btn btn-theme" type="submit"
                     id="email-subs-btn"
                  [disabled]="!form1.form.valid">Subscribe</button> */}
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- Newsletter for Desktop end--> */}

    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="row">
            <div className=" col-md-7 ">
              <div className="text-wrp-offer">
                <h2 className="hd-ofer">PREPARE ANYTIME, ANYWHERE</h2>
                <ul className="listoftags2">
                  <li>JEE ADVANCED</li>
                  <li> JEE MAIN </li>
                  <li>BITSAT </li>
                  <li>NTSE </li>
                  <li>KVPY</li>
                </ul>
                <p className="sub-hd-ofer">You wished. We heard.
              <span className="brk">myPAT App live now.</span>
                </p>
                {/* <!-- <div className="app-ico">
              <a href="javascript:void(0)"><img  src="../../assets/img/offer-home/apple-ico.png" className="img-responsive btn-disabled" alt=""></a>
            </div> --> */}
                <div className="andriod-ico">
                  <a href="{{androidAppLink}}">
                    <img src="/assets/img/s3-images/android-ico.png"
                      className="img-responsive img-phone2" alt="" /></a>
                </div>
                <div className="enter-ph-offer-wrp">
                  <form>
                    <div className="input-group search-box-banner-home">
                      <div className="countrycode  rel" data-toggle="dropdown">
                        <input className="form-control border-inpt" id="app-card-home-desk"
                          name="number" placeholder="Enter your mobile number" type="text"
                          required pattern="{{selectedCountry.regex}}"
                        />
                        <div className="flag-wrp-offercard dropdown-toggle "
                          data-toggle="dropdown">
                          <div className="df">
                            <div className="bg-img-new {{selectedCountry.class}}" id="{{selectedCountry.name}}" />
                            <span className="caret" />
                          </div>
                        </div>
                        <ul className="dropdown-menu scrl-list">
                          <li>
                            <div className="bg-img-new {{country.class}}" />
                            <div className="country-name">India</div>
                          </li>
                        </ul>
                      </div>


                      <span className="input-group-btn">
                        <button className="btn btn-default taketest" id="taketest-btn-home-page-app-card" type="submit">Get App</button>
                      </span>


                    </div>



                    <div id="captcha-div" className="captcha">
                      <div />
                    </div>

                    {/* <!--Error message starts here--> */}
                    <div>
                      <div className="alert alert-danger">
                        Enter your Mobile Number
                                </div>
                      <div className="alert alert-danger">
                        Please enter a valid Mobile Number.
                                </div>
                    </div>
                    {/* <!--Error message ends here--> */}
                  </form>
                </div>
              </div>
            </div>
            <div className=" col-md-5 ">
              <img src="/assets/img/s3-images/m-phone.png"
                className="img-responsive  img-phone" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>

  </>
)

export default Home
