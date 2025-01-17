import React, {  } from 'react';
import { userIcons, callIcons, emailIcons, tellusIcons ,calenderIcons, timeIcons} from "../constant/svgs"

const DemoReq = () => {

    return (
        <div className='formDataReq'>
            <div className='row'>
                <div className='col-sm-6'>
                    <div class="form-group has-search">
                        <span class="form-control-feedback">{userIcons}</span>
                        <input type="text" class="form-control" placeholder="User Name" />
                    </div>
                </div>
                <div className='col-sm-6'>
                    <div class="form-group has-search">
                        <span class="form-control-feedback">{callIcons}</span>
                        <input type="text" class="form-control" placeholder="Phone Number" />
                    </div>
                </div>
                <div className='col-sm-6'>
                    <div class="form-group has-search">
                        <span class="form-control-feedback">{emailIcons}</span>
                        <input type="text" class="form-control" placeholder="Your Email Address" />
                    </div>
                </div>
                <div className='col-sm-6'>
                    <div class="form-group has-search">
                        <span class="form-control-feedback">{emailIcons}</span>
                        <input type="text" class="form-control" placeholder="Purpose Of The Demo" />
                    </div>
                </div>
                <div className='col-sm-12'>
                    <div class="form-group has-search">
                        <span class="form-control-feedback">{calenderIcons}</span>
                        <input type="date" class="form-control" placeholder="Preferred Date" />
                    </div>
                </div>
                <div className='col-sm-12'>
                    <label className='f-w-bold'>How long would you like your demo to be?</label>
                    <div class="form-check mt-3">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label class="form-check-label" for="flexRadioDefault1">
                            15 - Minutes intro call.
                            </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                            <label class="form-check-label" for="flexRadioDefault2">
                            30 - Minutes screen share overview
                            </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                            <label class="form-check-label" for="flexRadioDefault2">
                            45 - Minutes in-depth deeper dive.
                            </label>
                    </div>
                    
                </div>
                <div className='col-sm-12'>
                    <div class="form-group has-search">
                        <span class="form-control-feedback">{timeIcons}</span>
                        <input type="time" class="form-control" placeholder="Any specific features or aspects you'd like to focus on during the demo" />
                    </div>
                </div>
                <div className='col-sm-12'>
                    <div class="form-group has-search">
                        <span class="form-control-feedback">{tellusIcons}</span>
                        <input type="text" class="form-control" placeholder="Any questions you have?" />
                    </div>
                </div>
                <div className='col-sm-12 mt-3 mb-4'>
                    <button className="submitQueryBtn w-100">Submit Query</button>
                </div>
            </div>
        </div>
    );
}

export default DemoReq
