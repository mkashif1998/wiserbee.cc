import React from "react";
import { faceIcon, linkIcon, twitIcon } from "../constant/svgs";
import { Link } from "react-router-dom";

const CareerDetails = () => {
  const openEmail = () => {
    window.location.href = "mailto:info@wiserbee.com";
  };
  return (
    <>
      <div className="carrierDetails mt-5 mb-5">
        {/* <div className="container"> */}
        <div className="row g-0 align-items-center justify-content-center aboutTheJobCareerDetail">
          <div className="col-lg-8 col-md-10 col-sm-11 col-11 m-auto">
            <div className="btn_carrers">
              <div>
                <h3 className="careers_h3">Future Tech Internship Program</h3>
              </div>
              <div>
                <button onClick={openEmail} className="career_btn mt-4">
                  Apply Now
                </button>
              </div>
            </div>

            <h3 className="careers_h3_1 mt-2">NextGEN | Hybrid</h3>

            <div className="rounded-4 career_main_box p-4 pt-4 mt-4 ">
              <h1 className="contactPage_h3">How does that work?</h1>

              <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-12 border_right_career">
                  <p className="pt-4 career_p_1">Internship Description:</p>

                  <p className="career_p_2">
                    Where you live in Canada will not affect your ability to be
                    a part of this program. We are looking for the best students
                    possible to join Future Tech and are interested in hearing
                    from students from all across Canada. You will be asked to
                    state your preference for your way of working - fully
                    remote, hybrid, or fully in the office. This way of working
                    is part of how the tech world runs now and we want this to
                    be a part of our student experience. Are you ready to join
                    the Nokia Ottawa team?
                  </p>
                  <p className="career_p_4">
                    The program is running from 8 July to 23 August 2024.
                  </p>

                  <p className="pt-3 career_p_1">Who you are</p>

                  <ul className="left_padding_ul">
                    <li className="career_p_2">
                      You are a high school student who will be entering grade
                      12 in the fall of 2024
                    </li>
                    <li className="career_p_2 pt-2">
                      You have a willingness to learn new things quickly and
                      like to be challenged
                    </li>
                    <li className="career_p_2 pt-2">
                      You are interested in exploring the world of high-tech
                    </li>
                    <li className="career_p_2 pt-2">
                      You have a proven ability to work in a team environment
                      (including extracurricular activities)
                    </li>
                    <li className="career_p_2 pt-2">
                      You may not have any experience in these fields, but you
                      have a keen interest in computer science, computer
                      engineering, software and hardware development
                    </li>
                  </ul>

                  <p className="pt-5 career_p_1">Requirements</p>

                  <ul className="left_padding_ul">
                    <li className="career_p_2">
                      You must be able to participate in the program for all
                      seven weeks– Note that this means that you will be unable
                      to take days off for things like summer school or
                      vacations
                    </li>
                    <li className="career_p_2 pt-2">
                      You must have an expected average of 75% in grade eleven
                    </li>
                    <li className="career_p_2 pt-2">
                      You must be registered in two of the following grade 12
                      courses: Physics, Chemistry, Advanced Functions, Calculus
                      and Vectors, Computer Science and Computer Engineering
                      Technology
                    </li>
                    <li className="career_p_2 pt-2">
                      You must be legally able to work in Canada and possess a
                      SIN
                    </li>
                    <li className="career_p_2 pt-2">
                      You must be proficient in the English language
                    </li>
                  </ul>
                </div>

                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className="ms-3">
                    <p className="pt-5 career_p_1">Share Job:</p>

                    <div className="d-flex gap-4">
                      <div className="circle_career">
                        <Link
                          to=""
                          className="circle_career "
                        >
                          {faceIcon}
                        </Link>
                      </div>

                      <div className="circle_career">
                        <Link to="https://twitter.com/wiser_bee5" className="circle_career ">
                          {twitIcon}
                        </Link>
                      </div>

                      <div className="circle_career">
                        <Link
                          to="https://www.linkedin.com/company/wiserbee"
                          className="circle_career "
                        >
                          {linkIcon}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CareerDetails;
