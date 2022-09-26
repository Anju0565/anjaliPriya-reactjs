import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
        <div class='flex justify-between items-center bg-[#333333] h-[80px]'>
          <div>
            <img src='https://upayments.com/en/wp-content/uploads/sites/4/2020/07/upay-logo-1.png' alt='Logo' onClick={(()=>window.location.href='/')} class='h-[30px] ml-6 cursor-pointer' />
          </div>  
          <div class='flex gap-12 ml-[38%] items-center'>
            <div>
                <Link to={'/'} class='flex items-center text-lg font-bold'>
                  <img src='https://upayments.com/en/wp-content/uploads/sites/4/2020/08/V_5.png' alt='roundIcon' />
                  <p class='text-white ml-1'>HOME</p>
                </Link>
              </div>
              <div>
                <Link to={'/favorites'} class='flex items-center text-lg font-bold'>
                <img src='https://upayments.com/en/wp-content/uploads/sites/4/2020/08/V_2.png' alt='roundIcon' />
                  <p class='text-white ml-1'>FAVORITE</p>
                </Link>
              </div>
            </div>
            <div class='mr-[4%]'>
              <div>
                <Link to={'/new-product'}>
                  <button class='text-white bg-blue-500 rounded-full h-[40px] w-[140px]'>CREATE SCREEN</button>
                </Link>
              </div>
        </div> 
      </div>
    </div>
  )
}
