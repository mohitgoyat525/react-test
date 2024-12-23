import React from 'react'
import { useLocation } from 'react-router-dom';

function Footer() {
    const location = useLocation().pathname;
    return (
        <div className={`${location === "/"
            ? "bg-[rgb(30,30,30)] flex-col rounded-t-[30px]"
            : "bg-[#002B43] "
            }pt-[78px] max-lg:pt-12 max-md:pt-6`}>
            <div className='flex max-w-[1140px] mx-auto flex-wrap max-lg:gap-10'>
                <div className='w-1/2 max-lg:w-full'>
                    <p className=  {`${location === "/"
                        ? "text-[38px] text-[#FF5501] font-bold  max-xl:text-center"
                        : "text-[38px] text-[#007AFF] font-bold max-xl:text-center"
                        }`}>Logo <span className='text-white'>Here</span></p>
                    <p className='max-lg:text-center max-md:mx-auto max-w-[431px] opacity-70 mt-4 text-white'>Lorem ipsum dolor sit amet consectetur. Metus mattis cum sem integer est. Amet fringilla tristique hendrerit vestibulum diam est penatibus interdum imperdiet. Duis ut libero suspendisse arcu erat. Pulvinar in est.</p>
                </div>
                <div className='w-1/2 flex max-lg:w-full'>
                    <div className='w-1/2 text-white max-lg:flex max-lg:items-center max-lg:justify-center max-lg:flex-col'>
                        <p className='text-lg font-semibold'>About website</p>
                        <div className='flex flex-col gap-4 mt-6 text-white opacity-70'>
                            <a href="/">Home</a>
                            <a href="#how">How It Works</a>
                            <a href="#testimonials">Testimonials</a>
                            <a href="#why">Why Choose Us</a>
                        </div>
                    </div>
                    <div className='w-1/2 text-white max-lg:flex max-lg:items-center max-lg:justify-center max-lg:flex-col'>
                        <p className='text-lg font-semibold'>About website</p>
                        <div className='flex flex-col gap-4 mt-6 opacity-70'>
                            <a href="https://www.instagram.com/">Instagram</a>
                            <a href="https://www.twitter.com/">Twitter</a>
                            <a href="https://www.discord.com/">Discord</a>
                            <a href="https://www.youtube.com/">You Tube</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full h-[1px] bg-white opacity-40 mt-14'></div>
            <p className='text-center py-6 text-white opacity-70'>CopyrightÂ©2024 (Logo) All Rights Reserved.</p>
        </div>
    )
}

export default Footer
