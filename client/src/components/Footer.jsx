
import img1 from '../assets/b.jpg'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PinDropIcon from '@mui/icons-material/PinDrop';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import SendRoundedIcon from '@mui/icons-material/SendRounded';

function Footer(){
  return(
    <>
      <div className="mt-48 bg-black text-white grid grid-cols-4 p-4 justify-items-center justify-between max-sm:grid-cols-1 max-ml:gap-5 sm:max-ml:grid-cols-2 ">
          <div className="flex flex-col gap-2 items-center text-lg text-center">
              <img  src={img1} className='rounded-2xl w-12 h-12'/>
              <h1 className='text-2xl '>YeneBet</h1>
              <p>Easily find houses for rent or sale in any city.
                  View detailed listings with price, photos, and location.
                  Quick and secure process for buyers and renters.
              </p>
              <span className='text-xl pt-3'>Follow us</span>
              <div className=' flex flex-row gap-1'>
                <a href='https://facebook.com' >  <FacebookOutlinedIcon /> </a>
                  <a href='https://instagram.com'> <InstagramIcon />  </a>
                  <a href='https://linkedin.com'> <LinkedInIcon /> </a>
                  <a href='https://twitter.com'> <TwitterIcon /></a>
                  <a href='https://pinterest.com'> <PinterestIcon /></a>
                  
              </div>
          </div>
          <div className='flex flex-col gap-2'>
            <span className='text-2xl pb-2'>Links</span>
            <a href='/' className='text-lg'>Apartment</a>
            <a href='/' className='text-lg'>Villa</a>
            <a href='/' className='text-lg'>Condominium</a>
            <a href='/' className='text-lg'>Compound</a>
            <a href='/' className='text-lg'>Guest house</a>
            <a href='/' className='text-lg'>Single house</a>
          </div>
          <div className='flex flex-col gap-2'>
            <h1  className='text-2xl pb-2' >Important link</h1>
            <a href='/' className='text-lg'>Sale</a>
            <a href='/' className='text-lg'>Rent</a>
            <a href='/' className='text-lg'>Towns</a>
            <a href='/' className='text-lg'>Our services</a>
            <a href='/' className='text-lg'>About us</a>
          </div>
          <div className='flex flex-col text-lg gap-1'>
            <span className='pb-2 text-xl'>CONTACT US</span>  
            <span> <PinDropIcon /> NB building, bole, addis abeba, Ethiopia </span>
            <span> <LocalPhoneIcon /> 0911223344  </span>
            <span>&nbsp; &nbsp; &nbsp; 0955667788</span>
            <span> <MailOutlineIcon /> yenebet@gmail.com </span>
            <span> <SendRoundedIcon /> @yenebet </span>

          </div>

      </div>
      <div className='text-center py-3 text-lg max-sm:text-sm'>
         ©2024 YeneBet All rights reserved.
      </div>
    </>
  )
}

export default Footer