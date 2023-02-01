import { Box, CircularProgress } from '@mui/material';
import React, { useEffect, useContext, useState } from 'react';
import { useSearchParams, useParams, useNavigate } from 'react-router-dom';
import { fanficContext } from '../../contexts/FanficContextProvider';
import { postContext } from '../../contexts/PostsContextProvider'
import CommentList from '../CommentCard/CommentList';
import CreateComment from '../CommentCard/CreateComment';
import FanficChapterCreate from '../FanficChapters/FanficChapterCreate';
import FanficChaptersList from '../FanficChapters/FanficChaptersList';
import AddIcon from '@mui/icons-material/Add';

import './FanficRead.css'



const UserFanfic = () => {
  const { onePost, getPostDetails, post } = useContext(postContext);
  const { fanficDetails, setFanficDetails } = useState({})
  const { id } = useParams()

  const navigate = useNavigate();

  useEffect(() => {
    getPostDetails(id);
  }, [])

const [owner, setOwner] = useState(false)


  function isOwner() {
    const login = (localStorage.getItem("username"));
    console.log(window.location.pathname)
    if (window.location.pathname == "/profile") {
      if (login == post.owner) {
        setOwner(true)
      }
    } else if (window.location.pathname == "/fanfic") {
      setOwner(true);
    }
  }

  useEffect(() => {
    isOwner()
  }, [])




  return (
    <>


owner ? (

<FanficChapterCreate /> 
)

    <div className='chapter-text'>
      {/* <p className='chapter-data'>{onePost.date_created}</p> */}
<div className='chapter-desc'>
  {/* #{onePost.description} */}
</div>

{
   onePost?.page.map(page => (     
    <div>
{/* <p className='chapter-data'>{onePost.date_created}</p> */}
       <FanficChaptersList page={page} key={page.id} 
       />  
             
    </div>  
     ))
   }
    
    </div>
{/* 
    <div className='chapter-comments'>
      <CreateComment />
<CommentList onePost={onePost} />
    </div> */}
     
     
     
     </>

    
  
  )
}

export default UserFanfic