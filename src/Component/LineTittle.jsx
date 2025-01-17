import React from "react";
import { lineBar } from '../constant/svgs';

const LineTittle= (Props) => {

    const {title,color} = Props;

    return (
        <span className='d-flex justify-content-start align-items-center gap-2'>
            <h1 className={`lineBarText mb-0 ${color}`}>{title}</h1>
            {lineBar}
        </span>
    );
}

export default LineTittle;