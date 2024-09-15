import React, { useState, useEffect } from 'react';
import data from './../assets/data.json'
import PizzaCard from './PizzaCard';
import { useDispatch, useSelector } from "react-redux"
import { cartToggle } from "../features/toggle/toggleSlice"
import Filter from './Filter';
import DIY from './DIY';
import './../index.css'

const Home = () => {

    const openCart = useSelector((state) => state.toggle.cartToggle)
    const openFilter = useSelector((state) => state.toggle.filterToggle)
    const base = useSelector((state) => state.filter.base)
    const price = useSelector((state) => state.filter.price)
    const dispatch = useDispatch()

    const sortedDataLowest = [...data[0]].sort((a, b) => a.price - b.price);
    const sortedDataHighest = [...data[0]].sort((a, b) => b.price - a.price);
    const [sortedData, setSortedData] = useState(data[0])

    useEffect(() => {
        if (price == "All") {
            setSortedData(data[0])
        } else if (price == "Lowest") {
            setSortedData(sortedDataLowest)
        } else if (price == "Highest") {
            setSortedData(sortedDataHighest)
        }
    }, [price]);

    return (
        <div onClick={()=> openCart == true ? dispatch(cartToggle()) : ""} className={`${openCart == true ? `brightness-[30%]` : `brightness-[100%]`} transition-all overflow-hidden w-full flex flex-col justify-center items-center py-[80px] bg-white`}>
            <div className='flex flex-col items-center justify-center h-[200px] bg-yellow w-full relative group transition-all'>
                <div className='text-[80px] text-white font-Pencerio font-extrabold leading-none max-sm:text-[25px] transition-all group-hover:scale-110'>Pizza di Mama</div>
            </div>
            
            <div className='w-[100%] max-sm:w-[70%]'>
                <Filter/>
            </div>
            <div className='pt-[35px] max-md:pt-[0px] flex flex-wrap gap-5 w-[80%] justify-center'>
                {
                    sortedData.map((pizza, key) => {
                        const currentKey = key
                        return(
                           base == pizza.ingredients[0] || base == "All" ?
                            <PizzaCard pizzaName={pizza.pizzaName} currentKey={currentKey} price={pizza.price} image={pizza.image}/> : null
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Home;
