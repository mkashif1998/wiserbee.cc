import React from "react";
import { Link } from "react-router-dom";
const JobsCard = (props) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };
  const openEmail = () => {
    window.location.href = "mailto:hr@swatiholdings.com";
  };
  const { title, icon, timing, tech, field, smallIcon } = props;
  return (
    <div className="col-lg-6 col-md-12">
      <div className="w-100 p-3 jobsCard position-relative d-flex d-md-flex flex-md-column justify-content-between">
        <div className="d-md-flex flex-column flex-md-row jusytify-content-between align-items-center">
          <p className="col-lg-2 p-0 m-0 h6 text-danger d-none d-sm-flex cursor-pointer">
            {icon}
          </p>
          <p className="col-lg-2 p-0 m-0 d-flex d-sm-none h6 text-danger cursor-pointer">
            {smallIcon}
          </p>
          <div className="d-flex justify-content-between">
            <p className="col-md-7  p-0 m-0 h5 text-capitalize text-start careerJobTitle">
              {title}
              <br className="d-sm-none d-flex" />
              {field}
            </p>
          </div>
        </div>
        <div className=" d-flex justify-md-content-between justify-content-end align-items-center mt-md-3">
          <div className="col-md-6 d-md-flex d-none justify-content-start align-items-center gap-2">
            <p className="careerTechnTime">{timing}</p>
            <p className="careerTechnTime">{tech}</p>
          </div>
          <div className="col-md-6 d-flex flex-md-row flex-column-reverse justify-content-end gap-2 align-items-center">
            <Link>
              <button
                onClick={openEmail}
                className=" styleApplyNowBtn text-capitalize"
              >
                Apply Now
              </button>
            </Link>
            <Link onClick={scrollToTop} to="/career-details" className="">
              <button className=" styleViewDetailBtn text-capitalize">
                view Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default JobsCard;
