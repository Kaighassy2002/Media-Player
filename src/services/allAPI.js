import { commonAPI } from "./commonAPi"
import { SERVER_URL } from "./server_url"

//upload video
export const uploadVideoAPI = async (video)=>{
  return await commonAPI("POST",`${SERVER_URL}/video`,video)
}

//get video api called by view

export const getAllVideoAPI =async (video) =>{
  return await commonAPI("GET",`${SERVER_URL}/video`,video)
}

//store watch history videoCard
export const saveHistoryAPI = async (videoDetails)=>{
  return await commonAPI("POST",`${SERVER_URL}/history`,videoDetails)
}

//get history to watch component to 
export const getHistoryAPI = async () =>{
  return await commonAPI("GET",`${SERVER_URL}/history`)
}

//remove history to watch component

export const removeHistoryAPI = async (videoId) =>{
  return await commonAPI("DELETE",`${SERVER_URL}/history/${videoId}`)
}

//remove video
export const removeVideoAPI = async (videoId)=>{
  return await commonAPI("DELETE",`${SERVER_URL}/video/${videoId}`,{})
}


// Save categories
export const addCategorieAPI = async(categorieDetails)=>{
  return await commonAPI("POST",`${SERVER_URL}/categories`,categorieDetails)
}

// get categories
export const getCategorieAPI = async()=>{
  return await commonAPI("GET",`${SERVER_URL}/categories`,"")
}

//remove category api
export const removeCategorieAPI = async(catagoryId)=>{
  return await commonAPI("DELETE",`${SERVER_URL}/categories/${catagoryId}`,{})
}


// get single Video Api

export const getAVideoAPI = async (videoId)=>{
  return await commonAPI("GET",`${SERVER_URL}/video/${videoId}`,"")
}

// updateCategory API
export const updateCategeoryAPI = async(catagoryId,updateCategoryDetails)=>{
  return await commonAPI("PUT",`${SERVER_URL}/categories/${catagoryId}`,updateCategoryDetails)
}

// getSingleCategory API
export const getSingleCategoryAPI = async(catagoryId,)=>{
  return await commonAPI("GET",`${SERVER_URL}/categories/${catagoryId}`,"")
}