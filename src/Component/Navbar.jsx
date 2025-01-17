import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import * as images from '../constant/imges';
import BackgroundVideo from "../assets/video/home_section_background_video.mp4";
import { lineBar } from '../constant/svgs';
import DemoBtn from './DemoBtn';
import { useLocation } from "react-router-dom";

const Navbar = () => {
    const [checked, setChecked] = useState(false);
    const [activeLink, setActiveLink] = useState("HOME");

    const location = useLocation();

    const handleCheckboxChange = () => {
        setChecked(!checked);
    };
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch((error) => {
                console.error("Error playing the video:", error);
            });
        }
    }, []);


    const handleLinkClick = (linkName) => {
        setActiveLink(linkName);
    };
    document.addEventListener('DOMContentLoaded', function () {
        window.addEventListener('scroll', function () {
            var navbar = document.querySelector('.contentNavbar');
            if (window.scrollY > window.innerHeight) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    });
    const isContactPage = location.pathname === "/contact-us";
    const isReqDemoPage = location.pathname === "/req-demo";
    const wiserAdPage = location.pathname === "/wiser-adviser";
    const careersPage = location.pathname === "/careers";
    return (
        <>
            {location.pathname === "/" ? (
                <>
                    <video autoPlay muted loop className="video-bg">
                        <source src={BackgroundVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    <div className="video-overlay">
                        <div className='heroTitle'>
                            <span className='d-flex justify-content-center align-items-center gap-3'>
                                {lineBar}
                                <h1 className={`lineBarText mb-0 text-white`}>Welcome To WiserBee</h1>
                                {lineBar}
                            </span>
                            <h1 className='mt-3'>
                                Empowering Education Through Innovative Tools
                            </h1>
                            <div className='mt-5'>
                                <DemoBtn tittle={'Request For Demo'} />
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <div className={`othersHeroSec ${isContactPage ? 'contact_main_div' : (isReqDemoPage ? 'req_main_div' : (wiserAdPage ? 'wiserad_main_div' : (careersPage ? 'career_main_div' : 'careerDet_main_div')))}`}>

                    <div className='contentData'>
                        {isContactPage ?
                            <h1 className='text-center text-white w-50 w-sm-resp'>Wanting To More? Get In Touch  With Us Now</h1>
                            :
                            isReqDemoPage ?
                                <h1 className='text-center text-white w-50 w-sm-resp'>Experience Excellence: Request  Your Free Demo Today</h1>
                                :
                                wiserAdPage ?
                                    <div className='w-50 w-sm-resp'><span className='d-flex justify-content-center align-items-center gap-3'>
                                        {lineBar}
                                        <h1 className={`lineBarText mb-0 text-white`}>Welcome To WISER-ADVISER</h1>
                                        {lineBar}
                                    </span>
                                        <h1 className='text-center text-white'>Your all-in-one AI companion for   education excellence!</h1></div>
                                    :
                                    careersPage ?
                                            <h1 className='text-center text-white w-50 w-sm-resp'>Careers at WiserBee - Canada's Innovative EdTech  Platform</h1>
                                        :
                                        <h1 className='text-center text-white w-50 w-sm-resp'>Careers at WiserBee - Canada's Innovative EdTech  Platform</h1>
                        }
                    </div>
                </div>
            )}

            <div className="contentNavbar">
                <header className='col-xl-9  col-11 m-auto'>
                    <div className=" d-flex align-items-center justify-content-between py-3">
                        <input type="checkbox" name="check" id="check" checked={checked} onChange={handleCheckboxChange} />
                        <div className="logo-container">
                            <div className="brandlogo">
                                <img src={images.brandLogo} alt='brandlogo' />
                            </div>
                        </div>

                        <div className="nav-btn ">
                            <div className="nav-links">
                                <ul>
                                    <li className="nav-link" style={{ '--i': '.3s' }}>
                                        <Link to="/" onClick={() => handleLinkClick("HOME")} className={activeLink === "HOME" ? "active_link" : "text-white"}>HOME</Link>
                                    </li>
                                    <li className="nav-link" style={{ '--i': '.6s' }}>
                                        <Link to="#about" onClick={() => handleLinkClick("ABOUT US")} className={activeLink === "ABOUT US" ? "active_link" : "text-white"}>ABOUT US</Link>
                                    </li>
                                    <li className="nav-link" style={{ '--i': '.9s' }}>
                                        <Link to="#features" onClick={() => handleLinkClick("OUR FEATURES")} className={activeLink === "OUR FEATURES" ? "active_link" : "text-white"}>OUR FEATURES</Link>
                                    </li>
                                    <li className="nav-link" style={{ '--i': '1.2s' }}>
                                        <Link to="#ourTeam" onClick={() => handleLinkClick("OUR TEAMS")} className={activeLink === "OUR TEAMS" ? "active_link" : "text-white"}>OUR TEAMS</Link>
                                    </li>
                                    <li className="nav-link" style={{ '--i': '1.5s' }}>
                                        <Link to="#partners" onClick={() => handleLinkClick("OUR PARTNERS")} className={activeLink === "OUR PARTNERS" ? "active_link" : "text-white"}>OUR PARTNERS</Link>
                                    </li>
                                    <li className="nav-link" style={{ '--i': '1.8s' }}>
                                        <Link to="/careers" onClick={() => handleLinkClick("CAREER")} className={activeLink === "CAREER" ? "active_link" : "text-white"}>CAREER</Link>
                                    </li>
                                    <li className="nav-link" style={{ '--i': '2.1s' }}>
                                        <Link to="/contact-us" onClick={() => handleLinkClick("CONTACT US")} className={activeLink === "CONTACT US" ? "active_link" : "text-white"}>CONTACT US</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="log-sign smLogbtn" style={{ '--i': '2.5s' }}>
                                <Link to="https://portal.wiserbee.ca/" className="btn transparent px-0">Log in</Link>
                            </div>
                        </div>
                        <div className="log-sign" style={{ '--i': '2.5s' }}>
                            <Link to="https://portal.wiserbee.ca/" className="logBtn transparent">Log in</Link>
                        </div>
                        <div className="hamburger-menu-container">
                            <div className="hamburger-menu">
                                <div></div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </>

    );
}

export default Navbar;
