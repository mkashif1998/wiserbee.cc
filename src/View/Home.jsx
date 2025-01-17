import React, { useEffect } from 'react';
import LineTittle from '../Component/LineTittle';
import * as images from "../constant/imges";
import { neuroCognitive, problemsFace, wiserSolution } from '../constant/homeData';
import { lineBar, bulitPoint } from '../constant/svgs';
import { Link } from 'react-router-dom';
import WiserSlider from "../Component/SlideFeature";
import AOS from 'aos';
import 'aos/dist/aos.css';
import wiserVideo from '../assets/video/home_section_video.mp4';

const Home = () => {
    const clientImages = ['zubair', 'rifat', 'ambreen', 'umer', 'khwaja'];
    useEffect(() => {
        AOS.init({});
    }, []);
    return (
        <>
            <div className='aboutUs' >
                <div className='col-lg-9 col-11 m-auto' id='about'>
                    <div className='row'>
                        <div className='col-md-6 align-self-stretch' data-aos="fade-right">
                            <LineTittle title={"Aboutus"} color={'text-dark'} />
                            <h1 className='mt-3'> Revolutionizing <span className='text-yellow'>Education</span> </h1>
                            <p className='mt-3'>Introducing WiserBee: Our all-in-one EdTech solution redefining learning. With an integrated LMS, AI Chatbot (Wiser-Adviser), ERP, and Behavioral Assessments, WiserBee empowers learners and educators. Experience personalized learning and improved teaching with our advanced technology and analytics. Shape the future of education with WiserBee.</p>
                        </div>
                        <div className='col-md-6 align-self-stretch' data-aos="flip-left">
                            <img className='yLogo' src={images.yLogo} alt='yLogo' />
                        </div>
                    </div>
                </div>

                <div className='problemsFace'>
                    <div className='col-lg-9 col-11 m-auto'>
                        <div className='row pb-3'>
                            <div className='col-md-6 align-self-center'>
                                <LineTittle title={"Problems Faced Today"} color={'text-dark'} />
                                <h1 className='mt-3'>Behavioral Frustrations in  <span className='text-yellow'>Education</span> </h1>
                            </div>
                            <div className='col-md-6 align-self-center'>
                                <p>These issues manifest as behavioral frustrations, leading to dissatisfaction and low self-esteem. To foster a more productive society, these reflective areas need attention and resolution.</p>
                            </div>
                        </div>
                        <div className='row my-5'>
                            {problemsFace.map((item, index) => (
                                <div className='col-md-3 col-sm-6 mb-5' key={index} data-aos="fade-right"
                                    data-aos-offset="150"
                                    data-aos-easing="ease-in-sine">
                                    <span className='prblemIcons '>{item.icon}</span>
                                    <h6 className='neurocogTittle h-25 mt-4 '>{item.titleFirst} <br/> {item.titleSecond}</h6>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='wiserBeeSolution py-5'>
                    <div className='col-lg-9 col-11 m-auto'>
                        <div className='row my-5'>
                            <div className='col-lg-6 align-self-center'>
                                <h1 className='mt-3'> WiserBee’s <br></br> <span className='text-yellow'>Solution</span> </h1>
                                <p>NeuroScience-Based Screening for Learners and Teachers, Enhancing Neurocognitive Development in Humans.</p>
                            </div>
                            <div className='col-lg-6'>
                                <div className='row'>
                                    {wiserSolution.map((item, index) => (
                                        <div className='col-sm-6   d-flex align-items-stretch mt-3' key={index} data-aos="flip-right">
                                            <div className=' educationCard '>
                                                <span className='prblemIcons '>{item.icon}</span>
                                                <h6 className='neurocogTittle h-25 mt-4'>{item.title}</h6>
                                                <p className='neurocogdetails mt-3'>{item.details}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='neurocognitive'>
                    <div className='col-lg-9 col-11 m-auto'>
                        <div className='row'>
                            <div className='col-lg-6 align-self-center'>
                                <h1 className='mt-3'><span className='text-yellow'> Neurocognitive </span><br></br> Screening</h1>
                                <p className='mt-3'>NeuroScience-Based Screening for Learners and Teachers, Enhancing Neurocognitive Development in Humans.</p>
                            </div>
                            <div className='col-lg-6 '>
                                <div className='row'>
                                    {neuroCognitive.map((item, index) => (
                                        <div className='col-sm-6 mb-3' key={index} data-aos="zoom-in">
                                            {item.icon}
                                            <h6 className='neurocogTittle'>{item.title}</h6>
                                            <p className='neurocogdetails'>{item.details}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bgWiser d-none d-sm-block'>
                        <img className='Bgwiser' src={images.Bgwiser} alt='Bgwiser' />
                    </div>
                </div>
                <div className='featureSection' id="features">
                    <WiserSlider />
                </div>
                <div className='wiseradviserSec'>
                    <div className='col-lg-9 col-11 m-auto'>
                        <div className='row'>
                            <div className='col-md-6 d-flex align-items-stretch'>
                                <video autoPlay loop muted width="100%" height="auto">
                                    <source src={wiserVideo} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            <div className='col-md-6'>
                                <LineTittle title={"A1 ChatBot"} color={'text-dark'} />
                                <h1 className='mt-3'>Wiser-Adviser</h1>
                                <p className='text-yellow'>Your all-in-one A1 companion for education excellence!</p>
                                <p>Wiser-Adviser provides tailored assistance to individual
                                    learners, offering guidance on study materials, clarifying
                                    concepts, and suggesting personalized learning strategies to
                                    maximize academic success.</p>
                                <div className='mt-5'>
                                    <Link className="reqforDemoBtn" to="/wiser-adviser">View Detail</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='virtualSecion'>
                    <div className='col-lg-9 col-11 m-auto'>
                        <div className='row'>
                            <div className='col-md-6' data-aos="flip-right">
                                <img className='w-100' src={images.virtual} alt=''/>
                            </div>
                            <div className='col-md-6'>
                                <LineTittle title={"Wiser Connect"} color={'text-dark'} />
                                <h1 className='mt-3'>A1-Powered Virtual
                                    Meeting Software </h1>
                                <p className="d-flex justify-content-start"><span className='mx-2'>{bulitPoint}</span>Scheduling Meetings</p>
                                <p className="d-flex justify-content-start"><span className='mx-2'>{bulitPoint}</span>Live Lectures</p>
                                <p className="d-flex justify-content-start"><span className='mx-2'>{bulitPoint}</span>Live Sessions Recordings In Multiple Languages</p>
                                <p className="d-flex justify-content-start"><span className='mx-2'>{bulitPoint}</span>Live Audio Translation In Multiple Languages.</p>
                                <p className="d-flex justify-content-start"><span className='mx-2'>{bulitPoint}</span>Live Transcript Into Multiple Languages</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='col-lg-9 col-11 m-auto'>
                    <div className='row' id='partners'>
                        <div className='col-lg-6'>
                            <LineTittle title={"Partners"} color={'text-dark'} />
                            <h1 className='mt-3'>Companies Supporting Our Cause </h1>
                            <p>These issues manifest as behavioral frustrations, leading to dissatisfaction and low self-esteem. To foster a more productive society, these reflective areas need attention and resolution.</p>
                        </div>
                        <div className='col-lg-6'>
                            <div className='row'>
                                <div className='col-6' data-aos="fade-left">
                                    <img className='brandLogos' src={images.pycapLogo} alt='' />
                                </div>
                                <div className='col-6' data-aos="fade-right">
                                    <img className='brandLogos' src={images.swati} alt='' />
                                </div>
                                <div className='col-6' data-aos="fade-left">
                                    <img className='brandLogos' src={images.microLogo} alt='' />
                                </div>
                                <div className='col-6' data-aos="fade-right">
                                    <img className='brandLogos' src={images.erdcLogo} alt='' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row my-5' id='ourTeam'>
                        <span className='d-flex justify-content-center align-items-center gap-3'>
                            {lineBar}
                            <h1 className={`lineBarText mb-0`}>Founders</h1>
                            {lineBar}
                        </span>
                        <h1 className='text-center mt-3 mb-5'>Introducing Our Visionary <br></br> Founders</h1>
                        {clientImages.map((imageName, index) => (
                            <div className="col-md-4 mb-2 col-6" key={index} data-aos="flip-left">
                                <img className="clientLogo" src={images[imageName]} alt={imageName} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className=''>
                    <div className='col-lg-8 col-11 m-auto'>
                        <div className='reqDemo'>
                            <img className='reqDemoImg' src={images.reqDemo} alt='reqDemo' />
                            <div className='reqDemoDetail text-center' data-aos="zoom-in">
                                <span className='d-flex justify-content-center align-items-center gap-3'>
                                    {lineBar}
                                    <h1 className={`lineBarText mb-0`}>Make learning easy</h1>
                                    {lineBar}
                                </span>
                                <h1 className='mt-4'>Give WiserBee A Try Today. Request A <br></br> <span className='text-yellow'>Free Demo Now !</span></h1>
                                <div className='mt-5'>
                                    <Link className="reqforDemoBtn" to="/req-demo">Request For Demo</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;