import Navbar from "../components/Navbar"
import { useState } from "react"

import t1 from '../assets/Cat/t1.jpg'
import t2 from '../assets/Cat/t2.jpg'
import t3 from '../assets/Cat/t3.jpg'
import t5 from '../assets/Cat/t5.jpg'

import tg from '../assets/tg.jpg'
import { IconButton } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
// import TiktokIcon from '@mui/icons-material/Tiktok';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { FaTiktok } from "react-icons/fa";



import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import ChairIcon from '@mui/icons-material/Chair';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';

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
                           <div className="text-lg flex flex-col gap-3 pt-4" >
                           
                                <p>- Bole, fully furnished three-bedroom apartment available for rent in Addis Ababa.</p>

                                <p>-  Located in a secure and convenient residential area, the apartment is on the third floor of a modern building.</p>

                                <p>- It features a spacious living and dining area with a balcony, a well-equipped kitchen with a laundry section, a master bedroom with an en-suite bathroom and balcony, two additional bedrooms, a shared bathroom, and a private parking space for one car.</p>

                                <p>- The building is equipped with an elevator, standby generator, and 24-hour security service.</p>

                                <p>- Monthly rent: 125,000 birr (negotiable).</p>
                           </div>
                        </div>

                        <div className="mt-10  bg-white p-4 shadow-2xl">
                          <h1 className="text-2xl border-b-[1px] pb-2 text-gray-800">Address</h1>
                            <div className="w-72  max-sm:w-44 flex flex-col gap-2 ">
                              <div className="flex text-lg justify-between border-b-[1px] py-2 pr-4"> <span>Area</span> <span>Bole</span> </div>
                                {/* <div className="flex text-lg justify-between"> <span>Area</span> <span>Bole</span> </div> */}
                              <div className="flex text-lg justify-between border-b-[1px] py-2 pr-4"> <span>State</span> <span>Addis Abeba</span> </div>
                              <div className="flex text-lg justify-between border-b-[1px] py-2 pr-4"> <span>Country</span> <span>Ethiopia</span> </div>

                            </div>

                        </div>


                        <div className="mt-10  bg-white p-4 shadow-2xl ">
                          <h1 className="text-2xl border-b-[1px] pb-2 text-gray-800">Details</h1>
                          <div className="flex  mt-3 justify-around max-sm:flex-col bg-orange-200 py-8">
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

                        <div className="mt-10  bg-white p-4 shadow-2xl">
                           <h1 className=" border-b-2 pb-3 text-2xl"> Features</h1>
                           <div className=" text-lg grid pt-2 grid-cols-3 max-sm:grid-cols-2 gap-2 text-gray-800 font-sans">
                              <span><CheckBoxOutlinedIcon /> 24/7 Security</span>
                              <span><CheckBoxOutlinedIcon /> Parking</span>
                              <span><CheckBoxOutlinedIcon /> Balcony</span>
                              <span><CheckBoxOutlinedIcon /> Internet</span>
                              <span><CheckBoxOutlinedIcon /> Garden</span>
                              <span><CheckBoxOutlinedIcon /> Generator</span>
                              <span><CheckBoxOutlinedIcon /> Garage</span>

                           </div>
                        </div>
                        <div className=" mt-10  bg-white p-4 shadow-2xl">
                           <h1 className="text-2xl border-b-[1px] pb-2">Location on Map</h1>
                        <iframe  className="w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63054.73287609015!2d38.83204485!3d8.979435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b9b33a3569139%3A0xb505349b8c87fdd2!2sBole%2C%20Addis%20Ababa!5e0!3m2!1sen!2set!4v1760629876105!5m2!1sen!2set"
                         width="600" height="450" style={{ border:0 }} allowfullscreen="" 
                        loading="lazy" referrerpolicy="no-referrer-when-downgrade">

                        </iframe>
                        </div>
                        <div className=" mt-10  bg-white p-4 shadow-2xl">
                           <h1 className="text-2xl border-b-[1px] pb-2">Contact Infomation</h1>
                           <div className=" flex max-md:flex-col gap-12 pt-4 text-lg"  >
                              <div className="flex flex-col gap-2">
                                <span className="">
                                  <LanguageIcon /> www.yenebet.com
                                </span>
                                <span className="">
                                  <LocalPhoneIcon/> 0911223344
                                </span><span className="">
                                  <WhatsAppIcon /> 0955667788
                                </span>
                                <span className="">
                                  <TelegramIcon /> @yenebet
                                </span>
                                <div className="flex gap-2">
                                   <a href='https://www.tiktok.com/'  target="_blank" rel="noopener noreferrer"><FacebookIcon /></a>
                                   <a href='https://www.tiktok.com/'  target="_blank" rel="noopener noreferrer"><YouTubeIcon /></a>
                                   <a href='https://www.tiktok.com/'  target="_blank" rel="noopener noreferrer"><InstagramIcon /></a>
                                   <a href='https://www.tiktok.com/'  target="_blank" rel="noopener noreferrer"><LinkedInIcon /></a>
                                   <a href='https://www.tiktok.com/'  target="_blank" rel="noopener noreferrer"><FaTiktok className="text-black text-xl hover:text-gray-700" /></a>

                                   </div>
                              </div>
                              <img src={tg} className="w-48"/>
                           </div>
                        </div>
                        
                        <div className="w-[550px] max-xsx:w-[300px] xsx:max-sm:w-[430px]  bg-white shadow-2xl lg:hidden px-3  mt-10   p-4  ">
                   <h1 className="text-orange-700 text-2xl font-serif leading-relaxed">Interested on this house? </h1>
                   <form className="flex flex-col gap-3">
                     <input placeholder="Name" type="text"  className="border rounded-md border-orange-400 text-lg focus:outline-orange-300 px-3 py-2 w-full"/>
                     <input placeholder="Phone" type="text"  className="border rounded-md border-orange-400 text-lg focus:outline-orange-300 px-3 py-2 w-full"/>
                     <input placeholder="Email" type="text"  className="border rounded-md border-orange-400 text-lg focus:outline-orange-300 px-3 py-2 w-full"/>
                     <textarea placeholder="Name" type="text"   className="border h-32 text-gray-800 rounded-md border-orange-400 text-lg focus:outline-orange-300 px-3 py-2 w-full">
                       I want this house...
                     </textarea>
                     <button type="submit" className="bg-black text-white text-xl py-2 rounded-md">Send</button>
                      <div className="flex w-full gap-3 max-w-full">
                            <button className="bg-orange-400 flex-1 py-1 rounded-md text-lg">Call</button>
                            <button className="bg-orange-400 flex-1 py-1 rounded-md text-lg">Telegram</button>
                            <button className="bg-orange-400 flex-1 py-1 rounded-md text-lg">WhatsApp</button>


                      </div>
                   </form>
                       </div>
                      
                      </div>
                    }

                     


                     { detail_list ==2 &&
                      <div>
                         <h1 className="text-xl"> Video</h1>

                      </div>
                    }
                  
                </div>




  
                <div className="w-[550px]  bg-white shadow-2xl max-lg:hidden px-3 h-full pb-5  ">
                   <h1 className="text-orange-700 text-2xl font-serif leading-relaxed">Interested on this house? </h1>
                   <form className="flex flex-col gap-3">
                     <input placeholder="Name" type="text"  className="border rounded-md border-orange-400 text-lg focus:outline-orange-300 px-3 py-2 w-full"/>
                     <input placeholder="Phone" type="text"  className="border rounded-md border-orange-400 text-lg focus:outline-orange-300 px-3 py-2 w-full"/>
                     <input placeholder="Email" type="text"  className="border rounded-md border-orange-400 text-lg focus:outline-orange-300 px-3 py-2 w-full"/>
                     <textarea placeholder="Name" type="text"   className="border h-32 text-gray-800 rounded-md border-orange-400 text-lg focus:outline-orange-300 px-3 py-2 w-full">
                       I want this house...
                     </textarea>
                     <button type="submit" className="bg-black text-white text-xl py-2 rounded-md">Send</button>
                      <div className="flex w-full gap-3 max-w-full">
                            <button className="bg-orange-400 flex-1 py-1 rounded-md text-lg">Call</button>
                            <button className="bg-orange-400 flex-1 py-1 rounded-md text-lg">Telegram</button>
                            <button className="bg-orange-400 flex-1 py-1 rounded-md text-lg">WhatsApp</button>


                      </div>
                   </form>
                </div>
            </div>
         </div>
     
         
        
    </div>
    )
}

export default DetailHome