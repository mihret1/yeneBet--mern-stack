import Navbar from "../components/Navbar"
import { useState } from "react"

import t1 from '../assets/Cat/t1.jpg'
import t2 from '../assets/Cat/t2.jpg'
import t3 from '../assets/Cat/t3.jpg'
import t5 from '../assets/Cat/t5.jpg'


import { IconButton } from '@mui/material';

import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';


import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import AdjustOutlinedIcon from '@mui/icons-material/AdjustOutlined';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import CallSplitIcon from '@mui/icons-material/CallSplit';


const Rent=()=>{
      const [imageArrow ,setImageArrow]=useState(false)
      const [imageNumber,setImageNumber]=useState(1)
      const [fav,setFav]=useState(false)

 const Cardd=(props)=>{
    return(
      <div className='w-[350px] max-xsx:w-[320px] lg:max-lgg:w-[340px] shadow-2xl rounded-lg hover:shadow-md hover:bg-orange-50   '>
        {/* for image part */}

         <div onMouseEnter={()=>setImageArrow(true)} onMouseLeave={()=>setImageArrow(false)}  className='flex flex-col justify-between p-2 h-[190px] bg-cover	w-[350px] max-xsx:w-[320px] lg:max-lgg:w-[340px] rounded-t' 
             style={{
            ...(imageNumber===1 && {backgroundImage:`url(${props.imgg1})`} ), 
            ...(imageNumber===2 && {backgroundImage:`url(${props.imgg2})`} ), 
            ...(imageNumber===3 && {backgroundImage:`url(${props.imgg3})`} ), 
            ...(imageNumber===4 && {backgroundImage:`url(${props.imgg4})`} ) 

              }}>
          <div className='flex justify-between'>
            <button className=' px-4  rounded-md font-semibold text-white  ' style={{ backgroundColor:`${props.bcolor}`}} >
              {props.bname}
            </button>
            <div className= ' camera text-white  max-xsx:px-2 rounded-md  '>
              <CameraAltOutlinedIcon sx={{ marginRight:1 }} fontSize='small' /> 4
            </div>
          </div>

          { imageArrow && <div className='flex justify-between pt-6 '>
              <button onClick={()=>{if(imageNumber>1){setImageNumber((e)=>e-1)} }}>
                 <KeyboardArrowLeftIcon sx={{color:'#FF6531' ,fontSize:33}}/>
              </button>
              <button onClick={()=>{if(imageNumber<4){setImageNumber((e)=>e+1)}}}>
                <KeyboardArrowRightIcon  sx={{color:'#FF6531', fontSize:33}}/>
              </button>
            </div>
          }

          <div className=' flex pl-32 max-xsx:pl-20'>
            <div className='flex items-center text-white pr-16 pt-10'>
                <button onClick={()=>setImageNumber(1)} style={{...( imageNumber===1 && {color:'#FF6531'})}} ><AdjustOutlinedIcon/></button>
                <button onClick={()=>setImageNumber(2)} style={{...( imageNumber===2 && {color:'#FF6531'})}}> <AdjustOutlinedIcon/></button> 
                <button onClick={()=>setImageNumber(3)} style={{...( imageNumber===3 && {color:'#FF6531'})}}> <AdjustOutlinedIcon/> </button>
                <button onClick={()=>setImageNumber(4)} style={{...( imageNumber===4 && {color:'#FF6531'})}}><AdjustOutlinedIcon/> </button>
            </div>
            <div className=' flex flex-col gap-1 place-self-end  '>
              
                <IconButton onClick={()=>setFav((e)=>!e)} sx={{height:27, zIndex:10,  backgroundColor:'white' ,color:'black', borderRadius:1, '&:hover':{backgroundColor:'white'}}}>
                 {!fav ? <FavoriteBorderOutlinedIcon /> : <FavoriteIcon  sx={{ color:'red' }} /> }
                </IconButton>
                
                <IconButton sx={{height:27,  backgroundColor:'white' ,color:'black', borderRadius:1, '&:hover':{backgroundColor:'white'}}}>
                <ShuffleIcon fontSize='small'/>
                </IconButton>
            </div>
         
          </div>

         </div>
        
        {/* the text part */}
         <div className='p-4'>
          <span className='text-gray-500 font-semibold tracking-wide text-[16px] '>BOLE</span>
          <h1 className='font-bold text-lg'>Two Bed Room villa</h1>
          <p className='text-[#FF6531] font-bold text-base '>12,000*</p>
          <p className=' text-gray-500 font-sans text-[15px] font-semibold'>In Publishing and Graphic design, Lorem ipsum is a placeholder text
             commonly used to demonstrate the visual form of a document or a typeface 
             without.
          </p>
          <div className='flex max-xsx:flex-col justify-between mt-3'>
            <div className='flex font-semibold items-center gap-1'><BedIcon />  Bed : {props.bedNo} <div className='h-4 w-[1px] bg-black ml-2'></div> </div>
            <div className='flex font-semibold items-center gap-1'><BathtubIcon />  Bath : {props.bathNo} <div className='h-4 w-[1px] bg-black ml-3'></div> </div>
            <div className='flex font-semibold items-center'><CallSplitIcon />Sq Ft : {props.kare}  </div>
          </div>
          <div className='flex justify-between mt-3 items-center'>
            <span className='text-gray-500 font-semibold'  >{props.date}</span>
            <a href='/detail' className=' border border-black	rounded-2xl border-dashed px-4 py-1  text-gray-500 font-semibold'><button >Details</button></a>
          </div>
         </div>
      
      </div>
    )
  }

    return(
        <div className="  "> 
        <div className=" bg-black ">
             <Navbar />
        </div>
        
        <div className=" w-full">
          
          <h1 className="text-green-700 text-center text-4xl max-sm:text-3xl font-serif py-3">Houses for Rent</h1>
          <nav className=" w-full  pt-4 flex flex-row justify-center gap-3    max-ml:grid max-ml:grid-cols-4 max-sm:grid-cols-2 max-md:grid-cols-3 place-items-center text-xl max-sm:text-lg ">
              <span onClick={()=>{}} className="px-8 py-1 font-medium bg-orange-300   rounded-2xl ">Villa</span>
              <span  className="px-4 py-1 bg-orange-300   rounded-2xl font-medium ">Guest House</span>
              <span className="px-4 py-1 bg-orange-300   rounded-2xl font-medium ">Condominium</span>
              <span className="px-4 py-1 bg-orange-300   rounded-2xl font-medium">Apartment</span>
              <span className="px-4 py-1 bg-orange-300   rounded-2xl font-medium">Compound</span>
              <span className="px-4 py-1 bg-orange-300   rounded-2xl font-medium">Single House</span>
          </nav>
          <div className="px-1 flex flex-row xsx:justify-items-center max-sm:mt-6  max-xl:grid max-sm:grid-cols-3 sm:max-ml:grid-cols-4 ml:max-xl:grid-cols-5  gap-3 xl:gap-6 justify-center w-full  text-lg  pt-4"> 
            <span><input type="checkbox" /> Addis Abeba</span>
             <span> <input type="checkbox" /> Hawassa</span>
            <span><input type="checkbox" /> Adama</span>
            <span><input type="checkbox" /> Debere zeyt</span>
            <span><input type="checkbox" /> Mojo</span>
            <span><input type="checkbox" /> Bahir dar</span>
            <span><input type="checkbox" /> hossana</span>
            <span><input type="checkbox" /> harer</span>
            <span><input type="checkbox" /> somalia</span>
            <span><input type="checkbox" /> harer</span>
            <span><input type="checkbox" /> somalia</span>


          </div>
       
       </div>  

         <div className='mt-16 grid grid-cols-3 gap-7 max-md:grid-cols-1 md:max-lg:grid-cols-2 justify-items-center'>
                    <Cardd 
                     imgg1={t2}
                     imgg2={t3}
                     imgg3={t1}
                     imgg4={t5}
                     bname='Sale'
                     bedNo='4'
                     bathNo='2'
                     kare='3000'
                     bcolor='#FF6531'
                     date='August 4,2025'
                     />
                      <Cardd 
                     imgg1={t5}
                     imgg2={t3}
                     imgg3={t1}
                     imgg4={t2}
                     bname='Rent'
                     bedNo='4'
                     bathNo='2'
                     kare='5000'
                     bcolor='green'
                     date='August 4,2025'
                     />
                      <Cardd 
                     imgg1={t2}
                     imgg2={t3}
                     imgg3={t1}
                     imgg4={t5}
                     bname='Sale'
                     bedNo='4'
                     bathNo='2'
                     kare='5000'
                     bcolor='#FF6531'
                     date='August 4,2025'
                     /> 
                     <Cardd 
                     imgg1={t2}
                     imgg2={t3}
                     imgg3={t1}
                     imgg4={t5}
                     bname='Sale'
                     bedNo='4'
                     bathNo='2'
                     kare='5000'
                     bcolor='#FF6531'
                     date='August 4,2025'
                     /> 
                     <Cardd 
                     imgg1={t2}
                     imgg2={t3}
                     imgg3={t1}
                     imgg4={t5}
                     bname='Sale'
                     bedNo='4'
                     bathNo='2'
                     kare='5000'
                     bcolor='#FF6531'
                     date='August 4,2025'
                     />
                      <Cardd 
                     imgg1={t2}
                     imgg2={t3}
                     imgg3={t1}
                     imgg4={t5}
                     bname='Sale'
                     bedNo='4'
                     bathNo='2'
                     kare='5000'
                     bcolor='#FF6531'
                     date='August 4,2025'
                     />
                      <Cardd 
                     imgg1={t2}
                     imgg2={t3}
                     imgg3={t1}
                     imgg4={t5}
                     bname='Sale'
                     bedNo='4'
                     bathNo='2'
                     kare='3000'
                     bcolor='#FF6531'
                     date='August 4,2025'
                     />
                      <Cardd 
                     imgg1={t2}
                     imgg2={t3}
                     imgg3={t1}
                     imgg4={t5}
                     bname='Sale'
                     bedNo='4'
                     bathNo='2'
                     kare='3000'
                     bcolor='#FF6531'
                     date='August 4,2025'
                     />
                      <Cardd 
                     imgg1={t2}
                     imgg2={t3}
                     imgg3={t1}
                     imgg4={t5}
                     bname='Sale'
                     bedNo='4'
                     bathNo='2'
                     kare='3000'
                     bcolor='#FF6531'
                     date='August 4,2025'
                     />
             
             
             
             
        </div>
        
    </div>
    )
}

export default Rent