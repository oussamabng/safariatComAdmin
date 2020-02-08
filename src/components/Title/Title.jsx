import React from 'react';

const Title = ({title, subTitle}) => {
    return (
        <div style={{width:'100%'}} className="text-center font-montserrat text-gray pb-4 w-60 mx-auto">
            <h3 className="text-xl pb-2 font-semibold">{title}</h3>
            <p className="text-xs">{subTitle}</p>
        </div>
    );
}

export default Title;
