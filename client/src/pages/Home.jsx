import Navbar from '../components/Navbar'
// import img1 from '../assets/c3.jpg'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from 'react';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';

function Home() {
  const [isDrop,setIsDrop]=useState(false)
  const [location,setLocation]=useState('')
  const [money,setMoney]=useState('')
  const [type,setType]=useState(0)
  
  return (
    <div className='flex flex-col gap-24'>
      <section className="partOne h-[630px] max-ml:h-[700px] bg-no-repeat" >
       <Navbar />
       <div className='insideOne'>
          <div className=' flex flex-col items-center px-[15%] gap-7 pt-[4%]'>
            <h1 className=' font-bold text-3xl text-center text-white '> Sale Buy and Rent Your Gorgeous Dream Houses in Ethiopia</h1>
             <p className='text-white font-medium text-center text-lg'> Sale, buy and rent beutifull and secured houses in ethiopia in wherever you want in addis abeba.
                you dont need waste your time and energy just for looking your home, we will do it for you honestly!
             </p>
          
           <div className=''>
           <button onClick={()=>setIsDrop((e)=>!e)} className=' bg-[#ff6900] px-5 py-1 rounded-full font-bold text-2xl'> Rent <ArrowDropDownIcon fontSize='large' /></button>
          
            { isDrop &&  <div className=' bg-white w-[100px] py-1 flex flex-col items-center text-center ml-[18%] '>
               <ul >
                  <li><a href='/auth'>Sale/rented</a></li>
                  <li><a href='/auth'>Rent/buy</a></li>

                </ul>   
            </div>}
           
           </div>  
          
          
          
          </div>
         
          <div className=' flex flex-col items-center gap-6 mt-16 max-ml:gap-3 max-ml:mt-5'>
            <h1 className=' text-white font-semibold  text-2xl'>Get Your Type</h1>
            
            <div className='flex flex-row  max-ml:grid max-ml:grid-cols-2  max-ml:gap-1 gap-5 text-white text-lg font-semibold max-ml:text-md max-sm:text-sm'>
              <span>
                <a href='/' onMouseOver={()=>setType(1)} onMouseLeave={()=>setType(0)}>Normal House</a>
                {type ===1 && <div className='h-1 rounded-lg bg-white mt-1 '></div>}
              </span>
              <span>
                <a href='/' onMouseOver={()=>setType(2)} onMouseLeave={()=>setType(0)}>Compound House</a>
                {type ===2 && <div className='h-1 rounded-lg bg-white mt-1 '></div>}
              </span>         
              <span>
                <a href='/' onMouseOver={()=>setType(3)} onMouseLeave={()=>setType(0)}>Villa</a>
                {type ===3 && <div className='h-1 rounded-lg bg-white mt-1 '></div>}
              </span>              <span>
                <a href='/' onMouseOver={()=>setType(4)} onMouseLeave={()=>setType(0)}>Condominiuim</a>
                {type ===4 && <div className='h-1 rounded-lg bg-white mt-1 '></div>}
              </span>
              <span>
                <a href='/' onMouseOver={()=>setType(5)} onMouseLeave={()=>setType(0)}>Guest House</a>
                {type ===5 && <div className='h-1 rounded-lg bg-white mt-1'></div>}
              </span>   
              <span>
                <a href='/' onMouseOver={()=>setType(6)} onMouseLeave={()=>setType(0)}>Apartment</a>
                {type ===6 && <div className='h-1 rounded-lg bg-white mt-1 '></div>}
              </span>  
            </div>

            <div className=' h-20 bg-white shadow-xl  flex  flex-row p-5 sm:max-ml:px-2  max-sm:flex-col max-sm:h-32 max-sm:gap-2' >
              <div className='border-black border-2 w-96 sm:max-lg:w-64 h-10 flex flex-row justify-center items-center '>
               {!location && <SearchSharpIcon /> }
                <input 
                onChange={(e)=>setLocation(e.target.value)}
                value={location}
                placeholder='Search by location'
                style={{ outline:'none',fontWeight:'bolder', color:'black' }}/>
                {location &&<IconButton onClick={()=>setLocation('')}> <CloseIcon /></IconButton>}
              </div>
              <div className='border-black border-2 w-96 sm:max-lg:w-64 h-10  flex flex-row sm:max-ml:justify-start justify-center items-center font-semibold'>
              <input
                value={money}
                onChange={(e)=>setMoney(e.target.value)} 
                placeholder='By Money amount'
                style={{ outline:'none',fontWeight:'bolder', color:'black' }}/>
                {money &&<IconButton onClick={()=>setMoney('')}> <CloseIcon /></IconButton>}

              </div>              
              <button className='bg-[#ff6900] px-7 sm:max-ml:px-3 font-semibold text-xl ml-1 '>Search</button>
            </div>



          </div>
        </div>
          
      </section>

      <section className='partTwo h-[440px] m-8'>
        <div className='insideTwo text-white flex flex-col gap-6 justify-center items-center '>
           <h1 className='text-2xl font-semibold'>How it Work</h1>
           <p className='w-[60%] text-center'>Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. 
            Lorem ipsum may be used as a placeholder before the final copy is available.</p>
           <button className='px-8 py-2 text-lg font-semibold bg-gradient-to-r  from-orange-700 to-orange-500 rounded-3xl'>Submit Properties</button>
           <div className='flex flex-row'>
             <div className='w-40 h-32 border-2 rounded-tl-3xl rounded-br-3xl'></div>
             <div></div>
             <div></div>

           </div>
        
        </div>

      </section>

  </div>
  )
}

export default Home