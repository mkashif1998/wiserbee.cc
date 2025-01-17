import React from 'react'
import * as imges from '../constant/imges';
import { Link } from 'react-router-dom';
import { facebook,linkedin,twiter } from '../constant/svgs';

const Footer = () => {
    return (
        <div className='footerSty container-fluid pt-5 pb-2'>
            <div className='col-lg-4 col-md-6 m-auto mb-5'>
                <div className='footerlogo'>
                    <img src={imges.brandLogo} alt='brandLogo' />
                </div>
                <h1 className='text-white text-center mt-4'>WiserBee</h1>
                <p className='text-white text-center'>Smarter - Scholar - Wise</p>
                <div className='mt-5 text-center'>
                    <Link className="reqforDemoBtn" to="/req-demo">Request For Demo</Link>
                </div>
                <div className='d-flex justify-content-center mt-5 gap-3'>
                    <Link to='' className='social_link'>{facebook}</Link>
                    <Link to='https://twitter.com/wiser_bee5' className='social_link'>{twiter}</Link>
                    <Link to='https://www.linkedin.com/company/wiserbee' className='social_link'>{linkedin}</Link>
                </div>
            </div>
            <div className='rightandresv'>
                <p className='text-center text-white mt-3'>WiserBee © 2024. All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer
