import React,{useState} from 'react'
import { Modal,Button,Form,FloatingLabel } from 'react-bootstrap'
import { uploadVideoAPI } from '../services/allAPI';


function Add({setUploadVideoResponse}) {
  const [uploadVideo,setUploadVideo] = useState({
    caption:"",imageURL:"",youtubeLink:""
  })
  console.log(uploadVideo);

  const [show, setShow] = useState(false);

  const handleClose = () => {setShow(false);
  
  setUploadVideo({...uploadVideo,caption:"",imageURL:"",youtubeLink:""})}
  const handleShow = () => setShow(true);

  //https://www.youtube.com/embed/SCN8iYJdfGU
  const getYoutubeEmbedLink=(link)=>{
      if(link.includes("v=")){
        let videoId = link.split("v=")[1].slice(0,11)
        setUploadVideo({...uploadVideo,youtubeLink:`https://www.youtube.com/embed/${videoId}`})
      }else{
        setUploadVideo({...uploadVideo,youtubeLink:""})
        alert("Input Proper Yutube Link!!")
      }

  }

  const handleUpload= async ()=>{
    // store uplod video in http://localhost:3000/
    const {caption,imageURL,youtubeLink}= uploadVideo
    if(caption && imageURL && youtubeLink){
      // proced to store video
      const result = await uploadVideoAPI(uploadVideo)
      console.log(result);
      if (result.status>=200 && result.status<300) {
        alert(`Video '${result.data.caption}'uploaded successfully!!!`)
        setUploadVideoResponse(result.data)
        handleClose()
      }else{
        
        alert("API Call FAiled... PLease try after some time")
      }
    }else{
      alert("Please fill the form Completely!!!")
    }
  }

  return (
    <>
     <div className="d-flex align-items-center">
        <h5>Upload A video</h5>
        <button onClick={handleShow} className='btn bg-secondary ms-2 '><i className="fa-solid fa-plus"></i></button>
     </div>
     <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Video Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>please fill the details!!!</p>
      <div className='border rounded border-secondary p-3'>
            <FloatingLabel
            controlId="floatingInputCaption"
            label="Video Caption"
            className="mb-3"
          >
            <Form.Control value={uploadVideo.caption} onChange={e=>setUploadVideo({...uploadVideo,caption:e.target.value})} type="text" placeholder="Video Caption" />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInputImg"
            label="Image Url"
            className="mb-3"
          >
            <Form.Control value={uploadVideo.imageURL} onChange={e=>setUploadVideo({...uploadVideo,imageURL:e.target.value})} type="text" placeholder="Image Url" />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInputLink"
            label=" Youtube video Link"
            className="mb-3"
          >
            <Form.Control value={uploadVideo.youtubeLink} onChange={e=>getYoutubeEmbedLink(e.target.value)} type="text" placeholder="Youtube video Link" />
          </FloatingLabel>
      </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={ handleUpload} variant="info">Upload</Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default Add
