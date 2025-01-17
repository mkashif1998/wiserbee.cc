import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./View/Home";
import Contact from "./View/Contact";
import ReqDemo from "./View/ReqDemo";
import WiserAdviser from "./View/WiserAdviser";
import Careers from "./View/Career";
import CareerDetails from "./View/CareerDetails";
import ScrollToTopOnMount from "./ScrollToTopOnMount"

const AppRoute = () => {
  return (
    <>
      <ScrollToTopOnMount />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/req-demo" element={<ReqDemo />} />
        <Route path="/wiser-adviser" element={<WiserAdviser />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/career-details" element={<CareerDetails />} />
      </Routes>
    </>
  );
};

export default AppRoute;
