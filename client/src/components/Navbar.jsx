
import img1 from '../assets/b.jpg'


function Navbar() {
  return (


    <div className=" flex flex-row  h-[110px] items-center shadow-xl justify-between px-10 ">

      <div className='flex items-center gap-1'>
        <img src={img1} className='w-20 h-20 rounded-full'/>
        <h1 className='font-bold text-3xl font-mono	'>YeneBet</h1>
      </div>

      <div className='flex flex-row gap-5'>
        <a href='/' className='text-lg'> Type/Sefer</a>
        <a href='/' className='text-lg'> AboutUs</a>
        <a href='/' className='text-lg'> Service</a>
        <a href='/' className='text-lg'>Blog</a>
        <a href='/' className='text-lg'> Contact</a>
      </div>

      <button className='bg-[#ff6900] px-9 py-1 text-white font-medium	text-xl'>Login</button>
      
    </div>
  
  
    )
}

export default Navbar