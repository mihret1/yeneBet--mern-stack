import Navbar from "../components/Navbar"



import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ScheduleIcon from '@mui/icons-material/Schedule';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaYoutube, FaTiktok, FaTelegram } from "react-icons/fa";


import tg from '../assets/tg.jpg'
import LanguageIcon from '@mui/icons-material/Language';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
// import TiktokIcon from '@mui/icons-material/Tiktok';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

const ContactUs=()=>{
     



    return(
        <div className="  "> 
        <div className=" bg-black ">
             <Navbar />
        </div>
        
        <div className=" w-full flex flex-col justify-center items-center gap-2">
          
          <h1 className="text-green-700 text-center text-4xl font-serif py-5 pb-8">Contact Us</h1>
          <div className="flex space-x-2 pb-2">
      {/* Facebook */}
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#1877F2] hover:opacity-80"
      >
        <FaFacebook size={27} />
      </a>

      {/* Twitter (X) */}
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#1DA1F2] hover:opacity-80"
      >
        <FaTwitter size={26} />
      </a>

      {/* Instagram */}
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#E1306C] hover:opacity-80"
      >
        <FaInstagram size={26} />
      </a>

      {/* LinkedIn */}
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#0077B5] hover:opacity-80"
      >
        <FaLinkedin size={27} />
      </a>
     <a
        href="https://youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#FF0000] hover:scale-110 transition-transform duration-200"
      >
        <FaYoutube size={26} />
      </a>

      {/* TikTok */}
      <a
        href="https://tiktok.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#010101] hover:scale-110 transition-transform duration-200"
      >
        <FaTiktok size={26} />
      </a>

      {/* Telegram */}
      <a
        href="https://t.me"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#0088cc] hover:scale-110 transition-transform duration-200"
      >
        <FaTelegram size={26} />
      </a>
      
      {/* <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#181717] hover:opacity-80"
      >
        <FaGithub size={30} />
      </a> */}
         </div>
           <div className="grid gap-3 grid-cols-4 max-sm:grid-cols-1 sm:max-lg:grid-cols-2 lg:max-lgg:grid-cols-3">
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
          <form className="flex flex-col gap-4 pt-14  ">
            <h1 className="text-3xl font-serif px-3 text-green-700">For your any idea</h1>
            <input type="text" placeholder="Full name" className="border ml-1  w-[450px] max-sm:w-[300px] h-10 px-3 text-lg border-orange-500 placeholder-gray-700 outline-[0.5px] outline-amber-800"/>
             <input placeholder="Phone Number" className="border w-[450px] ml-1 max-sm:w-[300px] h-10 px-3 text-lg border-orange-500 placeholder-gray-700 outline-[0.5px] outline-amber-800"/>
            <input placeholder="Email" className="border w-[450px] ml-1 max-sm:w-[300px] h-10 px-3 text-lg border-orange-500 placeholder-gray-700 outline-[0.5px] outline-amber-800"/>
            <textarea placeholder="Comment" className="border ml-1 w-[450px] max-sm:w-[300px]  px-3 text-lg border-orange-500 placeholder-gray-700 outline-[0.5px] outline-amber-800"/>
             <button className="bg-green-700 hover:bg-green-600 p-2 text-xl text-white mx-2">Submit</button>
         
          </form>

           <div className=" mt-20  bg-white p-4 shadow-2xl">
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
                                          <span className="">
                                            <EmailOutlinedIcon /> yenebet@gmail.com
                                          </span>
                                          <div className="flex gap-2">
                                             <a href='https://www.tiktok.com/'  target="_blank" rel="noopener noreferrer"><FacebookIcon /></a>
                                             <a href='https://www.tiktok.com/'  target="_blank" rel="noopener noreferrer"><YouTubeIcon /></a>
                                             <a href='https://www.tiktok.com/'  target="_blank" rel="noopener noreferrer"><InstagramIcon /></a>
                                             <a href='https://www.tiktok.com/'  target="_blank" rel="noopener noreferrer"><LinkedInIcon /></a>
                                             <a href='https://www.tiktok.com/'  target="_blank" rel="noopener noreferrer"><FaTiktok className="text-black text-xl hover:text-gray-700" /></a>
          
                                             </div>
                                        </div>
                                        <img src={tg} className="w-48 h-44"/>
                                     </div>
             </div>
             <iframe  className="w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63054.73287609015!2d38.83204485!3d8.979435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b9b33a3569139%3A0xb505349b8c87fdd2!2sBole%2C%20Addis%20Ababa!5e0!3m2!1sen!2set!4v1760629876105!5m2!1sen!2set"
                         width="600" height="450" style={{ border:0 }} allowfullscreen="" 
                        loading="lazy" referrerpolicy="no-referrer-when-downgrade">

                        </iframe>
       
       </div>  

       
        
    </div>
    )
}

export default ContactUs