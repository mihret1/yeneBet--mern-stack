import Navbar from '../components/Navbar'
// import img1 from '../assets/c3.jpg'

function Home() {
  return (
    <div className='h-[4000px]'>
    <section className="selam h-[680px]  bg-no-repeat" >
          <Navbar />
          <div className='he flex flex-col items-center px-[15%] gap-6  pt-[6%]'>
          <h1 className=' font-bold text-3xl text-center text-white relative '> Sale Buy and Rent Your Gorgeous Dream Houses in Ethiopia</h1>
           <p className='text-white font-medium text-center '> Sale, buy and rent beutifull and secured houses in ethiopia in wherever you want in addis abeba.
            you dont need waste your time and energy just for looking your home, we will do it for you honestly!
           </p>
           <button className='bg-[#ff6900] px-10 py-1 rounded-full font-bold text-2xl'> Rent</button>
          </div>

         {/* <h1 className='he font-bold text-3xl text-center text-white relative top-20'> helloo this world </h1> */}
  </section>

  </div>
  )
}

export default Home