import React from 'react';
import { formateData } from '../../utils/formateDate';




const DotorAbout = () => {
  return (
    <div>
        <div>
            <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2'>
                About of
                <span className='text-irisBlueColor font-bold text-[24px] leading-9'>Abhijith p</span>
                </h3>
                <p className="text__para">To do that, the doctor must be able to be touched by the patient's life as well as his or
                 her illness. The doctor need not be an anthropologist but must know how to ask about a person's culture; he or she need not 
                 be a marriage counsellor but must be able to spot the signs of spousal abuse or the depression that may be the result of a 
                 failing union. Good doctors are humble doctors, willing to listen to their patients and gather together the full array of 
                 resources—medical, human, social,
                and spiritual—that will contribute to their patients' healing.</p>
        </div>

        <div className="mt-12">
            <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>Education</h3>

            <ul className='pt-4 md:p-5'>
                <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
                    <div>
                        <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>{formateData('12-04-2010')} - {formateData('01-04-2015')}</span>
                        <p className='text-[15px] leading-6 font-medium text-textColor'>PHD in Surgeon</p>
                    </div>

                    <p className='text-[14px] leading-5 font-medium text-textColor'>New Appolo Hospital, Pathanathitta,  Kerala  </p>
                </li>

                <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
                    <div>
                        <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>{formateData("05-01-2016")} - {formateData('12-04-2020')}</span>
                        <p className='text-[16px] leading-6 font-medium text-textColor'>PHD in Surgeon</p>
                    </div>

                    <p className='text-[14px] leading-5 font-medium text-textColor'>New Appolo Hospital, Pathanathitta,  Kerala  </p>
                </li>
            </ul>

        </div>

        <div className="mt-12">
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>Experience</h3>

        <ul className='grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5'>
            <li className='p-4 rounded bg-[#fff9ea] '>
                <span className='text-yellowColor text-[15px] leading-6 font-semibold'>{formateData("05-01-2016")} - {formateData('12-04-2020')}
                </span>

                <p className='text-[16px] leading-6 font-medium text-textColor'>Sr. Surgeon</p>
                <p className='text-[14px] leading-5 font-medium text-textColor'>New Appolo Hospital, Pathanathitta,  Kerala  </p>

            </li>

            <li className='p-4 rounded bg-[#fff9ea] '>
                <span className='text-yellowColor text-[15px] leading-6 font-semibold'>{formateData("04-26-2020")} - {formateData('12-04-2022')}
                </span>

                <p className='text-[16px] leading-6 font-medium text-textColor'>Sr. Surgeon</p>
                <p className='text-[14px] leading-5 font-medium text-textColor'>New Appolo Hospital, Pathanathitta,  Kerala  </p>

            </li>

        </ul>
        </div>
    </div>
  )
}

export default DotorAbout;

