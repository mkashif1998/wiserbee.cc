import React from 'react';
import { Link } from 'react-router-dom';

const DemoBtn = (Props) => {
    const {tittle} = Props;
    
    return (
        <Link to="/req-demo" className='reqDemoBtn'>
            {tittle}
        </Link>
    )
}

export default DemoBtn
