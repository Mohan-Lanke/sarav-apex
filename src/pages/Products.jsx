import React from 'react'

const Products = () => {
  return (
    <section className='bg-gray-900'>
      {/* landing section  */}
      <div className="w-full h-80 md:h-[calc(100vh-72px)] relative overflow-hidden">
        <img
          className="h-full w-full object-cover"
          src="https://cdn-rio.dataweavers.io/-/media/content/images/news/rt-mining-pit.jpg?rev=5f747b008b624ebc848dd421004f0965&w=1920&hash=4087A1C934DD418C203734373713F55E"
          alt="mining site"
        />

        <div className="absolute w-full h-full top-0 md:top-56 md:left-16 flex flex-col gap-4 items-center justify-center md:items-start md:justify-start">
          <p className="uppercase text-sm text-gray-800 font-semibold tracking-widest">
            Introducing Saravapex
          </p>
          <h2 className="md:text-5xl text-2xl font-bold leading-normal text-center md:text-left">
            The Best Mining <br /> for the Digital Age
          </h2>

          <button
            type="button"
            className="uppercase text-white bg-orange-400 max-w-40 hover:bg-orange-800 focus:ring-2 focus:ring-orange-300 rounded-lg text-xs md:text-sm px-5 py-2.5 focus:outline-none"
          >
            Request a Demo
          </button>
        </div>
      </div>

      {/* // products list starts  */}  
      <section className=' pt-8 md:pt-16'>
        <div className='w-10/12 flex  md:flex-row flex-col gap-2 mx-auto'>
          <div className='md:w-1/2 py-2 md:px-12 flex flex-col gap-6 justify-center'>
            <p className='md:text-2xl font-semibold text-xl text-white'>More About Acetylcysteine</p>

            <div>
              <p className='text-xs md:text-sm text-gray-300'>This drug is perfect for those of you who are experiencing fatigue and also</p>
              <p className='text-xs md:text-sm text-gray-300'>always staying up late because this drug contains so much vitamin C</p>
            </div>
            <div>
              <p className='text-xs md:text-sm text-gray-300'>This drug is a good medicine to help your child's growth, so that it can
              increase</p>
              <p className='text-xs md:text-sm text-gray-300'>appetite and also make your body taller and more muscular, make your
              brain</p>
              <p className='text-xs md:text-sm text-gray-300'>smart and also good for eye health and hair health so you will look</p>
            </div>

            <div className='w-full h-40 bg-gray-300 rounded-lg'>

            </div>
          </div>
          <div className='md:w-1/2 py-2 md:px-12 flex flex-col gap-4'>
          <p className='md:text-xl font-semibold text-lg text-gray-300'>Material Contained</p>
          
          <div>
              <p className='text-sm md:text-lg font-medium text-gray-300'>Categories</p>
              <p className='text-xs md:text-sm text-gray-300'>Drugs and Vitamin</p>
            </div>
            <div>
              <p className='text-sm md:text-lg font-medium text-gray-300'>Composisi</p>
              <p className='text-xs md:text-sm text-gray-300'>Each tablet contains Amlodipine 4 mg</p>
            </div>
            <div>
              <p className='text-sm md:text-lg font-medium text-gray-300'>Dose</p>
              <p className='text-xs md:text-sm text-gray-300'>The initial dose is 5 mg per day, Maximum 10 mg per day, Dosage titrations are
              carried out every 7-14 days.</p>
            </div>
            <div>
              <p className='text-sm md:text-lg font-medium text-gray-300'>How to use</p>
              <p className='text-xs md:text-sm text-gray-300'>Consumed before or after meals.</p>
            </div>

            <div>
              <p className='text-sm md:text-lg font-medium text-gray-300'>Packaging</p>
              <p className='text-xs md:text-sm text-gray-300'>Box, 5 Strips @ 10 Tablets</p>
            </div>
            <div>
              <p className='text-sm md:text-lg font-medium text-gray-300'>Counter Indication</p>
              <p className='text-xs md:text-sm text-gray-300'>Patients who are hypersensitive to amlodipine and other dihydropirydine groups.</p>
            </div>
            <div>
              <p className='text-sm md:text-lg font-medium text-gray-300'>Attention</p>
              <p className='text-xs md:text-sm text-gray-300'>ON MEDICAL PRESCRIPTION. Close monitoring of patients with impaired
              liver function and congestive heart failure.</p>
            </div>
          </div>
        </div>
      </section>

      <section className='pt-8 md:pt-16'>
        <div className='w-10/12 flex  md:flex-row flex-col gap-2 mx-auto'>
          <div className='md:w-1/2 py-2 md:px-12 flex flex-col gap-6 justify-center'>
            <p className='md:text-2xl font-semibold text-xl text-white'>More About Acetylcysteine</p>

            <div>
              <p className='text-xs md:text-sm text-gray-300'>This drug is perfect for those of you who are experiencing fatigue and also</p>
              <p className='text-xs md:text-sm text-gray-300'>always staying up late because this drug contains so much vitamin C</p>
            </div>
            <div>
              <p className='text-xs md:text-sm text-gray-300'>This drug is a good medicine to help your child's growth, so that it can
              increase</p>
              <p className='text-xs md:text-sm text-gray-300'>appetite and also make your body taller and more muscular, make your
              brain</p>
              <p className='text-xs md:text-sm text-gray-300'>smart and also good for eye health and hair health so you will look</p>
            </div>

            <div className='w-full h-40 bg-gray-300 rounded-lg'>

            </div>
          </div>
          <div className='md:w-1/2 py-2 md:px-12 flex flex-col gap-4'>
          <p className='md:text-xl font-semibold text-lg text-gray-300'>Material Contained</p>
          
          <div>
              <p className='text-sm md:text-lg font-medium text-gray-300'>Categories</p>
              <p className='text-xs md:text-sm text-gray-300'>Drugs and Vitamin</p>
            </div>
            <div>
              <p className='text-sm md:text-lg font-medium text-gray-300'>Composisi</p>
              <p className='text-xs md:text-sm text-gray-300'>Each tablet contains Amlodipine 4 mg</p>
            </div>
            <div>
              <p className='text-sm md:text-lg font-medium text-gray-300'>Dose</p>
              <p className='text-xs md:text-sm text-gray-300'>The initial dose is 5 mg per day, Maximum 10 mg per day, Dosage titrations are
              carried out every 7-14 days.</p>
            </div>
            <div>
              <p className='text-sm md:text-lg font-medium text-gray-300'>How to use</p>
              <p className='text-xs md:text-sm text-gray-300'>Consumed before or after meals.</p>
            </div>

            <div>
              <p className='text-sm md:text-lg font-medium text-gray-300'>Packaging</p>
              <p className='text-xs md:text-sm text-gray-300'>Box, 5 Strips @ 10 Tablets</p>
            </div>
            <div>
              <p className='text-sm md:text-lg font-medium text-gray-300'>Counter Indication</p>
              <p className='text-xs md:text-sm text-gray-300'>Patients who are hypersensitive to amlodipine and other dihydropirydine groups.</p>
            </div>
            <div>
              <p className='text-sm md:text-lg font-medium text-gray-300'>Attention</p>
              <p className='text-xs md:text-sm text-gray-300'>ON MEDICAL PRESCRIPTION. Close monitoring of patients with impaired
              liver function and congestive heart failure.</p>
            </div>
          </div>
        </div>
      </section>
    </section>

  )
}

export default Products
