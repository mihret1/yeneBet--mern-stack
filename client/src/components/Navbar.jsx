
import img1 from '../assets/b.jpg'
import { useState,useEffect } from 'react'

function Navbar() {
  const [isTrasparent,setIsTransparent]=useState(false)
  
  useEffect(()=>{
    const handleTransparent=()=>{
      if(window.scrollY >=70){
        setIsTransparent(true)
      }else{
        setIsTransparent(false)
      }
    }
    window.addEventListener('scroll',handleTransparent)
    return ()=>{window.removeEventListener('scroll',handleTransparent)}
    
  },[])

  return (
    <>
    <div className={`hede  ${isTrasparent &&  'fixed'} w-[100%] flex flex-row  h-[93px] items-center  justify-between px-10 ${isTrasparent && 'shadow-2xl'} ${isTrasparent? 'bg-white' :'bg-transparent'} `}>

      <a href='/'>
      <div className='flex items-center gap-1'>
        <img src={img1} className='w-20 h-20 rounded-full max-lg:w-16 max-lg:h-16'/>
        <h1 className={` ${!isTrasparent && 'text-white'} font-bold text-3xl font-mono max-lg:text-2xl	`}>YeneBet</h1>
      </div>
      </a>

      <div className={` ${!isTrasparent && 'text-white'} flex flex-row gap-5 max-lg:hidden`}>
        <a href='/' className='text-xl'> Type/Sefer</a>
        <a href='/' className='text-xl'> AboutUs</a>
        <a href='/' className='text-xl'> Service</a>
        <a href='/' className='text-xl'>Blog</a>
        <a href='/' className='text-xl'> Contact</a>
      </div>

      <button className='bg-[#ff6900] px-10 py-1 text-white font-medium	text-xl max-lg:hidden' >Login</button>
       
      <button className={`lg:hidden ${!isTrasparent && 'text-white'}`}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
             <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
      </svg>
      </button>

    </div>
    
    </>
  
    )
}

export default Navbar