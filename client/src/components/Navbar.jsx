
import img1 from '../assets/b.jpg'


function Navbar() {
  return (


    <div className="hidden lg:flex flex-row  h-[110px] items-center shadow-xl justify-between px-10 ">

      <a href='/'>
      <div className='flex items-center gap-1'>
        <img src={img1} className='w-20 h-20 rounded-full'/>
        <h1 className='font-bold text-3xl font-mono	'>YeneBet</h1>
      </div>
      </a>

      <div className='flex flex-row gap-5'>
        <a href='/' className='text-xl'> Type/Sefer</a>
        <a href='/' className='text-xl'> AboutUs</a>
        <a href='/' className='text-xl'> Service</a>
        <a href='/' className='text-xl'>Blog</a>
        <a href='/' className='text-xl'> Contact</a>
      </div>

      <button className='bg-[#ff6900] px-10 py-1 text-white font-medium	text-xl'>Login</button>
      
    </div>
  

  
  
    )
}

export default Navbar