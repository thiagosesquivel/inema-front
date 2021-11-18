import React from 'react';

function Card({cronograma}){
    return (
        <div className="bg-blue w-full p-4">
            {cronograma.map(c=>{
                return(
                    <div className="flex flex-col mb-4">
                        <h2 className="uppercase  text-lightBlue text-base">{c.title}</h2>
                        <p className="text-white text-opacity-80">{c.content}</p>
                    </div>
                )
            })}
        </div>
    );
}

export default Card;
