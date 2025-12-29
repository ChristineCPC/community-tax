import React, {useEffect, useLayoutEffect, useRef} from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import { animatedElements } from "../animations";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import BannerImage from "../assets/banner_image.jpg";
import HomeImage1 from "../assets/home_page_image_1.jpg";
import HomeImage2 from "../assets/home_page_image_2.jpg";
import HomeImage3 from "../assets/home_page_image_3.jpg";
import Compromise from "../assets/compromise.jpg";
import Audit from "../assets/audit.jpg";
import TaxServices from "../assets/tax_services.jpg";
import FullTax from "../assets/full_tax.jpg";
import Penalty from "../assets/penalty.jpg";
import Amendment from "../assets/amendment.jpg";
import Installment from "../assets/installment.jpg";


const HomePage: React.FC = () => {
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const scrollId = params.get("scrollTo");

        if (scrollId) {
            // Wait for the DOM to load before scrolling
            const timeout = setTimeout(() => {
                const section = document.getElementById(scrollId);
                if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                }
        }, 300);

        return () => clearTimeout(timeout);
        }
        window.history.replaceState({}, document.title, "/");
    }, [location]);

    const targetRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if(targetRef.current) {
            const clean = animatedElements(targetRef.current);
            return clean;
        }
    }, []);

    const navigate = useNavigate();

    const scrollToSection = (id: string) => {
        if (location.pathname === "/") {
            const section = document.getElementById(id);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        }else {
            navigate(`/?scrollTo=${id}`);
        }
        window.history.replaceState({}, document.title, "/");
    };

    return (
        <div ref={targetRef} className="min-h-screen flex flex-col bg-white">
            <section id="home" />
            <div className="relative w-full h-[90vh]">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${BannerImage})` }}
                />
                <div className="absolute inset-0 bg-green-900/65" />

                <div className="absolute inset-0 bg-linear-to-t from-lime-700/60 via-transparent to-transparent" />
                {/* Hero*/}
                <Navbar />
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
                    <h1 className="text-white text-4xl md:text-6xl font-bold text-center">Taxes Don't Have to be Complicated</h1>
                    <p className="mt-4 text-xl md:text-3xl text-gray-200 max-w-2xl">Get your taxes done right while maximizing your refund and minimizing your stress.</p>
                    <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                        <Link to="/contact">
                            <a
                                href="/contact"
                                className="rounded-full bg-lime-500 px-5.5 py-2.5 text-xl font-semibold text-white hover:bg-lime-950"
                            >
                                {' '}
                                Get Started{' '}
                            </a>
                        </Link>
                        <a href="#" className="text-xl font-semibold text-white px-3.5 py-2.5"  onClick={() => scrollToSection("about")}>
                            Learn More
                            <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>
            </div>
            
            <div className="flex-1">
                {/*Body*/}
                <section id="about" />
                <div className="relative h-full">

                    <div className="grid lg:gap-40 grid-cols-1 lg:grid-cols-2 lg:mt-20 lg:mb-20 lg:p-30 lg:mx-10 lg:fade-upwards fade-upwards-mobile mt-15 mb-15 p-20 gap-10">
                        <div className="relative flex">
                            <img 
                                src={HomeImage1}
                                alt="Home Image 1"
                                className="w-full max-w-[900px] h-auto object-cover rounded-xl mx-auto"
                            />
                        </div>
                        <div className="p-0">
                                <div>
                                    <h1 className="font-bold text-xl md:text-2xl mb-5">Your Trusted Tax Partners</h1>
                                    <p className="text-justify">Years of experience and a hands-on approach is what sets our team apart. Every interaction is guided by professionalism and attention to detail, ensuring clients feel valued and understood. With a focus on clarity, reliability, and thoughtful guidance, working with our team brings peace of mind and confidence in every decision.</p>
                                    <br></br>
                                    <p className="text-justify">Beyond expertise, what sets us apart is a commitment to building strong relationships. Every client is treated as a priority, with questions answered promptly and concerns addressed thoughtfully. This level of care makes the entire process seamless and reassuring, giving you confidence that you’re supported at every step.</p>

                                </div>
                            </div>
                    </div>

                    <div className="grid lg:gap-40 grid-cols-1 lg:grid-cols-2 lg:mt-20 lg:mb-20 lg:p-30 lg:mx-10 lg:fade-upwards fade-upwards-mobile mt-15 mb-15 p-20 gap-10">
                        <div className="relative  flex">
                            <div className="p-0">
                                <div>
                                    <h1 className="font-bold text-xl md:text-2xl mb-5">Expertise You Can Count On</h1>
                                    <p className="text-justify">More than just a tax service, our company is an active part of the community it serves. By understanding the unique needs of local families and businesses, our team provides solutions that are practical, relevant, and tailored to real-world situations. Each interaction is grounded in familiarity and care, helping you feel supported not only as a customer, but as a neighbor.</p>
                                    <br></br>
                                    <p className="text-justify">This community connection fosters trust and lasting relationships. Clients appreciate the guidance that comes from someone who truly knows their environment — offering insights and support that make a meaningful difference. By combining expertise with local awareness, we ensure every client feels confident and well-supported, every step of the way.</p>
                                </div>
                            </div>
                        </div>
                        <img 
                            src={HomeImage2}
                            alt="Home Image 1"
                            className="w-full max-w-[900px] h-auto object-cover rounded-xl mx-auto"
                        />
                    </div>

                    <div className="grid gap-0 grid-cols-1 lg:grid-cols-2 mt-20 mb-40 lg:slide-in slide-in-mobile">
                        <div className="relative ">
                            <div className="bg-lime-700 flex items-center h-full">
                                <div className="p-20 text-white font-semibold">
                                    <h1 className="font-bold text-3xl md:text-2xl mb-5">The Deadline Is Approaching...</h1>
                                    <p className="text-justify">Every day you wait limits your options. Whether you need a last-minute filing, help sorting through complex tax documents, or guidance on a past-due return, our team provides fast, accurate support tailored to your situation. We make the process simple, secure, and stress-free so you can file confidently before time runs out.</p>
                                    <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                                        <Link to="/contact">
                                            <a
                                                href="/contact"
                                                className="rounded-4xl bg-lime-950 px-5.5 py-2.5 text-xl font-semibold text-white inset-ring inset-ring-white/5 hover:bg-lime-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                            >
                                                {' '}
                                                Contact Us Today{' '}
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img 
                            src={HomeImage3}
                            alt="Home Image 3"
                            className="w-full object-contain h-full"
                        />
                    </div>

                    <section id="services" />
                    <h1 className="text-center font-bold text-2xl lg:text-5xl">Services we Provide</h1>
        

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:mt-30 lg:px-40 mt-10 px-10 text-center">

                        <div className="flex flex-col items-center card-animation-mobile lg:card-animation">
                            <h1 className="text-2xl font-bold mb-4">Tax Preparation</h1>
                            <img 
                                src={TaxServices} 
                                alt="Tax services" 
                                className="w-full h-auto object-contain rounded-xl shadow-md mb-4"
                            />
                            <p className="text-gray-600">We prepare federal and state tax returns accurately to help you file on time and maximize your refund. Our goal is to ensure you get every credit and deduction you qualify for.</p>
                        </div>

                        <div className="flex flex-col items-center card-animation-mobile lg:card-animation">
                            <h1 className="text-2xl font-bold mb-4">Tax Review & Amendments</h1>
                            <img 
                                src={Amendment} 
                                alt="Tax reviews" 
                                className="w-full h-auto object-contain rounded-xl shadow-md mb-4"
                            />
                            <p className="text-gray-600">We carefully review previous tax returns to identify errors or missed credits and file amendments when needed. If you have back taxes, we help correct and submit everything properly.</p>
                        </div>

                        <div className="flex flex-col items-center card-animation-mobile lg:card-animation">
                            <h1 className="text-2xl font-bold mb-4">Federal & State Audit Support</h1>
                            <img 
                                src={Audit} 
                                alt="Audit support" 
                                className="w-full h-auto object-contain rounded-xl shadow-md mb-4"
                            />
                            <p className="text-gray-600">If you are facing an IRS or state tax audit, we guide you through every step, help gather required documents, and represent you throughout the audit process.</p>
                        </div>

                        <div className="flex flex-col items-center card-animation-mobile lg:card-animation">
                            <h1 className="text-2xl font-bold mb-4">Offer in Compromise Assistance</h1>
                            <img 
                                src={Compromise} 
                                alt="compromise" 
                                className="w-full h-auto object-contain rounded-xl shadow-md mb-4"
                            />
                            <p className="text-gray-600">We help clients apply for an Offer in Compromise, a program that may allow you to settle your tax debt for less than the full amount owed.</p>
                        </div>

                        <div className="flex flex-col items-center card-animation-mobile lg:card-animation">
                            <h1 className="text-2xl font-bold mb-4">Installment Agreement Setup</h1>
                            <img 
                                src={Installment} 
                                alt="Installment" 
                                className="w-full h-auto object-contain rounded-xl shadow-md mb-4"
                            />
                            <p className="text-gray-600">If you cannot afford to pay your full tax balance, we help set up IRS installment agreements so you can pay what you owe in manageable monthly payments.</p>
                        </div>

                        <div className="flex flex-col items-center card-animation-mobile lg:card-animation">
                            <h1 className="text-2xl font-bold mb-4">Penalty & Interest Abatement</h1>
                            <img 
                                src={Penalty} 
                                alt="Penalty and Interest" 
                                className="w-full h-auto object-contain rounded-xl shadow-md mb-4"
                            />
                            <p className="text-gray-600">We assist clients in requesting penalty relief and reducing interest charges when eligible, often helping you lower the total amount owed.</p>
                        </div>

                        <div className="flex flex-col items-center lg:col-start-2 mb-20 card-animation-mobile lg:card-animation">
                            <h1 className="text-2xl font-bold mb-4">Full Tax Management Services</h1>
                            <img 
                                src={FullTax} 
                                alt="Tax Management" 
                                className="w-full h-auto object-contain rounded-xl shadow-md mb-4"
                            />
                            <p className="text-gray-600">We provide ongoing support, guidance, and document assistance to help clients stay compliant with federal and state tax requirements year-round.</p>
                        </div>
                    </div>
                </div>

            </div>
            
            
            <footer>
                <Footer />
            </footer>
        </div>

        

    );
};

export default HomePage;

