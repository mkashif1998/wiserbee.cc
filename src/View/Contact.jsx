import React from 'react';
import ContactForm from '../Component/ContactFrom';
import LineTittle from '../Component/LineTittle';
import * as images from "../constant/imges";

const Contact = () => {
    return (
        <div className='position-relative'>
            <div className='contactUsPg'>
                <div className='col-lg-9 col-11 m-auto'>
                    <div className='row'>
                        <di className='col-md-6 my-5'>
                            <LineTittle title={"Write To Us"} color={'text-dark'} />
                            <h1 className='mt-3'>Have some questions?</h1>
                            <p className='mt-3'>We view education holistically, encompassing academics and well-being. Our approach blends diverse tools to support mental health and socio-emotional growth, enabling learners to excel and thrive in an ever-changing world.</p>
                            <p>If you have any further queries? Feel free to send us a query and we will get back to you shortly.</p>
                        </di>
                        <di className='col-md-6'>
                            <ContactForm />
                        </di>
                    </div>
                </div>
            </div>
            <div className='contactFromBg'>
                <img className='' src={images.contactFromBg} alt='contactFromBg' />
            </div>
        </div>
    )
}

export default Contact
