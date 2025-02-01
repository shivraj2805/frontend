import React from 'react';


function LeftSection({
    imageURL,
    productName,
    ProductDescription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore,
}) {
    return ( 
        <div className="container mt-5">
            <div className="row">
                <div className='col-6'>
                    <img src={imageURL} />
                </div>
                <div className='col-6 p-5 mt-5'>
                    <h1>{productName}</h1>
                    <p>{ProductDescription}</p>
                    <div>
                    
                    <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo{" "}<i className="fa-solid fa-arrow-right-long"></i></a>
                    <a href={learnMore} style={{marginLeft:"50px", textDecoration:"none"}}>LearnMore{" "}<i className="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                    <div className='mt-3'>
                    <a href={googlePlay}><img src='media/images/google-play-badge.svg' /></a>
                    <a href={appStore}><img src='media/images/appstore-badge.svg' style={{marginLeft:"50px"}} /></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default LeftSection;