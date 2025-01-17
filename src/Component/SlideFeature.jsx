import React, { useState } from "react";
import {
  ArrowLeftWhite,
  ArrowRightWhite,
  first,
  second,
  third,
  fourth,
  Guidance,
  Assessment,
  Mentorship,
  Times,
  Interactive,
  Customized,
  Understanding,
  wellbeing,
  Improvement,
  Dashboard, Satisfaction, HRMS
} from "../constant/svgs";
import LineTitle from "./LineTittle";
import * as images from "../constant/imges";

const WiserSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleLeftButtonClick = () => setActiveIndex((activeIndex - 1 + 4) % 4);
  const handleRightButtonClick = () => setActiveIndex((activeIndex + 1) % 4);

  const spanTeacher = <span className="text-yellow">Teachers</span>;
  const spanLearners = <span className="text-yellow">Learners</span>;
  const spanParents = <span className="text-yellow">Parents</span>;
  const spanManagement = <span className="text-yellow">Management</span>;

  const slides = [
    {
      imgSrc: images.FirstImg,
      countIcon: first,
      title: (
        <>
          Wiserbee Provides {spanTeacher} with Great Features
        </>
      ),
      items: [
        { icon: Guidance, heading: "Guidance", description: "Tailored Teaching: Individual Student Profiles and BI Reports Enhance In-Class Productivity" },
        { icon: Assessment, heading: "Assessment", description: "Enhanced Online Classes: Real-time Activity Monitoring for Engaging Lessons Anywhere" },
        { icon: Mentorship, heading: "Mentorship", description: "Empower Teachers: Boost Effectiveness and Student Potential with Our Platform's Features" },
      ],
    },
    {
      imgSrc: images.SecondImg,
      countIcon: second,
      title: (
        <>
          Exceptional Features For {spanLearners}
        </>
      ),
      items: [
        { icon: Times, heading: "24 Hour Guidance", description: "Dashboard Services for 24/7 educational support in learning and tutoring." },
        { icon: Interactive, heading: "Interactive Learning", description: "Increasing Efficiency of all learners to become a productive member of society." },
        { icon: Customized, heading: "Customized Learning", description: "Learners will have customized learning based on their profile determined through neuro cognitive screening" },
      ],
    },
    {
      imgSrc: images.ThirdImg,
      countIcon: third,
      title: (
        <>
          WiserBee Offers Excellent Features For {spanParents}
        </>
      ),
      items: [
        { icon: Understanding, heading: "Understanding Kids' natural talent", description: "Neuro cognitive screening reveals kids' natural talents for parents' clarity." },
        { icon: wellbeing, heading: "Social wellbeing", description: "Concern parents will have better understanding for their kid’s future profession." },
        { icon: Improvement, heading: "Identify area of Improvement", description: "Parents will have a clear understanding of their child’s area of improvement." },
      ],
    },
    {
      imgSrc: images.ForthImg,
      countIcon: fourth,
      title: (
        <>
          WiserBee Offers Excellent Features For {spanManagement}
        </>
      ),
      items: [
        { icon: Dashboard, heading: "Dashboard", description: "Providing balance scorecards to the management with the organizational pulse." },
        { icon: Satisfaction, heading: "Satisfaction", description: "It provides an opportunity for management to gather feedback from parents and staff members." },
        { icon: HRMS, heading: "HRMS", description: "Elevate your education institution with our advanced HR Management System tailored for EdTech." },
      ],
    },
  ];

  return (
    <>
      <div id="carouselExampleDark" className="carousel carousel-dark slide">
        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-item ${index === activeIndex ? "active" : ""}`}
              data-bs-interval="10000"
            >
              <div className="container-fluid pt-5 g-0">
                <div className="row g-0">
                  <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-stretch">
                    <img src={slide.imgSrc} alt="slider-img" className="w-100" />
                  </div>
                  <div className="col-md-6 p-2 pt-3 bg-light-wiser position-relative">
                    <div className="first_slide_img">{slide.countIcon}</div>
                    <div className="position-relative ps-4 mt-5">
                      <LineTitle title="features" color="text-dark" />
                      <h1 className="w-50">{slide.title}</h1>
                      <div className="row mt-5 pt-3">
                        {slide.items.map((item, i) => (
                          <div key={i} className="col-4">
                            <span>{item.icon}</span>
                            <h6 className="mt-3 neurocogTittle">{item.heading}</h6>
                            <p className="pt-2 neurocogdetails">{item.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="d-flex justify-content-center mb-5">
        <div className="d-flex gap-3 border p-2 rounded-5">
          <button
            className="activeBtn"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
            onClick={handleLeftButtonClick}
          >
            {ArrowLeftWhite}
          </button>
          <button
            className="activeBtn"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
            onClick={handleRightButtonClick}
          >
            {ArrowRightWhite}
          </button>
        </div>
      </div>
    </>
  );
};

export default WiserSlider;
