import Navbar from "../components/Navbar"

import { useState } from "react";






const Post=()=>{
     
  const [images, setImages] = useState([]);

  const handleImages = (e) => {
    const files = Array.from(e.target.files);

    if (files.length + images.length > 20) {
      alert("You can upload a maximum of 20 images");
      return;
    }

    const imageUrls = files.map((file) => URL.createObjectURL(file));
    setImages((prev) => [...prev, ...imageUrls]);
  };


    return(
        <div className="  "> 
        <div className=" bg-black ">
             <Navbar />
        </div>
        
        <div className=" w-full flex flex-col justify-center items-center gap-2">
          
          <h1 className="text-green-700 text-center text-4xl font-serif py-5 pb-8">Contact Us</h1>
          
           
          <form className="flex flex-col gap-6 pt-4 ">
            <h1 className="text-2xl font-serif text-green-700 text-center">Log In to Continue Your Property Journey</h1>
            <input type="text" placeholder="Full name" className="border w-[450px] max-sm:w-[315px] h-10 px-3 text-lg border-orange-500 placeholder-gray-700 outline-[0.5px] outline-amber-4b 00"/>
             <input placeholder="Phone Number" className="border w-[450px] max-sm:w-[315px] h-10 px-3 text-lg border-orange-500 placeholder-gray-700 outline-[0.5px] outline-amber-400"/>
            <input placeholder="Email" className="border w-[450px] max-sm:w-[315px] h-10 px-3 text-lg border-orange-500 placeholder-gray-700 outline-[0.5px] outline-amber-400"/>
           <input type="text" placeholder="City" className="border w-[450px] max-sm:w-[315px] h-10 px-3 text-lg border-orange-500 placeholder-gray-700 outline-[0.5px] outline-amber-400"/>
            <input type="text" placeholder="Sub City" className="border w-[450px] max-sm:w-[315px] h-10 px-3 text-lg border-orange-500 placeholder-gray-700 outline-[0.5px] outline-amber-400"/>
           <input type="text" placeholder="price" className="border w-[450px] max-sm:w-[315px] h-10 px-3 text-lg border-orange-500 placeholder-gray-700 outline-[0.5px] outline-amber-400"/>
           <input type="text" placeholder="title" className="border w-[450px] max-sm:w-[315px] h-10 px-3 text-lg border-orange-500 placeholder-gray-700 outline-[0.5px] outline-amber-400"/>
           <input type="text" placeholder="price" className="border w-[450px] max-sm:w-[315px] h-10 px-3 text-lg border-orange-500 placeholder-gray-700 outline-[0.5px] outline-amber-400"/>
           <input type="text" placeholder="Area of House" className="border w-[450px] max-sm:w-[315px] h-10 px-3 text-lg border-orange-500 placeholder-gray-700 outline-[0.5px] outline-amber-400"/>
           
           <div className="grid grid-cols-2 max-md:grid-cols-1 gap-2">
              <input type="text" placeholder="Number of bedroom" className="border  h-10 px-3 text-lg border-orange-500 placeholder-gray-700 outline-[0.5px] outline-amber-400"/>
              <input type="text" placeholder="Number of room" className="border  h-10 px-3 text-lg border-orange-500 placeholder-gray-700 outline-[0.5px] outline-amber-400"/>
              <input type="text" placeholder="Number of bathroom" className="border  h-10 px-3 text-lg border-orange-500 placeholder-gray-700 outline-[0.5px] outline-amber-400"/>
              <input type="text" placeholder="Number of Garage" className="border  h-10 px-3 text-lg border-orange-500 placeholder-gray-700 outline-[0.5px] outline-amber-400"/>

           </div>
            <div className="flex gap-7 py-3">
              <span className="flex  items-center gap-2  text-lg"><input className="text-orange-600 w-4 h-4" type='checkbox'/> Swimming pool </span>
               <span className="flex  items-center gap-2  text-lg">  <input className="text-orange-600 w-4 h-4" type='checkbox'/>Parking</span>
              <span className="flex  items-center gap-2  text-lg"> <input className="text-orange-600 w-4 h-4" type='checkbox'/> Internet</span>
              <span className="flex  items-center gap-2  text-lg"><input className="text-orange-600 w-4 h-4" type='checkbox'/>Balcony </span>

            </div>
            <input type="text" placeholder="addtional thing..." className="border w-[450px] max-sm:w-[315px] h-10 px-3 text-lg border-orange-500 placeholder-gray-700 outline-[0.5px] outline-amber-400"/>
            <div className="flex gap-5 py-2 font-semibold"> 
              <span className="text-xl text-green-600">  For Sale <input className="w-4 h-4" type="radio" name='type' value='sale' /></span>
              <span className="text-xl text-orange-600">  For Rent <input type="radio" className="w-4 h-4" name='type' value='rent' /></span>
            </div>

            <textarea placeholder="Description about home"  className="border h-32 w-[550px] max-sm:w-[315px]  px-3 text-lg border-orange-500 placeholder-gray-700 outline-[0.5px] outline-amber-400"/>
             
              <label className="block">
              <span className="text-gray-700 font-medium">Upload Video</span>
              <input
                type="file"
                accept="video/*"
                // onChange={handleVideo}
                className="mt-1 block w-full border border-orange-500 rounded-lg p-2 cursor-pointer bg-white"
              />
        </label>

            <div className="space-y-3">
              {/* Upload Input */}
              <label className="block">
                <span className="text-gray-700 font-medium">Upload Images (max 20)</span>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleImages}
                  className="mt-1 block w-full border border-orange-500 rounded-lg p-2 cursor-pointer bg-white"
                />
              </label>

              {/* Preview Images */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {images.map((img, index) => (
                  <div key={index} className="relative group">
                    <img
                      src={img}
                      alt="uploaded"
                      className="w-full h-32 object-cover rounded-lg shadow-sm"
                    />
                  </div>
                ))}
              </div>

              {/* Image Count */}
              <p className="text-sm text-gray-500">
                {images.length} / 20 images selected
              </p>
            </div>

           
  
             
             <button className="bg-green-700 p-2 text-xl text-white">Submit</button>
         
          </form>

         
            
       
       </div>  

       
        
    </div>
    )
}

export default Post