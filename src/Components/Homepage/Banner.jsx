import React from 'react';
import BookImg from '../../assets/Heropng.png'

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-[70vh] rounded-2xl my-8 container mx-auto">
            <div className="hero-content flex-col lg:flex-row-reverse w-full justify-between">
                <img
                    src={BookImg}
                />
                <div>
                    <h1 className="text-5xl font-bold">Books to freshen up <br /> your bookshelf</h1>
                    
                    <button className="btn bg-[#23BE0A] text-white mt-4">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;