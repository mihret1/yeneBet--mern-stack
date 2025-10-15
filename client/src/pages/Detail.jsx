import Navbar from "../components/Navbar"
import { useState } from "react"

import t1 from '../assets/Cat/t1.jpg'
import t2 from '../assets/Cat/t2.jpg'
import t3 from '../assets/Cat/t3.jpg'
import t5 from '../assets/Cat/t5.jpg'


import { IconButton } from '@mui/material';


import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import ChairIcon from '@mui/icons-material/Chair';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const DetailHome=()=>{
      const [imageArrow ,setImageArrow]=useState(false)
      const [imageNumber,setImageNumber]=useState(1)
      const [fav,setFav]=useState(false)

     const [detail_list,setDetail_list]=useState(1)

    return(
        <div className="  "> 
        <div className=" bg-black ">
             <Navbar />
        </div>
     
         <div className="px-[2%] flex flex-col gap-3 w-full ">
            <div className="shadow-2xl flex justify-around py-10 max-lg:flex-col max-lg:gap-3">
              <div className='flex flex-col gap-2'>
                 <h1 className="text-3xl font-semibold font-mono max-sm:text-xl">Tsehay realstate&nbsp;
                   <span className="px-2 text-lg  bg-red-600 text-white py-1 rounded-md">for Sale</span>
                </h1>
                <span className="text-lg text-gray-500">Addis Ababa - Bole</span>
                <div className="flex flex-row gap-4 text-lg max-md:grid   max-md:grid-cols-2">
                    <span><BedIcon /> 2 Bedroom</span>
                    <span><BathtubIcon /> 3 Bathroom</span>
                    <span><ChairIcon /> 3 room</span>
                    <span><SquareFootIcon/> 6000 Sq ft </span>
                    <span><WarehouseIcon /> 1 Garage</span>

                </div>
              </div>
              <div className="flex flex-col gap-2">
               <p className="text-2xl text-orange-500 pb-2 font-bold"> 1,076,666/<span className=" text-black text-lg font-medium">Start From</span></p>
               <p><span className="px-2 py-1 border rounded-full border-black border-dashed font-semibold ">Wi fi</span>&nbsp;<span className="px-2 font-semibold border rounded-full border-black border-dashed py-1">Swimming pool</span></p>

              </div>
           
            </div>
            <div className="flex gap-3 ">
                
                <div className=" px-2  w-full ">
                    <div className="flex bg-white gap-3 text-xl border-b-[1px] border-gray-500 text-gray-600 h-16 items-center ">
                      <button onClick={()=>setDetail_list(1)}>Detail</button>
                      <button onClick={()=>setDetail_list(2)}>Video</button>                      
                    </div>
                    
                    { detail_list ==1 &&
                      <div className="">
                         <h1 className="text-xl"> Detail</h1>
                         <div className='bg-black flex flex-row justify-center shadow-2xl '>
                           <button> <ArrowBackIosIcon sx={{ color:'white'}} /></button>
                             <img src={t1} className='w-[90%]' style={{ }}/>
                           <button>  <ArrowForwardIosIcon sx={{ color:'white'}} />  </button>                       
                         </div>

                        <div className=" mt-10  bg-white p-4 shadow-2xl">
                           <h1 className="text-xl border-b-[1px] pb-2">Description</h1>
                           <div className="text-lg flex flex-col gap-3" >
                           

                    <p>- Bole, fully furnished three-bedroom apartment available for rent in Addis Ababa.</p>

                   <p>-  Located in a secure and convenient residential area, the apartment is on the third floor of a modern building.</p>

                    <p>- It features a spacious living and dining area with a balcony, a well-equipped kitchen with a laundry section, a master bedroom with an en-suite bathroom and balcony, two additional bedrooms, a shared bathroom, and a private parking space for one car.</p>

                    <p>- The building is equipped with an elevator, standby generator, and 24-hour security service.</p>

                    <p>- Monthly rent: 125,000 birr (negotiable).</p>
                           </div>
                        </div>

                        <div className="mt-10  bg-white p-4 shadow-2xl">
                          <h1 className="text-3xl border-b-[1px] pb-2 text-gray-800">Details</h1>
                          <div className="flex  pt-3 justify-around max-sm:flex-col bg-orange-200 py-8">
                                <div className="flex flex-col gap-3 text-lg text-gray-900">
                                  <p><span className="font-medium  text-black pr-8 ">Property Id:</span> 1234</p>
                                  <p><span className="font-medium  text-black pr-8 ">Price :</span>2 million</p>
                                  <p><span className="font-medium  text-black pr-8 ">Bedroom :</span> 3</p>
                                  <p><span className="font-medium  text-black pr-8">Bathroom :</span> 2</p>
                                  <p><span className="font-medium  text-black pr-8">Property size:</span> 700m²</p>
                                  <p><span className="font-medium  text-black pr-8">Land Area: </span>700m²</p>

                                </div>
                                <div className="flex flex-col gap-3 text-lg text-gray-900">
                                  <p><span className="font-medium  text-black pr-8 ">Property Id:</span> 1234</p>
                                  <p><span className="font-medium  text-black pr-8 ">Price Id:</span> 1234</p>
                                  <p><span className="font-medium  text-black pr-8 ">Bedroom :</span> 3</p>
                                  <p><span className="font-medium  text-black pr-8">Bathroom :</span> 2</p>
                                  <p><span className="font-medium  text-black pr-8">Property size:</span> 700m²</p>
                                  <p><span className="font-medium  text-black pr-8">Land Area: </span>700m²</p>

                                </div>
                          </div>
                        </div>
                      </div>
                    }

                     


                     { detail_list ==2 &&
                      <div>
                         <h1 className="text-xl"> Video</h1>

                      </div>
                    }
                  
                </div>




  
                <div className="w-[550px] bg-white shadow-2xl max-lg:hidden ">
                  hello interested
                </div>
            </div>
         </div>
     
         
        
    </div>
    )
}

export default DetailHome