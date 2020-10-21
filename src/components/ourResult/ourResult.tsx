
import React from "react"
import { Card, Image, Nav, Container } from 'react-bootstrap'
import Slider from "react-slick"

import './ourResult.css'

const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    arrows: true,
    slidesToShow: 4,
    centerPadding: '40px',
    slidesToScroll: 4,
    responsive: [{
        breakpoint: 600,
        settings: {
            slidesToShow: 1,
            arrows: true,
            slidesToScroll: 1,
            initialSlide: 1
        }
    },
    {
        breakpoint: 990,
        settings: {
            slidesToShow: 2,
            arrows: true,
            slidesToScroll: 1,
            initialSlide: 1
        }
    }]
};

interface Props {
    siteTitle?: string
}

const OurResult: React.FC<Props> = ({ siteTitle }) => (
    <>
        <Container className="our-result">
            <Slider {...settings}>
                <div>
                    <Card className="text-center slick-card">
                        <Card.Body>
                            <Image src="https://mypat.in/assets/img/s3-images/ourResult/jeeadvanced/2020/vaibhavrajair3.jpg" alt="slick" roundedCircle />
                            <Card.Text>Garuv Jain</Card.Text>
                            <Card.Text>AIR-23</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card className="text-center slick-card">
                        <Card.Body>
                            <Image src="https://mypat.in/assets/img/s3-images/ourResult/jeeadvanced/2020/keshavagarwalair5.jpg" alt="slick" roundedCircle />
                            <Card.Text>Garuv Jain</Card.Text>
                            <Card.Text>AIR-23</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card className="text-center slick-card">
                        <Card.Body>
                            <Image src="https://mypat.in/assets/img/s3-images/ourResult/jeeadvanced/2020/vedangdhirendraasgaonkarair7.jpg" alt="slick" roundedCircle />
                            <Card.Text>Garuv Jain</Card.Text>
                            <Card.Text>AIR-23</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card className="text-center slick-card">
                        <Card.Body>
                            <Image src="https://mypat.in/assets/img/s3-images/ourResult/jeeadvanced/2020/harshvardhanagarwalair9.jpg" alt="slick" roundedCircle />
                            <Card.Text>Garuv Jain</Card.Text>
                            <Card.Text>AIR-23</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card className="text-center slick-card">
                        <Card.Body>
                            <Image src="https://mypat.in/assets/img/s3-images/ourResult/jeeadvanced/2018/SaumyaGoyalAIR-3.jpg" alt="slick" roundedCircle />
                            <Card.Text>Garuv Jain</Card.Text>
                            <Card.Text>AIR-23</Card.Text>
                        </Card.Body>
                    </Card>
                </div>

            </Slider>
        </Container>
    </>
);

OurResult.defaultProps = {
    siteTitle: ``,
}

export default OurResult