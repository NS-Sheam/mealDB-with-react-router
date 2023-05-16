import React, { useEffect, useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';

const Home = () => {
    const [bannerData, setBannerData] = useState([])
    const [bannerImg, setBannerImg] = useState("https://images.immediate.co.uk/production/volatile/sites/30/2022/10/Campfire-stew-afe40d7.jpg?quality=90&webp=true&resize=375,341")
    //useEffect
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            // Code to be executed at the specified interval
            fetch("https://www.themealdb.com/api/json/v1/1/random.php")
                .then(res => res.json())
                .then(data => {
                    setBannerData(data.meals[0]);
                    setBannerImg(data.meals[0].strMealThumb)
                    AOS.refresh(); // Refresh AOS after updating the bannerImg
                })
            //   console.log('Interval function called');
        }, 3000); // 1000 milliseconds = 1 second
        // Cleanup function to clear the interval when the component unmounts
        return () => {
            clearInterval(intervalId);
        };
    }, []);
    console.log(bannerData);


    return (

        <div className='flex flex-col md:flex-row items-center gap-4 md:gap-7 my-container'>
            <div className='text-left space-y-4'>
                <h1 className='text-4xl md:text-6xl font-bold text-blue-400'>Welcome to Meal Db</h1>
                <h1 className='text-2xl md:text-3xl font-bold text-blue-700'>{bannerData.strMeal? bannerData.strMeal : "welcome to the world of delicion meal"}</h1>
                {
                    bannerData.strCategory &&
                    <p className='text-slate-600 font-semibold mb-4'>It is a {bannerData.strArea} meal. It use in {bannerData.strCategory}.</p>
                }
                <Link className='mt-6' to={bannerData.strSource}>
                    <button className='items-center h-12 px-6 my-4 font-medium text-white transition duration-200 rounded shadow-md md:mb-0 bg-blue-400 hover:bg-blue-500'>
                        Learn More
                    </button>
                </Link>
            </div>
            <div data-aos="zoom-in"
                data-aos-duration="1000" className='w-full md:w-1/2 relative'>
                <img
                    className='w-full'
                    src={bannerImg}
                    alt="" />
            </div>
        </div>
    );
};

export default Home;