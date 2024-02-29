import React,{useEffect, useState} from 'react'
import { Modal,Button,Form,FloatingLabel } from 'react-bootstrap'
import { addCategorieAPI, getAVideoAPI, getCategorieAPI, removeCategorieAPI, updateCategeoryAPI } from '../services/allAPI';
import VideoCard from './VideoCard';


function Category({removeCategoryVideoresponse}) {
  const [allCatagories,setAllCategories] = useState([])
  const [categoryName,setCategoryName] =useState('')
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setCategoryName('')
  }
  const handleShow = () => setShow(true);

  const handleAddCatagory = async ()=>{
    if(categoryName){
      const result = await addCategorieAPI({categoryName,allVideos:[]})
      handleClose()
      getAllCategories()
    }else{
      alert("please fill the form Completely!!")
    }
  }

  
 const getAllCategories = async ()=>{
  const results = await getCategorieAPI()
  setAllCategories(results.data)
 }
 console.log(allCatagories);
  useEffect(()=>{
   getAllCategories()
  },[removeCategoryVideoresponse])

 const handleRemoveCatageroes = async (cId)=>{
  await removeCategorieAPI(cId)
  getAllCategories()
 }

 const dragOverCategory =(e)=>{
  e.preventDefault()
  console.log("Dragging over catageroy");
 }

 const videoDropped =async (e,categoryId)=>{
  const videoId= e.dataTransfer.getData("videoId")
  console.log(`video Dropped with vId :${e.dataTransfer.getData("videoId")},inside category id: ${categoryId}`);
//get details of video
  const {data} = await getAVideoAPI(videoId)
  console.log(data);
 
 //get category details where we have add video
 let selectedcategory = allCatagories.find(item=>item.id==categoryId)
 selectedcategory.allVideos.push(data)
 console.log(selectedcategory);
 await updateCategeoryAPI(categoryId,selectedcategory)
 getAllCategories()
}

 const videoDragStarted = (e,videoId,categoryId)=>{
  console.log(`Drag started from category id : ${categoryId} with video id: ${videoId}`);
  let dataShare={videoId,categoryId}
  e.dataTransfer.setData("removeVideoDetails",JSON.stringify(dataShare))
 }

  return (
   <>
      <div className='d-flex justify-content-around'>
        <h3>All Categories</h3>
       <button onClick={handleShow} style={{width:'60px',height:'60px'}}className='btn btn-info rounded-circle fs-5'>+</button>
      </div>
      <div className="conatiner-fluid mt-3">
        {allCatagories.length>0? allCatagories.map((item,index)=>(
          <div droppable="true" onDragOver={(e)=>dragOverCategory(e)} onDrop={(e)=>videoDropped(e,item?.id)}
           key={index} className='border ronded p-3 mb-2'>
            <div className="d-flex justify-content-between">
            <h5>{item.categoryName}</h5>
            <button onClick={()=>handleRemoveCatageroes(item.id)} className='btn'><i className="fa-solid fa-trash text-danger"></i></button>
            </div>
            
          
           <div className="row mt-2">
            {
              item.allVideos?.length>0 && 
              item.allVideos?.map((video,index)=>(
                <div draggable onDragStart={e=>videoDragStarted(e,video.id,item.id)} key={index} className='col-lg-6'>
                  <VideoCard insideCategory={true} displayData={video}/>
                </div>
              ))
            }
          </div>
          </div>
        ))
      :
      <div className='text-danger fw-bolder'>NO Categories are added yet!!</div>
      }
      </div>
      <Modal show={show} onHide={handleClose} backdrop=
      "static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Category Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the Following details!!!</p>
        <FloatingLabel
            controlId="floatingInputCaption"
            label="Category Name"
            className="mb-3"
          >
            <Form.Control value={categoryName} onChange={e=>setCategoryName(e.target.value)} type="text" placeholder="Category Name" />
          </FloatingLabel>
      
           
          </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleAddCatagory} variant="primary" >
            Add
          </Button>
        </Modal.Footer>
      </Modal>
   </>
    
  )
}

export default Category
