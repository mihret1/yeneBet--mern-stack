
import img1 from '../assets/b.jpg'


function Navbar() {
  return (
    <>
    <div className="hede flex flex-row  h-[110px] items-center shadow-xl justify-between px-10 bg-white">

      <a href='/'>
      <div className='flex items-center gap-1'>
        <img src={img1} className='w-20 h-20 rounded-full max-lg:w-16 max-lg:h-16'/>
        <h1 className='font-bold text-3xl font-mono max-lg:text-2xl	'>YeneBet</h1>
      </div>
      </a>

      <div className='flex flex-row gap-5 max-lg:hidden'>
        <a href='/' className='text-xl'> Type/Sefer</a>
        <a href='/' className='text-xl'> AboutUs</a>
        <a href='/' className='text-xl'> Service</a>
        <a href='/' className='text-xl'>Blog</a>
        <a href='/' className='text-xl'> Contact</a>
      </div>

      <button className='bg-[#ff6900] px-10 py-1 text-white font-medium	text-xl max-lg:hidden' >Login</button>
       
      <button className='lg:hidden'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
             <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
      </svg>
      </button>

    </div>
    
    </>
  
    )
}

export default Navbar