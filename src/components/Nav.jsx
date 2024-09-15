import React, {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux"
import { cartToggle } from "../features/toggle/toggleSlice"
import { Link, useNavigate } from 'react-router-dom';

const Nav = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const lastAdded = useSelector((state) => state.cart.lastTwoAdded)
    const openCart = useSelector((state) => state.toggle.cartToggle)
    const counter = useSelector((state) => state.cart.counter)
    const cart = useSelector((state) => state.cart.cartContent)

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        }) 
    }

    useEffect(() => {
        navigate('/Home')
    }, []);


    return (
        <div className='w-full h-[80px] bg-black fixed flex justify-between pl-8 pr-4 z-20'>
            <div className='h-full flex items-center'>
                <Link to={`/Home`} onClick={()=> {scrollToTop(); openCart == true ? dispatch(cartToggle()) : "" }} className='text-white font-extrabold font-Pencerio text-[30px]'>Pizza di Mama</Link>
            </div>
            <div className='flex items-center gap-2 group'>
                <Link to={`/MakeYourPizza`} onClick={()=> {scrollToTop(); openCart == true ? dispatch(cartToggle()) : ""}} className={` bg-main_orange text-white font-bold font-Switzer px-6 py-2 rounded-md transition-all hover:brightness-[95%]`}>Custom</Link>
                <button onClick={()=> dispatch(cartToggle())} className='group bg-white px-6 transition-all hover:bg-[#e4e4e4] py-2 rounded-md font-bold relative font-Switzer'>Cart
                    <div className={`${counter < 1 ? 'hidden':'visible'} bg-yellow2 absolute text-[12px] flex justify-center items-center size-[25px] bg-yellow-300 font-medium rounded-full top-[-10px] right-[-10px]`}>{counter}</div>
                </button>
                <div className={`${openCart == true ? 'hidden':''} absolute right-[15px] top-[92px] rounded-md bg-black text-white w-[200px] h-auto transition-all opacity-0 lg:group-hover:opacity-100 p-4 flex flex-col`}>
                    <div className='font-bold'>Last adds:</div>
                    {
                        lastAdded.length > 0 ? 
                        <div className='w-full flex flex-col'>
                            {
                                cart.map((element, key)=> {
                                    let value 
                                    element.pizzaName == lastAdded[lastAdded.length-2] ? value = 2 : null
                                    element.pizzaName == lastAdded[lastAdded.length-1] ? value = 1 : null
                                    return(
                                        element.pizzaName == lastAdded[lastAdded.length-value] ? <div>{lastAdded[lastAdded.length-value]}</div>: null
                                    )
                                })
                            }
                        </div> : null
                    }

                </div>
            </div>
        </div>
    );
}
export default Nav;