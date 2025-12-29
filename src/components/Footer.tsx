export default function Footer () {
    return (
        <footer className=" bottom-0">
            <div className="bg-lime-950 text-white">
                <div className="container mx-auto lg:px-50 lg:py-10 px-15 py-10">
                    <div className="lg:-mx-4 -mx-1 flex flex-wrap justify-between">
                        <div className="px-4 my-4 w-full xl:w-1/4">
                            <h1 className="font-bold text-5xl mb-5 font-['https://fonts.googleapis.com/css2?family=Bona+Nova+SC:ital,wght@0,400;0,700;1,400&display=swap']">Contact Us</h1>
                            <p className="text-justify">We’d love to hear from you and are always ready to support you with reliable, personalized tax guidance tailored to your needs, whether you’re seeking clarity, reassurance, or a trusted partner to help you move forward with confidence.</p>
                        </div>

                        <div className="px-4 my-4 w-full sm:w-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-17 bg-lime-700 rounded-full px-2.5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                            </svg>

                            <div>
                                <h2 className="inline-block text-3xl pb-4 mb-4 border-b-4 border-lime-700 font-bold mt-5 font-['https://fonts.googleapis.com/css2?family=Bona+Nova+SC:ital,wght@0,400;0,700;1,400&display=swap']">Phone & Email</h2>
                            </div>

                            <ul className="leading-8">
                                <li>(347)-442-5111</li>
                                <li>(347)-761-6631</li>
                                <li className="wrap-break-word"><a href="mailto:contact@communitytaxandmanagementservices.com">contact@communitytaxandmanagementservices.com</a></li>
                            </ul>
                        </div>

                        <div className="px-4 my-4 w-full sm:w-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-17 bg-lime-700 rounded-full px-2.5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>

                            <div>
                                <h2 className="inline-block text-3xl pb-4 mb-4 border-b-4 border-lime-700 font-bold mt-5 font-['https://fonts.googleapis.com/css2?family=Bona+Nova+SC:ital,wght@0,400;0,700;1,400&display=swap']">Address & Hours</h2>
                            </div>
                            <ul className="leading-4">
                                <li> 537 B New York Avenue <br></br> Brooklyn, NY 11225</li><br></br>
                                <li>Sun - Thurs: 10:00AM - 6:00PM</li>
                                <li>Fri: 10:00AM - 4:00PM</li>
                                <li>Sat: CLOSED</li>
                            </ul>
                        </div>

                        
                    </div>
                    <div className="text-center mt-10 border-t-2 mx-5 border-lime-700">
                        <p className="mt-5 -mb-5 font-bold">&copy; 2025 Community Tax and Management Services All Rights Reserved</p>
                    </div>
                    
                </div>
                
            </div>
            

            
        </footer>
    )
}