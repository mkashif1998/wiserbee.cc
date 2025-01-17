import React, { useState,useRef } from 'react';
import { userIcons, callIcons, emailIcons, tellusIcons } from "../constant/svgs";
import emailjs from '@emailjs/browser';

const DemoReq = () => {
    // State variable to hold input field values
    const [formData, setFormData] = useState({
        userName: '',
        phoneNumber: '',
        emailAddress1: '',
        emailAddress2: '',
        query: ''
    });
    const form = useRef();
    // Function to update input field values
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    // Array containing all input field values
    const inputFieldValues = Object.values(formData);

    // Function to log input field values to the console
    const handleSubmit = () => {
        console.log(inputFieldValues);
    }
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
                publicKey: 'YOUR_PUBLIC_KEY',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <form ref={form} onSubmit={sendEmail} className='formDataReq'>
            <div className='row'>
                <div className='col-sm-6'>
                    <div className="form-group has-search">
                        <span className="form-control-feedback">{userIcons}</span>
                        <input type="text" className="form-control" name="userName" placeholder="User Name" onChange={handleInputChange} />
                    </div>
                </div>
                <div className='col-sm-6'>
                    <div className="form-group has-search">
                        <span className="form-control-feedback">{callIcons}</span>
                        <input type="text" className="form-control" name="phoneNumber" placeholder="Phone Number" onChange={handleInputChange} />
                    </div>
                </div>
                <div className='col-sm-12'>
                    <div className="form-group has-search">
                        <span className="form-control-feedback">{emailIcons}</span>
                        <input type="text" className="form-control" name="emailAddress1" placeholder="Your Email Address" onChange={handleInputChange} />
                    </div>
                </div>
                <div className='col-sm-12'>
                    <div className="form-group has-search">
                        <span className="form-control-feedback">{emailIcons}</span>
                        <input type="text" className="form-control" name="emailAddress2" placeholder="Your Email Address" onChange={handleInputChange} />
                    </div>
                </div>
                <div className='col-sm-12'>
                    <div className="form-group has-search">
                        <span className="form-control-feedback">{tellusIcons}</span>
                        <input type="text" className="form-control" name="query" placeholder="Tell Us About Your Query" onChange={handleInputChange} />
                    </div>
                </div>
                <div className='col-sm-12'>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            I agree to the Terms and Conditions
                        </label>
                    </div>
                </div>
                <div className='col-sm-12 mt-5 mb-4'>
                    <button className="submitQueryBtn w-100" onClick={sendEmail}>Submit Query</button>
                </div>
            </div>
        </form>
    );
}

export default DemoReq;
