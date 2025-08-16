
import img1 from '../assets/b.jpg'
import { useState,useEffect } from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

function Navbar() {
  const [isTrasparent,setIsTransparent]=useState(false)
  const [navIcon,setNavIcon]=useState(false)
  
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
    <div className='hede '>
      <div className={`z-50  ${isTrasparent &&   'fixed   '} w-[100%] flex flex-row  h-[93px] items-center  justify-between px-10 ${isTrasparent && 'shadow-3xl'} ${isTrasparent? 'bg-white' :'bg-transparent'}  ${(navIcon && !isTrasparent ) && 'max-lg:bg-white max-lg:fixed' }`}>

      <a href='/'>
      <div className='flex items-center gap-1'>
        <img src={img1} className='w-20 h-20 rounded-full max-lg:w-16 max-lg:h-16'/>
        <h1 className={` ${!isTrasparent && 'text-white'} ${navIcon && !isTrasparent && 'max-lg:text-black'} font-bold text-3xl font-mono max-lg:text-2xl	`}>YeneBet</h1>
      </div>
      </a>

      <div className={`linke  ${!isTrasparent && 'text-white'} flex flex-row gap-5 lg:max-lgg:gap-[13px] max-lg:hidden`}>
        <a href='/' className='text-xl  md:max-ml:text-lg  md:max-lg:font-semibold'>All House</a>
        <a href='/' className='text-xl  md:max-ml:text-lg  md:max-lg:font-semibold'>Towns</a>
        <a href='/' className='text-xl  md:max-ml:text-lg  md:max-lg:font-semibold'> Type</a>
        <a href='/' className='text-xl  md:max-ml:text-lg  md:max-lg:font-semibold'> Sale</a>
        <a href='/' className='text-xl  md:max-ml:text-lg  md:max-lg:font-semibold'> Rent</a>
        <a href='/' className='text-xl  md:max-ml:text-lg  md:max-lg:font-semibold'> AboutUs</a>
        <a href='/' className='text-xl  md:max-ml:text-lg  md:max-lg:font-semibold'> Service</a>
        <a href='/' className='text-xl  md:max-ml:text-lg  md:max-lg:font-semibold'> Contact</a>
      </div>

      <button className='hover:bg-[#d07431] bg-[#ff6900] px-10 py-1 md:max-lg:px-5 text-white font-medium	text-xl max-lg:hidden' >Login</button>
       
      <button onClick={()=>setNavIcon((e)=>!e)}  className={`lg:hidden  ${!navIcon && !isTrasparent && 'text-white'} `}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
             <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
      </svg>
      </button>

    
    
      </div>
    { navIcon && <div className={`  mt-[93px] px-2 fixed lg:hidden bg-white justify-between w-[100%] flex flex-col  h-80   `}>
        <a href='/' className='text-xl border-b-[1px]  md:max-ml:text-lg  md:max-lg:font-semibold'><ArrowRightAltIcon  style={{color:'#ff6900'}}/> All House</a>
        <a href='/' className='text-xl border-b-[1px]  md:max-ml:text-lg  md:max-lg:font-semibold'><ArrowRightAltIcon  style={{color:'#ff6900'}}/>  Towns</a>
        <a href='/' className='text-xl border-b-[1px]  md:max-ml:text-lg  md:max-lg:font-semibold'><ArrowRightAltIcon  style={{color:'#ff6900'}}/>  Type</a>
        <a href='/' className='text-xl border-b-[1px] md:max-ml:text-lg  md:max-lg:font-semibold'><ArrowRightAltIcon  style={{color:'#ff6900'}}/>  Sale</a>
        <a href='/' className='text-xl border-b-[1px] md:max-ml:text-lg  md:max-lg:font-semibold'><ArrowRightAltIcon  style={{color:'#ff6900'}}/>  Rent</a>
        <a href='/' className='text-xl border-b-[1px] md:max-ml:text-lg  md:max-lg:font-semibold'><ArrowRightAltIcon  style={{color:'#ff6900'}}/>  AboutUs</a>
        <a href='/' className='text-xl border-b-[1px] md:max-ml:text-lg  md:max-lg:font-semibold'><ArrowRightAltIcon  style={{color:'#ff6900'}}/>  Service</a>
        <a href='/' className='text-xl border-b-[1px] md:max-ml:text-lg  md:max-lg:font-semibold'><ArrowRightAltIcon  style={{color:'#ff6900'}}/>  Contact</a>
    </div>
   }

    </div> 
  
    )
}

export default Navbar