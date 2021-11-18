import React from 'react';

function Content({title, children, className='', ...rest}){
    return (
        <div className={"text-lightGray mb-12 " + className} {...rest}>
            <h3 className="uppercase text text-center text-blue text-lg mb-4">{title}</h3>
            {children}
        </div>
    );
}

export default Content;
