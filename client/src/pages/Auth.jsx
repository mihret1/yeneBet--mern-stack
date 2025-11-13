import { useState } from "react"
import Navbar from "../components/Navbar"

import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';






const Auth=()=>{
    
  const [ isSignup , setIsSignup ] = useState(true)
     


    return(
        <div className="  "> 
        {/* <div className=" bg-black ">
             <Navbar />
        </div> */}
        
        <div className=" w-full flex flex-col justify-center items-center gap-2">
          
          <h1 className="text-green-700 text-center text-4xl font-serif py-5 pb-4">{isSignup? 'Login':'Signup'}</h1>
        
        
          <form className="flex flex-col gap-4 pt-4 ">
            <h1 className="text-2xl font-serif text-green-700 text-center"> {isSignup? 'Login':'Signup'} to Continue </h1>
             {!isSignup && <input type="text" placeholder="Full name" className="border w-[450px] max-sm:w-[315px] h-10 px-3 text-lg border-orange-500 placeholder-gray-700 outline-[0.5px] outline-amber-500"/>}
             {!isSignup && <input placeholder="Phone Number" className="border w-[450px] max-sm:w-[315px] h-10 px-3 text-lg border-orange-500 placeholder-gray-700 outline-[0.5px] outline-amber-500"/>} 
               <input placeholder="Email" className="border w-[450px] max-sm:w-[315px] h-10 px-3 text-lg border-orange-500 placeholder-gray-700 outline-[0.5px] outline-amber-500"/>
            <input type="text" placeholder="Password" className="border w-[450px] max-sm:w-[315px] h-10 px-3 text-lg border-orange-500 placeholder-gray-700 outline-[0.5px] outline-amber-500"/>
            {/* <input type="text" placeholder="Comfrim Password" className="border w-[450px] max-sm:w-[315px] h-10 px-3 text-lg border-orange-500 placeholder-gray-700 outline-[0.5px] outline-amber-800"/> */}

            <button className="bg-green-700 hover:bg-green-600 p-2 text-xl text-white">{isSignup?'Login':'Signup'}</button>
            {
              
              !isSignup ? 
                <p className="text-right text-lg font-serif ">already have account? <button type="button" onClick={()=>setIsSignup(e=>!e)} className="text-blue-600 hover:text-blue-400">Login</button> </p>
                     : 
                 <p className="text-right text-lg font-serif">Dont you have account? <button type='button' onClick={()=>setIsSignup(e=>!e)} className="text-blue-600 hover:text-blue-400">Signup</button> </p>             
              
              }          
          </form>
          <a className="text-blue-600 hover:text-blue-400 mt-[7%] text-xl" href="/"><KeyboardBackspaceIcon /> Back Home</a>
       </div>  

       
        
    </div>
    )
}

export default Auth