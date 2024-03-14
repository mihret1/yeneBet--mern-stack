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
    <div className='h-[4000px]'>
      <section className="selam h-[630px]  bg-no-repeat" >
          <Navbar />
          <div className='he flex flex-col items-center px-[15%] gap-7 pt-[4%]'>
            <h1 className=' font-bold text-3xl text-center text-white '> Sale Buy and Rent Your Gorgeous Dream Houses in Ethiopia</h1>
             <p className='text-white font-medium text-center text-lg'> Sale, buy and rent beutifull and secured houses in ethiopia in wherever you want in addis abeba.
                you dont need waste your time and energy just for looking your home, we will do it for you honestly!
              </p>
          
           <div className=''>
           <button onClick={()=>setIsDrop((e)=>!e)} className='he   bg-[#ff6900] px-5 py-1 rounded-full font-bold text-2xl'> Rent <ArrowDropDownIcon fontSize='large' /></button>
          
            { isDrop &&  <div className=' he bg-white w-[100px] py-1 flex flex-col items-center text-center ml-[18%] '>
               <ul >
                  <li><a href='/auth'>Sale/rented</a></li>
                  <li><a href='/auth'>Rent/buy</a></li>

                </ul>   
            </div>}
           
           </div>  
          
          
          
          </div>
         
          <div className='hede flex flex-col items-center gap-6 mt-16'>
            <h1 className='he  text-white font-semibold  text-2xl'>Get Your Type</h1>
            
            <div className='flex flex-row gap-5 text-white text-lg font-semibold'>
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

            <div className='he h-20 bg-white shadow-xl  flex  flex-row p-5' >
              <div className='border-black border-2 w-96 h-10 flex flex-row justify-center items-center '>
               {!location && <SearchSharpIcon /> }
                <input 
                onChange={(e)=>setLocation(e.target.value)}
                value={location}
                placeholder='Search by location'
                style={{ outline:'none',fontWeight:'bolder', color:'black' }}/>
                {location &&<IconButton onClick={()=>setLocation('')}> <CloseIcon /></IconButton>}
              </div>
              <div className='border-black border-2 w-96 h-10  flex flex-row justify-center items-center font-semibold'>
              <input
                value={money}
                onChange={(e)=>setMoney(e.target.value)} 
                placeholder='By Money amount'
                style={{ outline:'none',fontWeight:'bolder', color:'black' }}/>
                {money &&<IconButton onClick={()=>setMoney('')}> <CloseIcon /></IconButton>}

              </div>              
              <button className='bg-[#ff6900] px-7 font-semibold text-xl ml-1 '>Search</button>
            </div>

          </div>

          
      </section>

  </div>
  )
}

export default Home