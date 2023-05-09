import React, { useState } from 'react';

const SingleMeal = ({meal}) => {
    console.log(meal);
    const [fold, setFold] = useState(false);
    return (
        <div className='border-2 p-4 rounded-md relative h-96 mx-auto'>
                    <div className='flex justify-center items-center p-4 h-full'>
                        <img className='object-cover' src={meal.strCategoryThumb} alt="" />
                    </div>
                    <div className='flex flex-col gap-4 bg-black bg-opacity-75 absolute -top-12 hover:top-0 h-full w-full right-0 rounded-md opacity-0 hover:opacity-100 overflow-scroll p-4 transform duration-200'>
                        <h2 className='text-3xl text-white font-bold'>{meal.strCategory}</h2>
                        <p className='font-semibold text-white'>Description: <br />{fold ? meal.strCategoryDescription : meal.strCategoryDescription.substring(0, 50)}.....</p>
                        <span onClick={() => setFold(!fold)} className='text-xl text-white font-bold cursor-pointer'>{fold? "Show Less": "Show More"}</span>
                        {/* <p onClick={() => setFold(!fold)} className='px-5 py-4 bg-blue-500 text-white rounded-md bottom-0 cursor-pointer'>{fold? "Show Less": "Show More"}</p> */}
                    </div>
                </div>
    );
};

export default SingleMeal;