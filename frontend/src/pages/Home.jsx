import React from 'react'

const Home = () => {
  return (
    <>
      <section className='hero__section pt-[60px] 2xl:h-[800px] '>
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between ">
            {/* hero content section */}
            <div>
              <div className="lg:w-[570px]">
              <h1 className='text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]'>
                  We help patients live a healthy, longer life.
                </h1>
                <p className='text__para'>Medicine, like most other fields, has undergone a rapid transformation, due to advancements in technology.
                 The usage of mobile medical applications has increased worldwide.
                 </p>

                 <button className="btn">Request an Appointment</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
