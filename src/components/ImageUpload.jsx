import React from 'react'

const ImageUpload = (props) => {
    
    const ShowImagehandler = (e)=>{
     const file = e.target.files[0]
     if(file){
        props.uploadImageHandler(file)
     }
        
    }
  return (
    <div className='bg-white shadow-lg p-5 rounded-2xl w-full max-w-2xl'>
        <label htmlFor="fileInput" className='block w-full cursor-pointer border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-all'>
           <input type="file" id='fileInput' className='hidden' onChange={ShowImagehandler} />
            <span className='text-lg font-medium text-gray-600'>Click And Drag To Upload Your image </span>

        </label>
        </div>
  )
}

export default ImageUpload