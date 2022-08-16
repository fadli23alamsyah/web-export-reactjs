import React from "react"
import { Helmet } from "react-helmet"

const Homepage = () => {
    return (
        <>
            <Helmet>
                <title>Universal Spices</title>
                <meta content="Universal Spices Indonesia" name="keywords" />
                <meta name="description" content="Universal Spices Indonesia is a leading supplier of spices products from Indonesia." />
                <meta property="og:title" content="Universal Spices Indonesia" />
                <meta property="og:description" content="Universal Spices Indonesia is a leading supplier of spices products from Indonesia." />
                <meta property="og:image" content="./images/rempah.jpg" />
                <meta property="og:site_name" content="Universal Spices Indonesia" />
                <meta property="og:type" content="website" />

                <meta name="twitter:title" content="Universal Spices Indonesia" />
                <meta name="twitter:description" content="Universal Spices Indonesia is a leading supplier of spices products from Indonesia." />
                <meta name="twitter:Teaser" content="summary"/>
                <meta name="twitter:creator" content="@universal spices indonesi" />
            </Helmet>

            <section id="home" className="w-full h-[600px] relative lg:h-screen">
                <div style={{backgroundImage: `url(./images/spices.jpg)`}} className="h-full bg-center bg-cover lg:bg-[center_bottom_-50px]">
                    <div className="h-full bg-gradient-to-t from-[#383838] to-[#D9D9D9] mix-blend-multiply"></div>
                </div>
                <div className="w-full absolute bottom-0">
                    <div className="font-bold ml-8 mb-20 lg:ml-[185px] lg:mb-30">
                        <h4 className="text-first text-xl lg:text-[26px] lg:mb-8">Supplying across the globe</h4>
                        <h1 className="text-white text-3xl lg:text-[40px] lg:leading-none">The Leading Supplier <br />of Spices Product</h1>
                    </div>
                    <div style={{backgroundImage: `url(./images/icons/desain.svg)`}} className="w-full h-[80px] bg-cover bg-center lg:h-[120px] lg:bg-no-repeat lg:bg-top"></div>
                </div>
            </section>

            <section id="about" className="pt-36 pb-20 bg-gradient-to-b from-[#F8F8F8] to-white">
                <h2 className="text-center text-3xl font-bold mb-12 lg:text-[40px] lg:mb-20">About Us</h2>
                <div className="w-full flex flex-wrap px-8 justify-center">
                    <div className="mb-8 mx-4 rounded-card shadow-lg h-fit w-fit drop-shadow-card overflow-hidden md:w-[350px]">
                        <img src="./images/rempah.jpg" alt="" width="w-full"/>
                    </div>
                    <p className="px-4 text-lg lg:w-1/2 lg:text-xl">
                        Universal Spices Indonesia is a leading supplier of spices products from Indonesia. We want to be a pioneer to export spice products, especially in eastern Indonesia. We also want spices to be enjoyed by everyone around the world by providing the best quality. <br /> <br />
                        Universal Spices Indonesia will provide the best service and it is our top priority to meet the satisfaction and expectations of our customers.
                    </p>
                </div>
            </section>

            <section id="feature" className="pt-36 pb-20">
                <h2 className="text-center text-3xl font-bold mb-12 lg:text-[40px] lg:mb-20">Our Key Features</h2>
                <div className="w-full flex flex-wrap justify-center px-8">
                    <div className="w-full mb-5 px-[18px] py-14 border border-first bg-white rounded-card drop-shadow-card flex flex-col items-center md:w-1/3 md:mx-8 md:my-8">
                        <div className="p-5 w-[90px] h-[90px] mb-8 rounded-full bg-first bg-opacity-70 flex justify-center items-center">
                            <img src="./images/icons/integritas.svg" alt="" width="w-full"/>
                        </div>
                        <h3 className="text-3xl font-bold text-second mb-4">Integrity</h3>
                        <p className="self-start text-base lg:text-lg">Integrity means telling the truth, keeping our word, and treating others with fairness and respect. Integrity is one of our most cherished assets. It must not be compromised.</p>
                    </div>
                    <div className="w-full mb-5 px-[18px] py-14 border border-first bg-white rounded-card drop-shadow-card flex flex-col items-center md:w-1/3 md:mx-8 md:my-8">
                        <div className="p-5 w-[90px] h-[90px] mb-8 rounded-full bg-first bg-opacity-70 flex justify-center items-center">
                            <img src="./images/icons/qualitas.svg" alt="" width="w-full"/>
                        </div>
                        <h3 className="text-3xl font-bold text-second mb-4">Quality</h3>
                        <p className="self-start text-base lg:text-lg">Quality is exhibited in many ways by selling and supporting products and services that delight customers, establishing a work environment, and delivering financial results that meet investor expectations.</p>
                    </div>
                    <div className="w-full mb-5 px-[18px] py-14 border border-first bg-white rounded-card drop-shadow-card flex flex-col items-center md:w-1/3 md:mx-8 md:my-8">
                        <div className="p-5 w-[90px] h-[90px] mb-8 rounded-full bg-first bg-opacity-70 flex justify-center items-center">
                            <img src="./images/icons/komitmen.svg" alt="" width="w-full"/>
                        </div>
                        <h3 className="text-3xl font-bold text-second mb-4">Commitment</h3>
                        <p className="self-start text-base lg:text-lg">Commitment is important where we will continue to provide the best to our customers and investors all the time. Our opportunity to serve should be viewed as a privilege that is not to be taken for granted.</p>
                    </div>
                    <div className="w-full mb-5 px-[18px] py-14 border border-first bg-white rounded-card drop-shadow-card flex flex-col items-center md:w-1/3 md:mx-8 md:my-8">
                        <div className="p-5 w-[90px] h-[90px] mb-8 rounded-full bg-first bg-opacity-70 flex justify-center items-center">
                            <img src="./images/icons/inovasi.svg" alt="" width="w-full"/>
                        </div>
                        <h3 className="text-3xl font-bold text-second mb-4">Innovation</h3>
                        <p className="self-start text-base lg:text-lg">Innovation means inventing, designing, and developing products and services that have high appeal in the marketplace and strengthen customer preference for the Universal Spices Indonesia project.</p>
                    </div>
                </div>
            </section>

            <section id="product" className="pt-36 pb-20 bg-[#F6F7F6]">
                <h2 className="text-center text-3xl font-bold mb-12 lg:text-[40px] lg:mb-20">Our Product</h2>
                <div className="w-full">
                    <div id="product-list" className="flex overflow-auto px-10 pb-4 gap-5 md:px-[98px] md:gap-10">
                        <div className="bg-white rounded-[30px] border border-second px-8 pt-8 pb-10 min-w-full md:pb-8 lg:min-w-[900px]">
                            <div className="flex flex-wrap">
                                <img src="./images/products/kapulaga.jpg" alt="Cardamom" className="rounded-3xl object-cover h-fit md:w-1/2" width="w-full"/>
                                <div className="w-full mt-6 md:w-1/2 md:mt-0 md:pl-8">
                                    <h4 className="font-bold text-2xl text-first lg:text-3xl">Cardamom</h4>
                                    <p className="mt-2 text-base lg:text-lg">
                                        Cardamom sometimes cardamon or cardamum, is a spice made from the seeds of several plants in the genera Elettaria and Amomum in the family Zingiberaceae. Both genera are native to the Indian subcontinent and Indonesia.
                                    </p>
                                </div>
                            </div> 
                        </div>

                        <div className="bg-white rounded-[30px] border border-second px-8 pt-8 pb-10 min-w-full md:pb-8 lg:min-w-[900px]">
                            <div className="flex flex-wrap">
                                <img src="./images/products/cengkeh.jpg" alt="Clove" className="rounded-3xl object-cover h-fit md:w-1/2" width="w-full"/>
                                <div className="w-full mt-6 md:w-1/2 md:mt-0 md:pl-8">
                                    <h4 className="font-bold text-2xl text-first lg:text-3xl">Clove</h4>
                                    <p className="mt-2 text-base lg:text-lg">
                                        Clove (Syzygium aromaticum) are aromatic dried flower buds of the Myrtaceae tree family. Clove is a plant native to Indonesia, widely used as a spice in spicy dishes in European countries, and as the main ingredient of Indonesian kretek cigarettes. Cloves are grown mainly in Indonesia and Madagascar; besides that it is also cultivated in Zanzibar, India, and Sri Lanka. Cloves generally have a varied harvest season in the producing countries. This plant is the identity flora of North Maluku Province.
                                    </p>
                                </div>
                            </div> 
                        </div>

                        <div className="bg-white rounded-[30px] border border-second px-8 pt-8 pb-10 min-w-full md:pb-8 lg:min-w-[900px]">
                            <div className="flex flex-wrap">
                                <img src="./images/products/lada.jpg" alt="Pepper" className="rounded-3xl object-cover h-fit md:w-1/2" width="w-full"/>
                                <div className="w-full mt-6 md:w-1/2 md:mt-0 md:pl-8">
                                    <h4 className="font-bold text-2xl text-first lg:text-3xl">Pepper</h4>
                                    <p className="mt-2 text-base lg:text-lg">
                                        Pepper, also called sahang, which has the Latin name Piper nigrum is a plant that is rich in chemical compounds, such as pepper oil, fatty oil, and starch. Pepper is slightly bitter, pungent, warm, and antipyretic. This plant has begun to be discovered and known since tens of centuries ago. In general, people only know white pepper and black pepper which are often used as kitchen spices. This plant is one of the world's trade commodities and more than 80% of Indonesia's pepper products are exported to foreign countries. In addition, pepper has the title The King of Spice (King of Spices) where the world's pepper demand in 2000 reached 280,000 tons.[3] Pepper is one of the plants that reproduce by seeds, but many farmers prefer to do cuttings to develop it. They cut the stems to approximately 0.25–0.5 meters in length.
                                    </p>
                                </div>
                            </div> 
                        </div>
                        
                        <div className="bg-[#9ca3af1a] bg-stripes rounded-[30px] border border-second px-8 pt-8 pb-10 min-w-full md:pb-8 lg:min-w-[900px]">
                            <h1 className="min-h-full flex justify-center items-center text-center text-[50px] font-bold text-first">Cooming Soon...</h1>
                        </div>
                    </div>
                </div>
            </section>

            <section id="team" className="pt-36 pb-20">
                <h2 className="text-center text-3xl font-bold mb-12 lg:text-[40px] lg:mb-20">Our Teams</h2>
                <div className="w-full flex flex-wrap justify-center items-center px-8 sm:gap-10">
                    <div className="w-[300px] my-8">
                        <div className="w-full h-[400px] rounded-card drop-shadow-card overflow-hidden bg-black">
                            <img src="./images/spices.jpg" alt="" width="w-full" height="w-full" className="h-full object-cover"/>
                        </div>
                        <div className="pt-10 text-center">
                            <h3 className="text-3xl font-bold text-second md:text-4xl">Jaya</h3>
                            <p className="pt-3 text-2xl md:text-[28px]">Founder</p>
                        </div>
                    </div>
                    <div className="w-[300px] my-8">
                        <div className="w-full h-[400px] rounded-card drop-shadow-card overflow-hidden bg-black">
                            <img src="./images/spices.jpg" alt="" width="w-full" height="w-full" className="h-full object-cover"/>
                        </div>
                        <div className="pt-10 text-center">
                            <h3 className="text-3xl font-bold text-second md:text-4xl">Made</h3>
                            <p className="pt-3 text-2xl md:text-[28px]">Co-Founder</p>
                        </div>
                    </div>
                    <div className="w-[300px] my-8">
                        <div className="w-full h-[400px] rounded-card drop-shadow-card overflow-hidden bg-black">
                            <img src="./images/spices.jpg" alt="" width="w-full" height="w-full" className="h-full object-cover"/>
                        </div>
                        <div className="pt-10 text-center">
                            <h3 className="text-3xl font-bold text-second md:text-4xl">Fadli</h3>
                            <p className="pt-3 text-2xl md:text-[28px]">Developer</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact" className="py-8 rounded-t-[30px] bg-[#F6F7F6]">
                <div className="w-full flex flex-wrap px-8 justify-center md:justify-evenly">
                    <div className="md:w-1/2">
                        <h1 className="font-bold text-first text-[30px] md:text-[40px]">Universal Spices</h1>
                        <p className="text-xl md:text-[26px] md:leading-none">We continue to update the information about the product </p>
                    </div>
                    <div className="pt-8">
                        <div className="rounded-card drop-shadow-card bg-gray-200 py-4 px-8 flex  items-center gap-3">
                            <div className="w-[50px] h-[50px] bg-[#25D366] p-4 rounded-full fill-white">
                                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>WhatsApp</title><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                            </div>
                            <p className="text-2xl font-bold">+62 822 9623 8212</p>
                        </div>

                        <div className="mt-8 rounded-card drop-shadow-card bg-gray-200 py-4 px-8 flex  items-center gap-3">
                            <div className="w-[50px] h-[50px] bg-[#EA4335] p-4 rounded-full fill-white">
                                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Gmail</title><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg>
                            </div>
                            <p className="text-2xl font-bold">jayanasir4@gmail.com</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Homepage