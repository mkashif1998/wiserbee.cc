import React, { useState } from "react";
import InternshipCard from "../internship/InternshipCard";
import jobs from "../../constant/Internships";
import { ArrowLeft, ArrowRight } from "lucide-react";

const CareerInternshipCard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 4;

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

  const totalPages = Math.ceil(jobs.length / jobsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          className={` careerPageJobscard mx-2 ${
            currentPage === i ? "active" : ""
          }`}
          onClick={() => setCurrentPage(i)}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div>
      <div className="col-lg-8 col-md-10 col-sm-11 col-11 m-auto">
        <div className="row d-none d-sm-flex">
          <h3 className="legal_h3 my-5">Internship Programs</h3>
          {jobs.map((job, index) => (
            <InternshipCard
              key={index}
              title={job.title}
              icon={job.icon}
              field={job.field}
              smallIcon={job.smallIcon}
              tech={job.tech}
              timing={job.timing}
              location={job.location}
            />
          ))}
        </div>
        <div className="row d-sm-none d-flex">
          <h3 className="h4 text-center my-4">Internship Programs</h3>
          {currentJobs.map((job, index) => (
            <InternshipCard
              key={index}
              field={job.field}
              title={job.title}
              icon={job.icon}
              smallIcon={job.smallIcon}
              tech={job.tech}
              timing={job.timing}
              location={job.location}
            />
          ))}
        </div>
        <div className="d-flex d-sm-none justify-content-center my-4">
          {totalPages > 1 && (
            <>
              <button
                className="CareerPaginationLeftBtn me-2"
                onClick={handlePrevPage}
                disabled={currentPage === 1}
              >
                <ArrowLeft />
              </button>
              {renderPageNumbers()}
              <button
                className="CareerPaginationRightBtn"
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
              >
                <ArrowRight />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CareerInternshipCard;
