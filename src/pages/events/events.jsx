import React from 'react';
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../content_option";
import './stylesheet.css'; 
import { events } from "../../content_option";
import carPic from '../../assets/cardPic.webp';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Col, Container } from 'react-bootstrap';

const Events = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };

    return (
        <div>
            <HelmetProvider>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{meta.title} | Events</title>
                    <meta name="description" content={meta.description} />
                </Helmet>
                <div className="Event-Page">
                    <Container>
                        <Slider {...settings} className='slider'>
                            {events.map((event, index) => (
                                <Col>
                                <div className="Event-Card" key={event.date.toISOString() + index}>
                                    <div className="Event-Card-Image">
                                        <img src={carPic} alt={event.title} />
                                    </div>
                                    <div className="Event-Card-Title">
                                        <h3>{event.date.toDateString()}</h3>
                                    </div>
                                    <div className="Event-Card-Address">
                                        <p>{event.address}</p>
                                    </div>
                                    <div className="Event-Card-Description">
                                        <p>{event.description}</p>
                                    </div>
                                    <div className="Event-Card-Button">
                                        <button>Book A Place</button>
                                    </div>
                                </div>
                                </Col>
                            ))}
                        </Slider>
                    </Container>
                </div>
            </HelmetProvider>
        </div>
    );
};

export default Events;
