import Navbar from "../components/Navbar"



import DoneIcon from '@mui/icons-material/Done';
import t2 from '../assets/Cat/t2.jpg'
import t3 from '../assets/Cat/t3.jpg'
import t5 from '../assets/Cat/t5.jpg'


const AboutUs=()=>{
     



    return(
        <div className="  "> 
        <div className=" bg-black ">
             <Navbar />
        </div>
        
        <div className=" w-full flex flex-col gap-4 px-20 ">
          
          <h1 className="text-green-700 text-center text-4xl font-serif py-5 pb-8">About Us</h1>
          <p className="text-3xl text-center "> we have any type of house that you can rent and buy</p>
          
          <p className="text-xl text-center "> 
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type 
            specimen book. It has survived not only five centuries, but also the leap into electronic
             typesetting</p>
          <p className="text-xl text-center "> 
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type 
            specimen book. It has survived not only five centuries, but also the leap into electronic
             typesetting </p>


            <div className="flex justify-between gap-5 w-full mt-20">
                <div className="flex flex-col gap-1 ">
                    <h1 className="text-3xl px-5 pb-3 font-serif">with Yenebet you can </h1>
                    <span className="text-lg"><DoneIcon sx={{color:'orangered'}}/> Buying a villa in CMC or Ayat</span>
                     <span className="text-lg"><DoneIcon sx={{color:'orangered'}}/> Renting an apartment in Bole</span>
                    <span className="text-lg"><DoneIcon sx={{color:'orangered'}}/> We guide you through every step, from neighborhood recommendations to virtual tours and paperwork.</span>
                    <span className="text-lg"><DoneIcon sx={{color:'orangered'}}/> Renting an apartment in Bole</span>
                    <span className="text-lg"><DoneIcon sx={{color:'orangered'}}/> Renting an apartment in Bole</span>
                    <span className="text-lg"><DoneIcon sx={{color:'orangered'}}/> Renting an apartment in Bole</span>

                </div>
                <img src={t2} className="" />
            </div>
             

        
       
       </div>  

       
        
    </div>
    )
}

export default AboutUs