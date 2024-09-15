import React from 'react';

const Footer = () => {
    return (
        <div className='w-full h-[200px] bg-[#e9e9e9] flex flex-col justify-center items-center gap-4 font-Switzer'>
            <p className='font-Pencerio font-extrabold text-[20px]'>Pizza di Mama</p>
            <p className=' opacity-50 w-1/2 text-center leading-0 font-light text-[12px]'>This website was built using React and Redux for seamless state management and dynamic user experience. TailwindCSS was implemented to ensure a responsive, modern design with minimal custom styling. All components are crafted to offer speed, scalability, and maintainability.</p>
            <p className=' opacity-50 font-light text-[12px]'>© Coded by Jules Voiturier</p>
        </div>
    );
}

export default Footer;
