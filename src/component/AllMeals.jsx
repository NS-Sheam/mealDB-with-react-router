import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleMeal from './SingleMeal';

const AllMeals = () => {
    const allMeals = useLoaderData();
    // console.log(allMeals);
    const { categories } = allMeals;
    return (
        <div className='grid md:grid-cols-3 gap-4 my-container'>
            {categories.map((meal, i) => <SingleMeal key={i} meal={meal}></SingleMeal>)}
        </div>
    );
};

export default AllMeals;