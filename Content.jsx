import React, { useState, useEffect } from 'react';
import Marquee from "react-fast-marquee";
import Exterior from '../Images/Exterior.jpg';
import Interior from '../Images/Interior.jpg';
import Waterproofing from '../Images/Waterproofing.jpg';
import Wall from '../Images/Wall.jpg';
import Tiles from '../Images/Tiles.jpg';
import Sliding from '../Images/Sliding.png';
import Accurate from '../Images/Accurate.png';
import Steps from '../Images/step.webp';
import Trained from '../Images/trained-professionals.png';
function Content() {
    const [text, setText] = useState('');

    useEffect(() => {
        const words = ["Home's", "Building's", "Flat's", "Work Space"];
        let i = 0;

        const intervalId = setInterval(() => {
            setText(words[i]);
            i = (i + 1) % words.length;
        }, 1500);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <>

            <div className="container px-5 py-10 mx-auto">
                <div className="flex flex-col text-center w-full mb-20" id='content1'>
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900" >Safe And Hassel Free Hue Paint Service</h1>
                    <p className="lg:w-2/3 mx-auto font-bold leading-relaxed text-base">Here Is what Makes Express Painting A Greate Choise</p>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Looking for a reliable and safe way to get your home painted? Look no further, Hue Painting Service offers our customers an extensive range of services,
                        including interior and exterior home painting, deck painting and staining, wood finishing and faux finishing. </p>
                </div>

                <section className="text-gray-600 body-font ">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-wrap w-full mb-20">
                            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                                <h1 className="sm:text-5xl text-2xl font-medium font-sans title-font mb-2  text-pink-400">Hue Paint Service </h1>
                                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-700">We Paint {text}</h1>

                                <div className="h-1 w-20 bg-black rounded"></div>
                            </div>

                        </div>
                        <div className="flex flex-wrap -m-4 ">
                            <div className="xl:w-1/4 md:w-1/2 p-4 ">
                                <div className="bg-gray-100 p-6 rounded-lg">
                                    <img className="h-40 rounded w-full object-cover object-center mb-6" src={Interior} alt="content" />
                                    <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Hue Paints Service</h3>
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Interior Painting</h2>
                                    <p className="leading-relaxed text-base">Experience exceptional interior painting services with our professional team. We customize solutions to match your unique style, using premium materials for a flawless finish. Attention to detail and timely delivery are our top priorities. Transform your space today!</p>
                                </div>
                            </div>
                            <div className="xl:w-1/4 md:w-1/2 p-4">
                                <div className="bg-gray-100 p-6 rounded-lg">
                                    <img className="h-40 rounded w-full object-cover object-center mb-6" src={Exterior} alt="content" />
                                    <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Hue Paints Service</h3>
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Exterior Painting</h2>
                                    <p className="leading-relaxed text-base">Revitalize your home's exterior with our professional painting services. Our experienced team will breathe new life into your property, using high-quality materials and meticulous attention to detail. Trust us to create a stunning and durable finish that will make your home the envy of the neighborhood.</p>
                                </div>
                            </div>
                            <div className="xl:w-1/4 md:w-1/2 p-4">
                                <div className="bg-gray-100 p-6 rounded-lg">
                                    <img className="h-40 rounded w-full object-cover object-center mb-6" src={Waterproofing} alt="content" />

                                    <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Hue Paints Service</h3>
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Waterproofing </h2>
                                    <p className="leading-relaxed text-base">Shield your property from water damage with our reliable waterproofing services. Our expert team utilizes advanced techniques and premium waterproofing materials to create a robust barrier against leaks and moisture. Trust us to keep your space dry and protected for years to come.</p>
                                </div>
                            </div>
                            <div className="xl:w-1/4 md:w-1/2 p-4">
                                <div className="bg-gray-100 p-6 rounded-lg">
                                    <img className="h-40 rounded w-full object-cover object-center mb-6" src={Wall} alt="content" />
                                    <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Hue Paints Service</h3>
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Plaster</h2>
                                    <p className="leading-relaxed text-base">Experience the timeless elegance of plaster with our expert plastering services. Our skilled artisans meticulously apply and craft plaster finishes, creating a smooth and luxurious surface that enhances the beauty of any space. Trust us for impeccable plastering results.
                                    </p>
                                </div>
                            </div>
                            <div className="xl:w-1/4 md:w-1/2 p-4">
                                <div className="bg-gray-100 p-6 rounded-lg">
                                    <img className="h-40 rounded w-full object-cover object-center mb-6" src={Tiles} alt="content" />
                                    <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Hue Paints Service</h3>
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Tiles</h2>
                                    <p className="leading-relaxed text-base">Transform your space with our exceptional tile installation services. Our skilled team delivers precise and stunning tile work, whether for floors, walls, or backsplashes. With a wide selection of high-quality tiles to choose from, let us bring your vision to life.
                                    </p>
                                </div>
                            </div>
                            <div className="xl:w-1/4 md:w-1/2 p-4">
                                <div className="bg-gray-100 p-6 rounded-lg">
                                    <img className="h-40 rounded w-full object-cover object-center mb-6" src={Sliding} alt="content" />
                                    <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Hue Paints Service</h3>
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Sliding Window</h2>
                                    <p className="leading-relaxed text-base">Upgrade your space with our sleek and functional sliding windows. Enjoy seamless operation, ample natural light, and enhanced views. Our expert installation ensures a perfect fit and optimal energy efficiency. Embrace modernity and elegance with our sliding windows.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Why Choose Us </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">We are Hue Painting, and we've been trusted by thousands of families to complete their home painting projects. Our professional team is trained and equipped to deliver exceptional home painting services, while keeping your home safe and comfortable.</p>
                    <p className="lg:w-2/3 mx-auto font-bold leading-relaxed text-base">Benefits of Choosing Home Painting Services by Hue Paints-</p>
                </div>

                <Marquee>
                    <section class="text-gray-600 body-font">
                        <div class="container px-5 py-24 mx-auto flex flex-wrap">

                            <div class="flex flex-wrap md:-m-2 -m-1">
                                <div class="flex flex-wrap w-1/2">
                                    <div class="md:p-2 p-1 w-1/2">
                                        <img alt="gallery" class="w-full object-cover h-full object-center block" src={Trained} />

                                    </div>
                                    <div class="md:p-2 p-1 w-1/2">
                                        <img alt="gallery" class="w-full object-cover h-full object-center block" src={Accurate} />
                                    </div>

                                </div>
                                <div class="flex flex-wrap w-1/2">
                                    <div class="md:p-2 p-1 w-1/2">
                                        <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://dummyimage.com/500x300" />
                                    </div>
                                    <div class="md:p-2 p-1 w-1/2">
                                        <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://dummyimage.com/501x301" />
                                    </div>

                                </div>

                            </div>
                        </div>
                    </section>     
                </Marquee>



                <section class="text-gray-600 body-font">
                    
                    <div class="container px-5 py-24 mx-auto flex flex-wrap">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900" >Steps involved in Hue Painting</h1>
                        <div class="flex flex-wrap w-full">
                            
                            <div class="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
                                
                                <div class="flex relative pb-12">
                                    
                                    <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                                        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                    </div>
                                    
                                    <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                            <circle cx="12" cy="7" r="4"></circle>
                                        </svg>
                                    </div>
                                    
                                    <div class="flex-grow pl-4">
                                        
                                        <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">Contact Us</h2>
                                      
                                    </div>
                                </div>
                                <div class="flex relative pb-12">
                                    <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                                        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                    </div>
                                    <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                        </svg>
                                    </div>
                                    <div class="flex-grow pl-4">
                                        <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">On-Site Consultation
                                            & Digital Estimate</h2>
                                  
                                    </div>
                                </div>
                                <div class="flex relative pb-12">
                                    <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                                        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                    </div>
                                    <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                                       
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                        </svg>
                                    </div>
                                    <div class="flex-grow pl-4">
                                        <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                                            Safe Painting Starts</h2>
                          
                                    </div>
                                </div>
                                <div class="flex relative pb-12">
                                    <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                                        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                    </div>
                                    <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                            <circle cx="12" cy="7" r="4"></circle>
                                        </svg>
                                    </div>
                                    <div class="flex-grow pl-4">
                                        <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">Regular Site
                                            Supervision</h2>
                                      
                                    </div>
                                </div>
                                <div class="flex relative pb-12">
                                    <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                                        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                    </div>
                                    <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                            <circle cx="12" cy="5" r="3"></circle>
                                            <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                                        </svg> 
                                    </div>
                                    <div class="flex-grow pl-4">
                                        <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">Post Painting
                                            Clean-up & Disinfection</h2>
                                      
                                    </div>
                                </div>
                                <div class="flex relative">
                                    <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                            <path d="M22 4L12 14.01l-3-3"></path>
                                        </svg>
                                    </div>
                                    <div class="flex-grow pl-4">
                                        <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">Home Handover</h2>
                        
                                    </div>
                                </div>
                                
                            </div>
                            <img class="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12" src={Steps} alt="step"/>
                        </div>
                    </div>
                </section>

               
            </div>
        </>
    );
}

export default Content;


