import React from 'react'
import Home from './components/Home'

const App = () => {
  return (
    <div className='flex flex-col justify-center items-center bg-gray-100 min-h-screen py-8 px-4'> 
      <div className='text-center mb-8'>
        <h1 className='text-5xl font-bold text-gray-800 mb-2'>
          Ai Image Enhancer {" "} </h1>
        <p className='text-lg text-gray-500'>Upload your image and Let Ai Enhance To in Seconds </p>
      </div>
      <Home/>
      <div className='text-lg text-gray-500 mt-5'>
         
          @Manish Ai
      </div>
    </div>
  )
}

export default App