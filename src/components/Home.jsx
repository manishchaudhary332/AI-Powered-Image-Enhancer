import React, { useState } from 'react'
import ImageUpload from './ImageUpload'
import ImagePreview from './ImagePreview'
import { enhancedImageApi } from '../Utils/enhanceImageApi'

const Home = () => {
    const [uploadImage, setuploadImage] = useState(null)
    const [enhanedImage, setenhanedImage] = useState(null)
    const [loading, setloading] = useState(false)

    const uploadImageHandler = async(file)=>{
        setuploadImage(URL.createObjectURL(file))
        setloading(true)
        console.log(URL.createObjectURL(file))
        // calling api to enchance the image
        try{
            const enhancedURL = await enhancedImageApi(file)
            setenhanedImage(enhancedURL)
            setloading(false)

        }catch(err){
            console.log(err);
            alert("error while enhancing tha Image . Please ty Again Latter")
            

        }
    }
  return (
    <>
        <ImageUpload  uploadImageHandler={uploadImageHandler}/>
        <ImagePreview 
        loading={loading} 
        uploaded={uploadImage} 
        enhaned={enhanedImage}/>
    </>
  )
}

export default Home