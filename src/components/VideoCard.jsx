import React,{useState} from 'react'
import { Card, Modal } from 'react-bootstrap'
import { saveHistoryAPI , removeVideoAPI } from '../services/allAPI';

function VideoCard({displayData,setDeleteVideoResponse,insideCategory}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);
    //get video details
    const {caption,youtubeLink}= displayData
    let timeData = new Date()
    let timeStamp = new Intl.DateTimeFormat('en-US',{
      year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'
    }).format(timeData)
    console.log(timeStamp);
    await saveHistoryAPI({caption,youtubeLink,timeStamp})
  }
  const deletVideo =async(vId)=>{
   const result =  await removeVideoAPI(vId)
   setDeleteVideoResponse(result.data)
  }

  //drageStarted
  const dragStarted = (e,vId)=>{
    console.log(`Dragging Started with video id : ${vId}`);
    e.dataTransfer.setData("videoId",vId)
  }

  return (
    <>
      <Card draggable onDragStart={(e)=>dragStarted(e,displayData?.id)} className='shadow'>
      <Card.Img style={{cursor:'pointer'}} onClick={handleShow} variant="top" height={'150px'} src={displayData?.imageURL} />
      <Card.Body>
        <Card.Title className='d-flex justify-content-between'>
            <p>{displayData?.caption}</p>
            {!insideCategory && <button onClick={()=>deletVideo(displayData?.id)} className='btn'><i className="fa-solid fa-trash text-danger"></i></button>}

        </Card.Title>
        
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{displayData?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="400" src={`${displayData?.youtubeLink}?autoplay=1`} title="Caption"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </Modal.Body>
        
      </Modal>
        
       
      </Card.Body>
    </Card>
    </>
  )
}

export default VideoCard
