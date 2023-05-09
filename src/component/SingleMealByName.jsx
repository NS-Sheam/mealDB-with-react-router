import React, { useState } from 'react';

const SingleMealByName = ({meal}) => {
    const {strMeal, idMeal, strArea, strInstructions, strMealThumb, strCategory} = meal;
    // console.log(meal);
    const [fold, setFold] = useState(false);
    return (
        <div>
            <div className='border-2 p-4 rounded-md relative h-96 mx-auto'>
                    <div className='flex justify-center items-center p-4 h-full'>
                        <img className='object-cover' src={strMealThumb} alt="" />
                    </div>
                    <div className='flex flex-col gap-4 bg-black bg-opacity-75 absolute -top-12 hover:top-0 h-full w-full right-0 rounded-md opacity-0 hover:opacity-100 overflow-scroll p-4 transform duration-200'>
                        <h2 className='text-3xl text-white font-bold'>{strMeal}</h2>
                        <h3 className='text-xl font-semibold text-white'>Popular in: {strArea}</h3>
                        <h4 className='text-xl font-bold text-white'>Meal Catagory: {strCategory}</h4>
                        <p className='font-semibold text-white'>How to make: <br />{fold ? strInstructions : strInstructions.substring(0, 50)}.....</p>
                        <span onClick={() => setFold(!fold)} className='text-xl text-white font-bold cursor-pointer'>{fold? "Show Less": "Show More"}</span>
                        {/* <p onClick={() => setFold(!fold)} className='px-5 py-4 bg-blue-500 text-white rounded-md bottom-0 cursor-pointer'>{fold? "Show Less": "Show More"}</p> */}
                    </div>
                </div>
        </div>
    );
};

export default SingleMealByName;