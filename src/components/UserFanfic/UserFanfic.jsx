import React, {useEffect, useContext, useState} from 'react';
import { useSearchParams, useParams } from 'react-router-dom';
import { fanficContext } from '../../contexts/FanficContextProvider';
import FanficCard from '../FanficCard/FanficCard';
import { postContext } from '../../contexts/PostsContextProvider';
import CommentCard from '../CommentCard/CommentCard';
import  {postContext} from "../../contexts/PostsContextProvider"

const UserFanfic= () => {

  const { getFanfic, fanfic} = useContext(fanficContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const {onePost, getPostDetails} = postContext(useContext)
const { fanficDetails, setFanficDetails} =  useState({})
  const {id} = useParams()
  // useEffect(() => {
  //   getFanfic(id);
    
  // }, [])


  useEffect(()=> {
    getPostDetails(id)
  },[])

const [comment, setComment] = useState('')

  const {addComment} = postContext(useContext)

  function handleCom(){
    let newCom = new FormData()
    newCom.append("title", comment),
    addComment(newCom, id)
  }

  return (
    <>

<div>

<img src={onePost.image} alt="" />
<p>{onePost.genre}</p>
<p>{onePost.title}</p>

</div>


    {onePost?.map(post => (
          <>
            <FanficCard key={post.id} post={post}></FanficCard>
            
            <div className='comments'>

          <CommentCard key={post.id}/>
          </div>
            </>
          ))}
         
    
       </>
  )
}

export default UserFanfic