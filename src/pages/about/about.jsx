import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../content_option";
import { Col, Row } from "react-bootstrap";
import './stylesheet.css'
import AboutPage1 from'../../assets/AboutPage1.jpg';
import AboutPage2 from '../../assets/AboutPage2.jpg';
import AboutPage3 from '../../assets/AboutPage3.jpg';
import AboutPage4 from '../../assets/AboutPage4.jpg';
import AboutPage5 from '../../assets/AboutPage5.jpg';
const About = () => {
    return (
        <div className="About-Page">
        <HelmetProvider>
            <Helmet>
                    <meta charSet="utf-8" />
                    <title>{meta.title}| About Us</title>
                    <meta name="description" content={meta.description} />
                </Helmet>
                <br/>
                <div className="About-Sessions">
                <Row>
                        <Col md={5} className="d-flex align-items-center">
                            <h5 className="about-text">
                                On April 3, 2022, the day of the first gathering in a long series, Cars N Gaz was born. In 2022, 9 gatherings took place, as well as an outing to Monaco and many other activities. An incredible year which gave birth to a large group of enthusiasts. Our goal is not to bring together a hundred static cars with people who don't know each other, it is to bring together people who want to enjoy their passion together, ride in a group, do activities with friends and create a big family. to have a good time without judgment and with respect for everyone.
                            </h5>
                        </Col>
                        <Col md={7} className="d-flex align-items-center">
                            <img src={AboutPage1} alt="About Page" className="img-fluid about-image" />
                        </Col>
                    </Row>
                    <br/><br/>
                    <Row>
                        <Col md={7} className="d-flex align-items-center">
                        <img src={AboutPage2} alt="About Page" className="img-fluid about-image"/>
                        </Col>
                        <Col md={5} className="d-flex align-items-center">
                            <h5 className="about-text">
                            List of gatherings in 2023
                        In 2023, 13 official gatherings are planned.
                        <ul>
                            <li>March 12, 2023</li>
                            <li>March 26, 2023</li>
                            <li>April 9, 2023</li>
                            <li>April 23, 2023</li>
                            <li>May 14, 2023</li>
                            <li>June 10, 2023</li>
                            <li>June 25, 2023</li>
                            <li>July 16, 2023</li>
                            <li>August 13, 2023</li>
                            <li>August 20, 2023</li>
                            <li>September 10, 2023</li>
                            <li>October 1, 2023</li>
                            <li>October 15, 2023</li>
                        </ul>    
                            </h5>
                        </Col>
                    </Row>
                    <br /><br /> <br />
                    <Row>
                        <Col md={4}>
                            <h3>
                            Photo edits by our photographer Anthony Parrot
                            </h3>
                            <br/><br />
                            <img src={AboutPage3} alt="About Page" className="about-image img-fluid"/>
                        </Col>
                        <Col md={4}>
                        <img src={AboutPage4} alt="About Page" className="about-image img-fluid"/>
                        <h3>
                        Our photographer regularly organizes photo gatherings and you will find below the result of his talent
                        </h3>
                        </Col>
                        <Col md={4}>
                            <br /><br /><br /><br /><br /><br/>
                            <img src={AboutPage5} alt="About Page" className="about-image img-fluid"/>
                        </Col>
                    </Row>
                </div>
            </HelmetProvider>
        </div>
    )
}

export default About;