import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleMealByName from './SingleMealByName';

const MealByInput = () => {
    const mealByInput = useLoaderData();
    // console.log(mealByInput);
    return (
        <div className='grid md:grid-cols-3 gap-4 my-container'>
        {
            mealByInput.meals.map(meal => (
                <SingleMealByName
                key={meal.idMeal}
                meal={meal}></SingleMealByName>
            ))
        }
        </div>
    );
};

export default MealByInput;