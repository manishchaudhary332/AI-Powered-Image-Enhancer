import axios from "axios";

const API_KEY = "wxij2mibqkcharbf3";
const BASE_URL = "https://techhk.aoscdn.com/"


export const enhancedImageApi = async (file)=>{
    //  code to help call Api 
    try{
        
       const taskId =  await uploadImage(file)
       console.log("image Upload seccessfull", taskId);
       

       const enhancedImageData =  await fetchEnhancedImage(taskId)
       console.log("Enhanced Image Data", enhancedImageData);
       console.log(enhancedImageData);
    //    return enhancedImageData
       
       

    }catch(err){
        console.log(err);
        console.log("error Enhancing image",err.message);
        
        
    }
}

const uploadImage =async (file)=>{

    const formData = new FormData();
    formData.append("image_file",file)

 const {data } = await axios.post(
    `${BASE_URL}/api/tasks/visual/scale`,
    formData, {
        headers:{
            "Content-Type":"multipart/form-data",
            "X-API-KEY":API_KEY,
        },
    })

    if(!data?.data?.task_id){
        throw new Error("field to upload Image !Task id Not found")
    }

    return data.data.task_id
        
        
}

const fetchEnhancedImage = async (taskId)=> {
     const {data} = await axios.get(
        `${BASE_URL}/api/tasks/visual/scale/${taskId}`,
        {
            headers:{
                "X-API-KEY":API_KEY,
            },
        }
     )
     if(!data?.data){
        throw new Error("Failed to fetch enchanced image !  not found")
     }
     return data.data;
     
        
}

const PollForEnhanceImage = async (taskId,retries =  0 ) =>{
    const result =  await fetchEnhancedImage(taskId)

    if(result.status === 4){
        console.log("Proccessing ....");

        if(retries >= 20){
            throw new Error("Max retries reached plese try again latter")
        }

        await new Promise((resolve)=> setTimeout(resolve, 2000))

        
    }
}