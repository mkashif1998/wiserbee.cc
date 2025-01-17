import React from "react";
import BGIMG from "../assets/BGcareer.png";
import CareerJobsCard from "../View/jobs/CareerJobsCard";
import CareerInternshipCard from "./internship/CareerInternshipCard";
const Career = () => {
  return (
    <>
      <div className="container-fluid CareerHeroMain">
        <div className="row mt-5 mb-4">
          <div className="col-md-12 mt-5 mt-md-0">
            <div className="row careersHero p-0">
              <div className="col-md-5 col-12 py-2">
                <div className="d-flex align-item-center h-100 careerHeroTextSection">
                  <div className=" my-auto mx-auto mx-sm-none d-flex flex-column">
                    <h1 className="heading2Sty text_align_sm careerHeroHeading">
                      Why Should You <br className="" /> Join{" "}
                      <span className="careerHero_wiser_color">WiserBee?</span>
                    </h1>
                    <p className="pragraphSty text_align_sm">
                      NeuroScience-Based Screening for Learners and Teachers,
                      Enhancing Neurocognitive Development in Humans.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-7 px-0 d-none d-md-block ">
                <div className="w-100 img-fluid">
                  <img src={BGIMG} alt="heroimage" className="h-100 w-100" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CareerJobsCard />
      <CareerInternshipCard />
    </>
  );
};

export default Career;
