import React from 'react'
import thankYouImg from '../assets/thankyou.svg'
import '../style/thankyou.css'

export const ThankYou = () => {
  return (
    <div id='thankYou' className='flex flex-col items-center h-full justify-center'>
        <img src={thankYouImg} alt="thank you" className='w-1/6 mb-8'/>
        <h1 className='text-3xl mb-5 font-bold'>Thank You!</h1>
        <p className='text-center'>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to  email us at support@loremgaming.com.</p>
    </div>
  )
}
