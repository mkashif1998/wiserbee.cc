import React from 'react';
import LineTittle from '../Component/LineTittle';
import {componentAI,moduleDate} from "../constant/homeData";
import * as images from "../constant/imges";

const WiserAdvise = () => {
  return (
    <div className='feature'>
      <div className='col-lg-9 col-11 m-auto'>
        <div className='row my-5'>
          <div className='col-md-6'>
            <LineTittle title={"Features"} color={'text-dark'} />
            <h1 className='mt-3 w-75'> Features of Your All-In-One <span className='text-yellow'>AI Companion</span> </h1>
          </div>
          <div className='col-md-6 align-self-center'>
            <p>
              "Wiser-Adviser" offers comprehensive support at both the individual and institutional levels, empowering learners to succeed academically while facilitating efficient policy management for educational institutions.
            </p>
          </div>
        </div>
        <div className='row my-5'>
          {componentAI.map((item, index) => (
            <div className='col-md-3 col-sm-6 mb-5' key={index}>
              <span className='prblemIcons '>{item.icon}</span>
              <h6 className='neurocogTittle h-25 mt-4'>{item.title}</h6>
              <p className='neurocogdetails mt-3'>{item.details}</p>
            </div>
          ))}
        </div>
        <div className='row'>
          {moduleDate.map((item,index)=>(
            <div className='mb-5' key={index}>
                <LineTittle  title={`Module 0${item.id}`} color={'text-dark'} />
                <h1 className='w-50 wiserTitle'>{item.title}</h1>
                <p> {item.ul}</p>
                <ul className='mx-4'>
                  <li className='font-weight-normal f-w-11 mb-2'>{item.li1}</li>
                  <li className='font-weight-normal f-w-11 mb-2'>{item.li2}</li>
                  <li className='font-weight-normal f-w-11 mb-2'>{item.li3}</li>
                  <li className='font-weight-normal f-w-11 mb-2'>{item.li4}</li>
                </ul>
            </div>
          ))}
        </div>
      </div>
      <div className='WiserbeeBGMain d-none d-md-block'>
        <img src={images.WiserbeeBG} alt='WiserbeeBG'/>
      </div>
    </div>
  )
}

export default WiserAdvise;
