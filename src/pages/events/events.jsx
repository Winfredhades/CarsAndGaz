import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../content_option";
import { Container } from "react-bootstrap";
import './stylesheet.css'
const Events = () => {
    return (
        <div className="Event-Page">
        <HelmetProvider>
                <Container >
            <Helmet>
                    <meta charSet="utf-8" />
                    <title>{meta.title} | Events</title>
                    <meta name="description" content={meta.description} />
                </Helmet>
                
                <h1>Events Page</h1>
                </Container>
            </HelmetProvider>
        </div>
            
    )
}

export default Events;