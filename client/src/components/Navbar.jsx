
import img1 from '../assets/b.jpg'
import { useState,useEffect } from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useNavigate } from 'react-router-dom';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

function Navbar() {
  const [isTrasparent,setIsTransparent]=useState(false)
  const [navIcon,setNavIcon]=useState(false)
  
  const navigate = useNavigate();

 const handleChangeCity = (e) => { 
    const url = e.target.value;
    if (url) {
      navigate(url);
      e.target.selectedIndex = 0
    }
  };
  const handleChangeType = (e) => { 
    const url = e.target.value;
    if (url) {
      navigate(url);
      e.target.selectedIndex = 0
    }
  };

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
    <div className='hede  '>
      <div className={`z-50  ${isTrasparent &&   'fixed   '} w-[100%] flex flex-row  h-[93px] items-center  justify-between px-3 lgg:px-7   ${isTrasparent && 'shadow-3xl'} ${isTrasparent? 'bg-white' :'bg-transparent'}  ${(navIcon && !isTrasparent ) && 'max-lg:bg-white max-lg:fixed' }`}>

      <a href='/'>
      <div className='flex items-center gap-1'>
        <img src={img1} className='w-20 h-20 rounded-full max-lg:w-16 max-lg:h-16'/>
        <h1 className={` ${!isTrasparent && 'text-white'} ${navIcon && !isTrasparent && 'max-lg:text-black'} font-bold text-3xl font-mono max-lg:text-2xl	`}>YeneBet</h1>
      </div>
      </a>

      <div className={`linke  ${!isTrasparent && 'text-white'} flex flex-row gap-5 lg:max-lgg:gap-[13px] max-lg:hidden`}>
        <a href='/' className='text-xl  md:max-ml:text-lg  md:max-lg:font-semibold'>Home</a>
        
        <a href='/allhouse' className='text-xl   md:max-ml:text-lg  md:max-lg:font-semibold'>All House</a>
         <select      onChange={handleChangeCity} defaultValue=""
              className={`outline-none cursor-pointer no-arrow hover:text-orange-400 bg-transparent ${!isTrasparent && 'text-white'} w-14  text-center text-xl  md:max-ml:text-lg  md:max-lg:font-semibold`}>
           <option value=""   className='text-white'> <a href='/town' >Cities</a></option>
           <option value="/town" className='text-black text-lg'> Addis Ababa</option>
           <option value="/town"  className='text-black text-lg'>Hawassa</option>
           <option value="/town"   className='text-black text-lg'>Debre Zeyt</option>
           <option value="/town" className='text-black text-lg'> Adama</option>
           <option value="/town" className='text-black text-lg'>Bahirdar</option>
           <option value="/town" className='text-black text-lg'> Diredawa</option>
           <option value="/town" className='text-black text-lg'>Mekele</option>
           <option value="/town" className='text-black text-lg'>hossana</option>

         </select>
        {/* <a href='/town' className='text-xl  md:max-ml:text-lg  md:max-lg:font-semibold'>Towns</a> */}
        
        {/* <a href='/type' className='text-xl  md:max-ml:text-lg  md:max-lg:font-semibold'> Type</a> */}
         <select   onChange={handleChangeType} defaultValue=""
              className={`outline-none  no-arrow hover:text-orange-400 bg-transparent ${!isTrasparent && 'text-white'} w-14  text-center text-xl  md:max-ml:text-lg  md:max-lg:font-semibold`}>
           <option value=""   className='text-white'> <a href='/town' >Type</a></option>
           <option value="/type" className='text-black text-lg'> Apartment</option>
           <option value="/type"  className='text-black text-lg'>Condominium</option>
           <option value="/type"   className='text-black text-lg'>Villa</option>
           <option value="/type" className='text-black text-lg'>Guest House</option>
           <option value="/type" className='text-black text-lg'>Compound</option>
           <option value="/type" className='text-black text-lg'>Single House</option>
          

         </select>

        <a href='/sale' className='text-xl  md:max-ml:text-lg  md:max-lg:font-semibold'> Sale</a>
        <a href='/rent' className='text-xl  md:max-ml:text-lg  md:max-lg:font-semibold'> Rent</a>
        <a href='/fav' className='text-xl  md:max-ml:text-lg  md:max-lg:font-semibold'>Favorite</a>
        <a href='/aboutus' className='text-xl  md:max-ml:text-lg  md:max-lg:font-semibold'> AboutUs</a>
        {/* <a href='/' className='text-xl  md:max-ml:text-lg  md:max-lg:font-semibold'> Service</a> */}
        <a href='/contactus' className='text-xl  md:max-ml:text-lg  md:max-lg:font-semibold'> Contact</a>
      </div>
       
       <div className='flex items-center gap-2  max-lg:hidden'> 
          <a href='/post' className='hover:bg-[#d07431] bg-[#ff6900] lg:px-5 py-1 md:max-lg:px-2 text-white font-medium	text-xl' >Post</a>
          <a href='/auth'><AccountCircleOutlinedIcon className={` hover:text-blue-500 ${!isTrasparent && 'text-white'}`} sx={{ fontSize:30 }} /></a>
       </div>
     
      <button onClick={()=>setNavIcon((e)=>!e)}  className={`lg:hidden  ${!navIcon && !isTrasparent && 'text-white'} `}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
             <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
      </svg>
      </button>

    
    
      </div>
    { navIcon && <div className={`  mt-[93px] px-2 fixed lg:hidden bg-white justify-between w-[100%] flex flex-col    `}>
               <a href='/' className='text-xl border-b-[1px]  md:max-ml:text-lg  md:max-lg:font-semibold'><ArrowRightAltIcon  style={{color:'#ff6900'}}/>Home</a>

        <a href='/allhouse' className='text-xl border-b-[1px]  md:max-ml:text-lg  md:max-lg:font-semibold'><ArrowRightAltIcon  style={{color:'#ff6900'}}/> All House</a>
        {/* <a href='/town' className='text-xl border-b-[1px]  md:max-ml:text-lg  md:max-lg:font-semibold'><ArrowRightAltIcon  style={{color:'#ff6900'}}/>  Towns</a> */}
        <select      onChange={handleChangeCity} defaultValue=""
              className={`outline-none border-b-[1px] w-full cursor-pointer no-arrow hover:text-orange-400 bg-transparent } w-20   text-xl  md:max-ml:text-lg  md:max-lg:font-semibold`}>
           <option value=""   className='text-white'>  <ArrowRightAltIcon  style={{color:'#ff6900'}}/> →   Cities</option>
           <option value="/town" className='text-black text-lg'> Addis Ababa</option>
           <option value="/town"  className='text-black text-lg'>Hawassa</option>
           <option value="/town"   className='text-black text-lg'>Debre Zeyt</option>
           <option value="/town" className='text-black text-lg'> Adama</option>
           <option value="/town" className='text-black text-lg'>Bahirdar</option>
           <option value="/town" className='text-black text-lg'> Diredawa</option>
           <option value="/town" className='text-black text-lg'>Mekele</option>
           <option value="/town" className='text-black text-lg'>hossana</option>

         </select>
        {/* <a href='/type' className='text-xl border-b-[1px]  md:max-ml:text-lg  md:max-lg:font-semibold'><ArrowRightAltIcon  style={{color:'#ff6900'}}/>  Type</a> */}
          <select   onChange={handleChangeType} defaultValue=""
              className={`outline-none border-b-[1px] w-full no-arrow hover:text-orange-400 bg-transparent   text-xl  md:max-ml:text-lg  md:max-lg:font-semibold`}>
           <option value=""   className='text-white'> <a href='/town' > → Type</a></option>
           <option value="/type" className='text-black text-lg'> Apartment</option>
           <option value="/type"  className='text-black text-lg'>Condominium</option>
           <option value="/type"   className='text-black text-lg'>Villa</option>
           <option value="/type" className='text-black text-lg'>Guest House</option>
           <option value="/type" className='text-black text-lg'>Compound</option>
           <option value="/type" className='text-black text-lg'>Single House</option>
          

         </select>
        <a href='/sale' className='text-xl border-b-[1px] md:max-ml:text-lg  md:max-lg:font-semibold'><ArrowRightAltIcon  style={{color:'#ff6900'}}/>  Sale</a>
        <a href='/rent' className='text-xl border-b-[1px] md:max-ml:text-lg  md:max-lg:font-semibold'><ArrowRightAltIcon  style={{color:'#ff6900'}}/>  Rent</a>
        <a href='/fav' className='text-xl border-b-[1px]  md:max-ml:text-lg  md:max-lg:font-semibold'><ArrowRightAltIcon  style={{color:'#ff6900'}}/>Favorite</a>
        <a href='/aboutus' className='text-xl border-b-[1px] md:max-ml:text-lg  md:max-lg:font-semibold'><ArrowRightAltIcon  style={{color:'#ff6900'}}/>  AboutUs</a>
        {/* <a href='/' className='text-xl border-b-[1px] md:max-ml:text-lg  md:max-lg:font-semibold'><ArrowRightAltIcon  style={{color:'#ff6900'}}/>  Service</a> */}
        <a href='/contactus' className='text-xl border-b-[1px] md:max-ml:text-lg  md:max-lg:font-semibold'><ArrowRightAltIcon  style={{color:'#ff6900'}}/>  Contact</a>
        <div className='flex flex-col  gap-2 mt-2 mb-2  '> 
          <a href='/post' className='w-20  hover:bg-[#d07431] bg-[#ff6900] px-4 py-1 md:max-lg:px-3 text-white font-medium	text-xl' >Post</a>
           <span className='border-y-[1px]'>
                <a href='/auth'><AccountCircleOutlinedIcon className={` hover:text-blue-500 `} sx={{ fontSize:30 }} /></a>

           </span>
       </div>
    </div>
   }

    </div> 
  
    )
}

export default Navbar