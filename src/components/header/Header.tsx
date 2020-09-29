/* eslint-disable prettier/prettier */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react'
import './header.css'
// import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'

interface HeaderProps {
  title: string
}

const Header: React.FC<HeaderProps> = () => (
  <header role="banner" className="navbar box-shd ">
    <div className="container shadow-uper-header">
      <div className="navbar-header">

        <button data-toggle="collapse-side"
          data-target=".side-collapse" data-target-2=".side-collapse-container"
          className="navbar-toggle pull-left girdmenu">
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
      </div>

      <div className="logo-new pull-left">
        <a>
          <img alt="content" src="../../../static/images/s3-images/logo-mypat2.png" className="img-responsive" />
        </a>
      </div>

      <div className="side-collapse  pull-left col-lg-offset-1">
        {/* <div className="mobile-menu-head hidden-md hidden-lg">
          <div className="row">
            <div className="col-xs-4">
              <img  alt="content"  src="https://mypat.in/../../../static/images/s3-images/logo-mypat2.png" width="72" />
            </div>
            <div className="col-xs-8 text-right mt-5">
              <a className="login-btn" id="login-btn-home">Login</a>
              <a className="signup-btn" id="signup-btn-home">Sign Up</a>
            </div>
            {/* TODO need to fix
                    <div className="col-xs-8 text-right" style="display: none;">
                        <a href="#" className="profile-pic">
                          <img  alt="content"  src="https://d9nag8bjm6x9g.cloudfront.net/webcontent/ebooks/jee-img/Manan-Aggarwal-AIR-14.jpg" /></a>
                    </div>
      </div>
    </div> */}
        <nav role="navigation" className="navbar-collapse">

          {/* <!-- <ul className="signup btnlog">
              <li>
                <a className="login">Login </a>
                <a className="login">Login </a>
              </li>
              <li>
                <a (click)="go('/auth/sign-up')">Register</a></li>
            </ul> --> */}

          <div className="clearfix" />
          <ul className="nav navbar-nav custummenu clearfix pos-relative">

            <li>
              <a className="display-flex"> <span className="ml-5 visible-xs visible-sm">
                <img src="../../../static/images/s3-images/header-menu/courses.svg" alt="Courses" />
              </span>Courses</a>
            </li>


            <li className="dropdown">
              <a className="dropdown-toggle display-flex" data-toggle="dropdown" href="#"><i
                className="fa fa-caret-right hidden-md hidden-lg" aria-hidden="true" /> <span
                  className="visible-xs visible-sm">
                  <img src="../../../static/images/s3-images/header-menu/exam.svg"
                    alt="My Exams" /></span> MY EXAMS
                            <span className="menu-ico hidden-xs">
                  <img alt="content" src="../../../static/images/s3-images/arrow01.png" className="" />
                </span>
              </a>

              <ul className="dropdown-menu new-nav arrow-up-drobox ml-50" role="menu">
                <li><a>JEE Main</a></li>
                <li><a>JEE Advanced</a>
                </li>
                <li><a>BITSAT</a></li>
                <li><a>NTSE</a></li>
                <li><a>KVPY</a></li>
                <li className="dropdown-submenu">
                  <a className="other-exams" href="#">Other Exams</a>
                  <ul className="dropdown-menu">
                    <li><a>VITEEE</a></li>
                    <li><a>COMEDKUGET</a></li>
                    <li><a>MHTCET</a></li>
                    <li><a>WBJEE</a></li>
                    <li><a>UPSEE</a></li>
                    <li><a>TS EAMCET</a>
                    </li>
                    <li><a>KEAM</a></li>
                    <li><a>KCET</a></li>
                    <li><a>IPU CET</a></li>
                    <li><a>LPU NEST</a>
                    </li>
                    <li><a>KIITEE</a></li>
                    <li><a>SRM JEE</a></li>
                    <li><a>AMITY JEE</a>
                    </li>
                  </ul>
                </li>
              </ul>

            </li>

            <li className="dropdown">
              <a className="dropdown-toggle display-flex" data-toggle="dropdown" href="#">
                <i className="fa fa-caret-right  hidden-md hidden-lg"
                  aria-hidden="true" />
                <span className="visible-xs visible-sm">
                  <img
                    src="../../../static/images/s3-images/header-menu/resource.svg"
                    alt="Resources" />
                </span>
                RESOURCES
                <span className="menu-ico hidden-xs">
                  <img alt="content"
                    src="../../../static/images/s3-images/arrow01.png"
                    className="" />
                </span>

              </a>

              <ul className="dropdown-menu new-nav arrow-up-drobox ml-50" role="menu">
                <li> <a href="http://mypat.in/blog/">Blog </a></li>
                <li><a href="https://www.youtube.com/channel/UCHNzbB0yeaP0q8Zm3Ais2AQ">Webinar</a></li>

                <li className="drphed">PREVIOUS YEAR PAPERS
                                <ul className="submenu">
                    <li><a>JEE Main/Advanced</a>
                    </li>
                    <li><a>NTSE</a></li>
                    <li><a>KVPY</a></li>
                    <li className="dropdown-submenu">
                      <a className="sample-paper" href="#">Board Samplepaper</a>
                      <ul className="dropdown-menu">
                        <li><a>All        Sample Papers</a></li>
                        <li><a>CBSE        10th Science</a></li>
                        <li><a>CBSE 10th        Maths</a></li>
                        <li><a>CBSE        12th Chemistry</a></li>
                        <li><a>CBSE 12th        Maths</a></li>
                        <li><a>CBSE        12th Physics</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>

                <li className="drphed">Tools
                                <ul className="submenu">
                    <li><a>JEE (M)Prep Tracker</a></li>
                    <li><a>JEE(A) Prep Tracker</a></li>
                    <li><a>BITSATPrep Tracker</a></li>
                    <li><a>KVPY PrepTracker</a></li>
                    <li><a>NTSE PrepTracker</a></li>
                    <li><a>JEE (A) CollegePredictor</a></li>
                    <li><a>JEE (M) CollegePredictor</a></li>

                  </ul>
                </li>



              </ul>

            </li>

            <li className="dropdown visible-lg visible-md">
              <a className="dropdown-toggle display-flex" data-toggle="dropdown"
                href="#">
                <i className="fa fa-caret-right hidden-md hidden-lg"
                  aria-hidden="true" /> <span className="visible-xs visible-sm">
                  <img
                    src="../../../static/images/s3-images/header-menu/community.svg"
                    alt="Community" /></span>Community</a></li>

            <li className="dropdown visible-sm visible-xs">
              <a className="dropdown-toggle" data-toggle="dropdown display-flex" href="#">
                <i className="fa fa-caret-right hidden-md hidden-lg"
                  aria-hidden="true" />
                <span className="visible-xs visible-sm">
                  <img
                    src="../../../static/images/s3-images/header-menu/community.svg"
                    alt="Community" />
                </span>Community
                    </a>

              <ul className="dropdown-menu new-nav arrow-up-drobox ml-50 hidden-lg hidden-md" role="menu">
                <li> <a href="/community/view/popular">My
                                    Feed </a>
                </li>
                <li> <a href="/auth/sign-in">My
                                    Questions </a></li>
                <li> <a href="/auth/sign-in">My Answer
                                </a>
                </li>
              </ul>
            </li>

            <li>
              <a className="referalLink">
                <span className="ml-5 visible-xs visible-sm">
                  <img src="../../../static/images/s3-images/header-menu/earn.svg"
                    alt="Refer and Earn" /></span>
                Refer & Earn</a>
            </li>

            {/* <!-- mobile menu -->` */}
            {/* @TODO later
                     <!-- <li className="download-btnli">
                        <a routerLink="/mobile-app-download"
                         href="javascript:void();"
                         className="download-btn visible-xs visible-sm">
                         <img  alt="content"   src="../../../static/images/s3-images/header-menu/download.svg"
                         className="" /> Download App
                        </a>
                    </li> --> */}
            {/* <!-- End --> */}
          </ul>
        </nav>
      </div>
      {/* <!-- login dasktop start --> */}
      <div className="home-login-signup-wrp">
        {/* <a className="btn login-btn" id="login-btn-home">Login</a> */}

        <a className="btn login-btn" id="login-btn-home2">Login</a>

        <a className="btn signup-btn" id="signup-btn-home">Sign Up</a>
      </div>
      {/* <!-- login dasktop end --> */}




    </div >

    {/* <!--menu overlay start--> */}
    < div className="overly" >
      <span className="closeicon">
        <i className="fa fa-times" aria-hidden="true" />
      </span>
    </div >
    {/* <!--menu overlay end--> */}
  </header >

)

export default Header
