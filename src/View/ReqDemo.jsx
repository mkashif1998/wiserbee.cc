import React from 'react';
import ReqDemoForm from '../Component/ReqDemoF';
import LineTittle from '../Component/LineTittle';
import * as images from "../constant/imges";

const ReqDemo = () => {
    return (
        <div className='position-relative'>
            <div className='contactUsPg'>
                <div className='col-lg-9 col-11 m-auto'>
                    <div className='row'>
                        <di className='col-md-6 my-5'>
                            <LineTittle title={"Let’s Discuss Possibilites"} color={'text-dark'} />
                            <h1 className='mt-3'>Look no further, <br/> we're here to offer our <br/> expertise</h1>
                        </di>
                        <di className='col-md-6'>
                            <ReqDemoForm />
                        </di>
                    </div>
                </div>
            </div>
            <div className='demoFromBg d-none d-md-block'>
                <img className='' src={images.reqDemo} alt='contactFromBg' />
            </div>
        </div>
    )
}

export default ReqDemo;
