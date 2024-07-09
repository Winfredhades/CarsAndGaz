import React from "react";
import { Route, Routes } from "react-router-dom";
import withRouter from "../hooks/withRouter"; // Make sure the path is correct
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Events from "../pages/events/events";
import Contact from "../pages/contact/contact";
import About from "../pages/about/about";

const AnimatedRoutes = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition
      key={location.key}
      timeout={{
        enter: 400,
        exit: 400,
      }}
      classNames="page"
      unmountOnExit
    >
      <Routes location={location}>
        <Route exact path="/" element={<Events />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="" element={<Events />} />
      </Routes>
    </CSSTransition>
  </TransitionGroup>
));

function AppRoutes() {
  return (
    <div className="s_c">
      <AnimatedRoutes />
    </div>
  );
}

export default AppRoutes;