import React from "react";

const Rating = ({rating}) => {
    return (
        <div className="star-rating">
            {[...Array(5)].map((star, index) => {
                if (index  < rating){
                    return (
                        <div
                            key={index}
                        >
                            <img className='star on' src="/img/star.svg" alt=""/>
                        </div>
                    )
                } else  if (index + 1 > rating){
                    return (
                        <div
                            key={index}
                        >
                            <img className='star off' src="/img/star.svg" alt=""/>
                        </div>
                    )
                } else {
                    return
                }
            })}
            <a href='src/components/Products/Product/Rating/Rating#' className='reviews'>(15)</a>
        </div>
    );
};
export default Rating