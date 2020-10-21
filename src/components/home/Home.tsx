
import React from "react"
import { Container, Row, Jumbotron, Col, Card, ListGroup, Nav, Tabs, Tab, Carousel, Form, Button } from 'react-bootstrap'
import OurResult from "../ourResult/ourResult";

import './home.css'
import Slider from "react-slick";
import HeaderBanner from "../header/headerBanner";
import Footer from "../footer/footer";

const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 3,
    infinite: true,
    slidesToScroll: 1,
    arrows: false,
    responsive: [{
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: false,
            infinite: true,
            dots: true
        }
    },
    {
        breakpoint: 990,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            arrows: false,
            infinite: true,
        }
    }]
};

interface Props {
    siteTitle?: string
}

const ourResult = () => {
    return (
        <>
            <Tabs defaultActiveKey="2020" bsPrefix="year" id="result-years-tab">
                <Tab eventKey="2020" title="2020">
                    <OurResult />
                </Tab>
                <Tab eventKey="2019" title="2019">
                    <OurResult />
                </Tab>
                <Tab eventKey="2018" title="2018">
                    <OurResult />
                </Tab>
                <Tab eventKey="2017" title="2017">
                    <OurResult />
                </Tab>
            </Tabs>
        </>
    )
}

const Home: React.FC<Props> = ({ siteTitle }) => (
    <>
    
    <section className="main-banner">
        <HeaderBanner siteTitle="header carousel" />
    </section>  
      
        <section className="feature-banner">
            <Container>
                <Row>
                    <Col md={12}>
                <Slider {...settings}>
                    <div>
                        <Container className="media text-center">
                            <Row>
                                <Col sm={12} md={3}>
                                    <img
                                        width={64}
                                        height={64}
                                        
                                        src="https://mypat.in/assets/img/s3-images/content-partner.svg"
                                        alt="Generic placeholder"
                                    />
                                </Col>
                                <Col sm={12} md={9}>
                                    <p className="mt-4">Content Partner</p>
                                </Col>
                            </Row>
                        </Container>
                    </div>


                    <div>
                        <Container className="media text-center">
                            <Row>
                                <Col sm={12} md={3}>
                                    <img
                                        width={64}
                                        height={64}
                                        
                                        src="https://mypat.in/assets/img/s3-images/test-analysis.svg"
                                        alt="personalied"
                                    />
                                </Col>
                                <Col sm={12} md={9}>
                                    <p>Test Analysis & Personalized Insight</p>
                                </Col>
                            </Row>
                        </Container>
                    </div>

                    <div>
                        <Container className="media text-center">
                            <Row>
                                <Col sm={12} md={3}>
                                    <img
                                        width={64}
                                        height={64}
                                        
                                        src="https://mypat.in/assets/img/s3-images/concept-preparation.svg"
                                        alt="Generic placeholder"
                                    />
                                </Col>
                                <Col sm={12} md={9}>
                                    <p>Concept Wise Preparation</p>
                                </Col>
                            </Row>
                        </Container>
                    </div>

                </Slider>
                </Col>
                </Row>
            </Container>
        </section>

        <section>
            <Container className="text-center">
            <Row>
                <Col sm={12} md={12}>
                    <div className="meet-our-toppers">
                        <p>Did you know? <img src="https://mypat.in/assets/img/s3-images/thinkSmiley.png" alt="smiley" /></p>
                        <h1>
                            <strong>1</strong> in Every <strong>3</strong> IIT Selections is a <strong>myPAT</strong> User
                        </h1>
                        <Nav
                            className="justify-content-center"
                            onSelect={(selectedKey) => alert(`sMeet our Toppers `)}
                        >
                            <Nav.Item>
                                <Nav.Link eventKey="link-1">
                                    Meet our Toppers >
                            </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </div>
                </Col>
            </Row>
        </Container>
        </section>

        {/* <section>
        <Jumbotron fluid={true} className="score-banner">
            <Container fluid={true}>
                <h3>
                    700,000+ students improved test
                    scores of some of the toughest exams in the world
            </h3>

                <ListGroup horizontal className="d-flex justify-content-center align-items-center" variant="flush">
                    <ListGroup.Item>JEE ADVANCED</ListGroup.Item>
                    <ListGroup.Item>JEE MAIN</ListGroup.Item>
                    <ListGroup.Item>BITSAT</ListGroup.Item>
                    <ListGroup.Item>NTSE</ListGroup.Item>
                    <ListGroup.Item>KVPY</ListGroup.Item>
                </ListGroup>

            </Container>
        </Jumbotron>
        </section> */}
        
        {/* Start Our Result */}
        {/* <section>
        <Container className="text-center">
            <div className="text-md margin-md">Our Results</div>

            <span>
                <Tabs bsPrefix="home-tab" defaultActiveKey="advance" id="our-result">
                    <Tab eventKey="advance" title="JEE ADVANCED">
                        {ourResult()}
                    </Tab>
                    <Tab eventKey="main" title="JEE MAIN">
                        {ourResult()}
                    </Tab>
                    <Tab eventKey="ntse" title="NTSE">
                        {ourResult()}
                    </Tab>
                    <Tab eventKey="kvpy" title="KVPY">
                        {ourResult()}
                    </Tab>
                </Tabs>
            </span>
        </Container>
        </section> */}
        {/* End Our Result */}

        {/*Start Students data card */}
        {/* <section className="top-student">
            <Container fluid={false}>
                <Row>
                    <Col sm={12} md={6}>
                        <Card className="home-card">
                            <Card.Body>
                                <Card.Title className="bg-text">4</Card.Title>
                                <Card.Title className="md-text">Students in Top 10 AIR</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col sm={12} md={6}>
                        <Card className="home-card">
                            <Card.Body>
                                <Card.Title className="bg-text">44</Card.Title>
                                <Card.Title className="md-text">Students in Top 100 AIR</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section> */}
        {/*End Students data card */}

        {/* Student count card */}
        {/* <section className="student-count-card">
            <Container className="text-center">
                <Row>
                    <Col xs={4} sm={4} md={4}>
                        <Card bsPrefix="st-border-right">
                            <Card.Body>
                                <Card.Title>144</Card.Title>
                                <Card.Text>Students in Top 10 AIR</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={4} sm={4} md={4}>
                        <Card bsPrefix="st-border">
                            <Card.Body>
                                <Card.Title>904</Card.Title>
                                <Card.Text>Students in Top 1000 AIR</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={4} sm={4} md={4}>
                        <Card bsPrefix="st-border-left">
                            <Card.Body>
                                <Card.Title>3000</Card.Title>
                                <Card.Text>Total Selection</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section> */}
        {/* End Student count card */}

        {/* what student say */}
        <section className="wt-students-say">
            <Container>
                <h2 className="text-md margin-md">What Students Say</h2>
                <Carousel>
                    <Carousel.Item>
                        <Container>
                            <Row>
                                <Col xs={12} sm={6} md={6}>
                                    <div className="carousel-image">
                                        <img src="https://mypat.in/assets/img/s3-images/Himanshu-Gaurav-Singh.png" alt="himanshu" />
                                        <h4>
                                        Himanshu Gaurav Singh
                                        (AIR 2) JEE Advanced 2019
                                        </h4>
                                    </div>                                    
                                </Col>
                                <Col xs={12} sm={6} md={6}>
                                    <div className="caption">
                                        <p>
                                            myPAT helped me throughout my journey. After reading or
                                             studying any concept in the class, I used to solve concept tests on myPAT.
                                              That helped me to analyse what’s the depth to I've reached in that
                                              particular concept. During the last phase, I also attempted the Pre-JEE
                                               Main tests and Pre-JEE Advanced tests that helped me to enhance my
                                               performance for the final day. I indeed recommend myPAT to my juniors
                                               as it’s an online portal that's very user-friendly
                                            and indeed helps you to boost your performance on the final day.
                                    </p>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Container>
                            <Row>
                                <Col xs={12} sm={6} md={6}>
                                    <div className="carousel-image">
                                        <img src="https://mypat.in/assets/img/s3-images/Gurnoor-Singh.png" alt="himanshu" />
                                        <h4>
                                        Gurnoor Singh
                                        (AIR 22) JEE Advanced 2019
                                        </h4>
                                    </div>
                                </Col>
                                <Col xs={12} sm={6} md={6}>
                                    <div className="caption">
                                        <p>
                                            myPAT helped me throughout my journey. After reading or
                                             studying any concept in the class, I used to solve concept tests on myPAT.
                                              That helped me to analyse what’s the depth to I've reached in that
                                              particular concept. During the last phase, I also attempted the Pre-JEE
                                               Main tests and Pre-JEE Advanced tests that helped me to enhance my
                                               performance for the final day. I indeed recommend myPAT to my juniors
                                               as it’s an online portal that's very user-friendly
                                            and indeed helps you to boost your performance on the final day.
                                    </p>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Container>
                            <Row>
                                <Col xs={12} sm={6} md={6}>
                                    <div className="carousel-image">
                                        <img src="https://mypat.in/assets/img/s3-images/Abhinav-Gupta.png" alt="himanshu" />
                                        <h4>
                                        Abhinav Gupta
                                        (AIR 49) JEE Advanced 2019
                                        </h4>
                                    </div>                                    
                                </Col>
                                <Col xs={12} sm={6} md={6}>
                                    <div className="caption">
                                        <p>
                                        I took concept tests on myPAT after reading each concept,
                                         then there would be clarity on the part/question with which 
                                         I’m facing trouble with. JEE has become online, 
                                         so myPAT helped a lot in this aspect. 
                                         It provided online tests which I could attempt sitting at home, 
                                         I got analysis of my tests, the solution of every question which
                                          I couldn’t solve or did wrong and the perfect environment for 
                                          JEE Main & Advanced.
                                           By practising on myPAT, you’ll know beforehand 
                                        what’s going to come in the future and how to go about working on them.
                                    </p>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Container>
                            <Row>
                                <Col xs={12} sm={6} md={6}>
                                    <div className="carousel-image">
                                        <img src="https://mypat.in/assets/img/s3-images/Ishaan-Singh.png" alt="ishaan" />
                                        <h4>
                                        Ishaan Singh
                                        (AIR 59) JEE Advanced 2019
                                        </h4>
                                    </div>                                    
                                </Col>
                                <Col xs={12} sm={6} md={6}>
                                    <div className="caption">
                                        <p>
                                        I used to do concept tests on myPAT and the Pre-JEE series. 
                                        They were quite beneficial. They are good for enhancing concept 
                                        and practicing problems. 
                                        It has good tests. myPAT also gives you the toppers’ score, analysis,
                                        the time you took and the time the topper took. 
                                        So, that helps you realize where you are. 
                                        You understand the gap between you and the topper. You even get the average marks.
                                    </p>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </section>
         {/*End what student say */}

         {/* How do we ensure  */}
        <section className="home-success-container">
        <Container>
            <div className="home-success-header text-center mx-auto">
                <h2 className="title mb-4">
                How Do We Ensure Success?
                </h2>
                <p className="mx-auto para">
                Whether you’re halfway through your preparation or 
                starting from scratch, personalised learning in the real
                test environment helps you identify weaknesses, 
                builds exam readiness and boosts overall test performance.
                </p>
            </div>
            <Row>
                <Col sm={{span: 12, order: 1}} md={{span: 5, order: 12}}>
                    <div className="details">
                        <span className="icon">
                            <img src="" alt="success-icon" /></span>
                        <h2>Set Your Goal</h2>
                    
                    <p>
                    Once you’ve given your first test, 
                    tell us what you want to achieve.
                     We’ll share customized tests and exam 
                    resources according to your current progress and target exam.
                    </p>
                    </div>
                </Col>
                <Col sm={{span: 12, order: 12 }} md={{span: 7, order: 1}}>
                    <div className="">
                        <img width="100%" height="100%" src="https://mypat.in/assets/img/s3-images/img_1.png" alt="success" />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm={12} md={5}>
                    <div className="details">
                        <span className="icon">

                        </span>
                        <h2>Take Test</h2>                    
                    <p>
                    Attempt test of your target exam(s) in the Real Test Environment – same screen, test paper format and marking scheme.
                    </p>
                    </div>
                </Col>

                <Col sm={12} md={7}>
                    <div className="">
                        <img width="100%" height="100%" src="https://mypat.in/assets/img/s3-images/img_2.png" alt="test" />
                    </div>
                </Col>
            </Row>

            <Row>
                <Col sm={{span: 12, order: 1 }} md={{span: 5, order: 12 }}>
                    <div className="details">
                        <span className="icon">
                            <img src="" alt="success-icon" /></span>
                        <h2>Personalised Dashboard</h2>
                   
                    <p>
                    Track your goal completion progress, concept mastery and detailed test performance metrics at one place.
                    </p>
                    </div>
                </Col>
                <Col sm={{span: 12, order: 12 }} md={{span: 7, order: 1 }}>
                    <div className="">
                        <img width="100%" height="100%" src="https://mypat.in/assets/img/s3-images/img_3.png" alt="exam" />
                    </div>
                </Col>
            </Row>
                
                <Row>
                <Col sm={12} md={5}>
                    <div className="details">
                        <span className="icon">
                        </span>
                        <h2>myPAT Community</h2>
                   
                    <p>
                    An interactive student-teacher community to ask and answer questions, initiate discussions and share ideas.
                    </p>
                    </div>
                </Col>

                <Col sm={12} md={7}>
                    <div className="">
                        <img src="https://mypat.in/assets/img/s3-images/img_5.png" width="100%" height="100%" alt="community" />
                    </div>
                </Col>
                </Row>
        </Container>
        </section>

        {/* End ensure success section */}

        {/* Get in android app section */}
        <section className="get-in-container">
            <Container>
                <Row>
                    <Col sm={12} md={7}>
                        <div className="get-in-description">
                            <h1>
                            PREPARE ANYTIME, ANYWHERE
                            </h1>

                            <ListGroup horizontal className="mx-auto">
                                <ListGroup.Item>JEE ADVANCED</ListGroup.Item>
                                <ListGroup.Item>JEE MAIN</ListGroup.Item>
                                <ListGroup.Item>BITSAT</ListGroup.Item>
                                <ListGroup.Item>NTSE</ListGroup.Item>
                                <ListGroup.Item>KVPY</ListGroup.Item>
                            </ListGroup>

                            <p>
                            You wished. We heard. myPAT App live now.
                            </p>

                            <div className="button">
                                <Nav.Link className="mr-auto mb-3 pl-0" href="https://play.google.com/store/apps/details?id=com.mypat">
                                    <img src="https://mypat.in/assets/img/s3-images/android-ico.png" alt="get_in_button" />
                                </Nav.Link>
                            </div>
                            <div className="get-app-form">
                                <Form>
                                    <Row>
                                        <Col>
                                            <Form.Control className="mobile-text-field" type="text" placeholder="Enter your mobile number" />
                                        </Col>
                                        <Col>
                                            <div className="get-app-button">
                                            <Button variant="primary" type="submit">
                                                Get App
                                            </Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </Form>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={5}>
                        <div className="mobile-image">
                            <img width="100%" height="100%" src="https://mypat.in/assets/img/s3-images/m-phone.png" alt="mobile" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        {/* End Get in android app section */}

        {/* Start News Letter */}
        <section className="news-letter">
            <Container>
            <div className="news-letter-form">
                <Form inline>
                    <Form.Group>
                        <Form.Label>Connect with us</Form.Label>                      
                        <Form.Control className="mobile-text-field" type="text" placeholder="Enter your mobile number" />
                    </Form.Group>
                    <Button className="subscribe-button" variant="primary" type="submit" disabled={true}>
                        Subscribe
                    </Button>
                </Form>
            </div>
            </Container>
        </section>
        {/* End News Letter */}
        
        {/* footer start */}
        <Footer eventKey="0" />
        {/* End footer */}

    </>
);



Home.defaultProps = {
    siteTitle: ``,
}

export default Home