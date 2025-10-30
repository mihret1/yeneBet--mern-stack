import Navbar from "../components/Navbar"



import DoneIcon from '@mui/icons-material/Done';
import t2 from '../assets/Cat/t2.jpg'
import t3 from '../assets/Cat/t3.jpg'
import t5 from '../assets/Cat/t5.jpg'
import HouseIcon from '@mui/icons-material/House';
import HandshakeIcon from '@mui/icons-material/Handshake';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import ListIcon from '@mui/icons-material/List';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
const AboutUs=()=>{
     



    return(
        <div className="  "> 
        <div className=" bg-black ">
             <Navbar />
        </div>
        
        <div className=" w-full flex flex-col gap-4 px-3 ">
          
          <h1 className="text-green-700 text-center text-4xl font-serif py-5 pb-8">About Us</h1>
          <p className="text-3xl text-center font-serif "> We have any type of house that you can rent and buy</p>
          
          <p className="text-xl text-center lg:px-20 "> 
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type 
            specimen book. It has survived not only five centuries, but also the leap into electronic
             typesetting</p>
          <p className="text-xl text-center lg:px-20"> 
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type 
            specimen book. It has survived not only five centuries, but also the leap into electronic
             typesetting </p>

            <div className="mt-16"  style={{ backgroundImage:`url(${t3})`,backgroundSize:'cover',backgroundRepeat:'no-repeat' }}>
                <div className="Two w-full text-white py-20 flex flex-col  gap-5 items-center">
                    <h1 className="text-4xl text-white "> <HouseIcon  sx={{ color:'green', fontSize:'40px'  }} /> All Type of Houses We Have <HouseIcon  sx={{ color:'green', fontSize:'40px'}}/></h1>
                    <div className="flex gap-16 pl-7">
                        <div className="flex flex-col text-2xl gap-2">
                            <span> <FiberManualRecordIcon sx={{ color:'#ff6900' }}/> Apartments 
                                {/* <br/><span className="text-lg"><FiberManualRecordIcon sx={{ color:'#ff6900' }}/> hello</span> */}
                                </span> 
                            <span><FiberManualRecordIcon sx={{ color:'#ff6900' }}/>villa</span> 
                            <span> <FiberManualRecordIcon sx={{ color:'#ff6900' }}/>condominiums</span> 
                        </div>
                          <div className="flex flex-col text-2xl gap-2">
                            <span> <FiberManualRecordIcon sx={{ color:'#ff6900' }}/> Guest House
 
                                {/* <br/><span className="text-lg"><FiberManualRecordIcon sx={{ color:'#ff6900' }}/> hello</span> */}
                                </span> 
                            <span><FiberManualRecordIcon sx={{ color:'#ff6900' }}/>Compound
</span> 
                            <span> <FiberManualRecordIcon sx={{ color:'#ff6900' }}/>Single House
</span> 
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className="flex max-md:flex-col justify-between gap-5 w-full my-24 lg:px-10 ">
                <div className="flex flex-col gap-1 text-lg text-gray-700  font-[500px] pr-5  ">
                    <h1 className="text-3xl px-5 pb-3 font-serif text-green-800"> Yenebet Enable you  </h1>
                    <span className="text-lg"><DoneIcon sx={{color:'orangered'}}/> Buying a villa in CMC or Ayat</span>
                     <span className="text-lg"><DoneIcon sx={{color:'orangered'}}/> Renting an apartment in Bole</span>
                    <span className="text-lg"><DoneIcon sx={{color:'orangered'}}/> We guide you through every step, from neighborhood recommendations to virtual tours and paperwork.</span>
                    <span className="text-lg"><DoneIcon sx={{color:'orangered'}}/> Renting an apartment in Bole</span>
                    <span className="text-lg"><DoneIcon sx={{color:'orangered'}}/> Renting an apartment in Bole</span>
                    <span className="text-lg"><DoneIcon sx={{color:'orangered'}}/> Renting an apartment in Bole</span>

                </div>
                <img src={t2} className="rounded-xl w-[500px] max-lg:w-96" />
            </div> 
             <div style={{ backgroundImage:`url(${t5})`,backgroundSize:'cover',backgroundRepeat:'no-repeat' }}>
                  <div className="Two grid grid-cols-4  text-white  max-lg:gap-7   py-24  bg-cover bg-no-repeat px-2 text-center max-sm:grid-cols-1 sm:max-lg:grid-cols-2">
                     <div className="flex flex-col gap-2 justify-center items-center">
                        <span><HouseIcon sx={{ fontSize:50 }} /></span>
                        <span className="text-3xl font-medium">1000+ Houses</span>
                        <span className="text-xl">Get any type of house you want</span>

                     </div>
                     <div className="flex flex-col gap-2 justify-center items-center">
                        <span><HandshakeIcon sx={{ fontSize:50 }} /></span>
                        <span className="text-3xl font-medium">270 Partners</span>
                        <span className="text-xl">We have alot of partners</span>

                     </div>
                     <div className="flex flex-col gap-2 justify-center items-center">
                        <span><SentimentSatisfiedAltIcon sx={{ fontSize:50 }} /></span>
                        <span className="text-3xl font-medium"> Happy customer</span>
                        <span className="text-xl">almost all customers are happy</span>

                     </div>
                     <div className="flex flex-col gap-2 justify-center items-center">
                        <span><ListIcon sx={{ fontSize:50 }} /></span>
                        <span className="text-3xl font-medium">Many Options</span>
                        <span className="text-xl">A lot of options to choose</span>

                     </div>
                  </div>
                 
             </div>
             
             <div className="flex flex-col gap-5 font-semibold text-green-700 items-center pt-16 justify-center">
                <h1 className="text-3xl text-center">Yenebet has alot Experience to make you Happy</h1>
               <iframe
                width="860"
                height="415"
                className=" max-sm:w-[320px] px-2 sm:max-ml:w-[620px]"
                src="https://www.youtube.com/embed/zumJJUL_ruM?autoplay=1&mute=1&loop=1&playlist=zumJJUL_ruM"
                allow="accelerometer; 
                autoplay=1; mute=1; clipboard-write; 
                encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                ></iframe>
                 
             </div>
             <select className="outline-none">
                <option>Addis Ababa</option>
             </select>
        
       
       </div>  

       
        
    </div>
    )
}

export default AboutUs