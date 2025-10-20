import Navbar from "../components/Navbar"



import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ScheduleIcon from '@mui/icons-material/Schedule';




const ContactUs=()=>{
     



    return(
        <div className="  "> 
        <div className=" bg-black ">
             <Navbar />
        </div>
        
        <div className=" w-full">
          
          <h1 className="text-green-700 text-center text-4xl font-serif py-3">Contact Us</h1>
           <div className="grid grid-cols-4">
             <div className=" shadow-xl p-3 gap-1 text-lg text-gray-700 flex flex-col items-center border-dotted border-2 w-72 h-44 ">
                    <EmailOutlinedIcon  sx={{ color:'orange' , fontSize:'50px', paddingBottom:'10px'}}/>
                   <span className=" font-semibold font-serif">Email</span>
                    <span>yenebet@gmail.com</span> 
                     
             </div>
              <div className=" shadow-xl p-3 gap-1 text-lg text-gray-700 flex flex-col items-center border-dotted border-2 w-72 h-44 ">
                    <LocalPhoneIcon  sx={{ color:'orange' , fontSize:'50px', paddingBottom:'10px'}}/>
                   <span className=" font-semibold font-serif">Phone Number</span>
                    <span>0911223344</span> 
                     <span>0955667788</span> 
             </div>
              <div className=" shadow-xl text-center p-3 gap-1 text-lg text-gray-700 flex flex-col items-center border-dotted border-2 w-72 h-44 ">
                    <LocationOnIcon  sx={{ color:'orange' , fontSize:'50px', paddingBottom:'10px'}}/>
                   <span className=" font-semibold font-serif">Address</span>
                    <span>Piyasa Seka Building, 11th floor, Addis Ababa, Ethiopia</span> 
                     
             </div>
              <div className=" shadow-xl p-3 gap-1 text-lg text-gray-700 flex flex-col items-center border-dotted border-2 w-72 h-44 ">
                    <ScheduleIcon  sx={{ color:'orange' , fontSize:'50px', paddingBottom:'10px'}}/>
                   <span className=" font-semibold font-serif">Working Hour</span>
                    <span>Monday-Sunday</span> 
                     <span>24/hr</span> 
             </div>
           </div>
         
       
       </div>  

       
        
    </div>
    )
}

export default ContactUs