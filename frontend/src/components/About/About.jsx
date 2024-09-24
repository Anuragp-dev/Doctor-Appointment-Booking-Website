import React from 'react'
import { Link } from 'react-router-dom';
import aboutImg from '../../assets/images/about.png';
import aboutCardImg from '../../assets/images/about-card.png';


// about pages
const About = () => {
  return (
    <>
      <section>
                <div className="container">
                    <div className="flex  justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
                        {/* about img */}

                        <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
                            <img src={aboutImg} alt="img" />
                            <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
                                <img src={aboutCardImg} alt="about" />
                            </div>
                        </div>

                             {/* about content */}

                             <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
                            <h2 className='heading'>Proud to be one of the nation best</h2>
                            <p className='text__para'>Patients trust and count on doctors to help them, provide honest advice and the best
                             treatment options. Having genuine concern for their well-being and lending an empathetic ear to hear their concerns is one
                             of the most comforting ways doctors can earn the trust of their patients</p>

                             <p className="text__para mt-[30px]">They provide support, guidance, and comfort to patients and their families,
                              helping them navigate challenging medical situations. They collaborate with nurses,
                              pharmacists, therapists, and specialists to ensure a comprehensive approach treatment.</p>

                              <Link to='/'><button className='btn'>Learn More</button></Link>
                        </div>


                    </div>
                </div>

            </section>
    </>
  )
}

export default About
