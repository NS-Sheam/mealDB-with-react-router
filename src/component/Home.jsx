import React from 'react';

const Home = () => {
    return (
        <div className='flex flex-col md:flex-row items-center gap-4 md:gap-7 my-container'>
            <div>
                <h1 className='text-4xl md:text-6xl font-bold text-blue-500'>Welcome to Meal Db</h1>
                <p className='text-slate-600 text-xl font-semibold'>Choose Your Favourite meal.....</p>
            </div>
            <div className='w-full md:w-1/2'>
                <img className='w-full' src="https://images.immediate.co.uk/production/volatile/sites/30/2022/10/Campfire-stew-afe40d7.jpg?quality=90&webp=true&resize=375,341" alt="" />
            </div>
        </div>
    );
};

export default Home;