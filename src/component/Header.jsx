import React, { useState } from 'react';
import Link from './ActiveLink';
import { NavLink } from 'react-router-dom';
import ActiveLink from './ActiveLink';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [inputValue, setInputValue] = useState("");
    // console.log(inputValue);
    return (
        <>
            <nav className='bg-slate-300 p-4 mx-auto md:flex justify-between hidden'>
                <div>
                    <h2 className='text-3xl font-bold text-slate-950'>mealDb</h2>
                </div>
                <div className='inline-flex gap-4 font-bold items-center'>
                    <ActiveLink to="/">Home</ActiveLink>
                    <ActiveLink to="/allmeal">All Meals</ActiveLink>
                    <ActiveLink to="/about">About</ActiveLink>
                    <ActiveLink to="/contact">Contact</ActiveLink>
                    <input onChange={val => setInputValue(val.target.value)} type="text" className='outline-none p-4 rounded-md' />
                    <Link to={`/${inputValue}`}>
                        <button className='p-4 bg-blue-500 rounded-md text-white'>Search</button>
                    </Link>
                </div>
            </nav>
            <nav className={`w-full mx-auto bg-slate-300 p-4 relative md:hidden z-10`}>
                <div className='flex justify-between'>
                    <h2 className='text-2xl font-bold text-slate-950'>mealDb</h2>
                    {
                        isMenuOpen ?
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                            </svg>
                    }

                </div>
                <div className={`font-bold transform duration-500 absolute w-full ${isMenuOpen ? "top-14 right-0" : "-top-96 right-0"}`}>
                    <ul className={`bg-slate-300  `}>
                        <li onClick={() => setIsMenuOpen(false)} className='hover:bg-slate-400 duration-200 py-4'><ActiveLink className="" to="/">Home</ActiveLink></li>
                        <li onClick={() => setIsMenuOpen(false)} className='hover:bg-slate-400 duration-200 py-4'><ActiveLink className="" to="/allmeal">All Meals</ActiveLink></li>
                        <li onClick={() => setIsMenuOpen(false)} className='hover:bg-slate-400 duration-200 py-4'><ActiveLink className="" to="about">About</ActiveLink></li>
                        <li onClick={() => setIsMenuOpen(false)} className='hover:bg-slate-400 duration-200 py-4'><ActiveLink className="" to="contact">Contact</ActiveLink></li>
                        <li className='flex gap-3 justify-center items-center py-4'>
                            <input onChange={val => setInputValue(val.target.value)} type="text" className='outline-none p-4 rounded-md w-1/2' />
                            <Link to={`/${inputValue}`}>
                                <button onClick={() => setIsMenuOpen(false)} className='p-4 bg-blue-500 rounded-md text-white'>Search</button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>

    );
};

export default Header;