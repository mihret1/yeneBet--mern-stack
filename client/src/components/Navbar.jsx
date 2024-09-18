
import img1 from '../assets/b.jpg'
import { useState,useEffect } from 'react'

function Navbar() {
  const [isTrasparent,setIsTransparent]=useState(false)
  
  useEffect(()=>{
    const handleTransparent=()=>{
      if(window.scrollY >=40){
        setIsTransparent(true)
      }else{
        setIsTransparent(false)
      }
    }
    window.addEventListener('scroll',handleTransparent)
    return ()=>{window.removeEventListener('scroll',handleTransparent)}
    
  },[])

  return (
    <div className='hede'>
      <div className={`  ${isTrasparent &&  'fixed'} w-[100%] flex flex-row  h-[93px] items-center  justify-between px-10 ${isTrasparent && 'shadow-2xl'} ${isTrasparent? 'bg-white' :'bg-transparent'} `}>

      <a href='/'>
      <div className='flex items-center gap-1'>
        <img src={img1} className='w-20 h-20 rounded-full max-lg:w-16 max-lg:h-16'/>
        <h1 className={` ${!isTrasparent && 'text-white'} font-bold text-3xl font-mono max-lg:text-2xl	`}>YeneBet</h1>
      </div>
      </a>

      <div className={`linke  ${!isTrasparent && 'text-white'} flex flex-row gap-5 md:max-ml:gap-3 max-md:hidden`}>
        <a href='/' className='text-xl  md:max-ml:text-lg  md:max-lg:font-semibold'> Type</a>
        <a href='/' className='text-xl  md:max-ml:text-lg  md:max-lg:font-semibold'> Sefer</a>
        <a href='/' className='text-xl  md:max-ml:text-lg  md:max-lg:font-semibold'> AboutUs</a>
        <a href='/' className='text-xl  md:max-ml:text-lg  md:max-lg:font-semibold'> Service</a>
        <a href='/' className='text-xl  md:max-ml:text-lg  md:max-lg:font-semibold'>Blog</a>
        <a href='/' className='text-xl  md:max-ml:text-lg  md:max-lg:font-semibold'> Contact</a>
      </div>

      <button className='hover:bg-[#d07431] bg-[#ff6900] px-10 py-1 md:max-lg:px-5 text-white font-medium	text-xl max-md:hidden' >Login</button>
       
      <button className={`md:hidden ${!isTrasparent && 'text-white'}`}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
             <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
      </svg>
      </button>

    </div>
    
    </div>
  
    )
}

export default Navbar